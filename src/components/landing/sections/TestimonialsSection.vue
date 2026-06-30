<template>
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeading eyebrow="Aus der Praxis">
        So setzen Berater <span class="text-blue">matchmaker.hr</span> ein.
      </SectionHeading>

      <div class="test-grid grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <div v-for="t in testimonials" :key="t.name" class="test bg-white border border-line rounded-2xl p-[26px] flex flex-col gap-4">
          <div class="text-[#f59e0b] text-[.95rem] tracking-[2px]">★★★★★</div>
          <p class="text-[.95rem] text-ink flex-1">{{ t.quote }}</p>
          <div class="flex items-center gap-3 border-t border-line pt-[15px]">
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
      testimonials: [
        { quote: '„Der Market Agent liefert täglich qualifizierte Vakanzen – ohne manuelles Jobboard-Screening. Der Sourcing-Aufwand halbiert sich."', name: 'Senior Consultant', role: 'Personalberatung · IT & Engineering' },
        { quote: '„Nicht mehr die meisten Treffer, sondern die richtigen – mit einer Begründung, die sich Kunden direkt präsentieren lässt."', name: 'Head of Recruiting', role: 'Recruiting-Team · 8 Berater' },
        { quote: '„Die Anschreiben sind individuell, professionell und versandfertig. Der Berater gibt nur noch frei – das spart täglich Stunden."', name: 'Managing Director', role: 'Executive Search Boutique' }
      ]
    }
  }
}
</script>
