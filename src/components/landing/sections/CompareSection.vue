<template>
  <section class="sec bg-white" id="vergleich">
    <div class="wrap">
      <SectionHeading eyebrow="Manuell vs. matchmaker.hr">
        Ihre Zeit gehört der <span class="text-blue">Beratung.</span>
        <template #lead>Nicht dem manuellen Sourcing. Recruiting frisst Stunden mit wiederkehrender Klickarbeit – Zeit, die für Mandate fehlt.</template>
      </SectionHeading>

      <div class="compare max-w-[840px] mx-auto border border-line rounded-[18px] overflow-hidden grid grid-cols-2 max-[560px]:grid-cols-1">
        <div class="col a px-[30px] py-8">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-muted">Ohne matchmaker.hr</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in without" :key="t" class="flex gap-[11px] text-[.95rem] text-muted">
              <span class="text-[#cbd5e1] shrink-0">✕</span>{{ t }}
            </li>
          </ul>
        </div>
        <div class="col b px-[30px] py-8 border-l border-line bg-blue/[0.035] max-[560px]:border-l-0 max-[560px]:border-t">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-blue">Mit matchmaker.hr</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in withMm" :key="t" class="flex gap-[11px] text-[.95rem] text-ink">
              <span class="text-green shrink-0">✓</span>{{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'CompareSection',
  components: { SectionHeading },
  data() {
    return {
      without: [
        'Manuelles Jobboard-Screening, Tag für Tag',
        'Kandidatenpool veraltet, kaum jemand pflegt ihn nach',
        'Anschreiben werden einzeln recherchiert und getippt',
        'Mehr Mandate gehen nur über mehr Personal'
      ],
      withMm: [
        'Der Market Agent scannt den Stellenmarkt automatisch',
        'Laufender Abgleich hält den Pool aktuell',
        'Versandfertige Anschreiben – Freigabe per Klick',
        'Skalierung ohne Neueinstellung, der Berater entscheidet'
      ]
    }
  }
}
</script>
