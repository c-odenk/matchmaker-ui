<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <HomeHeroSection />
      <HomeBenefitsSection />
      <HomeCompareSection />
      <HomeAutomationSection />
      <!-- Ein Produktblick als Beleg – die Tiefe liegt auf den Unterseiten -->
      <MatchingSection />
      <HomePlatformSection />
      <TestimonialsSectionDraft />
      <HomeCtaSection />
    </main>
    <TheFooter />
    <DemoModal />
  </div>
</template>

<script>
// ENTWURFSFASSUNG der Startseite.
// Nach der Auslagerung auf die Plattform-Unterseiten trägt sie nur noch die
// Positionierung (Schicht über den bestehenden Systemen), die Vorteile und
// den Einstieg in die Details.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import MatchingSection from '@/components/landing/sections/MatchingSection.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import DemoModal from '@/components/landing/sections/DemoModal.vue'

import TestimonialsSectionDraft from '@/components/landing-draft/home/TestimonialsSectionDraft.vue'
import HomeHeroSection from '@/components/landing-draft/home/HomeHeroSection.vue'
import HomeBenefitsSection from '@/components/landing-draft/home/HomeBenefitsSection.vue'
import HomeAutomationSection from '@/components/landing-draft/home/HomeAutomationSection.vue'
import HomePlatformSection from '@/components/landing-draft/home/HomePlatformSection.vue'
import HomeCompareSection from '@/components/landing-draft/home/HomeCompareSection.vue'
import HomeCtaSection from '@/components/landing-draft/home/HomeCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollReveal'

export default {
  name: 'LandingPageDraft',
  components: {
    TheHeaderDraft, MatchingSection, TestimonialsSectionDraft, TheFooter, DemoModal,
    HomeHeroSection, HomeBenefitsSection, HomeAutomationSection,
    HomePlatformSection, HomeCompareSection, HomeCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
