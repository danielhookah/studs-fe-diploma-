import EventBus from '@/common/event-bus'

export default {
  data () {
    return {
      currentPageName: 'page name'
    }
  },
  methods: {
    isMobile () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    isMobileWidth () {
      return window.innerWidth < 992
    },
    isNewIOS () {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      const ratio = window.devicePixelRatio || 1
      const screen = {
        width: window.screen.width * ratio,
        height: window.screen.height * ratio
      }
      if (iOS && screen.width >= 1125 && screen.height >= 2436) {
        return true
      }
      return false
    },
    goToPrevRoute () {
      this.$router.go(-1)
    },
    setCurrentPageName (name) {
      EventBus.$emit('CHANGE_CURRENT_PAGE_NAME', (name))
    }
  }
}
