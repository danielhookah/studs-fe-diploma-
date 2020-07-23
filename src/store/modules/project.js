import { ProjectService } from '@/services/project/project-service'
import errorHelper from '@/common/error'

const state = {
  project: {},
  projects: []
}

const getters = {
  project (state) {
    return state.project
  }
}

const actions = {
  FETCH_PROJECT_LIST (context, payload) {
    return ProjectService.get('list', payload)
      .then((response) => {
        console.log(response)
        context.commit('SET_PROJECT_LIST', response)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  },
  FETCH_PROJECT (context, payload) {
    console.log(payload)
    const id = payload.id
    return ProjectService.getItem(id)
      .then((response) => {
        console.log(response)
        context.commit('SET_PROJECT', response)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  },
  CREATE_PROJECT (context, payload) {
    console.log(payload)
    return ProjectService.create(payload)
      .then((response) => {
        console.log(response)
        context.commit('SET_PROJECT', response)
        return response
      })
  },
  EDIT_PROJECT (context, payload) {
    console.log(payload)
    return ProjectService.edit(payload.resource, payload.data)
      .then((response) => {
        console.log(response)
        context.commit('SET_PROJECT', response)
        return response
      })
      // .catch((error) => {
      // })
  },
  DELETE_PROJECT (context, payload) {
    return new Promise((resolve, reject) => {
      ProjectService.delete('check-hash-actual/' + payload)
        .then((response) => {
          resolve(response)
        })
        .catch(error => {
          resolve(error)
        })
    })
  }
}

const mutations = {
  SET_PROJECT (state, project) {
    state.project = project
  },
  SET_PROJECT_LIST (state, projects) {
    state.projects = projects
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
