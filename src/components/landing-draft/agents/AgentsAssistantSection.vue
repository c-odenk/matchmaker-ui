<template>
  <!-- Ergänzung zum Agentensystem: der Bestand wird im Gespräch und über die
       Karte zugänglich. Text links, App-Ansicht rechts. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <EyebrowBadge>KI-Assistent</EyebrowBadge>
          <span class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">Beta</span>
        </div>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Fragen Sie Ihren <span class="text-blue">Bestand.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Ein zweiter Weg in Ihre Daten: der Pool als Karte, daneben ein Chat – Sie fragen in eigenen Worten.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/ki-assistent">
          <!-- Karte -->
          <div class="flex items-center gap-[10px] text-[.72rem] text-muted mb-[9px] flex-wrap">
            <span class="font-semibold text-body">Vermittlungsstand</span>
            <span v-for="l in legend" :key="l.label" class="inline-flex items-center gap-[5px] whitespace-nowrap">
              <span class="w-[7px] h-[7px] rounded-full" :class="l.dot"></span>{{ l.label }}
            </span>
          </div>

          <div class="relative rounded-[10px] border border-line overflow-hidden aspect-[16/9] bg-white">
            <div class="absolute inset-0" style="background-image: radial-gradient(#e7ebf1 1px, transparent 1px); background-size: 14px 14px;"></div>
            <div
              v-for="c in clusters" :key="c.label"
              class="absolute rounded-full border border-dashed border-[#cddcf0] bg-blue/[0.05]"
              :style="c.box"
            ></div>
            <span
              v-for="c in clusters" :key="c.label + '-l'"
              class="absolute -translate-x-1/2 text-[.64rem] font-bold tracking-[0.03em] uppercase text-blue bg-white border border-[#cddcf0] rounded-full px-[7px] py-[2px] whitespace-nowrap"
              :style="c.label_pos"
            >{{ c.label }}</span>
            <span
              v-for="(d, i) in dots" :key="'d' + i"
              class="absolute w-[7px] h-[7px] rounded-full -translate-x-1/2 -translate-y-1/2"
              :class="d.color"
              :style="d.pos"
            ></span>
          </div>
          <div class="text-[.72rem] text-muted mt-[9px]">Punkt anklicken, um ein Profil und seine Vakanzen zu öffnen.</div>

          <!-- Chat -->
          <div class="mt-[16px] pt-[14px] border-t border-line">
            <div class="flex items-center gap-[10px]">
              <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-navy text-white flex items-center justify-center text-[.64rem] font-bold">KI</span>
              <span class="min-w-0">
                <span class="block text-[.84rem] font-bold text-ink leading-tight">Assistent</span>
                <span class="block text-[.72rem] text-muted">128 Profile · 6 Mandate</span>
              </span>
            </div>

            <p class="text-[.78rem] text-body leading-[1.5] mt-[11px]">
              Ich kenne alle Profile in Ihrem Pool und Ihre Mandate. Fragen Sie mich danach.
            </p>

            <div class="flex flex-col gap-[7px] mt-[11px]">
              <span v-for="q in questions" :key="q" class="border border-line rounded-[9px] px-[11px] py-[8px] text-[.76rem] text-ink leading-[1.35]">{{ q }}</span>
            </div>

            <div class="mt-[12px] border border-line rounded-[10px] bg-surface px-[11px] py-[9px] flex items-center gap-2">
              <span class="text-[.76rem] text-muted flex-1 min-w-0 truncate">Fragen Sie etwas oder hängen Sie eine Stellenbeschreibung an…</span>
              <span class="w-[26px] h-[26px] shrink-0 rounded-full bg-blue text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
              </span>
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
  name: 'AgentsAssistantSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      features: [
        'Ihr Kandidatenpool als Karte – fachlich oder geografisch gruppiert',
        'Fragen in eigenen Worten statt Filter und Suchmasken',
        'Stellenbeschreibung anhängen und direkt gegen den Bestand prüfen'
      ],
      legend: [
        { label: '≥ 80', dot: 'bg-green' },
        { label: '50–79', dot: 'bg-[#ea580c]' },
        { label: '1–49', dot: 'bg-navy/40' },
        { label: 'offen', dot: 'bg-[#dbe2ec]' }
      ],
      questions: [
        'Für wen wurde noch keine passende Stelle gefunden?',
        'Wer hat einen Treffer über 80?',
        'Welche Mandate haben keine passenden Kandidaten?'
      ],
      clusters: [
        { label: 'IT & Software', box: 'left:52%; top:8%;  width:30%; height:54%;', label_pos: 'left:67%; top:2%;' },
        { label: 'Operations',    box: 'left:12%; top:12%; width:28%; height:50%;', label_pos: 'left:26%; top:6%;' },
        { label: 'Vertrieb',      box: 'left:70%; top:44%; width:24%; height:44%;', label_pos: 'left:82%; top:38%;' },
        { label: 'Finance',       box: 'left:32%; top:48%; width:26%; height:46%;', label_pos: 'left:45%; top:42%;' }
      ],
      dots: [
        { color: 'bg-green',     pos: 'left:62%; top:26%;' },
        { color: 'bg-[#ea580c]', pos: 'left:72%; top:20%;' },
        { color: 'bg-green',     pos: 'left:68%; top:44%;' },
        { color: 'bg-navy/40',   pos: 'left:58%; top:50%;' },
        { color: 'bg-green',     pos: 'left:22%; top:30%;' },
        { color: 'bg-[#ea580c]', pos: 'left:31%; top:22%;' },
        { color: 'bg-[#dbe2ec]', pos: 'left:18%; top:48%;' },
        { color: 'bg-green',     pos: 'left:80%; top:62%;' },
        { color: 'bg-navy/40',   pos: 'left:86%; top:74%;' },
        { color: 'bg-green',     pos: 'left:42%; top:66%;' },
        { color: 'bg-[#dbe2ec]', pos: 'left:48%; top:80%;' }
      ]
    }
  }
}
</script>
