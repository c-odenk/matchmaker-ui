<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <DataHeadSection />
      <DataSourcesSection />
      <DataAnonymisationSection />
      <DataComplianceSection />
      <DataRightsSection />
      <DataAiActSection />
      <FaqSectionDraft :items="faqs">Häufige Fragen <span class="text-blue">zum Datenschutz</span></FaqSectionDraft>
      <DataCtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Unterseite „Daten" (/daten).
// Reihenfolge: erst der Weg der Daten, dann die Herkunft, dann was vor dem
// KI-Aufruf entfernt wird, dann die Regulatorik: DSGVO, Betroffenenrechte und
// EU AI Act. Die FAQ speist zugleich das FAQPage-Schema der Seite.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'

import DataHeadSection from '@/components/landing-draft/data/DataHeadSection.vue'
import DataSourcesSection from '@/components/landing-draft/data/DataSourcesSection.vue'
import DataAnonymisationSection from '@/components/landing-draft/data/DataAnonymisationSection.vue'
import DataComplianceSection from '@/components/landing-draft/data/DataComplianceSection.vue'
import DataRightsSection from '@/components/landing-draft/data/DataRightsSection.vue'
import DataAiActSection from '@/components/landing-draft/data/DataAiActSection.vue'
import DataCtaSection from '@/components/landing-draft/data/DataCtaSection.vue'
import FaqSectionDraft from '@/components/landing-draft/ui/FaqSectionDraft.vue'
import { dataFaq } from '@/config/faqs'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'DataPageDraft',
  components: {
    TheHeaderDraft, TheFooter,
    DataHeadSection, DataSourcesSection, DataAnonymisationSection,
    DataComplianceSection, DataRightsSection, DataAiActSection, FaqSectionDraft, DataCtaSection
  },
  data() {
    return { faqs: dataFaq }
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
