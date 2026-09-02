<template>
  <!-- Das strukturelle Argument: ein Satz greift auf mehrere Systeme zu.
       Das kann nur, wer als Schicht darüber liegt. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="max-[880px]:order-2">
        <BrowserFrame url="app-matchmaker-hr.netlify.app/ki-assistent">
          <div ref="reach" class="min-h-[408px] max-[560px]:min-h-[614px]">
            <div class="rounded-[7px] bg-blue text-white px-[13px] py-[11px] text-[.8rem] leading-[1.45]">
              „Such passende Stellen bei der Deutschen Bank für Max Mustermann, recherchier
              den Ansprechpartner und entwirf das Anschreiben."
            </div>

            <div class="flex justify-center py-[10px]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="text-[#cbd5e1]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </div>

            <div class="flex flex-col gap-[7px]">
              <div v-for="(s, i) in schritte" :key="s.system" v-show="i < sichtbar"
                   class="schritt flex items-center gap-[11px] rounded-[7px] border border-line bg-white px-[13px] py-[10px] max-[560px]:flex-wrap">
                <span class="w-[28px] h-[28px] shrink-0 rounded-[5px] bg-navy/[0.07] text-navy flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-[.85rem] font-bold text-ink leading-tight">{{ s.system }}</span>
                  <span class="block text-[.76rem] text-muted leading-[1.4] mt-[2px]">{{ s.tat }}</span>
                </span>
                <span class="text-[.72rem] font-semibold text-blue whitespace-nowrap shrink-0 max-[560px]:basis-[calc(100%_-_39px)] max-[560px]:ml-[39px] max-[560px]:mt-[4px]">{{ s.agent }}</span>
              </div>
            </div>

            <div class="mt-[13px] rounded-[7px] border border-line bg-surface px-[13px] py-[10px] flex items-center gap-[10px] max-[560px]:flex-wrap">
              <span class="w-[24px] h-[24px] shrink-0 rounded-full bg-blue-soft text-blue flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              </span>
              <span class="text-[.8rem] text-ink flex-1 min-w-0">Anschreiben liegt zur Freigabe bereit</span>
            </div>
          </div>
        </BrowserFrame>
      </div>
      <div class="two-text max-[880px]:order-1">
        <EyebrowBadge>Reichweite</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Ein Satz, <span class="text-blue">vier Systeme.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Ein Assistent in der Bewerbersoftware bedient die Bewerbersoftware. Dieser liegt
          über allen angebundenen Systemen – und arbeitet quer darüber.
        </p>
        <FeatureList :items="features" />
      </div>

    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import BrowserFrame from '@/components/ui/BrowserFrame.vue'

export default {
  name: 'AssistantReachSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      sichtbar: 0,
      features: [
        'Ein Auftrag darf mehrere angebundene Systeme berühren',
        'Kein Wechsel zwischen Bewerbersoftware, Portal und Postfach',
        'Möglich, weil matchmaker über den Systemen liegt – nicht in einem'
      ],
      schritte: [
        {
          system: 'Jobportale & Karriereseiten',
          tat: 'Offene Stellen der Deutschen Bank gefunden',
          agent: 'Market Agent',
          icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z'
        },
        {
          system: 'Handelsregister',
          tat: 'Ansprechpartner statt Sammelpostfach',
          agent: 'Market Agent',
          icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
        },
        {
          system: 'Bewerbersoftware',
          tat: 'Profil und Treffer abgeglichen',
          agent: 'Matching Agent',
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375'
        },
        {
          system: 'Mailkonto',
          tat: 'Anschreiben entworfen, nicht versendet',
          agent: 'Outreach Agent',
          icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        }
      ]
    }
  },
  mounted() {
    const ruhig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ruhig) { this.sichtbar = this.schritte.length; return }
    const imBlick = () => {
      const r = this.$refs.reach.getBoundingClientRect()
      return r.top < window.innerHeight * 0.8 && r.bottom > 0
    }
    if (typeof IntersectionObserver === 'undefined' || imBlick()) { this.starten(); return }
    this._obs = new IntersectionObserver((e) => {
      if (e.some(x => x.isIntersecting)) { this._obs.disconnect(); this._obs = null; this.starten() }
    }, { threshold: 0.3 })
    this._obs.observe(this.$refs.reach)
  },
  beforeUnmount() {
    if (this._t) clearTimeout(this._t)
    if (this._obs) this._obs.disconnect()
  },
  methods: {
    warten(ms, dann) { this._t = setTimeout(dann, ms) },
    starten() {
      this.sichtbar = 0
      const zeige = (n) => {
        this.sichtbar = n
        if (n < this.schritte.length) { this.warten(560, () => zeige(n + 1)); return }
        this.warten(5400, () => { this.sichtbar = 0; this.warten(700, () => zeige(1)) })
      }
      this.warten(600, () => zeige(1))
    }
  }
}
</script>

<style scoped>
.schritt { animation: einblenden .34s cubic-bezier(.22,.61,.36,1) both; }
@keyframes einblenden {
  from { opacity: 0; transform: translateX(-8px) }
  to   { opacity: 1; transform: none }
}
@media (prefers-reduced-motion: reduce) { .schritt { animation: none } }
</style>
