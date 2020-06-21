<template>
  <div id="guest-desktop-sidebar">
    <b-sidebar id="sidebar-1" title="Sidebar" :shadow="true">
      <b-container>
        <multiselect placeholder="search..." v-model="select" :options="selectOptions"></multiselect>
        <b-input-group class="mt-3">
          <b-form-input placeholder="search..." class="custom"></b-form-input>
        </b-input-group>
        <b-input-group class="mt-3">
          <b-form-input placeholder="search..." class="custom"></b-form-input>
        </b-input-group>
        <CreateAccountButton class="desktop"/>
      </b-container>
    </b-sidebar>
    <router-view/>
  </div>
</template>

<script>
import CreateAccountButton from '@/views/PublicProject/components/details/CreateAccountButton'

export default {
  name: 'DesktopGuestSidebar',
  props: {
    selectOptions: Array,
    select: Array
  },
  data () {
    return {}
  },
  components: { CreateAccountButton },
  created () {

  }
}
</script>

<style scoped lang="scss">
</style>
