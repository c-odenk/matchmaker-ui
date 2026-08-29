<template>
  <!-- 1 · Die Karte: Text links, App-Ansicht rechts. Die Schalter oben
       wechseln von selbst durch – die Punkte ordnen sich neu. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>Die Karte</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Auswählen und beauftragen – <span class="text-blue">ohne Umweg über Listen.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Erst die Menge eingrenzen, dann den Agenten darauf ansetzen. Jeder Punkt ist ein
          Profil, die Schalter oben bestimmen, wonach gruppiert wird.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/ki-assistent">
          <div ref="karte">
            <!-- Filter: wonach gruppiert wird -->
            <div class="flex items-center gap-[6px] flex-wrap mb-[11px]">
              <span class="text-[.72rem] font-semibold text-body mr-[3px]">Gruppieren nach</span>
              <span v-for="(g, i) in gruppen" :key="g.name"
                    class="text-[.72rem] font-semibold px-[10px] py-[4px] rounded-full border whitespace-nowrap transition-colors duration-300"
                    :class="i === aktiv ? 'bg-blue text-white border-blue' : 'bg-white text-body border-line'">{{ g.name }}</span>
            </div>

            <!-- Legende -->
            <div class="flex items-center gap-[10px] text-[.72rem] text-muted mb-[9px] flex-wrap">
              <span class="font-semibold text-body">Vermittlungsstand</span>
              <span v-for="l in legend" :key="l.label" class="inline-flex items-center gap-[5px] whitespace-nowrap">
                <span class="w-[7px] h-[7px] rounded-full" :class="l.dot"></span>{{ l.label }}
              </span>
            </div>

            <div class="relative rounded-[7px] border border-line overflow-hidden aspect-[16/9] bg-white">
              <div class="absolute inset-0" style="background-image: radial-gradient(#e7ebf1 1px, transparent 1px); background-size: 14px 14px;"></div>
              <div v-for="b in boxen" :key="b.box"
                   class="absolute rounded-full border border-dashed border-[#cddcf0] bg-blue/[0.05]" :style="b.box"></div>
              <span v-for="(b, i) in boxen" :key="'l' + i"
                    class="gruppenname absolute -translate-x-1/2 text-[.64rem] font-bold tracking-[0.03em] uppercase text-blue bg-white border border-[#cddcf0] rounded-full px-[7px] py-[2px] whitespace-nowrap"
                    :style="b.label_pos">{{ gruppen[aktiv].labels[i] }}</span>
              <span v-for="(d, i) in punkte" :key="'d' + i"
                    class="punkt absolute w-[7px] h-[7px] rounded-full -translate-x-1/2 -translate-y-1/2"
                    :class="d.color" :style="gruppen[aktiv].pos[i]"></span>
            </div>
            <div class="text-[.72rem] text-muted mt-[9px]">Punkt anklicken, um ein Profil und seine Vakanzen zu öffnen.</div>

            <!-- Die markierte Menge lässt sich unmittelbar beauftragen -->
            <div class="mt-[12px] pt-[12px] border-t border-line flex items-center gap-[10px] max-[560px]:flex-wrap">
              <span class="inline-flex items-center gap-[6px] text-[.72rem] font-semibold px-[10px] py-[4px] rounded-full bg-blue-soft text-blue whitespace-nowrap shrink-0">
                <span class="w-[6px] h-[6px] rounded-full bg-blue shrink-0"></span>5 ausgewählt
              </span>
              <span class="text-[.76rem] text-ink flex-1 min-w-0 max-[560px]:basis-full">„Für die Auswahl den Market Agent starten."</span>
              <span class="h-[28px] inline-flex items-center px-[11px] rounded-[5px] text-[.72rem] font-semibold bg-blue text-white shrink-0">Ausführen</span>
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
  name: 'AssistantMapSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      aktiv: 0,
      features: [
        'Gruppiert nach Fachgebiet, Region oder Mandat',
        'Auswahl markieren und den Auftrag direkt darauf richten',
        'Kein Umweg über Liste, Export oder zweites Programm'
      ],
      legend: [
        { label: '≥ 80', dot: 'bg-green' },
        { label: '50–79', dot: 'bg-[#ea580c]' },
        { label: '1–49', dot: 'bg-navy/40' },
        { label: 'offen', dot: 'bg-[#dbe2ec]' }
      ],
      // Die vier Felder bleiben stehen; Beschriftung und Punkte wechseln.
      boxen: [
        { box: 'left:52%; top:8%;  width:30%; height:54%;', label_pos: 'left:67%; top:2%;' },
        { box: 'left:12%; top:12%; width:28%; height:50%;', label_pos: 'left:26%; top:6%;' },
        { box: 'left:70%; top:44%; width:24%; height:44%;', label_pos: 'left:82%; top:38%;' },
        { box: 'left:32%; top:48%; width:26%; height:46%;', label_pos: 'left:45%; top:42%;' }
      ],
      // Farbe = Vermittlungsstand, bleibt beim Umgruppieren gleich
      punkte: [
        { color: 'bg-green' }, { color: 'bg-[#ea580c]' }, { color: 'bg-green' },
        { color: 'bg-navy/40' }, { color: 'bg-green' }, { color: 'bg-[#ea580c]' },
        { color: 'bg-[#dbe2ec]' }, { color: 'bg-green' }, { color: 'bg-navy/40' },
        { color: 'bg-green' }, { color: 'bg-[#dbe2ec]' }
      ],
      gruppen: [
        {
          name: 'Fachgebiet',
          labels: ['IT & Software', 'Operations', 'Vertrieb', 'Finance'],
          pos: [
            'left:62%; top:26%;', 'left:72%; top:20%;', 'left:68%; top:44%;',
            'left:58%; top:50%;', 'left:22%; top:30%;', 'left:31%; top:22%;',
            'left:18%; top:48%;', 'left:80%; top:62%;', 'left:86%; top:74%;',
            'left:42%; top:66%;', 'left:48%; top:80%;'
          ]
        },
        {
          name: 'Region',
          labels: ['Hamburg', 'Berlin', 'München', 'Rhein-Main'],
          pos: [
            'left:66%; top:22%;', 'left:60%; top:38%;', 'left:74%; top:34%;',
            'left:24%; top:24%;', 'left:30%; top:40%;', 'left:18%; top:34%;',
            'left:34%; top:52%;', 'left:78%; top:56%;', 'left:84%; top:70%;',
            'left:40%; top:72%;', 'left:50%; top:64%;'
          ]
        },
        {
          name: 'Mandat',
          labels: ['Cloud Arch.', 'Ops Lead', 'Sales DACH', 'Controlling'],
          pos: [
            'left:58%; top:18%;', 'left:70%; top:30%;', 'left:64%; top:48%;',
            'left:76%; top:22%;', 'left:20%; top:26%;', 'left:28%; top:44%;',
            'left:34%; top:30%;', 'left:82%; top:66%;', 'left:76%; top:78%;',
            'left:44%; top:60%;', 'left:38%; top:78%;'
          ]
        },
        {
          name: 'Seniorität',
          labels: ['Lead', 'Senior', 'Professional', 'Junior'],
          pos: [
            'left:64%; top:34%;', 'left:56%; top:20%;', 'left:74%; top:48%;',
            'left:68%; top:14%;', 'left:26%; top:20%;', 'left:22%; top:42%;',
            'left:32%; top:34%;', 'left:84%; top:58%;', 'left:78%; top:72%;',
            'left:46%; top:56%;', 'left:40%; top:84%;'
          ]
        }
      ]
    }
  },
  mounted() {
    const ruhig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ruhig) return
    // Liegt der Ausschnitt beim Laden schon im Bild, direkt loslegen –
    // sonst erst, wenn er hereingescrollt wird.
    const imBlick = () => {
      const r = this.$refs.karte.getBoundingClientRect()
      return r.top < window.innerHeight * 0.8 && r.bottom > 0
    }
    if (typeof IntersectionObserver === 'undefined' || imBlick()) { this.starten(); return }
    this._obs = new IntersectionObserver((e) => {
      if (e.some(x => x.isIntersecting)) { this._obs.disconnect(); this._obs = null; this.starten() }
    }, { threshold: 0.35 })
    this._obs.observe(this.$refs.karte)
  },
  beforeUnmount() {
    if (this._t) clearInterval(this._t)
    if (this._obs) this._obs.disconnect()
  },
  methods: {
    starten() {
      this._t = setInterval(() => {
        this.aktiv = (this.aktiv + 1) % this.gruppen.length
      }, 3400)
    }
  }
}
</script>

<style scoped>
/* Die Punkte wandern in ihre neue Gruppe, statt zu springen. */
.punkt {
  transition: left .85s cubic-bezier(.22,.61,.36,1), top .85s cubic-bezier(.22,.61,.36,1);
}
.gruppenname { transition: opacity .3s ease; }

@media (prefers-reduced-motion: reduce) {
  .punkt { transition: none; }
}
</style>
