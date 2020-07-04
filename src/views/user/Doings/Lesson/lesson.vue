<template>
  <div id="doings-lesson">
    <b-container fluid>
      <div class="lesson-dates">
        <div class="lesson-date">
          12.02.2020
        </div>
        <div class="lesson-date">
          12.02.2020
        </div>
        <div class="lesson-date">
          12.02.2020
        </div>
        <div class="lesson-date">
          12.02.2020
        </div>
      </div>
    </b-container>

    <b-container>
      <CollapseRow :propKey="1" class="mt-3">
        <template v-slot:content>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
        </template>
      </CollapseRow>
      <CollapseRow :propKey="2" class="mt-3">
        <template v-slot:content>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
        </template>
      </CollapseRow>
      <CollapseRow :propKey="3" class="mt-3">
        <template v-slot:content>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
        </template>
      </CollapseRow>
    </b-container>
  </div>
</template>

<script>

import CollapseRow from '@/components/CollapseRow'

export default {
  name: 'DoingsLesson',
  components: { CollapseRow },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .container-fluid {
    padding: 0;
  }

  #doings-lesson {
    .lesson-dates {
      overflow: auto;
      white-space: nowrap;
      height: 60px;
      @include box-shadow(0px 1px 10px 1px rgba(0, 0, 0, 0.35));
    }

    .lesson-date {
      background-color: $secondary-color;
      color: $white-color;
      height: 30px;
      width: 40%;
      border-radius: 50px;
      line-height: 30px;
      @extend %heebo-medium;
      display: inline-block;
      margin: 15px 8px 15px 8px;
    }
  }
</style>
