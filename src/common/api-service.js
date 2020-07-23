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
        store.dispatch('LOGOUT')
          .then(() => {
            store.dispatch('FETCH_CSRF_TOKEN')
            router.push({ name: 'common' })
          })
      }
      return error
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
          resolve(response)
        })
        .catch(error => {
          errorHelper.showApiError(error.response.data.data.message)
          reject(error.response)
        })
    })
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post (resource, params) {
    this.setHeader()
    return new Promise((resolve, reject) => {
      return Vue.axios.post(`${resource}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          const message = (error && error.response) ? error.response.data.data.message : 'ERROR'
          errorHelper.showApiError(message)
          reject(error.response)
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
        .catch(error => {
          errorHelper.showApiError(error.response.data.data.message)
          reject(error.response)
        })
    })
  },

  delete (resource) {
    this.setHeader()
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService
