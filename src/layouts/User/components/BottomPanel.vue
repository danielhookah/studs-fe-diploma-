<template>
  <div id="bottom-panel" :class="{'height-max': isNewIOS()}">
    <b-row class="h-100 align-items-center">
      <b-col>
        <b-link active-class="active" :to="{ name: 'user.news' }">
          <b-icon icon="watch" font-scale="1.8"></b-icon>
          <p>events</p>
        </b-link>
      </b-col>
      <b-col>
        <b-link active-class="active" :to="{ name: 'user.doings' }">
          <b-icon icon="file-text" font-scale="1.8"></b-icon>
          <p>my doings</p>
        </b-link>
      </b-col>
      <b-col>
        <b-link active-class="active" :to="{ name: 'user.projects' }">
          <b-icon icon="files" font-scale="1.8"></b-icon>
          <p>projects</p>
        </b-link>
      </b-col>
      <b-col>
        <b-link active-class="active" :to="{ name: 'user.settings' }">
          <b-icon icon="gear" font-scale="1.8"></b-icon>
          <p>settings</p>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'BottomPanel',
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  #bottom-panel {
    &.height-max {
      height: 70px;
    }

    z-index: 100;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: $white-color;

    @include box-shadow(0px 53px 11px 50px rgba(0, 0, 0, 0.75));

    & .col {
      height: 80%;
      margin-bottom: 2px;
    }

    & .col:first-child {
      margin-top: 3px;
    }

    p {
      @extend %ubuntu-light;
      font-size: 85%;
    }

    a {
      color: #222;
    }
  }

  a {
    &.active {
      * {
        color: $secondary-color;
      }
    }
  }

  @include respond("<381") {
    .col {
      padding: 0;
    }
  }
</style>
