import { createRouter, createWebHistory } from 'vue-router'
import ViewLanding from '../views/View-Landing-Draft.vue'

const DEFAULT_TITLE = 'matchmaker.hr – KI-gestütztes Talentpool-Management für Personalberater'
const DEFAULT_DESC = 'matchmaker.hr automatisiert die zeitintensiven Schritte im Vermittlungsprozess – Marktanalyse, Matching, Outreach. Human-in-the-Loop: Die KI bereitet vor, der Berater entscheidet und gibt frei.'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: ViewLanding,
    meta: { title: DEFAULT_TITLE, description: DEFAULT_DESC }
  },
  {
    path: '/integration',
    name: 'integration',
    component: () => import('../views/View-Integration-Draft.vue'),
    meta: {
      title: 'Integration – matchmaker.hr',
      description: 'Bewerbersoftware, Postfach, Telefonie, Teams und Recherchequellen laufen in matchmaker an einer Oberfläche zusammen – angebunden statt ersetzt.'
    }
  },
  {
    path: '/automatisierungen',
    name: 'automation',
    component: () => import('../views/View-Automation-Draft.vue'),
    meta: {
      title: 'Automatisierungen – matchmaker.hr',
      description: 'Wiederkehrende Schritte laufen ohne Zutun durch, fehlende Profilangaben werden erkannt und nachgefragt – Telefonie, Termine und Auswertung laufen auf Klick aus dem Vorgang.'
    }
  },
  {
    path: '/agenten',
    name: 'agents',
    component: () => import('../views/View-Agents-Draft.vue'),
    meta: {
      title: 'Multi-Agentensystem – matchmaker.hr',
      description: 'Profiling, Market, Matching und Outreach Agent: vier spezialisierte KI-Agenten bereiten jeden Schritt des Vermittlungsprozesses vor – die Freigabe bleibt beim Berater.'
    }
  },
  {
    path: '/daten',
    name: 'data',
    component: () => import('../views/View-Data-Draft.vue'),
    meta: {
      title: 'Daten – matchmaker.hr',
      description: 'Welche Daten matchmaker verarbeitet, woher sie stammen, was vor dem KI-Aufruf entfernt wird und welche DSGVO-Anforderungen technisch gelöst sind.'
    }
  },
  {
    path: '/ki-assistent',
    name: 'assistant',
    component: () => import('../views/View-Assistant-Draft.vue'),
    meta: {
      title: 'KI-Assistent (Beta) – matchmaker.hr',
      description: 'Der KI-Assistent von matchmaker: der Kandidatenpool als Karte, Fragen an den Bestand in eigenen Worten und künftig Aufträge an die Agenten im Satz.'
    }
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('../views/View-Contact-Draft.vue'),
    meta: {
      title: 'Demo buchen – matchmaker.hr',
      description: 'Persönliche Einführung in matchmaker: 15 Minuten per Video-Call – Bestandsaufnahme, Live-Durchlauf, Anbindung an Ihre Systeme und offene Fit-Diskussion.'
    }
  },
  {
    path: '/preise',
    name: 'pricing',
    component: () => import('../views/View-Pricing-Draft.vue'),
    meta: {
      title: 'Preise – matchmaker.hr',
      description: 'Preise von matchmaker.hr: ein Preis ohne Staffelung, zusätzliche Mitarbeiter-Lizenzen und Bring Your Own Key als Abrechnungsoption für die KI-Kosten.'
    }
  },
  // Die früheren Entwurfspfade zeigen auf die nun veröffentlichten Seiten.
  { path: '/entwurf', redirect: '/' },
  { path: '/entwurf/:rest(.*)', redirect: to => '/' + to.params.rest },

  // ---------------------------------------------------------------------
  // Textfassung 2.0 – begehbare Zweitfassung zum Gegenlesen.
  // Rein additiv: eigener Komponentenbaum unter components/landing-draft-v2,
  // eigene Views, alle Routen auf noindex und nicht im Prerender.
  // Vor einem Livegang: Pfade auf die Zielpfade umstellen, noindex entfernen,
  // Pfade in die Prerender-Liste in vue.config.js aufnehmen.
  // ---------------------------------------------------------------------
  {
    path: '/entwurf-v2',
    name: 'landing-v2',
    component: () => import('../views/View-Landing-V2.vue'),
    meta: {
      noindex: true,
      title: 'matchmaker.hr – KI-Plattform für Personalberatung und Executive Search',
      description: 'matchmaker.hr setzt auf Ihre bestehende Bewerbersoftware auf und automatisiert den Weg vom Kandidatenprofil zum versandfertigen Anschreiben. Versendet wird ausschließlich nach Freigabe durch den Berater.'
    }
  },
  {
    path: '/entwurf-v2/integration',
    name: 'integration-v2',
    component: () => import('../views/View-Integration-V2.vue'),
    meta: {
      noindex: true,
      title: 'Integration – matchmaker.hr',
      description: 'Bewerbersoftware, Postfach, Telefonie, Teams und Recherchequellen laufen in matchmaker an einer Oberfläche zusammen – angebunden statt ersetzt.'
    }
  },
  {
    path: '/entwurf-v2/automatisierungen',
    name: 'automation-v2',
    component: () => import('../views/View-Automation-V2.vue'),
    meta: {
      noindex: true,
      title: 'Automatisierungen – matchmaker.hr',
      description: 'Wiederkehrende Schritte laufen ohne manuellen Anstoß, fehlende Profilangaben werden erkannt und nachgefragt – Telefonie, Termine und Auswertung laufen auf Klick aus dem Kandidatenprofil.'
    }
  },
  {
    path: '/entwurf-v2/agenten',
    name: 'agents-v2',
    component: () => import('../views/View-Agents-V2.vue'),
    meta: {
      noindex: true,
      title: 'Multi-Agentensystem – matchmaker.hr',
      description: 'Profiling, Market, Matching und Outreach Agent: vier spezialisierte KI-Agenten bereiten jeden Schritt des Vermittlungsprozesses vor – die Freigabe bleibt beim Berater.'
    }
  },
  {
    path: '/entwurf-v2/daten',
    name: 'data-v2',
    component: () => import('../views/View-Data-V2.vue'),
    meta: {
      noindex: true,
      title: 'Daten – matchmaker.hr',
      description: 'Welche Daten matchmaker verarbeitet, woher sie stammen, was vor dem KI-Aufruf entfernt wird und welche DSGVO-Anforderungen in der Architektur verankert sind.'
    }
  },
  {
    path: '/entwurf-v2/ki-assistent',
    name: 'assistant-v2',
    component: () => import('../views/View-Assistant-V2.vue'),
    meta: {
      noindex: true,
      title: 'KI-Assistent (Beta) – matchmaker.hr',
      description: 'Der KI-Assistent von matchmaker: der Kandidatenpool als Karte, Fragen an den Bestand in eigenen Worten und künftig Aufträge an die Agenten im Satz.'
    }
  },
  {
    path: '/entwurf-v2/kontakt',
    name: 'contact-v2',
    component: () => import('../views/View-Contact-V2.vue'),
    meta: {
      noindex: true,
      title: 'Demo buchen – matchmaker.hr',
      description: 'Persönliche Einführung in matchmaker: 15 Minuten per Video-Call – Bestandsaufnahme, Live-Durchlauf, Anbindung an Ihre Systeme und offene Passungsdiskussion.'
    }
  },
  {
    path: '/entwurf-v2/preise',
    name: 'pricing-v2',
    component: () => import('../views/View-Pricing-V2.vue'),
    meta: {
      noindex: true,
      title: 'Preise – matchmaker.hr',
      description: 'Preise von matchmaker.hr: ein Preis ohne Staffelung, zusätzliche Mitarbeiter-Lizenzen und Bring Your Own Key als Abrechnungsoption für die KI-Kosten.'
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
