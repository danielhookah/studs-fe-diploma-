<template>
  <div id="guest-main" class="main-wrapper">
    <router-view/>
    <!--  MOBILE  -->
    <div v-if="isMobileWidth()">
      <div class="search-project-wrapper">
        <b-container>
          <b-row>
            <b-col cols="10">
              <FilterSearchInput class="mt-3"/>
            </b-col>
            <b-col cols="2">
              <TogglerButton class="mt-3"/>
            </b-col>
          </b-row>
        </b-container>

        <b-modal centered id="modal-1" modal-class="custom" title="Filter">
          <multiselect placeholder="search..." v-model="select" :options="selectOptions"></multiselect>
          <b-input-group class="mt-3">
            <b-form-input placeholder="search..." class="custom"></b-form-input>
          </b-input-group>
          <b-input-group class="mt-3">
            <b-form-input placeholder="search..." class="custom"></b-form-input>
          </b-input-group>

          <template v-slot:modal-footer>
            <b-button variant="outline-primary" size="md" class="">
              Reset
            </b-button>
            <b-button variant="primary" size="md" class="">
              Close
            </b-button>
          </template>
        </b-modal>
      </div>
      <ProjectList/>
      <CreateAccountButton/>
    </div>
    <!--  DESKTOP  -->
    <div v-else>
      <DesktopGuestSidebar :select="select" :select-options="selectOptions"/>

      <div class="search-project-wrapper">
        <TogglerButton class="desktop-toggle-button" v-b-toggle.sidebar-1/>
      </div>
      <ProjectList/>
    </div>
  </div>
</template>

<script>
import ProjectList from '@/views/PublicProject/components/ProjectList'
import CreateAccountButton from '@/views/PublicProject/components/details/CreateAccountButton'
import DesktopGuestSidebar from '@/views/PublicProject/components/DesktopGuestSidebar'
import TogglerButton from '@/views/PublicProject/components/details/TogglerButton'
import FilterSearchInput from '@/views/PublicProject/components/details/FilterSearchInput'

export default {
  name: 'PublicProject',
  data () {
    return {
      select: [],
      selectOptions: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
    }
  },
  components: { FilterSearchInput, TogglerButton, DesktopGuestSidebar, CreateAccountButton, ProjectList },
  created () {

  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/colors";

  .search-project-wrapper {
    width: 100%;
    z-index: 1;
    top: 0;
    position: fixed;
  }

  .desktop-toggle-button {
    width: 50px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>
