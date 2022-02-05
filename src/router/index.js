import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/App.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/id/:userid',
    name: 'Id',
    component: App
  },
  {
    path: '/id/:userid/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
