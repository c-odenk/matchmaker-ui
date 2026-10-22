// Setzt nach jeder Navigation die <head>-Angaben der Seite: Title,
// Description, Canonical, robots, Open Graph, Twitter Card und JSON-LD.
// Der Prerenderer schreibt den Stand nach dem ersten Rendern ins statische
// HTML – Crawler und Link-Vorschauen (LinkedIn, Slack, Teams) lesen also genau
// das, was hier gesetzt wird, ohne JavaScript auszuführen.

import { SITE_URL, SITE_NAME, byPath } from '@/config/pages'
import { legalInfo } from '@/config/legalInfo'
import { faqsByPath } from '@/config/faqs'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const SOFTWARE_ID = `${SITE_URL}/#software`

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function removeMeta(attr, key) {
  const tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (tag) tag.remove()
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    if (link) link.remove()
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function setJsonLd(data) {
  let script = document.getElementById('ld-json')
  if (!data) {
    if (script) script.remove()
    return
  }
  if (!script) {
    script = document.createElement('script')
    script.id = 'ld-json'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

// Was auf jeder Seite gleich ist: wer hinter matchmaker.hr steht, die Website
// und das Produkt. Anschrift und E-Mail kommen aus legalInfo – dieselben
// Angaben wie im Impressum.
function siteGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512
      },
      email: legalInfo.email,
      description: 'Recruiting-Automatisierung für Personalberatungen, aufgesetzt auf die bestehenden Systeme.',
      founder: { '@type': 'Person', name: legalInfo.inhaber },
      address: {
        '@type': 'PostalAddress',
        streetAddress: legalInfo.street,
        postalCode: legalInfo.zip,
        addressLocality: legalInfo.city,
        addressCountry: 'DE'
      }
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'de-DE',
      publisher: { '@id': ORG_ID }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': SOFTWARE_ID,
      name: SITE_NAME,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: `${SITE_URL}/`,
      description: 'Recruiting-Automatisierung mit vier KI-Agenten (Profiling, Market, Matching, Outreach) – aufgesetzt auf Bewerbersoftware, Postfach und Telefonie. Versendet wird erst nach Freigabe.',
      publisher: { '@id': ORG_ID },
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}/preise`,
        price: '98.00',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '98.00',
          priceCurrency: 'EUR',
          unitText: 'MONTH'
        }
      }
    }
  ]
}

// Ratgeber und Glossar hängen unter /ratgeber; alle anderen Seiten direkt
// unter der Startseite.
function breadcrumbItems(page, url) {
  const items = [{ name: 'Startseite', item: `${SITE_URL}/` }]
  if (page.section) items.push({ name: byPath['/ratgeber'].name, item: `${SITE_URL}/ratgeber` })
  items.push({ name: page.name, item: url })
  return items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, ...it }))
}

function pageGraph(page, url) {
  const nodes = []
  const isHome = page.path === '/'
  const image = `${SITE_URL}/og/${page.ogImage || 'start'}.png`

  nodes.push({
    '@type': page.path === '/ratgeber' ? 'CollectionPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'de-DE',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': isHome ? ORG_ID : SOFTWARE_ID },
    ...(isHome ? {} : { breadcrumb: { '@id': `${url}#breadcrumb` } })
  })

  if (!isHome) {
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbItems(page, url)
    })
  }

  // Ratgeber und Glossar: Artikel mit Autor und Datum – ein Signal dafür,
  // wer hinter dem Inhalt steht und wie aktuell er ist.
  if (page.section) {
    nodes.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.ogHeadline || page.name,
      description: page.description,
      image,
      inLanguage: 'de-DE',
      datePublished: page.published,
      dateModified: page.lastmod,
      author: { '@type': 'Person', name: legalInfo.inhaber, url: `${SITE_URL}/imprint` },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': `${url}#webpage` }
    })
  }

  const faq = faqsByPath[page.path]
  if (faq) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    })
  }

  return nodes
}

export function applyHead(route) {
  const meta = route.meta || {}
  const page = byPath[route.path]
  const title = meta.title || byPath['/'].title
  const description = meta.description || byPath['/'].description
  const indexable = !!page && !meta.noindex
  const url = indexable ? SITE_URL + route.path : null
  const image = `${SITE_URL}/og/${(page && page.ogImage) || 'start'}.png`

  document.title = title
  setMeta('name', 'description', description)
  setCanonical(url)

  // robots nur, wo eine Seite ausdrücklich nicht in den Index soll (404).
  if (indexable) removeMeta('name', 'robots')
  else setMeta('name', 'robots', 'noindex, follow')

  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', SITE_NAME)
  setMeta('property', 'og:locale', 'de_DE')
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:image', image)
  setMeta('property', 'og:image:width', '1200')
  setMeta('property', 'og:image:height', '630')
  setMeta('property', 'og:image:alt', title)
  if (url) setMeta('property', 'og:url', url)
  else removeMeta('property', 'og:url')

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', image)

  setJsonLd(indexable
    ? { '@context': 'https://schema.org', '@graph': [...siteGraph(), ...pageGraph(page, url)] }
    : null)
}
