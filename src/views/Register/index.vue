<template>
  <div id="register">
    <b-container>
      <h1 class="huge-title">ST<span class="animate__animated animate__flip">U</span>DS</h1>
      <h3 class="mt-4 fade-in-out">can do this.</h3>

      <ValidationObserver ref="observer" @submit.prevent="onSubmit" tag="form">
        <ValidationProvider name="firstName" rules="required" v-slot="v">
          <b-form-group label="Your first name:" class="custom" label-for="input-first-name">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-first-name"
              v-model="user.firstName"
              type="text"
              placeholder="Enter first name"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="lastName" rules="required" v-slot="v">
          <b-form-group label="Your last name:" class="custom" label-for="input-last-name">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-last-name"
              v-model="user.lastName"
              type="text"
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="phone" rules="required|integer" v-slot="v">
          <b-form-group label="Your phone:" class="custom" label-for="input-phone">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-phone"
              v-model="user.phone"
              type="number"
              placeholder="Enter phone"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

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

        <ValidationProvider name="role" rules="required" v-slot="v">
          <b-form-group label="Your role:" class="custom-radio">
            <b-form-radio v-model="user.role" :key="'radio'+index"
                          class="custom" :class="{'error': v.errors[0]}"
                          v-for="(role,index) in [{title: 'Student', value: 0}, {title: 'Teacher', value: 1}, {title: 'Creator', value: 2}]"
                          name="some-radios" :value="role.value">
              {{role.title}}
            </b-form-radio>
          </b-form-group>
        </ValidationProvider>

        <b-row :style="{margin: '40px 0 !important'}" class="justify-content-end">
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">dashboard
          </b-button>
          <b-button type="submit" variant="primary">register</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: ''
      }
    }
  },
  methods: {
    resetUser () {
      this.$refs.observer.reset()
      this.user = {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      }
    },
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return
      this.$store.dispatch('CREATE_USER', this.user)
        .then(response => {
          this.resetUser()
          this.showToast({
            message: response.data.data.message + ' Check your email.',
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(() => {
          this.resetUser()
        })
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
