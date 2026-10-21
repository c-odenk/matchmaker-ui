<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <IntegrationHeadSection />
      <IntegrationAtsSection />
      <IntegrationMailSection />
      <IntegrationPhoneSection />
      <IntegrationTeamsSection />
      <IntegrationCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Integration" (/integration).
// Reihenfolge: erst das führende System (ATS), dann die Kanäle, die der
// Berater heute einzeln bedient (Mail, Telefon, Teams). Die Recherchequellen
// stehen bei den Agenten, weil sie deren Arbeitsgrundlage sind, nicht etwas,
// das der Berater bedient. Automatisierungen bleiben bewusst flach –
// die gehören auf die Unterseite „Automatisierungen".
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import IntegrationHeadSection from '@/components/landing-draft/integration/IntegrationHeadSection.vue'
import IntegrationAtsSection from '@/components/landing-draft/integration/IntegrationAtsSection.vue'
import IntegrationMailSection from '@/components/landing-draft/integration/IntegrationMailSection.vue'
import IntegrationPhoneSection from '@/components/landing-draft/integration/IntegrationPhoneSection.vue'
import IntegrationTeamsSection from '@/components/landing-draft/integration/IntegrationTeamsSection.vue'
import IntegrationCtaSection from '@/components/landing-draft/integration/IntegrationCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'IntegrationPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    IntegrationHeadSection, IntegrationAtsSection, IntegrationMailSection,
    IntegrationPhoneSection, IntegrationTeamsSection, IntegrationCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
