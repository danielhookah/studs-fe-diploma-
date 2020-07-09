const state = {
  messages: []
}

const getters = {
  messages (state) {
    return state.messages
  }
}

const actions = {
  ADD_MESSAGE (context, payload) {
    context.commit('SET_MESSAGE', payload)
  },
  CLEAR_MESSAGES (context) {
    context.commit('CLEAR_MESSAGES')
  }
}

const mutations = {
  SET_MESSAGE (state, message) {
    state.messages.push(message)
  },
  CLEAR_MESSAGES (state) {
    state.messages = []
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
