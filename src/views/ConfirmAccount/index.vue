<template>
  <div id="register">
    <b-container>
      <h1 class="middle-title mt-2">STUDS - confirm account</h1>
      <b-form @submit="onSubmit">
        <b-form-group label="Your password:" class="custom" label-for="input-password">
          <b-form-input
            class="custom"
            id="input-password"
            v-model="user.password"
            type="text" required
            placeholder="*****"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Confirm password:" class="custom" label-for="input-password-confirm">
          <b-form-input
            class="custom"
            id="input-password-confirm"
            v-model="user.passwordConfirm"
            type="text" required
            placeholder="*****"
          ></b-form-input>
        </b-form-group>
        <b-row class="m-0 mt-4 justify-content-end">
          <b-button @click="$router.push({ name: 'common' })" variant="secondary" class="mr-2">to dashboard</b-button>
          <b-button variant="primary">confirm</b-button>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ConfirmAccount',
  data () {
    return {
      user: {
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    onSubmit () {
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  form {
    margin-top: 45%;
  }
</style>
