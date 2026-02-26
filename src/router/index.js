import { createRouter, createWebHashHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
