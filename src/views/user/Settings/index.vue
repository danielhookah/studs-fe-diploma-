<template>
  <div id="user-settings">
    <ValidationObserver ref="observer" @submit.prevent="onSubmit" tag="form"
                        class="d-flex flex-column align-items-center">
        <div class="my-4 avatar-wrapper">
          <b-icon icon="person" font-scale="2.5"/>
        </div>

        <ValidationProvider name="firstName" rules="required" v-slot="v">
          <b-form-group label="Your first name:" class="custom" label-for="input-first-name">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-first-name"
              v-model="user.firstName"
              type="text" required
              placeholder="Mark"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="lastName" rules="required" v-slot="v">
          <b-form-group label="Your last name:" class="custom" label-for="input-last-name">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-last-name"
              v-model="user.lastName"
              type="text" required
              placeholder="Brown"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="email" rules="required|email" v-slot="v">
          <b-form-group label="Your email:" class="custom" label-for="input-email">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-email"
              v-model="user.email"
              type="text" required
              placeholder="example@test.com"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="phone" rules="required|integer" v-slot="v">
          <b-form-group label="Your phone:" class="custom" label-for="input-phone">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-phone"
              v-model="user.phone"
              type="text" required
              placeholder="+1234567890"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>
<!--      </b-row>-->

      <b-row class="justify-content-around mt-3 w-100">
        <b-button @click="logout" variant="secondary" class="mr-2">logout</b-button>
        <b-button type="submit" variant="primary" class="mr-2">save</b-button>
      </b-row>
    </ValidationObserver>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'PublicProject',
  data () {
    return {
      user: {
        avatar: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }
    }
  },
  watch: {
    profile (val) {
      console.log(val)
      this.user = val
    }
  },
  computed: {
    profile: {
      get () {
        return this.$store.getters.profile
      },
      set (value) {
        this.$store.commit('SET_PROFILE', value)
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT')
        .then(() => {
          this.$store.dispatch('FETCH_CSRF_TOKEN')
          this.$router.push({ name: 'common' })
        })
    },
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return
      this.$store.dispatch('EDIT_USER', { resource: this.user.id, data: this.user })
        .then(response => {
          this.showToast({
            message: response.data.message,
            title: 'Success',
            variant: 'success'
          })
        })
    }
  },
  mounted () {
  },
  created () {
    this.$store.dispatch('FETCH_PROFILE')
      .then((response) => {
        this.user = this.cloneObject(response.data)
      })
  }
}
</script>

<style scoped lang="scss">
  #user-settings {
    & .row {
      margin: 0;
    }

    form span {
      width: 80%;
    }

    .avatar-wrapper {
      height: 130px;
      width: 130px;
      border-radius: 50%;
      background-color: $secondary-color;

      @include box-shadow(0px 0px 10px -1px rgba(0, 0, 0, 0.75));

      & svg {
        color: $white-color;
        margin-top: 30%;
      }
    }
  }
</style>
