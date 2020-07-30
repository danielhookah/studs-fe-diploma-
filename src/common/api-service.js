import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'
import errorHelper from './error'
import store from '@/store'
import router from '@/router'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    Vue.axios.defaults.withCredentials = true

    Vue.axios.interceptors.response.use(response => {
      return response
    }, error => {
      if (error.response.status === 401) {
        console.log(error.response)
        console.log(Vue.store)
        store.dispatch('LOGOUT')
          .then(() => {
            store.dispatch('FETCH_CSRF_TOKEN')
            router.push({ name: 'common' })
          })
      }

      errorHelper.showApiError(error.response.data.message)
    })
  },

  setHeader () {
    // Vue.axios.defaults.headers.common.Authorization = `Token ${JwtService.getToken()}`
    Vue.axios.defaults.headers.common['X-CSRF-Token'] = window.localStorage.getItem('X-CSRF-Token')
  },

  query (resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios.get(resource, params)
        .then(response => {
          console.log(response)
          resolve(response)
        })
    })
  },

  get (resource, slug = '', params = null) {
    return Vue.axios.get(`${resource}/${slug}`, params)
  },

  post (resource, params) {
    this.setHeader()
    return new Promise((resolve, reject) => {
      return Vue.axios.post(`${resource}`, params)
        .then(response => {
          resolve(response)
        })
    })
  },

  put (resource, params) {
    this.setHeader()
    return new Promise((resolve, reject) => {
      return Vue.axios.put(`${resource}`, params)
        .then(response => {
          resolve(response)
        })
    })
  },

  delete (resource) {
    this.setHeader()
    return Vue.axios.delete(resource)
  }
}

export default ApiService
