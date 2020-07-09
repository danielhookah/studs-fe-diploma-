import EventBus from '@/common/event-bus'

export default {
  methods: {
    addMessage ({ message = '', title = '', variant = 'info', autoHideDelay = 10000 }) {
      this.$store.dispatch('ADD_MESSAGE', {
        message: message,
        title: title,
        variant: variant,
        autoHideDelay: autoHideDelay
      })
    },
    showWaitingMessages () {
      const messages = this.$store.getters.messages
      for (const message of messages) {
        console.log(message)
        EventBus.$emit('SHOW_TOAST', (message))
      }
      this.$store.dispatch('CLEAR_MESSAGES')
    }
  }
}
