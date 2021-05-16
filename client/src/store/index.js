import { createStore } from 'vuex'

const token = localStorage.getItem('token');
export default createStore({
  state: {
    token,
    selectedSpecialtyCode: null,
    selectedClassId: null,
    selectedGroupNumber: null,
    selectedStudentName: null,
    selectedSessionId: null
  },
  getters: {
    tokenValue: state => {
      return !!state.token
    },
    selectedSpecialtyCode: state => {
      return state.selectedSpecialtyCode
    },
    selectedClassId: state => {
      return state.selectedClassId
    },
    selectedGroupNumber: state => {
      return state.selectedGroupNumber
    },
    selectedStudentName: state => {
      return state.selectedStudentName
    },
    selectedSessionId: state => {
      return state.selectedSessionId
    },
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token
    },
    SET_SPECIALTY_CODE: (state, code) => {
      return state.selectedSpecialtyCode = code.slice(0, -1);
    },
    SET_CLASS_ID: (state, classId) => {
      return state.selectedClassId = classId;
    },
    SET_GROUP_NUMBER: (state, groupNumber) => {
      return state.selectedGroupNumber = groupNumber;
    },
    SET_STUDENT_NAME: (state, studentName) => {
      return state.selectedStudentName = studentName;
    },
    SET_SELECTED_SESSION_ID: (state, sessionId) => {
      return state.selectedSessionId = sessionId;
    }
  },
  actions: {
  },

  modules: {
  }
})
