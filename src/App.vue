<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import EventBus from '@/common/event-bus'

export default {
  name: 'App',
  methods: {
    showToast ({ message = '', title = '', variant = '', autoHideDelay = 10000 }) {
      this.$bvToast.toast(message, {
        title: title,
        toaster: 'b-toaster-bottom-full',
        solid: true,
        variant: variant,
        appendToast: false,
        autoHideDelay: autoHideDelay
      })
    }
  },
  created () {
    this.$store.dispatch('FETCH_CSRF_TOKEN')

    EventBus.$on('SHOW_TOAST', (payload) => {
      this.showToast(payload)
    })
  }
}
</script>

<style lang="scss">
  @import "src/assets/scss/colors.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  html, body {
    height: 100%;
    background-color: $primary-color !important;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
