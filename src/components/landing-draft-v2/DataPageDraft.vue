<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <DataHeadSection />
      <DataSourcesSection />
      <DataAnonymisationSection />
      <DataComplianceSection />
      <DataCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Daten" (/daten).
// Reihenfolge: erst der Weg der Daten, dann die Herkunft, dann was vor dem
// KI-Aufruf entfernt wird, zuletzt die Regulatorik – gelöste und offene Punkte.
import TheHeaderDraft from '@/components/landing-draft-v2/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing-draft-v2/shared/TheFooter.vue'

import DataHeadSection from '@/components/landing-draft-v2/data/DataHeadSection.vue'
import DataSourcesSection from '@/components/landing-draft-v2/data/DataSourcesSection.vue'
import DataAnonymisationSection from '@/components/landing-draft-v2/data/DataAnonymisationSection.vue'
import DataComplianceSection from '@/components/landing-draft-v2/data/DataComplianceSection.vue'
import DataCtaSection from '@/components/landing-draft-v2/data/DataCtaSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'DataPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    DataHeadSection, DataSourcesSection, DataAnonymisationSection,
    DataComplianceSection, DataCtaSection
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
