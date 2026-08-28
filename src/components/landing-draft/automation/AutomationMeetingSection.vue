<template>
  <!-- 7 · Termine: Text links, der Termin-Dialog rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>Termine</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Der Teams-Termin entsteht <span class="text-blue">im Vorgang.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Kandidat oder Entscheider einladen, ohne Kalender und Programmwechsel. Der Termin bleibt am Vorgang.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/kandidaten/max-mustermann">
          <div class="flex items-start gap-[10px]">
            <span class="flex items-center gap-[9px] min-w-0">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" class="text-ink shrink-0 mt-[1px]"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5M12 12.75h.008v.008H12v-.008z"/></svg>
              <span class="font-bold text-[1.02rem] text-ink leading-tight">Teams-Termin anlegen</span>
            </span>
            <span class="ml-auto text-muted text-[1.05rem] leading-none shrink-0">×</span>
          </div>
          <p class="text-[.78rem] text-muted mt-[6px] leading-[1.45]">Die Einladung wird per E-Mail an die eingeladene Person versendet.</p>

          <div class="mt-[14px]">
            <div class="text-[.72rem] text-muted mb-[5px]">Betreff</div>
            <div class="border border-line rounded-[10px] px-[13px] py-[9px] text-[.85rem] text-ink truncate">Gespräch mit Max Mustermann</div>
          </div>

          <!-- Datum, Uhrzeit, Dauer -->
          <div class="mt-[12px] grid grid-cols-3 gap-[10px] max-[560px]:grid-cols-1">
            <div v-for="f in felder" :key="f.label" class="min-w-0">
              <div class="text-[.72rem] text-muted mb-[5px]">{{ f.label }}</div>
              <div class="border border-line rounded-[10px] px-[13px] py-[9px] flex items-center gap-[8px]">
                <span class="text-[.85rem] text-ink min-w-0 flex-1 truncate">{{ f.value }}</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" class="text-muted shrink-0"><path stroke-linecap="round" stroke-linejoin="round" :d="f.icon"/></svg>
              </div>
            </div>
          </div>

          <div class="mt-[12px]">
            <div class="text-[.72rem] text-muted mb-[5px]">Empfänger-E-Mail</div>
            <div class="border border-line rounded-[10px] px-[13px] py-[9px] text-[.85rem] text-ink truncate">max.mustermann@beispiel.de</div>
          </div>

          <div class="mt-[12px]">
            <div class="text-[.72rem] text-muted mb-[5px]">Nachricht an die eingeladene Person (optional)</div>
            <div class="border border-line rounded-[10px] h-[46px]"></div>
          </div>

          <!-- Hinweis auf die Transkription -->
          <div class="mt-[12px] border border-line rounded-[10px] bg-surface px-[13px] py-[11px] flex items-start gap-[10px]">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="text-muted shrink-0 mt-[2px]"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
            <span class="text-[.76rem] text-body leading-[1.5]">
              Das Gespräch wird zur Protokollierung transkribiert. Die eingeladene Person wird darüber in der Einladung und zu Beginn des Termins informiert.
            </span>
          </div>

          <div class="flex items-center justify-end gap-[9px] mt-[14px] flex-wrap">
            <span class="h-[34px] inline-flex items-center px-[13px] rounded-[8px] text-[.76rem] font-semibold text-body">Abbrechen</span>
            <span class="h-[34px] inline-flex items-center px-[13px] rounded-[8px] text-[.76rem] font-semibold bg-navy text-white">Termin anlegen</span>
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
  name: 'AutomationMeetingSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      features: [
        'Termin mit Kandidat oder Entscheider aus dem Profil heraus',
        'Die Einladung geht per E-Mail an die eingeladene Person',
        'Transkribiert wird angekündigt – in der Einladung und zu Beginn'
      ],
      felder: [
        { label: 'Datum', value: '28.08.2026', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
        { label: 'Uhrzeit', value: '10:00', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Dauer', value: '30 Minuten', icon: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }
      ]
    }
  }
}
</script>
