<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <PricingPlansSection />
      <PricingIncludedSection />
      <PricingAiCostSection />
      <PricingFaqSection />
      <PricingCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Eigenständige Preisseite (/preise).
// Ein Preis für die Enterprise Lizenz, keine Staffelung nach Talent-Pool-Größe.
// Alle Sektionen laufen auf voller .wrap-Breite (Ausnahme: Zweispalter).
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import PricingPlansSection from '@/components/landing-draft/pricing/PricingPlansSection.vue'
import PricingIncludedSection from '@/components/landing-draft/pricing/PricingIncludedSection.vue'
import PricingAiCostSection from '@/components/landing-draft/pricing/PricingAiCostSection.vue'
import PricingFaqSection from '@/components/landing-draft/pricing/PricingFaqSection.vue'
import PricingCtaSection from '@/components/landing-draft/pricing/PricingCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'PricingPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    PricingPlansSection, PricingIncludedSection,
    PricingAiCostSection, PricingFaqSection, PricingCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
