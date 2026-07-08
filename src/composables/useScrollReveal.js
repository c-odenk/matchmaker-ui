// Scroll-Reveal: blendet Elemente beim Scrollen sanft ein.
// Der Plan ordnet CSS-Marker-Klassen (Hooks) einen Animationstyp zu; die
// zugehörigen Übergänge liegen in src/styles/landing.css. Bewusst abwechslungsreich:
// Section-Köpfe & Karten steigen auf, Zwei-Spalten kommen seitlich, Kennzahlen skalieren.
const REVEAL_PLAN = [
  { sel: '.hero-left > *', type: 'reveal', stagger: 80 },
  { sel: '.hero-visual', type: 'reveal-scale' },
  { sel: '.sources-row', type: 'reveal' },
  { sel: '.sec-head', type: 'reveal' },
  { sel: '.steps .step', type: 'reveal', stagger: 90 },
  { sel: '.hil', type: 'reveal-scale' },
  { sel: '.pool-grid .pcard', type: 'reveal', stagger: 110 },
  { sel: '.two > div:first-child', type: 'reveal-left' },
  { sel: '.two > div:last-child', type: 'reveal-right' },
  { sel: '.stats-grid .scard', type: 'reveal-scale', stagger: 110 },
  { sel: '.compare .col.a', type: 'reveal-left' },
  { sel: '.compare .col.b', type: 'reveal-right' },
  { sel: '.ben-grid .ben', type: 'reveal', stagger: 110 },
  { sel: '.test-grid .test', type: 'reveal', stagger: 110 },
  { sel: '.price-grid .pcardx', type: 'reveal-scale', stagger: 120 },
  { sel: '.cta-band', type: 'reveal-scale' },
  { sel: '.foot-grid > *', type: 'reveal', stagger: 80 }
]

// Richtet den IntersectionObserver auf einem Wurzel-Element ein.
// Gibt eine Aufräumfunktion zurück (für onBeforeUnmount / beforeUnmount).
export function setupScrollReveal(rootEl) {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!rootEl || reduceMotion || typeof IntersectionObserver === 'undefined') {
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    }
  }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' })

  // Auf dem Smartphone stapeln sich Karten-Gruppen einspaltig; die volle
  // Staffelung ließe jede Karte spürbar nacheinander eintrudeln. Dort deutlich
  // straffen, Tablet/Desktop behalten die ursprüngliche Staffelung.
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 560px)').matches
  const staggerFactor = isMobile ? 0.35 : 1

  REVEAL_PLAN.forEach(({ sel, type, stagger }) => {
    rootEl.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add(type)
      if (stagger) el.style.transitionDelay = (i * stagger * staggerFactor) + 'ms'
      observer.observe(el)
    })
  })

  return () => observer.disconnect()
}
