<template>
  <div class="lp5">
    <LandingHeader />
    <main>
      <LandingHero />
      <LandingAgents />
      <LandingProfiling />
      <LandingTalentpool />
      <LandingProduct />
      <LandingStats />
      <LandingCompare />
      <LandingBenefits />
      <LandingTestimonials />
      <LandingPricing />
      <LandingCta />
    </main>
    <LandingFooter />
    <LandingDemoModal />
  </div>
</template>

<script>
import LandingHeader from '@/components/landing/V5/Landing-Header-V5.vue'
import LandingHero from '@/components/landing/V5/Landing-Hero-V5.vue'
import LandingAgents from '@/components/landing/V5/Landing-Agents-V5.vue'
import LandingProfiling from '@/components/landing/V5/Landing-Profiling-V5.vue'
import LandingTalentpool from '@/components/landing/V5/Landing-Talentpool-V5.vue'
import LandingProduct from '@/components/landing/V5/Landing-Product-V5.vue'
import LandingStats from '@/components/landing/V5/Landing-Stats-V5.vue'
import LandingCompare from '@/components/landing/V5/Landing-Compare-V5.vue'
import LandingBenefits from '@/components/landing/V5/Landing-Benefits-V5.vue'
import LandingTestimonials from '@/components/landing/V5/Landing-Testimonials-V5.vue'
import LandingPricing from '@/components/landing/V5/Landing-Pricing-V5.vue'
import LandingCta from '@/components/landing/V5/Landing-CTA-V5.vue'
import LandingFooter from '@/components/landing/V5/Landing-Footer-V5.vue'
import LandingDemoModal from '@/components/landing/V5/Landing-DemoModal-V5.vue'

// Scroll-Reveal-Plan: Selektor -> Animationstyp (+ optionaler Stagger in ms).
// Bewusst abwechslungsreich gewählt: Section-Köpfe und Karten steigen auf,
// Zwei-Spalten-Bereiche kommen seitlich herein, Kennzahlen/Preise skalieren sanft.
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

export default {
  name: 'LandingV5',
  components: {
    LandingHeader, LandingHero, LandingAgents, LandingProfiling, LandingTalentpool,
    LandingProduct, LandingStats, LandingCompare, LandingBenefits, LandingTestimonials,
    LandingPricing, LandingCta, LandingFooter, LandingDemoModal
  },
  mounted() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' })

    REVEAL_PLAN.forEach(({ sel, type, stagger }) => {
      this.$el.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add(type)
        if (stagger) el.style.transitionDelay = (i * stagger) + 'ms'
        observer.observe(el)
      })
    })
    this._revealObserver = observer
  },
  beforeUnmount() {
    if (this._revealObserver) this._revealObserver.disconnect()
  }
}
</script>

<style src="./landing-v5.css"></style>
