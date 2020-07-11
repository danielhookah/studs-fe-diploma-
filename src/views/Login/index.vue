<template>
  <div id="register">
    <b-container>
      <AnimatedLogo/>
      <h1 class="middle-title mt-2">login</h1>
      <ValidationObserver ref="observer" @submit.prevent="onSubmit" tag="form">
        <ValidationProvider name="email" rules="required|email" v-slot="v">
          <b-form-group label="Your email address:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="user.email"
              type="email"
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required" v-slot="v">
          <b-form-group label="Your password:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="user.password"
              type="password"
              placeholder="******"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>
        <b-row class="m-0 mt-4 justify-content-end">
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">dashboard</b-button>
          <b-button type="submit" variant="primary">login</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>
import messageMixin from '@/mixins/message-mixin'
import AnimatedLogo from '@/components/AnimatedLogo'

export default {
  name: 'Login',
  components: { AnimatedLogo },
  mixins: [messageMixin],
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return
      this.$store.dispatch('LOGIN', this.user)
        .then(() => {
          this.$router.push({ name: 'user.news' })
        })
    }
  },
  created () {
    this.showWaitingMessages()
  }
}
</script>

<style scoped lang="scss">
  form {
    margin-top: 30%;
  }
</style>
