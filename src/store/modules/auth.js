import { AuthService } from '@/services/auth/auth-service'

function getCookie (name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return false
}

const initialState = () => ({
  variable1: 111,
  variable2: 222,
  variable3: 333
})

const state = initialState()

// Getters
const getters = {
  isLoggedIn (state) {
    var res = getCookie('authl')
    return (res === '1')
  }
}

// Actions
const actions = {
  reset ({ commit }) {
    commit('RESET')
  },
  FETCH_CSRF_TOKEN (context) {
    return AuthService.getCsrfToken()
      .catch((error) => {
        console.log(error)
      })
  },
  LOGIN (context, payload) {
    return AuthService.login(payload)
      .then((response) => {
        context.commit('SET_PROFILE', response.data.data)
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  },
  LOGOUT (context, payload) {
    return AuthService.logout(payload)
      .then((response) => {
        context.commit('SET_PROFILE', {})
        localStorage.removeItem('X-CSRF-Token')

        return response
      })
      .catch((error) => {
        console.log(error)
      })
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

export default { state, getters, mutations, actions }
