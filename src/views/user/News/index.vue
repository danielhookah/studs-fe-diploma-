<template>
  <div id="user-news" class="">
    <b-container>
      <CollapseRow :propKey="2" class="mt-3">
        <template v-slot:content>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
        </template>
      </CollapseRow>

      <CollapseRow :propKey="3" class="mt-3">
        <template v-slot:content>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
          <p class="card-text">Collapse contents Here</p>
        </template>
      </CollapseRow>

      <CollapseRow :propKey="4" class="mt-3">
        <template v-slot:content>
          <p>qwe</p>
        </template>
      </CollapseRow>
    </b-container>
  </div>
</template>

<script>
import CollapseRow from '@/components/CollapseRow'

export default {
  name: 'PublicProject',
  data () {
    return {}
  },
  components: { CollapseRow },
  methods: {},
  created () {}
}
</script>

<style scoped lang="scss">
  #user-news {}
</style>
