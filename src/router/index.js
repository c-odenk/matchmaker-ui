import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing-Draft.vue'
import { byPath, notFound } from '@/config/pages'
import { applyHead } from './head'

// Title und Description pflegt src/config/pages.js für alle Seiten zentral.
const seo = path => ({ title: byPath[path].title, description: byPath[path].description })

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding,
    meta: seo('/')
  },
  {
    path: '/integration',
    name: 'integration',
    component: () => import('../views/View-Integration-Draft.vue'),
    meta: seo('/integration')
  },
  {
    path: '/automatisierungen',
    name: 'automation',
    component: () => import('../views/View-Automation-Draft.vue'),
    meta: seo('/automatisierungen')
  },
  {
    path: '/agenten',
    name: 'agents',
    component: () => import('../views/View-Agents-Draft.vue'),
    meta: seo('/agenten')
  },
  {
    path: '/daten',
    name: 'data',
    component: () => import('../views/View-Data-Draft.vue'),
    meta: seo('/daten')
  },
  {
    path: '/ki-assistent',
    name: 'assistant',
    component: () => import('../views/View-Assistant-Draft.vue'),
    meta: seo('/ki-assistent')
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('../views/View-Contact-Draft.vue'),
    meta: seo('/kontakt')
  },
  {
    path: '/preise',
    name: 'pricing',
    component: () => import('../views/View-Pricing-Draft.vue'),
    meta: seo('/preise')
  },
  // Die früheren Entwurfspfade zeigen auf die nun veröffentlichten Seiten.
  { path: '/entwurf', redirect: '/' },
  { path: '/entwurf/:rest(.*)', redirect: to => '/' + to.params.rest },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/View-Imprint.vue'),
    meta: seo('/imprint')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/View-Privacy.vue'),
    meta: seo('/privacy')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/View-Terms.vue'),
    meta: seo('/terms')
  },
  // Alles andere: 404-Seite. Vorgerendert als /404.html, die Netlify mit
  // Status 404 ausliefert; hier fängt sie auch Navigationen im Browser ab.
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/View-NotFound.vue'),
    meta: { title: notFound.title, description: notFound.description, noindex: true }
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

router.afterEach(to => applyHead(to))

export default router
