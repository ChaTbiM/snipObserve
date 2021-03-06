import { createRouter, createWebHistory } from '@ionic/vue-router';
import Login from '../views/Login.vue'
import Groups from '../views/Groups'
import Students from '../views/Students'
import Student from '../views/Student';

import store from '../store' // your vuex store 

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.tokenValue) {
    next()
    return
  }
  next('/groups')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.tokenValue) {
    next()
    return
  }
  next('/login')
}


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/groups',
    name: "Groups",
    component: Groups,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/group/:group_id/session/:session_id',
    name: "Group",
    component: Students,
    props: true,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/student/:student_id',
    name: "Student",
    component: Student,
    props: true,
    beforeEnter: ifAuthenticated
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-route",
  linkExactActiveClass: "active-routee"
})

export default router
