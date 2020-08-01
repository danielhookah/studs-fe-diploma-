<template>
  <div id="project-data">
    <img v-if="project.image" class="project-image" :src="project.image" :alt="project.name">
    <b-container>
      <b-row class="align-items-center data-row">
        <!--        <b-col>-->
        <!--          <b-button @click="$router.push({ name: 'guest.projects' })" variant="primary">-->
        <!--            Lessons-->
        <!--          </b-button>-->
        <!--        </b-col>-->
        <b-col>
          <h1 class="middle-title project-title">{{project.name}}</h1>
        </b-col>
      </b-row>

      <b-row class="align-items-center flex-column data-row">
        <h4 class="section-title">Description</h4>
        <p>{{project.description}}</p>
      </b-row>

      <b-row class="align-items-center flex-column data-row" v-if="project.directions">
        <h4 class="section-title">Directions</h4>
        <div class="direction-item" v-for="(direction,index) in project.directions" :key="'direction'+index">
          <h3>{{direction.name}}</h3>
          <p>{{direction.description}}</p>
        </div>
      </b-row>

      <b-row class="align-items-center flex-column data-row">
        <h4 class="section-title">Rest</h4>
        <p><span class="font-weight-bolder">email:</span> {{project.email}}</p>
        <p v-if="project.creator"><span class="font-weight-bolder">creator:</span> {{project.creator.firstName + ' ' +
          project.creator.lastName}}</p>
      </b-row>

      <b-row class="justify-content-center px-3">
        <b-button variant="primary" block
                  @click="isLoggedIn() ? applyForProject() : $router.push({ name: 'register' })"
                  class="create-account-button">
          APPLY
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import messageMixin from '@/mixins/message-mixin'

export default {
  name: 'DoingsProjectData',
  mixins: [messageMixin],
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['project'])
  },
  methods: {
    applyForProject () {
      this.$store.dispatch('APPLY_PROJECT_USER', {
        projectId: this.$route.params.id,
        userId: this.$store.getters.profile.id
      }).then((response) => {
        this.addMessage({
          message: response.data.message,
          title: 'Success'
        })
        this.$router.push({ name: 'user.doings.project.list' })
      })
    },
    fetchData () {
      this.$store.dispatch('FETCH_PROJECT', {
        id: this.$route.params.id,
        dataToPlug: ['creator', 'directions']
      })
    }
  },
  beforeMount () {
    this.fetchData()
  },
  created () {
  }
}
</script>

<style scoped lang="scss">

  #project-data {
    position: relative;
    margin-top: 0 !important;

    .container {
      padding-top: 1rem;
    }

    .container * {
      z-index: 1;
    }

    .project-image {
      width: 100%;
      position: fixed;
      left: 0;
      top: 50px;
      z-index: 0;
    }

    .project-title {
      word-break: break-all;
      font-size: 25px;
      font-weight: 600;
      text-shadow: 2px 2px 4px black;
      -webkit-text-fill-color: white;
    }

    .data-row {
      width: 100%;
      border-radius: 15px;
      background-color: rgb(246 246 246 / 90%);
      position: relative;
      padding: 10px 0;
      /* margin-bottom: 21px; */
      justify-content: center;
      margin: 0 auto 30px auto;
    }

    .section-title {
      margin: 0 auto 10px auto;
    }

    .direction-item {
      background-color: opacityColor($primary-color, 0.4);
      width: 100%;
      margin: 10px auto;

      h3 {
        text-align: center;
        margin: 0;
        padding: 5px 20px;
      }

      p {
        padding: 10px 20px;
        word-wrap: break-word;
      }
    }
  }
</style>
