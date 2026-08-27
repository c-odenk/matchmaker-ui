<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <HomeHeroSection />
      <!-- Erst der Engpass, dann die Vorteile: die Begründung steht vor dem
           Versprechen, nicht dahinter. -->
      <HomeCompareSection />
      <HomeBenefitsSection />
      <HomeAutomationSection />
      <!-- Ein Produktblick als Beleg – die Tiefe liegt auf den Unterseiten -->
      <MatchingSectionDraft />
      <!-- Telefonie stand hier wortgleich wie auf /integration; an ihrer Stelle
           trägt die Startseite jetzt den Vertrauensblock. -->
      <HomeTrustSection />
      <HomePlatformSection />
      <!-- Kundenstimmen entfernt: die Zitate waren erfunden. Zurück auf die
           Seite, sobald freigegebene Referenzen vorliegen. -->
      <HomeCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Startseite.
// Nach der Auslagerung auf die Plattform-Unterseiten trägt sie nur noch die
// Positionierung (Schicht über den bestehenden Systemen), die Vorteile und
// den Einstieg in die Details.
import TheHeaderDraft from '@/components/landing-draft-v2/sections/TheHeaderDraft.vue'
import MatchingSectionDraft from '@/components/landing-draft-v2/home/MatchingSectionDraft.vue'
import TheFooter from '@/components/landing-draft-v2/shared/TheFooter.vue'

import HomeHeroSection from '@/components/landing-draft-v2/home/HomeHeroSection.vue'
import HomeBenefitsSection from '@/components/landing-draft-v2/home/HomeBenefitsSection.vue'
import HomeAutomationSection from '@/components/landing-draft-v2/home/HomeAutomationSection.vue'
import HomePlatformSection from '@/components/landing-draft-v2/home/HomePlatformSection.vue'
import HomeTrustSection from '@/components/landing-draft-v2/home/HomeTrustSection.vue'
import HomeCompareSection from '@/components/landing-draft-v2/home/HomeCompareSection.vue'
import HomeCtaSection from '@/components/landing-draft-v2/home/HomeCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'LandingPageDraft',
  components: {
    TheHeaderDraft, MatchingSectionDraft, TheFooter,
    HomeHeroSection, HomeBenefitsSection, HomeAutomationSection,
    HomePlatformSection, HomeCompareSection, HomeTrustSection, HomeCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
