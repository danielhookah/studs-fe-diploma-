import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'
import errorHelper from './error'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    // Vue.axios.defaults.headers.common.Authorization = `Token ${JwtService.getToken()}`
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
    return new Promise((resolve, reject) => {
      return Vue.axios.post(`${resource}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          errorHelper.showApiError(error.response.data.data.message)
          reject(error.response)
        })
    })
  },

  put (resource, params) {
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
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService
