<template>
  <!-- 9 · Der Zusammenhang: ausgelöst wird am Profil – dokumentiert wird dort auch -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Am Kandidaten</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Ausgelöst am Profil, <span class="text-blue">dokumentiert am Profil.</span></h2>
        <p class="text-lead text-body">Anruf, Termin und Auswertung starten im Vorgang – und was dabei herauskommt, steht danach dort.</p>
      </div>

      <div class="scope rounded-[11px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="rounded-[8px] border border-line bg-white px-[18px] py-[16px] max-[560px]:px-[13px]">
          <!-- Was sich vom Profil aus starten lässt -->
          <div class="flex items-center gap-[10px] flex-wrap pb-[15px] border-b border-line">
            <span v-for="a in aktionen" :key="a.label"
                  class="h-[36px] inline-flex items-center gap-[8px] px-[14px] rounded-[6px] text-[.82rem] font-semibold shrink-0"
                  :class="[a.primaer ? 'bg-navy text-white' : 'border border-line text-ink', a.rechts ? 'ml-auto max-[880px]:ml-0' : '']">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" :d="a.icon"/></svg>
              {{ a.label }}
            </span>
          </div>

          <div class="flex items-center gap-[9px] pt-[15px] mb-[11px]">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" class="text-ink shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>
            <span class="font-bold text-[.96rem] text-ink">Gespräche</span>
            <span class="text-[.85rem] text-muted">({{ gespraeche.length }})</span>
          </div>

          <!-- Einträge laufen gestaffelt ein (.folge, siehe useScrollRevealDraft) -->
          <div class="folge flex flex-col gap-[10px]">
            <div v-for="g in gespraeche" :key="g.titel"
                 class="border border-line rounded-[7px] px-[13px] py-[11px] flex items-start gap-[11px]">
              <span class="w-[30px] h-[30px] shrink-0 rounded-[5px] bg-[#eef2f7] text-body flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="g.icon"/></svg>
              </span>
              <span class="min-w-0 flex-1">
                <span class="flex items-center gap-[8px] flex-wrap">
                  <span class="text-[.9rem] font-semibold text-ink leading-tight">{{ g.titel }}</span>
                  <span v-if="g.marke" class="text-[.72rem] font-semibold px-[9px] py-[2px] rounded-full bg-blue-soft text-blue">{{ g.marke }}</span>
                </span>
                <span class="block text-[.82rem] text-muted mt-[4px] leading-[1.5]">{{ g.text }}</span>
                <span class="block text-[.76rem] text-muted mt-[6px]">{{ g.meta }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

const ICON_TELEFON = 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
const ICON_TERMIN = 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
const ICON_DOKUMENT = 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'

export default {
  name: 'AutomationTrailSection',
  components: { EyebrowBadge },
  data() {
    return {
      aktionen: [
        { label: 'Anrufen', primaer: true, icon: ICON_TELEFON },
        { label: 'Teams-Termin', primaer: true, icon: ICON_TERMIN },
        { label: 'Interview hinzufügen', rechts: true, icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' },
        { label: 'Vakanz hinzufügen', primaer: true, icon: 'M12 4.5v15m7.5-7.5h-15' }
      ],
      // Alle Angaben sind Platzhalter.
      gespraeche: [
        {
          titel: 'Telefonat · 04:12 · erreicht',
          text: 'Wechselwillig, sucht Remote-Anteil von mindestens zwei Tagen pro Woche.',
          meta: '28.08.2026, 08:20 · Sie',
          icon: ICON_TELEFON
        },
        {
          titel: 'Teams-Termin · 30 Min',
          marke: 'ausgewertet',
          text: 'stattgefunden · drei Angaben ins Profil übernommen',
          meta: '27.08.2026, 10:20 · Sie',
          icon: ICON_TERMIN
        },
        {
          titel: 'Interview hochgeladen',
          text: 'Strukturiertes Erstgespräch: sechs Jahre Führungserfahrung, Teamgröße 12, Wechsel innerhalb von drei Monaten möglich.',
          meta: '21.08.2026, 10:20 · Sie',
          icon: ICON_DOKUMENT
        }
      ]
    }
  }
}
</script>
