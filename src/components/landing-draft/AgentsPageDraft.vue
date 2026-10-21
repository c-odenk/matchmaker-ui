<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <AgentsHeadSection />
      <AgentsSourcesSection />
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
// danach was am Ende vorliegt. Gleich hinter der Kette stehen die Quellen,
// aus denen sie ihre Treffer zieht – erst die Arbeitsgrundlage, dann die
// einzelnen Schritte. Wie die Agenten arbeiten, bleibt bewusst außen vor.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import TalentpoolSection from '@/components/landing/sections/TalentpoolSection.vue'
import MatchingSection from '@/components/landing/sections/MatchingSection.vue'
import OutreachSection from '@/components/landing/sections/OutreachSection.vue'

import ProfilingSectionDraft from '@/components/landing-draft/agents/ProfilingSectionDraft.vue'
import AgentsHeadSection from '@/components/landing-draft/agents/AgentsHeadSection.vue'
import AgentsSourcesSection from '@/components/landing-draft/agents/AgentsSourcesSection.vue'
import AgentsResultSection from '@/components/landing-draft/agents/AgentsResultSection.vue'
import AgentsCtaSection from '@/components/landing-draft/agents/AgentsCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'AgentsPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    ProfilingSectionDraft, TalentpoolSection, MatchingSection, OutreachSection,
    AgentsHeadSection, AgentsSourcesSection, AgentsResultSection, AgentsCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
