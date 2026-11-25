<template>
  <!-- Kandidatenprofil mit erkannten Lücken – Markup wie in
       automation/AutomationGapsSection.vue (dort als ganze Sektion gebaut,
       hier nur das Mockup). Platzhalterdaten. -->
  <BrowserFrame url="app-matchmaker-hr.netlify.app/kandidaten/max-mustermann">
    <div class="flex items-center gap-3">
      <div class="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-full bg-navy text-white font-bold text-[.85rem] tracking-[0.03em]">MM</div>
      <div class="min-w-0 flex-1">
        <div class="font-bold text-[.96rem]">Max Mustermann</div>
        <div class="text-[.78rem] text-muted">Senior IT Projektleiter · Hamburg</div>
      </div>
      <div class="text-right shrink-0">
        <div class="text-[.98rem] font-bold text-ink leading-none">78 %</div>
        <div class="text-[.72rem] text-muted mt-[4px]">vollständig</div>
      </div>
    </div>

    <div class="mt-[13px] h-[6px] rounded-full bg-surface overflow-hidden">
      <div class="h-full rounded-full bg-blue" style="width: 78%"></div>
    </div>

    <div class="mt-[14px] border border-line rounded-[7px] px-[13px] py-[11px]">
      <div class="flex items-center gap-[7px] text-[.85rem] font-bold text-ink mb-[10px]">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
        Diese Angaben fehlen noch
      </div>
      <div v-for="g in gaps" :key="g.label" class="flex items-center gap-[10px] py-[6px] max-[560px]:flex-wrap">
        <span class="w-[18px] h-[18px] shrink-0 rounded-full bg-[#eef2f7] text-muted flex items-center justify-center text-[.64rem]">?</span>
        <span class="text-[.85rem] text-ink flex-1 min-w-0">{{ g.label }}</span>
        <span class="text-[.72rem] text-muted whitespace-nowrap max-[560px]:basis-[calc(100%_-_28px)] max-[560px]:ml-[28px] max-[560px]:mt-[2px]">{{ g.why }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between gap-3 mt-[14px] flex-wrap">
      <span class="text-[.76rem] text-muted">Entwurf an den Kandidaten – Versand nach Freigabe.</span>
      <span class="h-[34px] inline-flex items-center px-[13px] rounded-[5px] text-[.76rem] font-semibold bg-blue text-white shrink-0">Nachfrage erstellen</span>
    </div>
  </BrowserFrame>
</template>

<script>
import BrowserFrame from '@/components/ui/BrowserFrame.vue'

export default {
  name: 'V3ProfilMockup',
  components: { BrowserFrame },
  data() {
    return {
      gaps: [
        { label: 'Gehaltsrahmen', why: 'für die Passung' },
        { label: 'Führungserfahrung', why: 'für Senioritätsstufen' },
        { label: 'Verfügbarkeit', why: 'für den Zeitpunkt' }
      ]
    }
  }
}
</script>
