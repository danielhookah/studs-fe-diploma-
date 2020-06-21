<template>
  <div id="bottom-panel">
    <b-row class="h-100 align-items-center">
      <b-col>A</b-col>
      <b-col>B</b-col>
      <b-col>C</b-col>
      <b-col>D</b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'BottomPanel',
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
    bottom: 0;
    background-color: $white-color;
  }
</style>
