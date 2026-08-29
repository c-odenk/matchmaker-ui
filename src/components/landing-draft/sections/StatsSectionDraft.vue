<template>
  <!-- ENTWURF: die unbelegte „−70 %"-Zahl und der „100 % EU-Hosting"-Claim sind
       durch drei Kennzahlen ersetzt, die der Systementwurf direkt hergibt. -->
  <section class="sec relative overflow-hidden bg-navy text-white">
    <div class="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[75%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.28),transparent_65%)] blur-[70px] pointer-events-none"></div>
    <div class="wrap">
      <div class="sec-head text-center mb-12">
        <h2 class="text-section text-white">Die Arbeit passiert nachts. <span class="text-blue">Die Entscheidung morgens.</span></h2>
      </div>
      <div class="stats-grid relative z-[2] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] max-[560px]:grid-cols-1 min-[561px]:max-[880px]:grid-cols-3">
        <div v-for="s in stats" :key="s.label" class="scard bg-white/[0.04] border border-white/10 rounded-2xl px-[26px] py-7 min-[561px]:max-[880px]:px-4 min-[561px]:max-[880px]:text-center">
          <div class="flex items-center gap-3 mb-3 min-[561px]:max-[880px]:flex-col min-[561px]:max-[880px]:gap-[10px]">
            <div class="w-10 h-10 rounded-[7px] bg-blue/20 border border-blue/[0.32] flex items-center justify-center text-white shrink-0 min-[561px]:max-[880px]:w-9 min-[561px]:max-[880px]:h-9" v-html="s.icon"></div>
            <div class="text-[1.8rem] font-extrabold tracking-[-0.02em] leading-none shrink-0 min-[561px]:max-[880px]:text-[1.45rem]">{{ s.value }}</div>
            <div class="font-semibold text-[.9rem] leading-tight min-[561px]:max-[880px]:text-[.8rem]">{{ s.label }}</div>
          </div>
          <div class="text-[.85rem] text-white/60 mt-[6px] min-[561px]:max-[880px]:text-[.76rem] min-[561px]:max-[880px]:leading-[1.5]">{{ s.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSectionDraft',
  data() {
    return {
      stats: [
        { value: '6', label: 'Schritte laufen nachts', desc: 'Für jeden aktiven Kandidaten, jede Nacht neu – ohne Zutun.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>' },
        { value: '1', label: 'Oberfläche für den Berater', desc: 'Bewerbersoftware, Markt, Telefonie, Teams und Postfach an einem Ort.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>' },
        { value: '0', label: 'Nachrichten ohne Freigabe', desc: 'Versand, Profiländerung und Statuswechsel gibt immer ein Mensch frei.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"/></svg>' }
      ]
    }
  }
}
</script>
