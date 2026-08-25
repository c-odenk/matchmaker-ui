<template>
  <section class="sec bg-white !pt-14 max-[880px]:!pt-10">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[680px] text-center mb-10">
        <h1 class="text-hero text-ink mb-[14px]">Alle Systeme Ihrer Beratung – <span class="text-blue">an einer Oberfläche.</span></h1>
        <p class="text-lead text-body">
          Heute wird jedes System einzeln bedient. matchmaker legt sich als Bedienschicht darüber – angebunden statt ersetzt.
        </p>
      </div>

      <!-- Schichtbild: eine Bedienoberfläche über austauschbaren Bausteinen -->
      <div class="scope rounded-[18px] border border-line bg-surface p-8 max-[560px]:p-5">
        <!-- Die Bedienschicht trägt bewusst mehr Gewicht als die Bausteine darunter:
             Glow und Schatten wie auf den Navy-Flächen der Landingpage, dazu die
             Arbeitsschritte, die auf dieser Ebene zusammenlaufen. -->
        <div class="relative overflow-hidden rounded-[14px] bg-navy text-white border border-white/[0.08] shadow-price-feat px-7 py-6 max-[560px]:px-5 max-[560px]:py-5">
          <div class="absolute top-[-120%] right-[-4%] w-[52%] h-[320%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.45),transparent_65%)] blur-[55px] pointer-events-none"></div>
          <div class="absolute bottom-[-150%] left-[-6%] w-[44%] h-[340%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.22),transparent_70%)] blur-[60px] pointer-events-none"></div>

          <div class="relative z-[2] flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-[14px]">
              <span class="w-[44px] h-[44px] shrink-0 rounded-xl bg-blue/25 border border-blue/[0.4] flex items-center justify-center">
                <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
              </span>
              <span>
                <span class="block text-[1.18rem] font-bold tracking-[-0.01em] leading-tight">matchmaker</span>
                <span class="block text-[.85rem] text-white/[0.72] mt-[2px]">Die Oberfläche, an der Ihre Berater arbeiten</span>
              </span>
            </div>
            <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[11px] py-[4px] rounded-full bg-blue/25 border border-blue/[0.35] text-[#9cc6f2]">
              <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Bedienschicht
            </span>
          </div>

          <!-- Was auf dieser Ebene zusammenläuft -->
          <div class="relative z-[2] flex flex-wrap gap-[7px] mt-5 pt-5 border-t border-white/[0.12]">
            <span
              v-for="a in doing" :key="a"
              class="text-[.76rem] font-semibold text-white/[0.78] bg-white/[0.07] border border-white/[0.12] rounded-full px-[11px] py-[4px]"
            >{{ a }}</span>
          </div>
        </div>

        <!-- Verbindung zur Bausteinreihe (nur ab Tablet sichtbar) -->
        <div class="relative h-8 max-[880px]:h-5">
          <span class="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-px bg-[#c2ccdb] max-[880px]:h-5"></span>
          <span class="absolute left-[7%] right-[7%] top-4 h-px bg-[#c2ccdb] max-[880px]:hidden"></span>
        </div>

        <div class="grid gap-3 [grid-template-columns:repeat(7,1fr)] max-[880px]:grid-cols-4 max-[560px]:grid-cols-2">
          <div v-for="s in systems" :key="s.label" class="relative">
            <span class="absolute left-1/2 -translate-x-1/2 -top-4 h-4 w-px bg-[#c2ccdb] max-[880px]:hidden"></span>
            <div class="h-full rounded-[12px] border border-line bg-white px-3 py-4 flex flex-col items-center text-center gap-[9px]">
              <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy/[0.07] text-navy flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
              </span>
              <span class="text-[.8rem] font-semibold text-ink leading-[1.3]">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <p class="text-center text-[.76rem] text-muted mt-5">Angebundene Systeme – jedes einzeln ersetzbar, ohne dass sich die Arbeitsweise ändert.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntegrationHeadSection',
  data() {
    return {
      // „Suchen, recherchieren, bewerten, anschreiben, telefonieren – alles an
      // einer Oberfläche." (Systementwurf, Der Aufbau)
      doing: ['Suchen', 'Recherchieren', 'Bewerten', 'Anschreiben', 'Telefonieren', 'Auswerten'],
      systems: [
        { label: 'Bewerbersoftware', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75' },
        { label: 'Mailkonto', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
        { label: 'Telefonie', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
        { label: 'Microsoft Teams', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
        { label: 'Jobportale', icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z' },
        { label: 'Handelsregister', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
        { label: 'Ihre Homepage', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.949 8.949 0 0012 21zM3 12h18' }
      ]
    }
  }
}
</script>
