<template>
  <div class="container-custom">
      <div class="public-project-grid">
        <div class="grid-sizer"></div>
        <div class="gutter-sizer"></div>
<!--        :class="{'grid-item&#45;&#45;width2': (Math.random() > 0.8 && index > 8)}"-->
        <div v-masonry transition-duration="0.3s" item-selector=".public-project-grid-item">
          <div v-masonry-tile class="item" :key="index" v-for="(item,index) in listItems">
            <ProjectListCard :data="item"
                             :requestCount="requestCount"
                             :key="index"
            />
          </div>
        </div>
        <scroll-loader class="bug-fix" :loader-method="fetchData" :loader-disable="loaderDisable">
        </scroll-loader>
      </div>
  </div>
</template>

<script>
import ProjectListCard from '@/views/PublicProject/components/ProjectListCard'
import messageMixin from '@/mixins/message-mixin'
import lazyLoadScrollMixin from '@/mixins/lazy-load-scroll-mixin'

export default {
  name: 'ProjectList',
  mixins: [messageMixin, lazyLoadScrollMixin],
  components: { ProjectListCard },
  data () {
    return {
      msnry: null,
      requestCount: 0
    }
  },
  methods: {
    async fetchData () {
      console.log(2)
      const { data } = await this.$store.dispatch('FETCH_PROJECT_LIST', {
        perPage: this.perPage,
        firstResult: this.firstResult += 10
      })

      data.projects.length < this.perPage && (this.loaderDisable = true)
      this.listItems = this.listItems.concat(data.projects)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/masonry";

  .container-custom {
    margin: 0 8px;

    .bug-fix {
      /*padding-top: 130%;*/
    }
  }
</style>
