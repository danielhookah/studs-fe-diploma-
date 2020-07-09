<template>
  <div id="register">
    <b-container>
      <AnimatedLogo/>
      <h1 class="middle-title mt-2">confirm account</h1>
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
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">
            dashboard
          </b-button>
          <b-button type="submit" variant="primary">confirm</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>
import messageMixin from '@/mixins/message-mixin'
import AnimatedLogo from '@/components/AnimatedLogo'

export default {
  name: 'ConfirmAccount',
  components: { AnimatedLogo },
  mixins: [messageMixin],
  data () {
    return {
      showForm: false,
      user: {
        id: null,
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (!await this.$refs.observer.validate() || !this.checkPassword()) return
      this.$store.dispatch('EDIT_USER', {
        resource: `${this.user.id}/confirm`,
        data: { password: this.user.password }
      }).then(response => {
        console.log(response.data.data.message)
        this.addMessage({ message: 'mes', title: 'tit' })
        this.$router.push({ name: 'login' })
      }).catch(() => {
        this.user.password = ''
        this.user.passwordConfirm = ''
      })
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
      this.user.id = result.data.data.id
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
    margin-top: 30%;
  }
</style>
