<template>
  <!-- 3 · Die Befehle: Text links, Mockup rechts. Die Aufträge laufen nach
       und nach ein, jeder bekommt seinen Agenten zugeordnet – der letzte
       zeigt, wo die Grenze liegt. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <EyebrowBadge>Die Befehle</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Dieselben Agenten – <span class="text-blue">gezielt beauftragt.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die Automatisierung läuft nach festem Ablauf. Über den Chat stoßen Sie dieselben
          Schritte gezielt an – für ein Profil, ein Mandat, jetzt.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/ki-assistent">
          <div ref="liste" class="min-h-[404px] flex flex-col max-[560px]:min-h-[524px]">
            <div class="text-[.72rem] font-bold tracking-[0.06em] uppercase text-muted mb-[11px]">Beispiele für Aufträge</div>

            <div class="flex flex-col gap-[9px]">
              <div v-for="(b, i) in befehle" :key="b.text" v-show="i < sichtbar"
                   class="auftrag rounded-[10px] border px-[13px] py-[11px]"
                   :class="b.abgelehnt ? 'border-line bg-surface' : 'border-line bg-white'">
                <div class="flex items-start gap-[10px]">
                  <span class="w-[24px] h-[24px] shrink-0 rounded-[7px] flex items-center justify-center"
                        :class="b.abgelehnt ? 'bg-[#eef2f7] text-muted' : 'bg-navy/[0.07] text-navy'">
                    <svg v-if="b.abgelehnt" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                    <svg v-else viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3"/></svg>
                  </span>
                  <span class="text-[.8rem] leading-[1.45] min-w-0" :class="b.abgelehnt ? 'text-muted' : 'text-ink'">„{{ b.text }}"</span>
                </div>

                <!-- Die Zuordnung kommt einen Moment später, wie eine Antwort -->
                <div v-if="i < zugeordnet" class="zuordnung flex items-center gap-[7px] mt-[9px] ml-[34px] max-[560px]:ml-0">
                  <svg v-if="!b.abgelehnt" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" class="text-muted shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
                  <span class="text-[.72rem] text-muted min-w-0">
                    <template v-if="b.abgelehnt">gehört zu keiner Agentenaufgabe – wird nicht ausgeführt</template>
                    <template v-else>übernimmt der <span class="font-semibold text-body">{{ b.agent }}</span></template>
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-auto pt-[13px] flex items-center justify-between gap-3 flex-wrap">
              <span class="text-[.76rem] text-muted">Jeder Auftrag endet als Vorschlag – freigegeben wird von Hand.</span>
            </div>
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
  name: 'AssistantCommandsSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      sichtbar: 0,
      zugeordnet: 0,
      features: [
        'Einzelfall statt Durchlauf – gezielt für ein Profil oder Mandat',
        'Nur Schritte, die die vier Agenten ohnehin ausführen',
        'Alles außerhalb dieser Aufgaben lehnt der Assistent ab'
      ],
      befehle: [
        { text: 'Suche alle ausgeschriebenen Stellen der Deutschen Bank, die zu Max Mustermann passen.', agent: 'Market Agent' },
        { text: 'Übernimm die Kandidatendaten aus diesem Link und lege das Profil an.', agent: 'Profiling Agent' },
        { text: 'Entwirf ein Anschreiben für Max Mustermann zum Mandat Cloud Architecture.', agent: 'Outreach Agent' },
        { text: 'Kündige das Mandat bei der Deutschen Bank.', abgelehnt: true }
      ]
    }
  },
  mounted() {
    const ruhig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ruhig) {
      this.sichtbar = this.befehle.length
      this.zugeordnet = this.befehle.length
      return
    }
    // Liegt der Ausschnitt beim Laden schon im Bild, direkt loslegen –
    // sonst erst, wenn er hereingescrollt wird.
    const imBlick = () => {
      const r = this.$refs.liste.getBoundingClientRect()
      return r.top < window.innerHeight * 0.8 && r.bottom > 0
    }
    if (typeof IntersectionObserver === 'undefined' || imBlick()) { this.starten(); return }
    this._obs = new IntersectionObserver((e) => {
      if (e.some(x => x.isIntersecting)) { this._obs.disconnect(); this._obs = null; this.starten() }
    }, { threshold: 0.3 })
    this._obs.observe(this.$refs.liste)
  },
  beforeUnmount() {
    if (this._t) clearTimeout(this._t)
    if (this._obs) this._obs.disconnect()
  },
  methods: {
    warten(ms, dann) { this._t = setTimeout(dann, ms) },
    starten() {
      this.sichtbar = 0
      this.zugeordnet = 0
      this.warten(500, () => this.naechster(0))
    },
    // Auftrag einblenden, kurz darauf die Zuordnung – dann der nächste.
    naechster(i) {
      if (i >= this.befehle.length) { this.warten(5200, this.starten); return }
      this.sichtbar = i + 1
      this.warten(620, () => {
        this.zugeordnet = i + 1
        this.warten(760, () => this.naechster(i + 1))
      })
    }
  }
}
</script>

<style scoped>
/* Auftrag und Zuordnung blenden einzeln ein. */
.auftrag { animation: einblenden .34s cubic-bezier(.22,.61,.36,1) both; }
.zuordnung { animation: einblenden .28s cubic-bezier(.22,.61,.36,1) both; }
@keyframes einblenden {
  from { opacity: 0; transform: translateY(6px) }
  to   { opacity: 1; transform: none }
}

@media (prefers-reduced-motion: reduce) {
  .auftrag, .zuordnung { animation: none; }
}
</style>
