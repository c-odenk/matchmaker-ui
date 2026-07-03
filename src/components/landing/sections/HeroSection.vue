<template>
  <section class="hero relative bg-navy text-white overflow-hidden" id="hero">
    <div class="absolute top-[-20%] right-[-10%] w-[55%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.5),transparent_65%)] blur-[60px] pointer-events-none"></div>
    <div class="absolute bottom-[-30%] left-[-8%] w-[45%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.2),transparent_70%)] blur-[70px] pointer-events-none"></div>

    <div class="wrap relative z-[2] grid [grid-template-columns:1.5fr_.9fr] gap-11 items-center pt-[74px] px-6 pb-[84px] max-[880px]:grid-cols-1 max-[880px]:gap-9 max-[880px]:pt-10 max-[880px]:pb-[54px]">
      <div class="hero-left relative max-[880px]:text-center">
        <EyebrowBadge dark>KI-gestütztes Talentpool-Management</EyebrowBadge>

        <div class="flex items-center gap-[9px] mb-[14px] ml-[5px] mt-[14px] max-[880px]:justify-center max-[880px]:ml-0">
          <span class="text-[#fbbf24] text-[.92rem] tracking-[1px]">★★★★★</span>
          <span class="text-[.82rem] text-white/[0.72]">Aus der Beratungspraxis empfohlen</span>
        </div>

        <h1 class="text-hero mt-5">
          Recruiting-Automatisierung, die <br>
          <span class="text-[#5fa0ea]">Ihrem Urteil</span> vertraut.
        </h1>

        <p class="text-lead text-white/[0.82] max-w-[614px] mt-[18px] max-[880px]:mx-auto">
          KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching und Anschreiben. Sie entscheiden - immer!
        </p>

        <div class="flex gap-3 mt-[30px] flex-wrap max-[880px]:justify-center max-[560px]:flex-col max-[560px]:items-stretch">
          <BaseButton variant="blue" :href="loginUrl" class="max-[560px]:w-full">Jetzt anmelden →</BaseButton>
          <BaseButton variant="ghost-dark" class="max-[560px]:w-full" @click="openDemo">Demo vereinbaren</BaseButton>
        </div>

        <div class="flex gap-5 mt-[14px] flex-wrap text-[.85rem] text-white/[0.62] max-[880px]:justify-center max-[560px]:gap-2 max-[560px]:text-[.76rem]">
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>DSGVO-konform</span>
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>EU-Hosting</span>
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>Human-in-the-Loop</span>
        </div>
      </div>

      <div class="hero-visual relative max-[880px]:hidden">
        <div class="relative w-full max-w-[440px] ml-auto">
          <div class="relative w-full rounded-[22px] overflow-hidden aspect-[4/4.4] shadow-hero-photo border border-white/10">
            <picture>
              <source :srcset="heroAvif" type="image/avif" />
              <source :srcset="heroWebp" type="image/webp" />
              <img
                :src="heroImg"
                alt="Personalberaterin arbeitet mit matchmaker.hr am Laptop"
                width="907" height="982"
                fetchpriority="high" decoding="async"
                class="block w-full h-full object-cover"
              />
            </picture>
          </div>

          <!-- Schwebende Badges (aktuell ausgeblendet, Markup für spätere Nutzung erhalten) -->
          <div class="hero-badges">
            <div class="hero-badge hb-stat">
              <span class="hb-ic hb-ic-green">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
              </span>
              <span class="hb-txt"><b>−70&nbsp;%</b>&nbsp;weniger Aufwand</span>
            </div>
            <div class="hero-badge hb-time">
              <span class="hb-ic hb-ic-blue">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
              Mehr Zeit für Beratung
            </div>
            <div class="hero-badge hb-scale">
              <span class="hb-ic hb-ic-navy">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25h-4.5m4.5 0v4.5m0-4.5L15 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/></svg>
              </span>
              Skalierbarer Outreach
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
import heroImg from '@/assets/Hero-Consultant.jpg'
import heroWebp from '@/assets/Hero-Consultant.webp'
import heroAvif from '@/assets/Hero-Consultant.avif'

export default {
  name: 'HeroSection',
  components: { BaseButton, EyebrowBadge },
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      heroImg, heroWebp, heroAvif
    }
  },
  methods: {
    openDemo() { openDemoModal() }
  }
}
</script>

<style scoped>
/* Schwebende Badges – aktuell ausgeblendet; Positionen für spätere Reaktivierung erhalten. */
.hero-badges { display: none; }
.hero-badge { position: absolute; z-index: 3; display: flex; align-items: center; gap: 7px; background: #fff; border: 1px solid #e7ebf1; border-radius: 11px; padding: 5px 9px; box-shadow: 0 16px 34px rgba(8, 15, 30, .20); font-size: .72rem; font-weight: 600; color: #0f172a; white-space: nowrap; }
.hero-badge .hb-ic { width: 25px; height: 25px; flex-shrink: 0; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
.hb-ic-green { background: #e7f8ee; color: #15803d; }
.hb-ic-blue { background: #eaf2fc; color: #2976d6; }
.hb-ic-navy { background: rgba(23, 43, 77, .08); color: #172b4d; }
.hb-stat .hb-txt { display: inline-flex; align-items: baseline; gap: 5px; line-height: 1; }
.hb-stat .hb-txt b { font-size: .86rem; font-weight: 800; color: #0f172a; }
.hb-stat { top: 112px; left: -92px; }
.hb-time { top: 50%; transform: translateY(-50%); right: -56px; }
.hb-scale { bottom: 112px; left: -82px; }
@media (min-width: 881px) and (max-width: 1279px) { .hb-time { right: -22px; } }
@media (max-width: 560px) {
  .hero-badge { font-size: .73rem; padding: 7px 10px; gap: 7px; }
  .hero-badge .hb-ic { width: 26px; height: 26px; }
  .hb-stat .hb-txt b { font-size: .9rem; }
  .hb-stat { top: 54px; left: -20px; }
  .hb-time { top: 50%; transform: translateY(-50%); right: -18px; }
  .hb-scale { bottom: 54px; left: -20px; }
}
</style>
