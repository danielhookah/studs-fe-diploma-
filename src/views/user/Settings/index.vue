<template>
  <div id="user-settings">
    <b-form>
      <b-row class="align-items-center flex-column">
        <div class="my-4 avatar-wrapper">
          <b-icon icon="person" font-scale="2.5"/>
        </div>

        <b-form-group label="Your first name:" class="custom" label-for="input-first-name">
          <b-form-input
            class="custom"
            id="input-first-name"
            v-model="user.firstName"
            type="text" required
            placeholder="Mark"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Your last name:" class="custom" label-for="input-last-name">
          <b-form-input
            class="custom"
            id="input-last-name"
            v-model="user.lastName"
            type="text" required
            placeholder="Brown"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Your email:" class="custom" label-for="input-email">
          <b-form-input
            class="custom"
            id="input-email"
            v-model="user.email"
            type="text" required
            placeholder="example@test.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Your phone:" class="custom" label-for="input-phone">
          <b-form-input
            class="custom"
            id="input-phone"
            v-model="user.phone"
            type="text" required
            placeholder="+1234567890"
          ></b-form-input>
        </b-form-group>
      </b-row>
    </b-form>

    <b-button @click="$router.push({ name: 'guest.projects' })" variant="secondary" class="mr-2">dashboard</b-button>
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
  computed: {
    profile () {
      return this.$store.getters.profile
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_PROFILE', { id: 2 })
  },
  created () {}
}
</script>

<style scoped lang="scss">
  #user-settings {
    & .row {
      margin: 0;
    }

    & .form-group.custom {
      width: 80%;
    }

    .avatar-wrapper {
      height: 130px;
      width: 130px;
      border-radius: 50%;
      background-color: $secondary-color;

      @include box-shadow(0px 0px 10px -1px rgba(0,0,0,0.75));

      & svg {
        color: $white-color;
        margin-top: 30%;
      }
    }
  }
</style>
