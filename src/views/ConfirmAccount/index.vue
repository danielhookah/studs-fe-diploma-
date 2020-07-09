<template>
  <div id="register">
    <b-container>
      <h1 class="middle-title mt-2">STUDS - confirm account</h1>
      <ValidationObserver ref="observer" v-if="showForm"
                          @submit.prevent="onSubmit" tag="form">

        <ValidationProvider name="password" rules="required" v-slot="v">
          <b-form-group label="Your password:" class="custom" label-for="input-password">
            <b-form-input
                class="custom" :class="{'error': v.errors[0]}"
                id="input-password"
                v-model="user.password"
                type="password"
                placeholder="******"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="password-confirm" rules="required" v-slot="v">
          <b-form-group label="Confirm password:" class="custom" label-for="input-password-confirm">
            <b-form-input
                class="custom" :class="{'error': v.errors[0]}"
                id="input-password-confirm"
                v-model="user.passwordConfirm"
                type="password"
                placeholder="******"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <b-row class="m-0 mt-4 justify-content-end">
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">to
            dashboard
          </b-button>
          <b-button type="submit" variant="primary">confirm</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ConfirmAccount',
  data () {
    return {
      showForm: false,
      user: {
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (!await this.$refs.observer.validate() || !this.checkPassword()) return
      console.log(11)
    },
    checkPassword () {
      if (this.user.password.length < 6) {
        this.$errorHelper.showValidateError('The password cannot be less than 6 characters')
        return false
      }
      if (this.user.passwordConfirm !== this.user.password) {
        this.$errorHelper.showValidateError('Passwords does not match')
        return false
      }
      return true
    }
  },
  async mounted () {
    try {
      const result = await this.$store.dispatch('CHECK_USER_HASH', this.$route.params.hash)
      this.showForm = result.status === 200
    } catch (e) {
      this.showForm = false
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
