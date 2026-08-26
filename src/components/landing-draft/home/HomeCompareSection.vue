<template>
  <!-- Volle Wrap-Breite wie alle Sektionen -->
  <section class="sec bg-white" id="vergleich">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Vorher · Nachher">
        Derselbe Tag, <span class="text-blue">anders verbracht.</span>
        <template #lead>Was heute Handarbeit ist, liegt morgen fertig vor.</template>
      </SectionHeadingDraft>

      <div class="compare border border-line rounded-[18px] overflow-hidden grid grid-cols-2 max-[560px]:grid-cols-1">
        <div class="col a px-[30px] py-8 max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-muted">Heute</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in without" :key="t" class="flex gap-[11px] text-[.95rem] text-muted">
              <span class="text-[#cbd5e1] shrink-0">✕</span>{{ t }}
            </li>
          </ul>
        </div>
        <div class="col b px-[30px] py-8 border-l border-line bg-blue/[0.035] max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-blue">Mit matchmaker</div>
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
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomeCompareSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      // Bewusst Zeile für Zeile gepaart: links der Handgriff, rechts sein Ersatz.
      without: [
        'Jobportale von Hand durchsehen',
        'Ansprechpartner einzeln heraussuchen',
        'Anschreiben von Grund auf tippen',
        'Für jeden Schritt das Programm wechseln'
      ],
      withMm: [
        'Der Markt wird laufend abgeglichen',
        'Firma und Ansprechpartner sind recherchiert',
        'Der Entwurf liegt fertig vor',
        'Alles läuft an einer Oberfläche'
      ]
    }
  }
}
</script>
