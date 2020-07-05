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
    showErrorToast () {
      this.$bvToast.toast('Toast with action', {
        title: 'Warning!',
        toaster: 'b-toaster-bottom-full',
        solid: true,
        variant: 'danger',
        appendToast: false,
        autoHideDelay: 10000
      })
    }
  },
  created () {
    EventBus.$on('SHOW_ERROR', (payload) => {
      this.showErrorToast()
      console.log(payload)
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
