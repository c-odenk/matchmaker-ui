<template>
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeading eyebrow="Aus der Praxis">
        So setzen Berater <span class="text-blue">matchmaker.hr</span> ein.
      </SectionHeading>

      <!-- Tablet-Band: horizontaler Scroller mit Snap & Peek auf die nächste Karte -->
      <div class="test-grid grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] max-[560px]:grid-cols-1 min-[561px]:max-[880px]:flex min-[561px]:max-[880px]:overflow-x-auto min-[561px]:max-[880px]:snap-x min-[561px]:max-[880px]:snap-mandatory min-[561px]:max-[880px]:-mx-6 min-[561px]:max-[880px]:px-6 min-[561px]:max-[880px]:scroll-px-6 no-scrollbar">
        <div v-for="t in testimonials" :key="t.name" class="test bg-white border border-line rounded-2xl p-[26px] flex flex-col gap-4 min-[561px]:max-[880px]:w-[44%] min-[561px]:max-[880px]:shrink-0 min-[561px]:max-[880px]:snap-start">
          <div class="text-[#f59e0b] text-[.95rem] tracking-[2px]">★★★★★</div>
          <p class="text-[.95rem] text-ink flex-1">{{ t.quote }}</p>
          <div class="flex items-center gap-3 border-t border-line pt-[15px]">
            <div class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold text-[.82rem] tracking-[0.03em]" :class="t.avatar">{{ t.initials }}</div>
            <div>
              <div class="text-[.88rem] font-bold">{{ t.name }}</div>
              <div class="text-[.76rem] text-muted">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'TestimonialsSection',
  components: { SectionHeading },
  data() {
    return {
      // Avatar-Farben aus der CI-Palette (blau-soft, grün-soft, navy-soft) – dezenter Akzent je Karte
      testimonials: [
        { quote: '„Der Market Agent liefert täglich qualifizierte Vakanzen – ohne manuelles Jobboard-Screening. Der Sourcing-Aufwand halbiert sich."', name: 'Senior Consultant', role: 'Personalberatung · IT & Engineering', initials: 'SC', avatar: 'bg-blue-soft text-blue' },
        { quote: '„Nicht mehr die meisten Treffer, sondern die richtigen – mit einer Begründung, die sich Kunden direkt präsentieren lässt."', name: 'Head of Recruiting', role: 'Recruiting-Team · 8 Berater', initials: 'HR', avatar: 'bg-[#e7f8ee] text-[#15803d]' },
        { quote: '„Die Anschreiben sind individuell, professionell und versandfertig. Der Berater gibt nur noch frei – das spart täglich Stunden."', name: 'Managing Director', role: 'Executive Search Boutique', initials: 'MD', avatar: 'bg-navy/[0.08] text-navy' }
      ]
    }
  }
}
</script>
