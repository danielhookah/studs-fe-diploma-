import EventBus from '@/common/event-bus'

class Error {
  constructor (error, type) {
    this.error = error
    this.type = type
  }

  showError () {
    EventBus.$emit('SHOW_ERROR', ({ error: this.error, type: this.type }))
  }
}

class ApiError extends Error {
  constructor (error) {
    super(error, 'api')
  }
}

class UndefinedError extends Error {
  constructor (error) {
    super(error, 'undefined')
  }
}

const errorHelper = {
  showApiError: (error) => {
    const apiError = new ApiError(error)
    apiError.showError()
  },
  handleUndefinedError: (error) => {
    const undefinedError = new UndefinedError(error)
    undefinedError.showError()
    // send data to the server
  }
}

export default errorHelper
