<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AutomationHeadSection />
      <AutomationRunSection />
      <AutomationGapsSection />
      <AutomationTranscriptSection />
      <AutomationActionsSection />
      <AutomationCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Automatisierungen" (/automatisierungen).
// Reihenfolge: was ohne Zutun läuft, was daraus an Profilarbeit entsteht,
// und was der Berater zwischendurch mit einem Klick auslöst.
import TheHeaderDraft from '@/components/landing-draft-v2/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing-draft-v2/shared/TheFooter.vue'

import AutomationHeadSection from '@/components/landing-draft-v2/automation/AutomationHeadSection.vue'
import AutomationRunSection from '@/components/landing-draft-v2/automation/AutomationRunSection.vue'
import AutomationGapsSection from '@/components/landing-draft-v2/automation/AutomationGapsSection.vue'
import AutomationTranscriptSection from '@/components/landing-draft-v2/automation/AutomationTranscriptSection.vue'
import AutomationActionsSection from '@/components/landing-draft-v2/automation/AutomationActionsSection.vue'
import AutomationCtaSection from '@/components/landing-draft-v2/automation/AutomationCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'AutomationPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    AutomationHeadSection, AutomationRunSection, AutomationGapsSection,
    AutomationTranscriptSection,
    AutomationActionsSection, AutomationCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
