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
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/card-custom";

  #doings-project-list {
    margin-top: 2rem;

    & .row {
      margin: 0;
    }

    & .card.custom {
      @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
      margin: 10px 0;
      min-height: 100px;
      border-radius: 15px;
    }
  }
</style>
