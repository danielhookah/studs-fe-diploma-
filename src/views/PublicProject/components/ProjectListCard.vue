<template>
  <div :style="{'height': (10 * (Math.random() * 10) + 100) + 'px'}"
       class="public-project-grid-item">
    <!--    public-project-grid-item' + requestCount-->
    <b-card class="my-2 custom" :style="{height: 'inherit',
    backgroundImage: 'url(' + data.image + ')'}">
      <h4>{{data.name}}</h4>
<!--      <p>{{data.description}}</p>-->
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectListCard',
  props: ['data', 'requestCount'],
  data () {
    return {}
  },
  components: {},
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/partials/masonry";
  @import "~@/assets/scss/partials/card-custom";

  .card.custom {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .card.custom h4 {
    position: absolute;
    bottom: 10%;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  /*.card.custom p {*/
  /*  position: absolute;*/
  /*  top: 70%;*/
  /*  left: 0;*/
  /*  z-index: 1;*/
  /*  width: 100%;*/
  /*  overflow: hidden;*/
  /*  max-height: 30%;*/
  /*  padding: 0 5px;*/
  /*}*/
  .card.custom:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.89) 40%, transparent 100%);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
</style>
