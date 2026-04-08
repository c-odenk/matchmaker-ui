import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router