<template>
  <div id="doings-project">
    <b-container>
      <ValidationObserver ref="observer" @submit.prevent="onSubmit" tag="form">
        <ValidationProvider name="name" rules="required" v-slot="v">
          <b-form-group label="Project name:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="project.name"
              type="text"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="description" rules="required" v-slot="v">
          <b-form-group label="Project description:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="project.description"
              type="text"
              placeholder="Enter description"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="email" rules="required|email" v-slot="v">
          <b-form-group label="Project email address:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="project.email"
              type="email"
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ImageInputAdvanced/>

        <b-row class="m-0 mt-4 justify-content-end">
          <b-button type="submit" variant="primary">create</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>

import ImageInputAdvanced from '@/components/ImageInput'
export default {
  name: 'DoingsLesson',
  components: { ImageInputAdvanced },
  data () {
    return {
      project: {
        name: '',
        description: '',
        email: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return
      return true
      // this.$store.dispatch('LOGIN', this.user)
      //   .then(() => {
      //     this.$router.push({ name: 'user.news' })
      //   })
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
</style>
