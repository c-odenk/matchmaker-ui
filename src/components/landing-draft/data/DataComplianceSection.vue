<template>
  <!-- 3 · DSGVO: die technisch umgesetzten Punkte, ohne Zählung -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Regulatorik</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Was die DSGVO verlangt, ist <span class="text-blue">in der Architektur verankert.</span></h2>
        <p class="text-lead text-body">Die Anforderungen sind fest in der Architektur verankert – an jedem einzelnen Punkt nachvollziehbar.</p>
      </div>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(3,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="p in solved" :key="p.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="flex items-center gap-[10px] mb-3">
            <span class="w-[26px] h-[26px] shrink-0 rounded-full bg-[#e7f8ee] text-[#15803d] flex items-center justify-center text-[.82rem]">✓</span>
            <span class="text-[.72rem] font-bold tracking-[0.06em] uppercase text-muted">{{ p.ref }}</span>
          </div>
          <h3 class="text-[1rem] font-bold tracking-[-0.01em] mb-2">{{ p.title }}</h3>
          <p class="text-[.88rem] text-body">{{ p.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'DataComplianceSection',
  components: { EyebrowBadge },
  data() {
    return {
      solved: [
        { ref: 'Art. 22 DSGVO', title: 'Keine automatische Entscheidung', text: 'Versand, Profiländerung und Statuswechsel gibt immer ein Mensch frei.' },
        { ref: 'Art. 5 DSGVO', title: 'Bewertung ohne Klarnamen', text: 'Name, Kontakt und Arbeitgeber werden vor dem KI-Aufruf entfernt.' },
        { ref: 'Rechenschaft', title: 'Jeder Schritt protokolliert', text: 'Bewertung, Begründung und Zeitpunkt bleiben dauerhaft nachvollziehbar.' },
        { ref: '§ 201 StGB', title: 'Keine Gesprächsaufzeichnung', text: 'Telefonate über matchmaker laufen ohne Mitschnitt. Transkripte entstehen ausschließlich in Microsoft Teams.' },
        { ref: 'Vertraglich', title: 'Keine Nutzung zum Training', text: 'Übermittelte Daten fließen nicht in fremde Modelle ein – vertraglich zugesichert und überprüfbar.' }
      ]
    }
  }
}
</script>
