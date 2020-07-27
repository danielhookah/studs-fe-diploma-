<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import EventBus from '@/common/event-bus'

export default {
  name: 'App',
  methods: {},
  created () {
    this.$store.dispatch('FETCH_CSRF_TOKEN')
    this.$store.dispatch('FETCH_PROFILE')

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

    @import "~@/assets/scss/partials/_on-change-route.scss";
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
