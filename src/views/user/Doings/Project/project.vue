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

        <ImageInputAdvanced :key="project.image"
                            :img-path="project.image"
                            @afterCropImage="afterCropImage"
        />

        <b-row class="m-0 mt-3 justify-content-end">
          <b-button v-if="$route.params.id" @click="deleteProject" class="mr-3" variant="secondary">delete</b-button>
          <b-button v-if="$route.params.id" type="submit" variant="primary">save</b-button>
          <b-button v-else type="submit" variant="primary">create</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>

import ImageInputAdvanced from '@/components/ImageInput'
import messageMixin from '@/mixins/message-mixin'
export default {
  name: 'DoingsLesson',
  mixins: [messageMixin],
  components: { ImageInputAdvanced },
  data () {
    return {
      project: {
        name: '',
        description: '',
        email: '',
        image: null
      }
    }
  },
  methods: {
    afterCropImage (base64) {
      this.project.image = base64
    },
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return

      const method = this.$route.params.id ? 'EDIT_PROJECT' : 'CREATE_PROJECT'
      const data = this.$route.params.id ? { resource: this.project.id, data: this.project } : this.project

      this.$store.dispatch(method, data)
        .then(response => {
          console.log(response)
          this.addMessage({
            message: response.data.message,
            title: 'Success'
          })
          this.$router.push({ name: 'user.doings.project.list' })
        })
        .catch(() => {
          this.project.name = ''
          this.project.description = ''
          this.project.email = ''
          this.project.image = null
        })
    },
    fetchData () {
      this.$store.dispatch('FETCH_PROJECT', {
        id: this.$route.params.id
      }).then(response => {
        console.log(response)
        this.project = JSON.parse(JSON.stringify(response.data))
      })
    },
    deleteProject () {
      this.$store.dispatch('DELETE_PROJECT', {
        id: this.$route.params.id
      }).then(response => {
        console.log(response)
        this.addMessage({
          message: response.data.message,
          title: 'Success'
        })
        this.$router.push({ name: 'user.doings.project.list' })
      })
    }
  },
  beforeMount () {
    if (this.$route.params.id) this.fetchData()
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
</style>
