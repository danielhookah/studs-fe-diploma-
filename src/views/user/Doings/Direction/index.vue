<template>
  <div id="doings-direction-list">
    <b-container>
      <div v-for="(direction,index) in listItems" :key="'direction'+index">
        <h1 class="middle-title">{{direction.name}}</h1>
        <b-row class="justify-content-around">
          <b-card class="custom" @click="$router.push({name: 'user.doings.lesson', params: {id: 1}})">
            <h1>qwe</h1>
          </b-card>
          <b-card class="custom">
            <h1>qwe</h1>
          </b-card>
          <b-card class="custom">
            <h1>qwe</h1>
          </b-card>
        </b-row>
      </div>

      <scroll-loader :loader-method="fetchData" :loader-disable="loaderDisable">
      </scroll-loader>
    </b-container>
  </div>
</template>

<script>

import messageMixin from '@/mixins/message-mixin'
import lazyLoadScrollMixin from '@/mixins/lazy-load-scroll-mixin'

export default {
  name: 'DoingsDirectionList',
  mixins: [messageMixin, lazyLoadScrollMixin],
  data () {
    return {}
  },
  methods: {
    async fetchData () {
      const { data } = await this.$store.dispatch('FETCH_DIRECTION_LIST', {
        perPage: this.perPage,
        firstResult: this.firstResult += 10
      })

      data.directions.length < this.perPage && (this.loaderDisable = true)
      this.listItems = this.listItems.concat(data.directions)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/card-custom";

  #doings-direction-list {
    /*margin-top: 2rem;*/

    & .row {
      margin: 0;
    }

    & .card.custom {
      @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
      width: 45%;
      margin: 10px 0;
      min-height: 80px;
    }
  }
</style>
