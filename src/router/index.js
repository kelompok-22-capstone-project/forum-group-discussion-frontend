import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import YourThread from '../views/YourThread.vue'
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'HomeView', component: HomeView},
  // {path: '/yourthread', name: 'YourThread', component: YourThread},
  // {path: '/login', name: 'LoginView', component: LoginView},
  // {path: '/register', name: 'RegisterView', component: RegisterView},

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/user/login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import(/* webpackChunkName: "regist" */ '../pages/user/regist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
