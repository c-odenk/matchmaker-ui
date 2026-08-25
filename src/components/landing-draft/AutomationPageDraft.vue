<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AutomationHeadSection />
      <AutomationRunSection />
      <AutomationGapsSection />
      <AutomationActionsSection />
      <AutomationCtaSection />
    </main>
    <TheFooter />
    <DemoModal />
  </div>
</template>

<script>
// ENTWURF der Unterseite „Automatisierungen" (/entwurf/automatisierungen).
// Reihenfolge: was ohne Zutun läuft, was daraus an Profilarbeit entsteht,
// und was der Berater zwischendurch mit einem Klick auslöst.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import DemoModal from '@/components/landing/sections/DemoModal.vue'

import AutomationHeadSection from '@/components/landing-draft/automation/AutomationHeadSection.vue'
import AutomationRunSection from '@/components/landing-draft/automation/AutomationRunSection.vue'
import AutomationGapsSection from '@/components/landing-draft/automation/AutomationGapsSection.vue'
import AutomationActionsSection from '@/components/landing-draft/automation/AutomationActionsSection.vue'
import AutomationCtaSection from '@/components/landing-draft/automation/AutomationCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollReveal'

export default {
  name: 'AutomationPageDraft',
  components: {
    TheHeaderDraft, TheFooter, DemoModal,
    AutomationHeadSection, AutomationRunSection, AutomationGapsSection,
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
