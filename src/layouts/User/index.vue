<template>
  <div id="user-main" class="main-wrapper">
    <TopPanel/>
    <div class="content">
      <router-view/>
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
  created () {}
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
  }
</style>
