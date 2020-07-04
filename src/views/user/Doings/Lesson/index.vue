<template>
  <div id="doings-lesson-list">
    <b-container>
      <h1 class="middle-title">Title 1</h1>
      <b-row class="justify-content-around">
        <b-card class="custom" @click="$router.push({name: 'user.doings.lesson', params: {id: 1}})">
          <h1>qwe</h1>
        </b-card>
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
      <h1 class="middle-title">Title</h1>
      <b-row class="justify-content-around">
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
      <h1 class="middle-title">asd</h1>
      <b-row class="justify-content-around">
        <b-card class="custom">
          <h1>qwe</h1>
        </b-card>
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
  name: 'DoingsLessonList',
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/card-custom";

  #doings-lesson-list {
    margin-top: 2rem;

    & .row {
      margin: 0;
    }

    & .card.custom {
      @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
      width: 45%;
      margin: 10px 0;
      min-height: 80px;
    }
  }
</style>
