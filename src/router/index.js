import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing.vue'
import ViewLogin from '../views/View-Login.vue'
import ViewRegister from '../views/View-Register.vue'
// import ViewWaitlist from '@/views/View-Waitlist.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding
  }, 
  {
    path: '/login',
    name: 'login',
    component: ViewLogin
  },
  {
    path: '/register',
    name: 'register',
    component: ViewRegister
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router