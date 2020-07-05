<template>
  <div id="register">
    <b-container>
      <h1 class="huge-title">STs<span class="animate__animated animate__flip">U</span>DS</h1>
      <h3 class="mt-4 fade-in-out">can do this.</h3>

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

        <b-row class="m-0 mt-4 justify-content-end">
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">to dashboard</b-button>
          <b-button type="submit" variant="primary">register</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) {
        throw new Error('[RWV] CommentsService.get() article slug required to fetch comments')
      }
      console.log(23)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  form {
    margin-top: 20%;
  }

  .animate__animated.animate__flip {
    --animate-duration: 3s;
    animation-iteration-count: infinite;
  }

  .fade-in-out {
    animation-iteration-count: infinite;
  }

  .huge-title {
    padding-top: 20px;
    span {
      display: inline-block;
    }
  }
</style>
