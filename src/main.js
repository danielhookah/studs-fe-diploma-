import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import globalMixin from '@/mixins/global-mixin'

import 'animate.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Alternatively you can import Bootstrap and BootstrapVue scss files in a custom SCSS file:
// @import 'node_modules/bootstrap/scss/bootstrap';
// @import 'node_modules/bootstrap-vue/src/index.scss';
// Make sure to import the custom.scss file in your app entry point:

import { VueMasonryPlugin } from 'vue-masonry'

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import './common/vee-validate-config'

import 'vue-multiselect/dist/vue-multiselect.min.css'
import Multiselect from 'vue-multiselect'

import './assets/scss/style.scss'

import ApiService from './common/api-service'
import errorHelper from '@/common/error'

ApiService.init()

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMasonryPlugin)
Vue.component('multiselect', Multiselect)
Vue.mixin(globalMixin)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.prototype.$errorHelper = errorHelper

Vue.config.errorHandler = (err, vm, info) => {
  errorHelper.handleUndefinedError({ err, vm, info })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// --host 192.168.0.129
