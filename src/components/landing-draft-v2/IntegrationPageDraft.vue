<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <IntegrationHeadSection />
      <IntegrationAtsSection />
      <IntegrationMailSection />
      <IntegrationPhoneSection />
      <IntegrationTeamsSection />
      <IntegrationSourcesSection />
      <IntegrationCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Integration" (/integration).
// Reihenfolge: erst das führende System (ATS), dann die Kanäle, die der
// Berater heute einzeln bedient (Mail, Telefon, Teams), zuletzt die Quellen,
// die nur ausgelesen werden. Automatisierungen bleiben bewusst flach –
// die gehören auf die Unterseite „Automatisierungen".
import TheHeaderDraft from '@/components/landing-draft-v2/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing-draft-v2/shared/TheFooter.vue'

import IntegrationHeadSection from '@/components/landing-draft-v2/integration/IntegrationHeadSection.vue'
import IntegrationAtsSection from '@/components/landing-draft-v2/integration/IntegrationAtsSection.vue'
import IntegrationMailSection from '@/components/landing-draft-v2/integration/IntegrationMailSection.vue'
import IntegrationPhoneSection from '@/components/landing-draft-v2/integration/IntegrationPhoneSection.vue'
import IntegrationTeamsSection from '@/components/landing-draft-v2/integration/IntegrationTeamsSection.vue'
import IntegrationSourcesSection from '@/components/landing-draft-v2/integration/IntegrationSourcesSection.vue'
import IntegrationCtaSection from '@/components/landing-draft-v2/integration/IntegrationCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'IntegrationPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    IntegrationHeadSection, IntegrationAtsSection, IntegrationMailSection,
    IntegrationPhoneSection, IntegrationTeamsSection, IntegrationSourcesSection,
    IntegrationCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
