<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <HomeHeroSection />
      <HomeBenefitsSection />
      <HomeCompareSection />
      <HomeAutomationSection />
      <!-- Ein Produktblick als Beleg – die Tiefe liegt auf den Unterseiten -->
      <MatchingSectionDraft />
      <HomePhoneSection />
      <HomePlatformSection />
      <TestimonialsSectionDraft />
      <HomeCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// ENTWURFSFASSUNG der Startseite.
// Nach der Auslagerung auf die Plattform-Unterseiten trägt sie nur noch die
// Positionierung (Schicht über den bestehenden Systemen), die Vorteile und
// den Einstieg in die Details.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import MatchingSectionDraft from '@/components/landing-draft/home/MatchingSectionDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import TestimonialsSectionDraft from '@/components/landing-draft/home/TestimonialsSectionDraft.vue'
import HomeHeroSection from '@/components/landing-draft/home/HomeHeroSection.vue'
import HomeBenefitsSection from '@/components/landing-draft/home/HomeBenefitsSection.vue'
import HomeAutomationSection from '@/components/landing-draft/home/HomeAutomationSection.vue'
import HomePlatformSection from '@/components/landing-draft/home/HomePlatformSection.vue'
import HomeCompareSection from '@/components/landing-draft/home/HomeCompareSection.vue'
import HomePhoneSection from '@/components/landing-draft/home/HomePhoneSection.vue'
import HomeCtaSection from '@/components/landing-draft/home/HomeCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'LandingPageDraft',
  components: {
    TheHeaderDraft, MatchingSectionDraft, TestimonialsSectionDraft, TheFooter,
    HomeHeroSection, HomeBenefitsSection, HomeAutomationSection,
    HomePlatformSection, HomeCompareSection, HomePhoneSection, HomeCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
