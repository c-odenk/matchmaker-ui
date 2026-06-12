import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/View-Imprint.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/View-Privacy.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/View-Terms.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
