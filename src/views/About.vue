<template>
  <div class="about">
    <h1 class="mb-2">This is an about page</h1>
    <b-link :to="{ name: 'guest.projects' }">
      <b-button class="mr-2">
        Projects
      </b-button>
    </b-link>
    <b-link :to="{ name: 'user.news' }">
      <b-button class="ml-2">
        User
      </b-button>
    </b-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
</style>
