<template>
  <div id="doings-project-data">
    <img v-if="project.image" class="project-image" :src="project.image" :alt="project.name">
    <b-container>
      <b-row class="align-items-center data-row">
        <b-col>
          <b-button @click="$router.push({ name: 'guest.projects' })" variant="primary">
            Lessons
          </b-button>
        </b-col>
        <b-col>
          <h1 class="middle-title project-title">{{project.name}}</h1>
        </b-col>
      </b-row>

      <b-row class="align-items-center flex-column data-row">
        <h4 class="section-title">Description</h4>
        <p>{{project.description}}</p>
      </b-row>

      <b-row class="align-items-center flex-column data-row">
        <h4 class="section-title">Directions</h4>
      </b-row>

      <b-row class="align-items-center flex-column data-row">
        <h4 class="section-title">Rest</h4>
        <p><span class="font-weight-bolder">email:</span> {{project.email}}</p>
        <p v-if="project.creator"><span class="font-weight-bolder">creator:</span> {{project.creator.firstName + ' ' +
          project.creator.lastName}}</p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DoingsProjectData',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['project'])
  },
  methods: {
    fetchData () {
      this.$store.dispatch('FETCH_PROJECT', {
        id: this.$route.params.id,
        dataToPlug: ['creator']
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

  #doings-project-data {
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
  }
</style>
