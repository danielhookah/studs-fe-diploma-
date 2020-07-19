<template>
  <div id="guest-main" class="main-wrapper">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'GuestLayout',
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  #guest-main {
    @import "~@/assets/scss/partials/_on-change-route.scss";
  }
</style>
