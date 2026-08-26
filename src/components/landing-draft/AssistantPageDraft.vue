<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AssistantHeadSection />
      <AssistantMapSection />
      <AssistantChatSection />
      <AssistantCommandsSection />
      <AssistantReachSection />
      <AssistantApprovalSection />
      <AssistantCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// ENTWURF der Unterseite „KI-Assistent" (/entwurf/ki-assistent).
// Die Seite argumentiert nicht mit „Chat auf Daten" – das haben andere auch –,
// sondern mit dem, was nur aus der Schichtposition folgt: Reichweite über
// Systemgrenzen, Sehen und Anstoßen im selben Fenster, und die Freigabekette
// als Bauplan. Der Chat schließt die Lücke, die der geplante Ablauf lässt.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import AssistantHeadSection from '@/components/landing-draft/assistant/AssistantHeadSection.vue'
import AssistantMapSection from '@/components/landing-draft/assistant/AssistantMapSection.vue'
import AssistantChatSection from '@/components/landing-draft/assistant/AssistantChatSection.vue'
import AssistantCommandsSection from '@/components/landing-draft/assistant/AssistantCommandsSection.vue'
import AssistantReachSection from '@/components/landing-draft/assistant/AssistantReachSection.vue'
import AssistantApprovalSection from '@/components/landing-draft/assistant/AssistantApprovalSection.vue'
import AssistantCtaSection from '@/components/landing-draft/assistant/AssistantCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'AssistantPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    AssistantHeadSection, AssistantMapSection, AssistantChatSection,
    AssistantCommandsSection, AssistantReachSection, AssistantApprovalSection,
    AssistantCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
