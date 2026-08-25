<template>
  <section class="sec bg-white !pt-14 max-[880px]:!pt-10">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[680px] text-center mb-10">
        <h1 class="text-hero text-ink mb-[14px]">Vier Agenten arbeiten zu. <span class="text-blue">Sie entscheiden.</span></h1>
        <p class="text-lead text-body">
          Jeder Agent übernimmt einen Schritt und übergibt an den nächsten. Am Ende steht ein versandfertiger Vorschlag.
        </p>
      </div>

      <!-- Die Kette: vier Agenten, ein Ergebnis, eine Freigabe -->
      <div class="scope rounded-[18px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="grid items-stretch [grid-template-columns:1fr_auto_1fr_auto_1fr_auto_1fr] gap-0 max-[880px]:grid-cols-2 max-[880px]:gap-[18px] max-[560px]:grid-cols-1">
          <template v-for="(a, i) in agents" :key="a.name">
            <div class="relative rounded-[12px] border border-line bg-white px-5 py-5 flex flex-col">
              <span class="absolute left-1/2 -translate-x-1/2 -bottom-4 h-4 w-px bg-[#c2ccdb] max-[880px]:hidden"></span>
              <div class="flex items-center gap-[10px] mb-3">
                <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="a.icon"/></svg>
                </span>
                <span class="text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#cbd5e1]">{{ a.no }}</span>
              </div>
              <div class="text-[.72rem] font-bold tracking-[0.04em] uppercase text-blue mb-[5px]">{{ a.name }}</div>
              <div class="text-[.96rem] font-bold text-ink leading-tight">{{ a.does }}</div>
              <div class="mt-[14px] pt-[12px] border-t border-line">
                <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-[5px]">Ergebnis</div>
                <div class="text-[.82rem] text-body leading-[1.45]">{{ a.result }}</div>
              </div>
            </div>

            <div v-if="i < agents.length - 1" class="flex items-center justify-center px-3 max-[880px]:hidden">
              <span class="w-8 h-8 rounded-full bg-white border border-line text-muted flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </span>
            </div>
          </template>
        </div>

        <!-- Verbindung zur Freigabe -->
        <div class="relative h-14 max-[880px]:h-8">
          <!-- Sammelt die vier Ergebnisse ein und führt sie in die Freigabe.
               Die Linie sitzt bewusst unterhalb der Kartenkante, sonst liest
               sie sich als Unterstreichung statt als Verbindung. -->
          <!-- Kartenmitte = (Breite - 3 Pfeilspalten à 56px) / 8 – exakt bei jeder Viewport-Breite -->
          <span class="absolute left-[calc((100%_-_168px)/8)] right-[calc((100%_-_168px)/8)] top-4 h-px bg-[#c2ccdb] max-[880px]:hidden"></span>
          <span class="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-px bg-[#c2ccdb] max-[880px]:top-0"></span>
        </div>

        <!-- Der Mensch am Ende der Kette -->
        <div class="relative overflow-hidden rounded-[14px] bg-navy text-white border border-white/[0.08] shadow-price-feat px-7 py-6 max-[560px]:px-5 max-[560px]:py-5">
          <div class="absolute top-[-120%] right-[-4%] w-[52%] h-[320%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.45),transparent_65%)] blur-[55px] pointer-events-none"></div>
          <div class="relative z-[2] flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-[14px]">
              <span class="w-[44px] h-[44px] shrink-0 rounded-xl bg-blue/25 border border-blue/[0.4] flex items-center justify-center">
                <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"/></svg>
              </span>
              <span>
                <span class="block text-[1.18rem] font-bold tracking-[-0.01em] leading-tight">Der Berater gibt frei</span>
                <span class="block text-[.85rem] text-white/[0.72] mt-[2px]">Nichts geht hinaus, bevor Sie es freigegeben haben</span>
              </span>
            </div>
            <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[11px] py-[4px] rounded-full bg-blue/25 border border-blue/[0.35] text-[#9cc6f2]">
              <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Human-in-the-Loop
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AgentsHeadSection',
  data() {
    return {
      agents: [
        {
          no: '01', name: 'Profiling Agent', does: 'Liest den Lebenslauf aus',
          result: 'Strukturiertes, anonymisiertes Profil',
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
        },
        {
          no: '02', name: 'Market Agent', does: 'Durchsucht den Markt',
          result: 'Offene Vakanzen, die zum Profil passen',
          icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z'
        },
        {
          no: '03', name: 'Matching Agent', does: 'Bewertet die Passung',
          result: 'Nachvollziehbarer Match-Score',
          icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'
        },
        {
          no: '04', name: 'Outreach Agent', does: 'Formuliert die Ansprache',
          result: 'Versandfertiger Entwurf an die Firma',
          icon: 'M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5'
        }
      ]
    }
  }
}
</script>
