<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <!-- Unverändert: Kopf, Hero, Kundenstimmen, Abschluss, Fuß -->
      <HomeHeroSection />

      <!-- Der rote Faden: Problem → Wende → Beleg → Einwände → Abschluss -->
      <V3ProblemSection />
      <V3ShiftSection />
      <V3RunSection />
      <V3NumbersSection />
      <V3ControlSection />

      <TestimonialsSectionDraft />
      <HomeCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Startseite („roter Faden"), erreichbar unter / – seit 26.11.2026 live.
// Header, Hero, Kundenstimmen, Abschluss und Footer sind die Live-Komponenten
// und werden nur eingebunden, nicht kopiert. Alles dazwischen ist neu und liegt
// ausschließlich in diesem Ordner.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import HomeHeroSection from '@/components/landing-draft/home/HomeHeroSection.vue'
import TestimonialsSectionDraft from '@/components/landing-draft/home/TestimonialsSectionDraft.vue'
import HomeCtaSection from '@/components/landing-draft/home/HomeCtaSection.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import V3ProblemSection from './V3ProblemSection.vue'
import V3ShiftSection from './V3ShiftSection.vue'
import V3RunSection from './V3RunSection.vue'
import V3NumbersSection from './V3NumbersSection.vue'
import V3ControlSection from './V3ControlSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'LandingPageV3',
  components: {
    TheHeaderDraft, HomeHeroSection, TestimonialsSectionDraft, HomeCtaSection, TheFooter,
    V3ProblemSection, V3ShiftSection, V3RunSection, V3NumbersSection,
    V3ControlSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
