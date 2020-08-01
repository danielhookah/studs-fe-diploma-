<template>
  <div id="doings-direction">
    <b-container>
      <ValidationObserver ref="observer" @submit.prevent="onSubmit" tag="form">
        <ValidationProvider name="name" rules="required" v-slot="v">
          <b-form-group label="Direction name:" class="custom" label-for="input-1">
            <b-form-input
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="direction.name"
              type="text"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="description" rules="required" v-slot="v">
          <b-form-group label="Direction description:" class="custom" label-for="input-1">
            <b-form-textarea
              class="custom" :class="{'error': v.errors[0]}"
              id="input-1"
              v-model="direction.description"
              type="text"
              rows="3"
              max-rows="8"
              no-auto-shrink
              placeholder="Enter description"
            ></b-form-textarea>
          </b-form-group>
        </ValidationProvider>

        <div v-if="$route.params.id">
          <h4 class="item-label">Lessons</h4>
          <b-row>
            <div class="add-direction-button" @click="$router.push({name: 'user.doings.lesson.form'})">
              <b-icon icon="plus"/>
            </div>
          </b-row>
        </div>

        <b-row class="m-0 mt-3 justify-content-end">
          <b-button v-if="$route.params.id" @click="deleteDirection" class="mr-3" variant="secondary">delete</b-button>
          <b-button v-if="$route.params.id" type="submit" variant="primary">save</b-button>
          <b-button v-else type="submit" variant="primary">create</b-button>
        </b-row>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>
import messageMixin from '@/mixins/message-mixin'

export default {
  name: 'DoingsLesson',
  mixins: [messageMixin],
  data () {
    return {
      direction: {
        name: '',
        description: '',
        project: {
          id: this.$route.params.projectId
        }
      }
    }
  },
  methods: {
    async onSubmit () {
      if (await this.$refs.observer.validate() === false) return

      const method = this.$route.params.id ? 'EDIT_DIRECTION' : 'CREATE_DIRECTION'
      const direction = this.cloneObject(this.direction)
      const data = this.$route.params.id ? { resource: direction.id, data: direction } : direction

      this.$store.dispatch(method, data)
        .then(response => {
          this.addMessage({
            message: response.data.message,
            title: 'Success'
          })
          this.$router.push({ name: 'user.doings.project.form', params: { id: this.$route.params.projectId } })
        })
        .catch(() => {
          this.direction.name = ''
          this.direction.description = ''
        })
    },
    fetchData () {
      this.$store.dispatch('FETCH_DIRECTION', {
        id: this.$route.params.id
      }).then(response => {
        this.direction = this.cloneObject(response.data)
      })
    },
    deleteDirection () {
      this.$store.dispatch('DELETE_DIRECTION', {
        id: this.$route.params.id
      }).then(response => {
        this.addMessage({
          message: response.data.message,
          title: 'Success'
        })
        this.$router.push({ name: 'user.doings.project.form', params: { id: this.$route.params.projectId } })
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
  }
</style>
