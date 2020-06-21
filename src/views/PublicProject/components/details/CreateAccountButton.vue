<template>
  <div class="create-account-wrapper">
    <b-button class="create-account-button">CREATE ACCOUNT</b-button>
  </div>
</template>

<script>
export default {
  name: 'CreateAccountButton',
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

  .create-account-wrapper {
    width: 100%;
    z-index: 1;
    bottom: 0;
    position: fixed;
    margin-bottom: 16px;

    &.desktop {
      .create-account-button {
        width: 80%;
      }
    }

    .create-account-button {
      font-family: Heebo, sans-serif;
      font-weight: 700;
      border: unset;
      background-color: $secondary-color;
      line-height: 15px;
      vertical-align: middle;
      text-align: center;
      height: 40px;
      border-radius: 8px;
      width: 50%;
    }
  }
</style>
