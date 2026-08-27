<template>
  <!-- 1 · Der Durchlauf: Text links, Ablauf rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <EyebrowBadge>Der Durchlauf</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Sechs Schritte, <span class="text-blue">die niemand mehr anstoßen muss.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Für jeden aktiven Kandidaten läuft dieselbe Kette – ohne manuellen Anstoß. Am Ende steht kein Zwischenstand, sondern ein fertiger Vorschlag.
        </p>
        <FeatureList :items="features" />
      </div>

      <div class="rounded-[18px] border border-line bg-surface p-7 max-[560px]:p-5">
        <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-5">So läuft die Automatisierung</div>
        <ol class="list-none flex flex-col">
          <li v-for="(s, i) in steps" :key="s" class="flex items-start gap-[13px] pb-[15px] last:pb-0">
            <span class="relative flex flex-col items-center shrink-0">
              <span class="w-[26px] h-[26px] rounded-full bg-navy text-white flex items-center justify-center text-[.72rem] font-bold">{{ i + 1 }}</span>
              <span v-if="i < steps.length - 1" class="w-px flex-1 min-h-[16px] bg-navy/20 mt-[6px]"></span>
            </span>
            <span class="text-[.9rem] font-semibold text-ink leading-tight pt-[3px]">{{ s }}</span>
          </li>
        </ol>
        <div class="mt-5 pt-[14px] border-t border-line flex items-center gap-[10px] flex-wrap">
          <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-[#e7f8ee] text-[#15803d]">
            <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Ergebnis liegt morgens vor
          </span>
          <span class="text-[.76rem] text-muted">Versendet wird nichts ohne Freigabe.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

export default {
  name: 'AutomationRunSection',
  components: { EyebrowBadge, FeatureList },
  data() {
    return {
      features: [
        'Läuft ohne Anstoß, für jeden aktiven Kandidaten',
        'Unpassendes und Abgelehntes fällt vorher heraus',
        'Jeder Schritt bleibt begründet nachvollziehbar'
      ],
      steps: [
        'Kandidaten übernehmen',
        'Markt durchsuchen',
        'Unpassendes aussortieren',
        'Passung bewerten',
        'Firma und Ansprechpartner recherchieren',
        'Anschreiben entwerfen'
      ]
    }
  }
}
</script>
