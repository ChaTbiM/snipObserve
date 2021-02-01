import { createStore } from 'vuex'

const token = localStorage.getItem('token');
export default createStore({
  state: {
    token,
  },
  getters: {
    tokenValue: state => {
      return !!state.token
    }
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token
    },
  },
  actions: {
  },

  modules: {
  }
})
