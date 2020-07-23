<template>
  <div id="doings-project-list">
    <b-container>
      <b-row class="flex-column">
        <b-card :key="index" v-for="(project,index) in projects" class="custom">
          <h1>{{project.name}}</h1>
        </b-card>
        <div class="add-project-button" @click="$router.push({name: 'user.doings.project'})">
          <b-icon icon="plus" font-scale="1.5"/>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import messageMixin from '@/mixins/message-mixin'

export default {
  name: 'DoingsProjectList',
  mixins: [messageMixin],
  data () {
    return {
      projects: []
      // todo count & lazy load
    }
  },
  methods: {
    async fetchData () {
      const { data } = await this.$store.dispatch('FETCH_PROJECT_LIST', {
        perPage: 10,
        firstResult: 0
      })
      console.log(data)
      this.projects = data.projects
    }
  },
  created () {
    this.showWaitingMessages()
    this.fetchData()
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/card-custom";

  #doings-project-list {
    /*margin-top: 2rem;*/

    & .row {
      margin: 0;
    }

    & .card.custom {
      @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
      margin: 10px 0;
      min-height: 100px;
      border-radius: 15px;
    }

    & .add-project-button {
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
  }
</style>
