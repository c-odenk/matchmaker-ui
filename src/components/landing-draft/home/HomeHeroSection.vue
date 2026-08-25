<template>
  <section class="hero relative bg-navy text-white overflow-hidden" id="hero">
    <!-- Weiches Licht wie auf allen Navy-Flächen der Seite -->
    <div class="absolute top-[-20%] right-[-10%] w-[55%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.5),transparent_65%)] blur-[60px] pointer-events-none"></div>
    <div class="absolute bottom-[-30%] left-[-8%] w-[45%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.2),transparent_70%)] blur-[70px] pointer-events-none"></div>
    <!-- Feines Raster als Textur, nach unten ausgeblendet -->
    <div class="hero-grid absolute inset-0 pointer-events-none"></div>

    <div class="wrap relative z-[2] grid [grid-template-columns:1.15fr_1fr] gap-12 items-center pt-[140px] px-6 pb-[150px] max-[880px]:grid-cols-1 max-[880px]:gap-10 max-[880px]:pt-20 max-[880px]:pb-24">
      <div class="hero-left relative max-[880px]:text-center">
        <EyebrowBadge dark>Automatisierungsschicht</EyebrowBadge>

        <h1 class="text-hero mt-5">
          Ihre Systeme bleiben. <br>
          <span class="text-[#5fa0ea]">Die Handarbeit nicht.</span>
        </h1>

        <p class="text-lead text-white/[0.82] max-w-[560px] mt-[18px] max-[880px]:mx-auto">
          matchmaker legt sich über Ihre bestehenden Systeme und automatisiert, was Sie heute von Hand bedienen.
        </p>

        <div class="flex gap-3 mt-[30px] flex-wrap max-[880px]:justify-center max-[560px]:flex-col max-[560px]:items-stretch">
          <BaseButton variant="blue" :href="loginUrl" class="max-[560px]:w-full">Jetzt anmelden →</BaseButton>
          <BaseButton variant="ghost-dark" class="max-[560px]:w-full" @click="openDemo">Demo vereinbaren</BaseButton>
        </div>
      </div>

      <!-- Schichtbild: helle Bedienschicht über den angebundenen Systemen -->
      <div class="hero-visual relative">
        <div class="absolute -inset-x-10 -inset-y-12 bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.38),transparent_70%)] blur-[55px] pointer-events-none"></div>

        <div class="relative w-full max-w-[580px] ml-auto max-[880px]:mx-auto">
          <!-- Bedienschicht -->
          <div class="relative rounded-[16px] bg-white text-ink overflow-hidden shadow-[0_34px_70px_-18px_rgba(4,10,24,.75)] ring-1 ring-white/40">
            <div class="h-[3px] bg-gradient-to-r from-blue to-[#5fa0ea]"></div>
            <div class="flex items-center justify-between gap-3 px-6 py-5 flex-wrap max-[560px]:px-5">
              <div class="flex items-center gap-3">
                <span class="w-[40px] h-[40px] shrink-0 rounded-xl bg-navy text-white flex items-center justify-center">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
                </span>
                <span class="text-left">
                  <span class="block text-[1.05rem] font-bold tracking-[-0.01em] leading-tight">matchmaker</span>
                  <span class="block text-[.78rem] text-muted">Ihre neue Oberfläche</span>
                </span>
              </div>
              <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[11px] py-[4px] rounded-full bg-blue-soft text-blue">
                <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Automatisiert
              </span>
            </div>
          </div>

          <!-- Verbindung -->
          <div class="relative h-9 flex justify-center">
            <span class="w-px h-full bg-gradient-to-b from-white/45 to-white/10"></span>
            <span class="absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#5fa0ea] ring-4 ring-[#5fa0ea]/20"></span>
          </div>

          <!-- Angebundene Systeme -->
          <div class="rounded-[16px] border border-white/[0.16] bg-white/[0.06] p-[18px] max-[560px]:p-4">
            <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/55 mb-[14px] text-center">Ihre bestehenden Systeme</div>
            <div class="grid grid-cols-3 gap-[10px] max-[560px]:grid-cols-2 max-[560px]:gap-[8px]">
              <div v-for="s in systems" :key="s.label"
                   class="rounded-[11px] border border-white/[0.16] bg-white/[0.09] px-2 py-[14px] flex flex-col items-center gap-[9px] text-center max-[560px]:flex-row max-[560px]:text-left max-[560px]:px-[10px] max-[560px]:py-[9px] max-[560px]:gap-[8px]">
                <span class="w-[30px] h-[30px] shrink-0 rounded-[9px] bg-white/[0.12] flex items-center justify-center max-[560px]:w-[26px] max-[560px]:h-[26px]">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" class="text-[#9cc6f2]"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
                </span>
                <span class="text-[.74rem] font-semibold text-white/[0.9] leading-tight min-w-0">{{ s.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import { openDemoModal } from '@/composables/demoModal'

export default {
  name: 'HomeHeroSection',
  components: { BaseButton, EyebrowBadge },
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      systems: [
        { label: 'Bewerbersoftware', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75' },
        { label: 'Mailkonto', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
        { label: 'Telefonie', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
        { label: 'Microsoft Teams', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
        { label: 'Jobportale', icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z' },
        { label: 'Handelsregister', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' }
      ]
    }
  },
  methods: {
    openDemo() { openDemoModal() }
  }
}
</script>

<style scoped>
/* Feines Linienraster als Textur – nach unten weich ausgeblendet, damit es
   den Inhalt nicht stört. */
.hero-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 58px 58px;
  -webkit-mask-image: radial-gradient(ellipse 80% 65% at 50% 0%, #000 30%, transparent 78%);
  mask-image: radial-gradient(ellipse 80% 65% at 50% 0%, #000 30%, transparent 78%);
}
</style>
