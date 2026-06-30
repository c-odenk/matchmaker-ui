<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeader />
    <main>
      <HeroSection />
      <SourcesBar />
      <AgentsSection />
      <ProfilingSection />
      <TalentpoolSection />
      <MatchingSection />
      <OutreachSection />
      <StatsSection />
      <CompareSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </main>
    <TheFooter />
    <DemoModal />
  </div>
</template>

<script>
import TheHeader from '@/components/landing/sections/TheHeader.vue'
import HeroSection from '@/components/landing/sections/HeroSection.vue'
import SourcesBar from '@/components/landing/sections/SourcesBar.vue'
import AgentsSection from '@/components/landing/sections/AgentsSection.vue'
import ProfilingSection from '@/components/landing/sections/ProfilingSection.vue'
import TalentpoolSection from '@/components/landing/sections/TalentpoolSection.vue'
import MatchingSection from '@/components/landing/sections/MatchingSection.vue'
import OutreachSection from '@/components/landing/sections/OutreachSection.vue'
import StatsSection from '@/components/landing/sections/StatsSection.vue'
import CompareSection from '@/components/landing/sections/CompareSection.vue'
import BenefitsSection from '@/components/landing/sections/BenefitsSection.vue'
import TestimonialsSection from '@/components/landing/sections/TestimonialsSection.vue'
import PricingSection from '@/components/landing/sections/PricingSection.vue'
import CtaSection from '@/components/landing/sections/CtaSection.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import DemoModal from '@/components/landing/sections/DemoModal.vue'
import { setupScrollReveal } from '@/composables/useScrollReveal'

export default {
  name: 'LandingPage',
  components: {
    TheHeader, HeroSection, SourcesBar, AgentsSection, ProfilingSection,
    TalentpoolSection, MatchingSection, OutreachSection, StatsSection,
    CompareSection, BenefitsSection, TestimonialsSection, PricingSection,
    CtaSection, TheFooter, DemoModal
  },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
