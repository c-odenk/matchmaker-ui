<template>
  <section class="sec relative overflow-hidden bg-navy text-white">
    <div class="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[75%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.28),transparent_65%)] blur-[70px] pointer-events-none"></div>
    <div class="wrap">
      <div class="sec-head text-center mb-12">
        <h2 class="text-section text-white">Spürbare Entlastung, <span class="text-blue">messbare Wirkung</span></h2>
      </div>
      <!-- Tablet-Band: 3 Karten nebeneinander, Inhalt vertikal & zentriert gestapelt -->
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
  name: 'StatsSection',
  data() {
    return {
      stats: [
        { value: '−70 %', label: 'weniger Aufwand', desc: 'Kein manuelles Jobboard-Screening mehr.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>' },
        { value: '4 → 1', label: 'Schritte bis zur Freigabe', desc: 'Vier Agenten arbeiten zu, der Berater gibt frei.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/></svg>' },
        { value: '100 %', label: 'EU-Hosting', desc: 'DSGVO-konform, Daten bleiben in der EU.', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"/></svg>' }
      ]
    }
  }
}
</script>
