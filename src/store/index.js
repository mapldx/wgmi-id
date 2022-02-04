import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  plugins: [
    createPersistedState()
  ],
  state () {
    return {
      user: {}
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  getters: {
    isAuthenticated: state => {
      if (Object.keys(state.user).length) {
        return true
      } else {
        return false
      }
    },
    getSol: state => {
      return state.user.solAddress
    },
    getEth: state => {
      return state.user.ethAddress
    },
    getUsername: state => {
      return state.user.username
    }
  }
})

export default store
