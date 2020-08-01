import { DirectionService } from '@/services/direction/direction-service'
import errorHelper from '@/common/error'

const state = {
  direction: {},
  directions: []
}

const getters = {
  direction (state) {
    return state.direction
  }
}

const actions = {
  FETCH_DIRECTION_LIST (context, payload) {
    return DirectionService.get('list', payload)
      .then((response) => {
        context.commit('SET_DIRECTION_LIST', response)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  },
  FETCH_DIRECTION (context, payload) {
    const id = payload.id
    const dataToPlug = payload.dataToPlug
    return DirectionService.getItem(id, dataToPlug)
      .then((response) => {
        context.commit('SET_DIRECTION', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        errorHelper.showApiError('')
      })
  },
  CREATE_DIRECTION (context, payload) {
    return DirectionService.create(payload)
      .then((response) => {
        console.log(response)
        context.commit('SET_DIRECTION', response)
        return response
      })
  },
  EDIT_DIRECTION (context, payload) {
    return DirectionService.edit(payload.resource, payload.data)
      .then((response) => {
        console.log(response)
        context.commit('SET_DIRECTION', response)
        return response
      })
  },
  DELETE_DIRECTION (context, payload) {
    const id = payload.id
    return DirectionService.delete(id)
      .then((response) => {
        context.commit('SET_DIRECTION', {})
        return response
      })
  }
}

const mutations = {
  SET_DIRECTION (state, direction) {
    state.direction = direction
  },
  SET_DIRECTION_LIST (state, directions) {
    state.directions = directions
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
