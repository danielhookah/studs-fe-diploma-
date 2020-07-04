<template>
  <div class="login-button-wrapper">
    <b-button @click="$router.push({ name: 'login' })" class="login-button">LOGIN</b-button>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  data () {
    return {
    }
  },
  components: {},
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/colors";

  .login-button-wrapper {
    width: 40%;
    z-index: 1;
    bottom: 0;
    right: 6%;
    position: fixed;
    margin-bottom: 16px;

    &.desktop {
      .login-button {
        width: 80%;
      }
    }

    .login-button {
      color: $white-color;
      font-family: Heebo, sans-serif;
      font-weight: 700;
      border: unset;
      background-color: $secondary-color;
      line-height: 15px;
      vertical-align: middle;
      text-align: center;
      height: 40px;
      border-radius: 8px;
      width: 100%;
    }
  }
</style>
