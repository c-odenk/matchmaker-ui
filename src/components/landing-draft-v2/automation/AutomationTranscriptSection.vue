<template>
  <!-- 3 · Gesprächsnotizen: Text links, Mockup rechts – schließt an die
       Profillücken darüber an, denn genau die füllt das Gespräch. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <EyebrowBadge>Gesprächsauswertung</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Was besprochen wurde, <span class="text-blue">steht danach im Profil.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Termine und Gespräche laufen über Teams. Aus dem hochgeladenen Transkript
          entsteht ein Vorschlag, den Sie prüfen und übernehmen.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/kandidaten/max-mustermann">
          <!-- Woher das Transkript kommt -->
          <div class="flex items-center gap-[11px]">
            <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy/[0.07] text-navy flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-bold text-[.92rem] text-ink leading-tight">Erstgespräch über Teams</span>
              <span class="block text-[.78rem] text-muted mt-[2px]">Max Mustermann · 21.08.2026 · 32 Minuten</span>
            </span>
            <span class="inline-flex items-center gap-[6px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-blue-soft text-blue shrink-0">
              <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Ausgewertet
            </span>
          </div>

          <!-- Die hochgeladene Datei -->
          <div class="mt-[13px] flex items-center gap-[10px] border border-line rounded-[10px] px-[13px] py-[10px] bg-surface">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" class="text-muted shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
            <span class="text-[.8rem] text-ink min-w-0 flex-1 truncate">teams-transkript-mustermann.vtt</span>
            <span class="text-[.72rem] text-muted shrink-0">hochgeladen</span>
          </div>

          <!-- Was aus dem Gespräch herausgelesen wurde -->
          <div class="mt-[14px] border border-line rounded-[10px] px-[13px] py-[11px] bg-white">
            <div class="flex items-center justify-between gap-3 mb-[10px]">
              <span class="flex items-center gap-[7px] text-[.85rem] font-bold text-ink">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                Aus dem Gespräch ergänzt
              </span>
              <span class="text-[.72rem] text-muted shrink-0 tabular-nums">78 % → 96 %</span>
            </div>
            <div v-for="f in found" :key="f.label" class="flex items-center gap-[10px] py-[6px] border-t border-line first:border-t-0">
              <span class="w-[18px] h-[18px] shrink-0 rounded-full bg-blue-soft text-blue flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              </span>
              <span class="text-[.85rem] text-muted flex-1 min-w-0">{{ f.label }}</span>
              <span class="text-[.85rem] font-semibold text-ink text-right shrink-0">{{ f.value }}</span>
            </div>
          </div>

          <div class="flex items-center justify-between gap-3 mt-[14px] flex-wrap">
            <span class="text-[.76rem] text-muted">Vorschlag für das Profil – Übernahme nach Freigabe.</span>
            <span class="h-[34px] inline-flex items-center px-[13px] rounded-[8px] text-[.76rem] font-semibold bg-blue text-white shrink-0">Ins Profil übernehmen</span>
          </div>
        </BrowserFrame>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import BrowserFrame from '@/components/ui/BrowserFrame.vue'

export default {
  name: 'AutomationTranscriptSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      features: [
        'Terminierung und Gespräch über Teams, direkt aus dem Vorgang',
        'Gehalt, Erfahrung und Verfügbarkeit werden im Transkript erkannt',
        'Sie prüfen den Vorschlag, bevor sich das Profil ändert'
      ],
      // Genau die drei Angaben, die in der Sektion darüber noch fehlten
      found: [
        { label: 'Gehaltsrahmen', value: '95–110 k€' },
        { label: 'Führungserfahrung', value: '6 Jahre, 12 FTE' },
        { label: 'Verfügbarkeit', value: 'ab 01.11.' }
      ]
    }
  }
}
</script>
