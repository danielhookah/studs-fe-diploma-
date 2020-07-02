<template>
  <div id="doings-project">
    <b-link :to="{ name: 'user.doings.project.list' }">
      <b-button class="mr-2">
        Projects
      </b-button>
    </b-link>
    <b-link :to="{ name: 'user.doings.lesson.list' }">
      <b-button class="ml-2">
        Lessons
      </b-button>
    </b-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Doings',
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
</style>
