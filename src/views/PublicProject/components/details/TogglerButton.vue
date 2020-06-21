<template>
  <b-icon v-b-modal.modal-1 class="filter-icon custom" icon="filter" font-scale="2"/>
</template>

<script>

export default {
  name: 'TogglerButton',
  data () {
    return {}
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  .filter-icon.custom {
    cursor: pointer;
  }
</style>
