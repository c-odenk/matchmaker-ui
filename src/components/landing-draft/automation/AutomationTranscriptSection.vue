<template>
  <!-- 8 · Auswertung: gespiegelt – Gesprächsliste links, Text rechts.
       Der Termin ist derselbe, der eine Sektion vorher angelegt wurde. -->
  <section class="sec bg-white">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/kandidaten/max-mustermann">
          <div class="flex items-center gap-[9px]">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" class="text-ink shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>
            <span class="font-bold text-[.96rem] text-ink">Gespräche</span>
            <span class="text-[.85rem] text-muted">(4)</span>
          </div>

          <!-- Der stattgefundene Termin, aus dem das Transkript stammt -->
          <div class="mt-[13px] border border-line rounded-[10px] px-[13px] py-[11px] flex items-start gap-[11px] max-[560px]:flex-wrap">
            <span class="w-[30px] h-[30px] shrink-0 rounded-[8px] bg-[#eef2f7] text-body flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-[.9rem] font-semibold text-ink leading-tight">Teams-Termin · 30 Min</span>
              <span class="block text-[.82rem] text-muted mt-[3px] leading-[1.45]">stattgefunden · Transkript verfügbar</span>
              <span class="block text-[.76rem] text-muted mt-[6px]">27.08.2026, 10:20 · Sie</span>
            </span>
            <span class="h-[32px] inline-flex items-center gap-[7px] px-[12px] rounded-[8px] text-[.76rem] font-semibold border border-line text-ink shrink-0 max-[560px]:ml-[41px]">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
              Transkript auswerten
            </span>
          </div>

          <!-- Was die Auswertung vorschlägt -->
          <div class="mt-[13px] border border-line rounded-[10px] px-[13px] py-[11px]">
            <div class="flex items-center justify-between gap-3 mb-[10px]">
              <span class="flex items-center gap-[7px] text-[.85rem] font-bold text-ink">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                Vorschlag für das Profil
              </span>
              <span class="text-[.72rem] text-muted shrink-0 tabular-nums">78 % → 96 %</span>
            </div>
            <div v-for="f in gefunden" :key="f.label" class="flex items-center gap-[10px] py-[6px] border-t border-line first:border-t-0">
              <span class="w-[18px] h-[18px] shrink-0 rounded-full bg-blue-soft text-blue flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              </span>
              <span class="text-[.85rem] text-muted flex-1 min-w-0">{{ f.label }}</span>
              <span class="text-[.85rem] font-semibold text-ink text-right shrink-0">{{ f.value }}</span>
            </div>
          </div>

          <div class="flex items-center justify-between gap-3 mt-[14px] flex-wrap">
            <span class="text-[.76rem] text-muted">Das Profil ändert sich erst nach Freigabe.</span>
            <span class="h-[34px] inline-flex items-center px-[13px] rounded-[8px] text-[.76rem] font-semibold bg-blue text-white shrink-0">Ins Profil übernehmen</span>
          </div>
        </BrowserFrame>
      </div>

      <div>
        <EyebrowBadge>Gesprächsauswertung</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Was besprochen wurde, <span class="text-blue">steht danach im Profil.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Aus dem Transkript des Termins entsteht ein Vorschlag. Übernommen wird, was Sie bestätigen.
        </p>
        <FeatureList :items="features" />
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
        'Das Transkript hängt am selben Vorgang wie der Termin',
        'Gehalt, Erfahrung und Verfügbarkeit werden darin erkannt',
        'Kein Abtippen – und keine Profiländerung ohne Ihre Freigabe'
      ],
      // Genau die drei Angaben, die in der Lücken-Sektion noch gefehlt haben.
      gefunden: [
        { label: 'Gehaltsrahmen', value: '95–110 k€' },
        { label: 'Führungserfahrung', value: '6 Jahre, 12 FTE' },
        { label: 'Verfügbarkeit', value: 'ab 01.11.' }
      ]
    }
  }
}
</script>
