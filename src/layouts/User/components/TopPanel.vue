<template>
  <div id="bottom-panel">
    <h1>lol</h1>
  </div>
</template>

<script>

export default {
  name: 'TopPanel',
  data () {
    return {}
  },
  created () {}
}
</script>

<style scoped lang="scss">
  @import "src/assets/scss/colors";

  #bottom-panel {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: $white-color;
  }
</style>
