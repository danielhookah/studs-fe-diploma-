<template>
  <b-input-group>
    <b-form-input @click="method" placeholder="search..." class="custom"></b-form-input>
  </b-input-group>
</template>

<script>

export default {
  name: 'FilterSearchInput',
  data () {
    return {}
  },
  methods: {
    method () {
      console.log(234)
    }
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
</style>
