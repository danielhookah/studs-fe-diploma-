<template>
  <div class="container-custom">
<!--    <b-container>-->
      <div class="public-project-grid">
        <div class="grid-sizer"></div>
        <div class="gutter-sizer"></div>
        <ProjectListCard :class="{'grid-item--width2': (Math.random() > 0.8 && index > 8)}"
                         :data="item" :key="index" v-for="(item,index) in blocks"/>
      </div>
<!--    </b-container>-->
  </div>
</template>

<script>
import Masonry from 'masonry-layout'
import ProjectListCard from '@/views/PublicProject/components/ProjectListCard'

export default {
  name: 'ProjectList',
  components: { ProjectListCard },
  data () {
    return {
      blocks: [
        'qasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdas',
        'QQQasdasdasdasdasdasdasd',
        'qasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweqasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadswe',
        'Almost before we knew it, we had left the ground Almost before we knew it, we had left the ground Almost before we knew it, we had left the ground',
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
        'qasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdas',
        'asdasdasdasdasdasdasd',
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
        'qasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdas',
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
        'qasdasdasdasdasdasdasdadsweasdasdasdasdasdasdasdadsweasdasdasdasdas',
        'asdasdasdasdasdasdasd',
        'asdasdasdasdasdasdasdasdasdasdasdasdasd',
        'asdasdasdasdasdasdasd',
        'asdasdasdasdasdasdasdasdasdasdasdasdasd'
      ]
    }
  },
  mounted () {
    var elem = document.querySelector('.public-project-grid')
    var msnry = new Masonry(elem, {
      // options
      columnWidth: '.grid-sizer',
      // gutter: '.gutter-sizer',
      itemSelector: '.public-project-grid-item'
    })
    msnry.layout()
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  @use "../../../assets/scss/partials/masonry";

  .container-custom {
    margin: 0 8px;
  }
</style>
