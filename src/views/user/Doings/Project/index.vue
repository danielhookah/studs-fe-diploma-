<template>
  <div id="doings-project-list">
    <b-container>
      <b-row class="flex-column">
        <b-card class="custom">
          <h1>qwe</h1>
        </b-card>
        <b-card class="custom">
          <h1>qwe</h1>
        </b-card>
        <b-card class="custom">
          <h1>qwe</h1>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'DoingsProjectList',
  data () {
    return {}
  },
  created () {}
}
</script>

<style scoped lang="scss">
  #doings-project-list {
    & .row {
      margin: 0;
    }

    & .card.custom {
      @include box-shadow(0px 0px 13px -5px rgba(0,0,0,0.83));
      margin: 10px 0;
      min-height: 80px;
    }
  }
</style>
