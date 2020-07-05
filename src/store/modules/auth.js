const initialState = () => ({
  variable1: 111,
  variable2: 222,
  variable3: 333
})

const state = initialState()

// Getters

// Actions
const actions = {
  reset ({ commit }) {
    commit('RESET')
  }
}

// Mutations
const mutations = {
  RESET (state) {
    const newState = initialState()
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  }
  // other mutations
}

export default { state, mutations, actions }
