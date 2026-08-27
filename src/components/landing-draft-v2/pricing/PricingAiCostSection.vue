<template>
  <!-- Zeigt je Schritt nur, OB KI-Kosten entstehen – nicht, wie gefiltert,
       sortiert oder recherchiert wird. Kein Schritt wird als kostenlos
       ausgewiesen, der es nicht ist. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <EyebrowBadge>KI-Kosten</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Was kostet die KI – <span class="text-blue">und warum bleibt das kalkulierbar?</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die Rechenkosten der KI zahlen Sie direkt an Ihren KI-Anbieter – über Ihren eigenen API-Zugang, ohne Aufschlag. Was die Nutzung kostet, steht dort in Ihrer Abrechnung.
        </p>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px] mt-4">
          Damit das kalkulierbar bleibt, arbeitet das Multi-Agentensystem kostenbewusst und ist je Durchlauf nach oben gedeckelt. Was ein Lauf gekostet hat, steht anschließend in der Historie.
        </p>
      </div>

      <div class="bg-surface border border-line rounded-2xl p-6">
        <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted">So läuft die Automatisierung</div>
        <p class="text-[.78rem] text-muted leading-[1.45] mt-2 mb-5">Das Multi-Agentensystem arbeitet die Schritte ab. Markiert ist, wo KI-Kosten entstehen.</p>
        <ol class="list-none flex flex-col">
          <li v-for="(s, i) in stages" :key="s.label" class="flex items-start gap-[13px] pb-[15px] last:pb-0">
            <span class="relative flex flex-col items-center shrink-0">
              <span class="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[.72rem] font-bold border"
                    :class="badgeClass(s.cost)">{{ i + 1 }}</span>
              <span v-if="i < stages.length - 1" class="w-px flex-1 min-h-[18px] bg-line mt-[6px]"></span>
            </span>
            <span class="min-w-0 pt-[2px]">
              <span class="block text-[.9rem] font-semibold text-ink leading-tight">{{ s.label }}</span>
              <span class="block text-[.78rem] mt-[3px] leading-[1.45]"
                    :class="s.cost === 'frei' ? 'text-muted' : 'text-blue font-semibold'">{{ s.note }}</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'PricingAiCostSection',
  components: { EyebrowBadge },
  data() {
    return {
      stages: [
        { label: 'Markt durchsuchen', cost: 'frei', note: 'ohne KI-Kosten' },
        { label: 'Unpassendes aussortieren', cost: 'frei', note: 'ohne KI-Kosten' },
        { label: 'Grob vorsortieren', cost: 'ki', note: 'KI-Kosten fallen an' },
        { label: 'Stellenanzeige auswerten', cost: 'ki', note: 'KI-Kosten fallen an' },
        { label: 'Passung bewerten', cost: 'ki', note: 'KI-Kosten fallen an' },
        { label: 'Ansprechpartner ermitteln', cost: 'teils', note: 'KI-Kosten nur bei Bedarf' },
        { label: 'Anschreiben entwerfen', cost: 'ki', note: 'KI-Kosten fallen an' }
      ]
    }
  },
  methods: {
    // Drei Zustände: ohne KI, mit KI, und „nur wenn nötig" – letzteres
    // bewusst weder grau noch voll blau, damit es nicht als kostenlos gelesen wird.
    badgeClass(cost) {
      if (cost === 'frei') return 'bg-navy/[0.07] border-transparent text-navy'
      if (cost === 'teils') return 'bg-white border-blue text-blue'
      return 'bg-blue border-blue text-white'
    }
  }
}
</script>
