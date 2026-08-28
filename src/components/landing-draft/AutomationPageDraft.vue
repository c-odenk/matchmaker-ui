<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AutomationHeadSection />

      <!-- Teil 1 · Was ohne Zutun läuft -->
      <AutomationRunSection />
      <AutomationGapsSection />

      <!-- Teil 2 · Was der Berater aus dem Vorgang heraus auslöst -->
      <AutomationChannelsSection />
      <AutomationMailSection />
      <AutomationPhoneSection />
      <AutomationMeetingSection />
      <AutomationTranscriptSection />

      <!-- Beides läuft auf denselben Verlauf zu -->
      <AutomationTrailSection />
      <AutomationCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Automatisierungen" (/automatisierungen).
// Zwei Teile: der Durchlauf, der ohne Anstoß arbeitet – und die vier Kanäle,
// die der Berater aus dem Vorgang heraus auslöst (E-Mail, Telefonie,
// Teams-Termin, Gesprächsauswertung). Am Ende laufen beide im selben Verlauf
// zusammen.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import AutomationHeadSection from '@/components/landing-draft/automation/AutomationHeadSection.vue'
import AutomationRunSection from '@/components/landing-draft/automation/AutomationRunSection.vue'
import AutomationGapsSection from '@/components/landing-draft/automation/AutomationGapsSection.vue'
import AutomationChannelsSection from '@/components/landing-draft/automation/AutomationChannelsSection.vue'
import AutomationMailSection from '@/components/landing-draft/automation/AutomationMailSection.vue'
import AutomationPhoneSection from '@/components/landing-draft/automation/AutomationPhoneSection.vue'
import AutomationMeetingSection from '@/components/landing-draft/automation/AutomationMeetingSection.vue'
import AutomationTranscriptSection from '@/components/landing-draft/automation/AutomationTranscriptSection.vue'
import AutomationTrailSection from '@/components/landing-draft/automation/AutomationTrailSection.vue'
import AutomationCtaSection from '@/components/landing-draft/automation/AutomationCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'AutomationPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    AutomationHeadSection, AutomationRunSection, AutomationGapsSection,
    AutomationChannelsSection, AutomationMailSection, AutomationPhoneSection,
    AutomationMeetingSection, AutomationTranscriptSection,
    AutomationTrailSection, AutomationCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
