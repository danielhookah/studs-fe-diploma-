<template>
  <transition name="slide">
    <router-view :key="$route.path"/>
  </transition>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/_on-change-route.scss";
</style>
