import { UserService } from '@/services/user/user-service'
import errorHelper from '@/common/error'

const state = {
  profile: {}
}

const getters = {
  profile (state) {
    return state.profile
  }
}

const actions = {
  FETCH_PROFILE (context, payload) {
    console.log(payload)
    const id = payload.id
    return UserService.getItem(id)
      .then((response) => {
        console.log(response)
        context.commit('SET_PROFILE', response)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  }
}

const mutations = {
  SET_PROFILE (state, profile) {
    state.profile = profile
    state.errors = {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
