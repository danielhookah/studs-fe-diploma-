import { ProjectService } from '@/services/project/project-service'
// import errorHelper from '@/common/error'

const state = {
  projectUser: {},
  projectsUsers: []
}

const getters = {
  projectUser (state) {
    return state.projectUser
  }
}

const actions = {
  // FETCH_PROJECT_LIST (context, payload) {
  //   return ProjectService.get('list', payload)
  //     .then((response) => {
  //       context.commit('SET_PROJECT_LIST', response)
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       errorHelper.showApiError('')
  //     })
  // },
  // FETCH_PROJECT (context, payload) {
  //   const id = payload.id
  //   const dataToPlug = payload.dataToPlug
  //   return ProjectService.getItem(id, dataToPlug)
  //     .then((response) => {
  //       console.log(response)
  //       context.commit('SET_PROJECT', response.data)
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       errorHelper.showApiError('')
  //     })
  // },
  APPLY_PROJECT_USER (context, payload) {
    return ProjectService.applyUser(payload)
      .then((response) => {
        context.commit('SET_PROJECT_USER', response)
        return response
      })
  }
  // EDIT_PROJECT (context, payload) {
  //   return ProjectService.edit(payload.resource, payload.data)
  //     .then((response) => {
  //       console.log(response)
  //       context.commit('SET_PROJECT', response)
  //       return response
  //     })
  // },
  // DELETE_PROJECT (context, payload) {
  //   const id = payload.id
  //   return ProjectService.delete(id)
  //     .then((response) => {
  //       context.commit('SET_PROJECT', {})
  //       return response
  //     })
  // }
}

const mutations = {
  SET_PROJECT_USER (state, projectUser) {
    state.projectUser = projectUser
  }
  // SET_PROJECT_LIST (state, projects) {
  //   state.projects = projects
  // }
}

export default {
  state,
  actions,
  mutations,
  getters
}
