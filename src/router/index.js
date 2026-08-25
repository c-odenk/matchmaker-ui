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
    // Entwurfsfassung der Landingpage (Umsetzung des Systementwurfs) –
    // nur zur internen Ansicht, per noindex von der Indexierung ausgenommen.
    path: '/entwurf',
    name: 'landing-draft',
    component: () => import('../views/View-Landing-Draft.vue'),
    meta: {
      title: 'Entwurf – matchmaker.hr',
      description: DEFAULT_DESC,
      noindex: true
    }
  },
  {
    path: '/entwurf/integration',
    name: 'integration-draft',
    component: () => import('../views/View-Integration-Draft.vue'),
    meta: {
      title: 'Integration – matchmaker.hr',
      description: 'Bewerbersoftware, Postfach, Telefonie, Teams und Recherchequellen laufen in matchmaker an einer Oberfläche zusammen – angebunden statt ersetzt.',
      noindex: true
    }
  },
  {
    path: '/entwurf/automatisierungen',
    name: 'automation-draft',
    component: () => import('../views/View-Automation-Draft.vue'),
    meta: {
      title: 'Automatisierungen – matchmaker.hr',
      description: 'Wiederkehrende Schritte laufen ohne Zutun durch, fehlende Profilangaben werden erkannt und nachgefragt – Telefonie, Termine und Auswertung laufen auf Klick aus dem Vorgang.',
      noindex: true
    }
  },
  {
    path: '/entwurf/agenten',
    name: 'agents-draft',
    component: () => import('../views/View-Agents-Draft.vue'),
    meta: {
      title: 'Multi-Agentensystem – matchmaker.hr',
      description: 'Profiling, Market, Matching und Outreach Agent: vier spezialisierte KI-Agenten bereiten jeden Schritt des Vermittlungsprozesses vor – die Freigabe bleibt beim Berater.',
      noindex: true
    }
  },
  {
    path: '/entwurf/daten',
    name: 'data-draft',
    component: () => import('../views/View-Data-Draft.vue'),
    meta: {
      title: 'Daten – matchmaker.hr',
      description: 'Welche Daten matchmaker verarbeitet, woher sie stammen, was vor dem KI-Aufruf entfernt wird und welche DSGVO-Anforderungen technisch gelöst sind.',
      noindex: true
    }
  },
  {
    path: '/entwurf/preise',
    name: 'pricing-draft',
    component: () => import('../views/View-Pricing-Draft.vue'),
    meta: {
      title: 'Preise – matchmaker.hr',
      description: 'Preise von matchmaker.hr: Enterprise Lizenz gestaffelt nach Talent-Pool-Größe, zusätzliche Mitarbeiter-Lizenzen und Bring Your Own Key für die KI-Abrechnung.',
      noindex: true
    }
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

  // robots-Tag nur setzen, wenn eine Route ausdrücklich noindex verlangt
  // (Entwurfsseiten); auf allen anderen Routen wird er wieder entfernt.
  const robots = document.querySelector('meta[name="robots"]')
  if (to.meta && to.meta.noindex) {
    if (robots) {
      robots.setAttribute('content', 'noindex, nofollow')
    } else {
      const tag = document.createElement('meta')
      tag.setAttribute('name', 'robots')
      tag.setAttribute('content', 'noindex, nofollow')
      document.head.appendChild(tag)
    }
  } else if (robots) {
    robots.remove()
  }
})

export default router
