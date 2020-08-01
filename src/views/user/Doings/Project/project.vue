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
            <b-form-textarea
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              rows="3"
              max-rows="8"
              no-auto-shrink
              v-model="project.description"
              type="text"
              placeholder="Enter description"
            ></b-form-textarea>
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

        <div v-if="$route.params.id">
          <h4 class="item-label">Directions</h4>
          <div v-if="project.directions">
            <div class="direction-card" v-for="(direction,index) in project.directions" :key="'direction'+index"
                 @click="$router.push({
                 name: 'user.doings.direction.form',
                 params: {projectId: $route.params.id, id: direction.id
                 }})">
              <h3>{{direction.name}}</h3>
              <p>{{direction.description}}</p>
            </div>
          </div>
          <b-row>
            <div class="add-direction-button" @click="$router.push({
              name: 'user.doings.direction.form', params: {projectId: $route.params.id}
            })">
              <b-icon icon="plus"/>
            </div>
          </b-row>
        </div>

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
        id: this.$route.params.id,
        dataToPlug: ['directions']
      }).then(response => {
        this.project = JSON.parse(JSON.stringify(response.data))
      })
    },
    deleteProject () {
      this.$store.dispatch('DELETE_PROJECT', {
        id: this.$route.params.id
      }).then(response => {
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
    this.showWaitingMessages()
  }
}
</script>

<style scoped lang="scss">
  #doings-project {
    .add-direction-button {
      margin: 10px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      background-color: $secondary-color;
      color: $white-color;
      border-radius: 50%;
    }

    .item-label {
      text-align: left;
      padding: 6px 0 6px 14px;
      margin: 0;

      @extend %heebo-medium
    }

    .direction-card {
      background-color: $white-color;
      border-radius: 10px;
      width: 100%;
      margin: 10px auto;

      h3 {
        text-align: end;
        margin: 0;
        padding: 5px 20px;
        background-color: opacityColor($primary-color, 0.4);
      }

      p {
        padding: 10px 20px;
        word-wrap: break-word;
      }
    }
  }
</style>
