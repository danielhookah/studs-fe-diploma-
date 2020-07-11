<template>
  <div id="user-main" class="main-wrapper">
    <TopPanel/>
    <div class="content">
      <!--      mode="out-in"   -->
      <transition name="slide">
        <router-view style="padding-bottom: 20px" :key="$route.path"/>
      </transition>
    </div>
    <BottomPanel/>
  </div>
</template>

<script>

import BottomPanel from '@/layouts/User/components/BottomPanel'
import TopPanel from '@/layouts/User/components/TopPanel'

export default {
  name: 'UserLayout',
  components: { TopPanel, BottomPanel },
  data () {
    return {}
  },
  watch: {
    $route (to, from) {
      this.setCurrentPageName(to.meta.title)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  #user-main {
    width: 100%;
    overflow: hidden;
    position: fixed;
  }

  .content {
    width: 100%;
    box-sizing: content-box;
    margin-top: 50px;
    height: calc(100% - 100px);
    overflow-y: scroll;

    @import "~@/assets/scss/partials/_on-change-route.scss";
  }
</style>
