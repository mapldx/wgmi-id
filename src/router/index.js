import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/App.vue'
import Profile from '../views/Profile.vue'
import Tokens from '../views/Tokens.vue'
import Public from '../views/Public.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:username/home',
    name: 'App',
    component: App
  },
  {
    path: '/:username/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/:username/tokens',
    name: 'Tokens',
    component: Tokens
  },
  {
    path: '/:username',
    name: 'Public',
    component: Public
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
