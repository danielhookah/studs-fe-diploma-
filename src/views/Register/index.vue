<template>
  <div id="register">
    <b-container>
      <h1 class="huge-title">STUDS</h1>
      <b-form @submit="onSubmit">
        <b-form-group label="Your first name:" class="custom" label-for="input-first-name">
          <b-form-input
            class="custom"
            id="input-first-name"
            v-model="user.firstName"
            type="text" required
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Your last name:" class="custom" label-for="input-last-name">
          <b-form-input
            class="custom"
            id="input-last-name"
            v-model="user.lastName"
            type="text" required
            placeholder="Enter last name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Your phone:" class="custom" label-for="input-phone">
          <b-form-input
            class="custom"
            id="input-phone"
            v-model="user.phone"
            type="number" required
            placeholder="Enter phone"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Your email address:" class="custom" label-for="input-1">
          <b-form-input
            class="custom"
            id="input-1"
            v-model="user.email"
            type="email" required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-row class="m-0 mt-4 justify-content-end">
          <b-button @click="$router.push({ name: 'common' })" variant="secondary" class="mr-2">to dashboard</b-button>
          <b-button variant="primary">register</b-button>
        </b-row>
      </b-form>
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
        email: ''
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
    margin-top: 25%;
  }
</style>
