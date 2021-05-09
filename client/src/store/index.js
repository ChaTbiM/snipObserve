import { createStore } from 'vuex'

const token = localStorage.getItem('token');
export default createStore({
  state: {
    token,
    selectedSpecialtyCode: null,
  },
  getters: {
    tokenValue: state => {
      return !!state.token
    },
    selectedSpecialtyCode: state => {
      return state.selectedSpecialtyCode
    },
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token
    },
    SET_SPECIALTY_CODE: (state, code) => {
      return state.selectedSpecialtyCode = code.slice(0, -1);
    },
  },
  actions: {
  },

  modules: {
  }
})
