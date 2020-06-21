<template>
  <div :style="{'height': (10 * (Math.random() * 10) + 100) + 'px'}" class="public-project-grid-item">
    <b-card class="m-2 custom">
      {{data}}
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectListCard',
  props: ['data'],
  data () {
    return {}
  },
  components: {},
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/partials/masonry";
  @import "../../../assets/scss/partials/card-custom";
</style>
