import { createRouter, createWebHistory } from '@ionic/vue-router';
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

// import store from '../store' // your vuex store 

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.tokenValue) {
//     next()
//     return
//   }
//   next('/home')
// }

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.tokenValue) {
//     next()
//     return
//   }
//   next('/login')
// }




const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    // beforeEnter: ifNotAuthenticated
  },
  {
    path: '/home',
    name: "Home",
    component: Dashboard,
    // beforeEnter: ifAuthenticated
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
