import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing.vue'

const DEFAULT_TITLE = 'matchmaker.hr – KI-gestütztes Talentpool-Management für Personalberater'
const DEFAULT_DESC = 'matchmaker.hr automatisiert die zeitintensiven Schritte im Vermittlungsprozess – Marktanalyse, Matching, Outreach. Human-in-the-Loop: Die KI bereitet vor, der Berater entscheidet. DSGVO-konform, EU-Hosting.'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding,
    meta: { title: DEFAULT_TITLE, description: DEFAULT_DESC }
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/View-Imprint.vue'),
    meta: {
      title: 'Impressum – matchmaker.hr',
      description: 'Impressum und Anbieterkennzeichnung von matchmaker.hr.'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/View-Privacy.vue'),
    meta: {
      title: 'Datenschutz – matchmaker.hr',
      description: 'Datenschutzerklärung von matchmaker.hr: DSGVO-konform, Daten bleiben in der EU.'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/View-Terms.vue'),
    meta: {
      title: 'AGB – matchmaker.hr',
      description: 'Allgemeine Geschäftsbedingungen von matchmaker.hr.'
    }
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

router.afterEach((to) => {
  const title = (to.meta && to.meta.title) || DEFAULT_TITLE
  const description = (to.meta && to.meta.description) || DEFAULT_DESC
  document.title = title

  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', description)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', 'https://matchmaker-hr.de' + to.path)
})

export default router
