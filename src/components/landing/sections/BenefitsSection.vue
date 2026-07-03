<template>
  <section class="sec bg-surface">
    <div class="wrap">
      <SectionHeading eyebrow="Warum matchmaker.hr">
        KI-gestützte Automatisierung für <span class="text-blue">modernes Recruiting.</span>
      </SectionHeading>

      <!-- Tablet-Band: horizontaler Scroller mit Snap & Peek auf die nächste Karte -->
      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] max-[560px]:grid-cols-1 min-[561px]:max-[880px]:flex min-[561px]:max-[880px]:overflow-x-auto min-[561px]:max-[880px]:snap-x min-[561px]:max-[880px]:snap-mandatory min-[561px]:max-[880px]:-mx-6 min-[561px]:max-[880px]:px-6 min-[561px]:max-[880px]:scroll-px-6 no-scrollbar">
        <div v-for="b in benefits" :key="b.title" class="ben bg-surface border border-line rounded-2xl p-6 min-[561px]:max-[880px]:w-[44%] min-[561px]:max-[880px]:shrink-0 min-[561px]:max-[880px]:snap-start">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4 text-[18px]">{{ b.icon }}</div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ b.title }}</h3>
          <p class="text-[.9rem] text-body">{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'BenefitsSection',
  components: { SectionHeading },
  data() {
    return {
      benefits: [
        { icon: '◎', title: 'Automatisierte Marktanalyse', text: 'Kontinuierliches Scanning relevanter Quellen und automatischer Abgleich mit Ihrem Kandidatenpool.' },
        { icon: '✓', title: 'Intelligentes Matching', text: 'Semantisches Scoring auf Basis von Qualifikation und Erfahrung – mit transparenter Begründung.' },
        { icon: '✉', title: 'Skalierbarer Outreach', text: 'Automatische Identifikation von Ansprechpartnern und Erstellung versandfertiger Anschreiben.' }
      ]
    }
  }
}
</script>
