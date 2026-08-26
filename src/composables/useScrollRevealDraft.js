// ENTWURFSFASSUNG des Scroll-Reveals. Gleicher Mechanismus wie die geteilte
// Fassung, nur um die Blöcke ergänzt, die es allein im Entwurf gibt.
// Scroll-Reveal: blendet Elemente beim Scrollen sanft ein.
// Der Plan ordnet CSS-Marker-Klassen (Hooks) einen Animationstyp zu; die
// zugehörigen Übergänge liegen in src/styles/landing.css. Bewusst abwechslungsreich:
// Section-Köpfe & Karten steigen auf, Zwei-Spalten kommen seitlich, Kennzahlen skalieren.
const REVEAL_PLAN = [
  { sel: '.hero-left > *', type: 'reveal', stagger: 80 },
  { sel: '.hero-visual', type: 'reveal-scale' },
  { sel: '.sources-row', type: 'reveal' },
  { sel: '.sec-head', type: 'reveal' },
  { sel: '.scope', type: 'reveal-scale' },
  { sel: '.sec-note', type: 'reveal' },
  { sel: '.folge > *', type: 'reveal', stagger: 160, delay: 280 },
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
  // Beim Vorrendern (Puppeteer) bleibt alles sichtbar: dort wird das DOM
  // gespeichert, bevor die Einblendung durchgelaufen ist – das statische HTML
  // zeigte sonst durchgehend transparente Inhalte.
  const wirdVorgerendert = typeof navigator !== 'undefined' && navigator.webdriver
  if (!rootEl || reduceMotion || wirdVorgerendert || typeof IntersectionObserver === 'undefined') {
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const el = entry.target
        observer.unobserve(el)
        // Erst im übernächsten Frame einblenden. Beim Seitenaufbau meldet der
        // Observer alles, was schon im Bild liegt, sofort – würde die
        // .in-Klasse im selben Schritt gesetzt, hätte der Browser den
        // Ausgangszustand nie gezeichnet und überspränge die Bewegung. Genau
        // das ließ die oberen Sektionen ohne sichtbare Animation erscheinen.
        const zeigen = () => el.classList.add('in')
        requestAnimationFrame(() => requestAnimationFrame(zeigen))
        // Falls keine Frames laufen (Tab im Hintergrund), greift der Timer.
        setTimeout(zeigen, 400)
      }
    }
  }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' })

  // Auf dem Smartphone stapeln sich Karten-Gruppen einspaltig; die volle
  // Staffelung ließe jede Karte spürbar nacheinander eintrudeln. Dort deutlich
  // straffen, Tablet/Desktop behalten die ursprüngliche Staffelung.
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 560px)').matches
  const staggerFactor = isMobile ? 0.35 : 1

  REVEAL_PLAN.forEach(({ sel, type, stagger, delay }) => {
    rootEl.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add(type)
      const versatz = (delay || 0) + (stagger ? i * stagger * staggerFactor : 0)
      if (versatz) el.style.transitionDelay = versatz + 'ms'
      observer.observe(el)
    })
  })

  return () => observer.disconnect()
}
