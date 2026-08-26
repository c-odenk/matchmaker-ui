<template>
  <!-- 3 · Was früher fünf Programme brauchte, läuft hier auf Klick -->
  <section class="sec bg-surface">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Auf Klick</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Ein Fenster statt <span class="text-blue">fünf Programmen.</span></h2>
        <p class="text-lead text-body">Handgriffe, die heute je ein eigenes System brauchen – in matchmaker ein Klick aus dem Vorgang heraus.</p>
      </div>

      <!-- Trennlinien über gap-px auf Linienfarbe: stimmt bei 3, 2 und 1 Spalte -->
      <div class="ben-grid bg-line border border-line rounded-[18px] overflow-hidden grid grid-cols-3 gap-px max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div
          v-for="a in actions" :key="a.title"
          class="ben bg-white flex items-start gap-[14px] px-6 py-5"
        >
          <div class="w-9 h-9 shrink-0 rounded-[10px] bg-navy text-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="a.icon"/></svg>
          </div>
          <div class="min-w-0">
            <h3 class="text-[.98rem] font-bold tracking-[-0.01em]">{{ a.title }}</h3>
            <p class="text-[.86rem] text-body mt-[3px] leading-[1.5]">{{ a.text }}</p>
            <p class="text-[.76rem] text-muted mt-[6px]">Statt: {{ a.instead }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'AutomationActionsSection',
  components: { EyebrowBadge },
  data() {
    return {
      actions: [
        {
          title: 'Exposé erzeugen', text: 'Anonymisiert, als fertiges PDF.', instead: 'Profil manuell schwärzen',
          icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
        },
        {
          title: 'Mandat abgleichen', text: 'Ein Auftrag gegen den ganzen Bestand.', instead: 'Filterlisten und Handsichtung',
          icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z'
        },
        {
          title: 'Nachricht versenden', text: 'Aus Ihrem Postfach, unter Ihrem Absender.', instead: 'Mailprogramm und Copy-and-paste',
          icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        },
        {
          title: 'Termin anlegen', text: 'Teams-Termin mit Kandidat oder Entscheider.', instead: 'Kalender und Einladung von Hand',
          icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
        },
        {
          title: 'Anrufen', text: 'Direkt aus dem Profil, über den Rechner.', instead: 'Telefonanlage und Nummernsuche',
          icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        },
        {
          title: 'Gespräch auswerten', text: 'Transkript wird zu Profilvorschlägen.', instead: 'Notizen abtippen und einpflegen',
          icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z'
        }
      ]
    }
  }
}
</script>
