<template>
  <!-- Was ohne Zutun läuft – als Anriss, Details auf der Unterseite -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>Automatisierungen</EyebrowBadge>
        <h2 class="text-section text-ink mt-[7px] mb-[14px]">Der Durchlauf arbeitet vor. <span class="text-blue">Freigegeben wird von Hand.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Wiederkehrende Schritte laufen ohne manuellen Anstoß. Am Morgen liegt kein Zwischenstand vor, sondern ein vollständig vorbereiteter Vorschlag.
        </p>
        <FeatureList :items="features" />
        <router-link to="/automatisierungen" class="inline-flex items-center gap-[7px] mt-[22px] text-[.92rem] font-semibold text-blue hover:text-blue-hover cursor-pointer max-[880px]:py-[9px]">
          Alle Automatisierungen ansehen
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </router-link>
      </div>

      <div class="rounded-[11px] border border-line bg-surface p-7 max-[560px]:p-5">
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
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

export default {
  name: 'HomeAutomationSection',
  components: { EyebrowBadge, FeatureList },
  data() {
    return {
      features: [
        'Läuft ohne Anstoß, für jeden aktiven Kandidaten',
        'Fehlende Profilangaben werden erkannt und nachgefragt',
        'Anrufen, Termine und Auswertung auf Klick im Vorgang'
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
