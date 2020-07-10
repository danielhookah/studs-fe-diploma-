import { UserService } from '@/services/user/user-service'
import errorHelper from '@/common/error'

const state = {
  user: {}
}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {
  FETCH_USER (context, payload) {
    console.log(payload)
    const id = payload.id
    return UserService.getItem(id)
      .then((response) => {
        console.log(response)
        context.commit('SET_USER', response)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  },
  CREATE_USER (context, payload) {
    console.log(payload)
    return UserService.create(payload)
      .then((response) => {
        console.log(response)
        context.commit('SET_USER', response)
        return response
      })
  },
  EDIT_USER (context, payload) {
    console.log(payload)
    return UserService.edit(payload.resource, payload.data)
      .then((response) => {
        console.log(response)
        context.commit('SET_USER', response)
        return response
      })
      // .catch((error) => {
      // })
  },
  CHECK_USER_HASH (context, payload) {
    return new Promise((resolve, reject) => {
      UserService.get('check-hash-actual/' + payload)
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
  SET_USER (state, user) {
    state.user = user
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
