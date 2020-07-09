import EventBus from '@/common/event-bus'

class Error {
  constructor (error, title, variant, autoHideDelay) {
    this.error = error
    this.title = title
    this.variant = variant
    this.autoHideDelay = autoHideDelay
  }

  showError () {
    EventBus.$emit('SHOW_TOAST', ({
      message: this.error,
      title: this.title,
      variant: this.variant,
      autoHideDelay: this.autoHideDelay
    }))
  }
}

class ApiError extends Error {
  constructor (error, title, autoHideDelay) {
    super(error, title, 'danger', autoHideDelay)
  }
}

class ValidateError extends Error {
  constructor (error, title, autoHideDelay) {
    super(error, title, 'warning', autoHideDelay)
  }
}

// class UndefinedError extends Error {
//   constructor (error, title, autoHideDelay) {
//     super(error, title, 'danger', autoHideDelay)
//   }
// }

const errorHelper = {
  showApiError: (error, title = 'Error!', autoHideDelay = 10000) => {
    const apiError = new ApiError(error, title, autoHideDelay)
    apiError.showError()
  },
  showValidateError: (error, title = 'Warning!', autoHideDelay = 10000) => {
    const validateError = new ValidateError(error, title, autoHideDelay)
    validateError.showError()
  },
  handleUndefinedError: (error, title = 'Error!', autoHideDelay = 10000) => {
    console.log(error)
    // const undefinedError = new UndefinedError(error, title, autoHideDelay)
    // undefinedError.showError()
    // todo send data to the server
  }
}

export default errorHelper
