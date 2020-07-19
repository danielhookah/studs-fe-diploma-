<template>
  <div id="common">
    <transition name="slide">
      <router-view :key="$route.path"/>
    </transition>
  </div>
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
  #common {
    @import "~@/assets/scss/partials/_on-change-route.scss";
  }
</style>
