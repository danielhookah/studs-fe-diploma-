<template>
  <div id="doings-project-list">
    <b-container>
      <b-row class="flex-column">
        <b-card :key="index" v-for="(project,index) in listItems" class="custom"
                :style="'background-image: url(' + project.image + ')'"
                :data-bg-img="project.image"
                @click="$router.push({ name: 'user.doings.project.data', params: {id: project.id} })">
          <h1>{{project.name}}</h1>
          <div class="edit-icon" @click.stop="$router.push({name: 'user.doings.project.form', params: { id: project.id } })">
            <b-icon icon="pencil" scale="1.8"/>
          </div>
        </b-card>

        <scroll-loader :loader-method="fetchData" :loader-disable="loaderDisable">
        </scroll-loader>

        <!--    todo to actions dropdown    -->
        <div class="add-project-button" @click="$router.push({name: 'user.doings.project.form'})">
          <b-icon icon="plus"/>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import messageMixin from '@/mixins/message-mixin'
import lazyLoadScrollMixin from '@/mixins/lazy-load-scroll-mixin'

export default {
  name: 'DoingsProjectList',
  mixins: [messageMixin, lazyLoadScrollMixin],
  data () {
    return {}
  },
  methods: {
    async fetchData () {
      const { data } = await this.$store.dispatch('FETCH_PROJECT_LIST', {
        perPage: this.perPage,
        firstResult: this.firstResult += 10
      })

      data.projects.length < this.perPage && (this.loaderDisable = true)
      this.listItems = this.listItems.concat(data.projects)
    },
    editProject (id) {
      console.log(id)
    }
  },
  beforeMount () {
    // this.fetchData()
  },
  created () {
    this.showWaitingMessages()
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

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      & .card-body:before {
        content: "";
        position: absolute;
        top: 20%;
        left: 0;
        height: 60%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.33);
        color: white;
      }

      & .card-body {
        position: relative;
      }

      & h1 {
        word-break: break-all;
        margin-top: 5px;
        font-size: 40px;
        font-weight: 600;
        text-shadow: 1px 1px 3px black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        -webkit-text-fill-color: white;
      }

      & .edit-icon svg {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 15px;
        height: 15px;
        color: $white-color;
      }

      & .edit-icon:before {
        @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
        position: absolute;
        top: -10px;
        right: -10px;
        content: '';
        display: block;
        background-color: $secondary-color;
        border-radius: 50%;
        width: 45px;
        height: 45px;
      }
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
