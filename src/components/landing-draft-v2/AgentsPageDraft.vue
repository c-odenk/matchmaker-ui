<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AgentsHeadSection />
      <!-- Die vier Detail-Sektionen kommen unverändert von der bestehenden
           Landingpage – sie stellen die Agenten bereits so dar, wie gewünscht. -->
      <ProfilingSectionDraft />
      <TalentpoolSection />
      <MatchingSection />
      <OutreachSection />
      <AgentsResultSection />
      <AgentsCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Multi-Agentensystem" (/agenten).
// Reihenfolge folgt der Kette: Profil → Markt → Bewertung → Ansprache,
// danach was am Ende vorliegt. Wie die Agenten arbeiten, bleibt bewusst außen vor.
import TheHeaderDraft from '@/components/landing-draft-v2/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing-draft-v2/shared/TheFooter.vue'

import TalentpoolSection from '@/components/landing-draft-v2/shared/TalentpoolSection.vue'
import MatchingSection from '@/components/landing-draft-v2/shared/MatchingSection.vue'
import OutreachSection from '@/components/landing-draft-v2/shared/OutreachSection.vue'

import ProfilingSectionDraft from '@/components/landing-draft-v2/agents/ProfilingSectionDraft.vue'
import AgentsHeadSection from '@/components/landing-draft-v2/agents/AgentsHeadSection.vue'
import AgentsResultSection from '@/components/landing-draft-v2/agents/AgentsResultSection.vue'
import AgentsCtaSection from '@/components/landing-draft-v2/agents/AgentsCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'AgentsPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    ProfilingSectionDraft, TalentpoolSection, MatchingSection, OutreachSection,
    AgentsHeadSection, AgentsResultSection, AgentsCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
