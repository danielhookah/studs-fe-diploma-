<template>
  <div id="top-panel">
    <b-row class="align-items-center">
      <b-col @click="goToPrevRoute">
        <b-icon icon="chevron-left" scale="1.8"/>
        <span class="m-2 action-item">back</span>
      </b-col>
      <b-col class="top-panel-curved">
        <h4>{{currentPageName}}</h4>
      </b-col>
      <b-col>
        <span class="action-item">action</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import EventBus from '@/common/event-bus'

export default {
  name: 'TopPanel',
  data () {
    return {}
  },
  methods: {
    log () {
      console.log(123)
    }
  },
  created () {
    EventBus.$on('CHANGE_CURRENT_PAGE_NAME', (payload) => {
      this.currentPageName = payload
    })
  }
}
</script>

<style scoped lang="scss">
  #top-panel {
    z-index: 100;
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: $white-color;

    @include box-shadow(0px -51px 11px 50px rgba(0, 0, 0, 0.75));

    & .top-panel-curved {
      padding: 0;
    }

    & .row {
      height: 100%;
    }

    & h4 {
      color: $secondary-color;
    }

    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      height: 50px;
      width: 30%;
      border-radius: 0 15px 15px 0;
      border: 2px solid transparent;
      border-color: transparent $secondary-color transparent transparent;
    }

    &:before {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      height: 50px;
      width: 30%;
      border-radius: 15px 0 0 15px;
      border: 2px solid transparent;
      border-color: transparent transparent transparent $secondary-color;
    }

    .action-item {
      @extend %ubuntu-medium;
    }
  }
</style>
