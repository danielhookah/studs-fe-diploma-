<template>
  <div :key="$route.name" id="doings-project">
    <div class="change-list-wrapper" :class="{'opened': menuOpened}">
      <div class="change-list">
        <p @click="pushToChildRoute('user.doings.project.list')">projects</p>
        <hr>
        <p @click="pushToChildRoute('user.doings.lesson.list')">lessons</p>
      </div>
      <div class="change-list-icon" :class="{'opened': menuOpened}" @click="toggleMenu">
        <b-icon scale="1.6" icon="chevron-compact-down"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Doings',
  data () {
    return {
      menuOpened: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpened = !this.menuOpened
    },
    pushToChildRoute (routeName) {
      this.toggleMenu()
      setTimeout(() => {
        this.$router.push({ name: routeName })
      }, 250)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .change-list-wrapper {
    position: absolute;
    right: 35%;
    top: -80px;
    width: 30%;
    z-index: 2;

    @include transition(all 250ms linear);

    &.opened {
      top: 50px;
    }

    .change-list {
      width: 100%;
      margin: 0 auto;
      background-color: $secondary-color;
      color: $white-color;

      hr {
        border: 1px solid $white-color;
        width: 80%;
        margin: 3px auto;
      }

      p {
        @extend %ubuntu-medium;
        margin: 0;
        padding: 20% 0;
      }
    }

    .change-list-icon {
      cursor: pointer;
      width: 100%;
      margin: 0 auto;
      height: 20px;
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      background-color: $secondary-color;
      color: $white-color;

      svg {
        @include transition(all 250ms linear);
      }

      &.opened {
        svg {
          transform: rotateX(180deg);
        }
      }
    }
  }
</style>
