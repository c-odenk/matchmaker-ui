<template>
  <!-- ENTWURFSKOPIE des Produktblicks – identisch zur Live-Fassung, nur mit dem
       Eyebrow des Entwurfs. Die geteilte Komponente bleibt unberührt. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text min-w-0 max-[880px]:text-center max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <EyebrowBadge>KI-Begründung</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Die KI bereitet vor. <span class="text-blue">Der Berater entscheidet.</span></h2>
        <p class="text-lead text-body">Alle Agenten arbeiten im Hintergrund und legen versandfertige Vorschläge vor. Nichts geht raus, bevor es freigegeben ist.</p>
        <FeatureList :items="features" />
      </div>

      <div class="relative min-w-0 max-[880px]:w-full max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <BrowserFrame url="app-matchmaker-hr.netlify.app/kandidaten">
          <div class="font-bold text-[1rem]">Director Cloud Architecture &amp; Enterprise IT (m/w/d)</div>
          <div class="text-[.76rem] text-muted mt-1 flex items-center gap-[7px] flex-wrap">Nexis Cloud Systems GmbH · Berlin <span class="src-pill !ml-0">LinkedIn</span> · 17.6.2026</div>
          <div class="kibox">
            <div class="kiscore">
              <div class="kinum">94</div>
              <div class="kilbl">Match Score</div>
            </div>
            <div class="kihead"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>KI-Begründung</div>
            <div class="kitext">
              <p>Passt, weil Qualifikationsprofil, Führungsverantwortung und Rahmenbedingungen nahezu deckungsgleich mit dem Kandidatenprofil sind.</p>
              <div class="kimore" :class="{ open: kiExpanded }">
                <p class="mt-2">Die Anforderungen treffen die Kernkompetenzen: 12 Jahre IT-Infrastruktur inkl. Consulting-Background, Führung eines 15-FTE-Teams, Budgetverantwortung von 1,5 Mio. € p.a. Die geforderten Zertifizierungen (PMP, Certified Scrum Master) liegen vollständig vor.</p>
                <p class="mt-2">Der Standort Berlin weicht vom Wohnort Hamburg ab – das hybride Modell mit bis zu 80 % Remote deckt sich aber mit der Suchpräferenz.</p>
                <p class="mt-2"><b class="text-ink">Empfehlung:</b> Direktansprache mit hoher Priorität – Closing-Potenzial sehr hoch. Titel-Upgrade (Director) als zentrales Verkaufsargument positionieren.</p>
              </div>
              <button type="button" class="kitoggle" :aria-expanded="kiExpanded ? 'true' : 'false'" @click="kiExpanded = !kiExpanded">
                {{ kiExpanded ? 'Weniger anzeigen' : 'Ganze Begründung lesen' }}
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" :class="{ 'rotate-180': kiExpanded }"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
              </button>
              <div class="kirate">Bewertung zutreffend? <span class="kistars">★★★★★</span></div>
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
  name: 'MatchingSectionDraft',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      kiExpanded: false,
      features: [
        'Pro Kandidat automatisch gefundene Vakanzen mit Match-Score',
        'Nachvollziehbare KI-Begründung zu jedem Treffer',
        'Die Nachricht geht erst nach der Freigabe raus'
      ]
    }
  }
}
</script>

<style scoped>
.src-pill { display: inline-block; font-size: .66rem; font-weight: 600; color: #56657c; background: #eef2f7; border: 1px solid #e7ebf1; border-radius: 4px; padding: 1px 7px; margin-left: 4px; vertical-align: middle; }
.kibox { margin-top: 16px; display: grid; grid-template-columns: auto 1fr; column-gap: 18px; row-gap: 8px; align-items: start; background: #f0faf4; border: 1px solid #cdeed9; border-radius: 9px; padding: 18px 20px; }
.kiscore { width: 78px; text-align: center; grid-column: 1; grid-row: 1 / span 2; }
.kinum { width: 62px; height: 62px; border-radius: 50%; border: 3px solid #16a34a; color: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; font-weight: 800; margin: 0 auto; }
.kilbl { font-size: .58rem; text-transform: uppercase; letter-spacing: .05em; color: #15803d; font-weight: 700; margin-top: 7px; }
.kihead { display: flex; align-items: center; gap: 7px; font-weight: 700; color: #15803d; font-size: .9rem; grid-column: 2; grid-row: 1; }
.kitext { grid-column: 2; grid-row: 2; }
.kitext p { font-size: .82rem; color: #475569; line-height: 1.55; }
.kirate { margin-top: 13px; font-size: .76rem; color: #7c8aa0; display: flex; align-items: center; gap: 8px; }
.kistars { color: #f59e0b; letter-spacing: 1px; }
/* Toggle nur auf dem Smartphone: dort ist die volle Begründung eingeklappt,
   ab >560px bleibt immer alles sichtbar. */
.kitoggle { display: none; }
@media (max-width: 880px) {
  .kibox { row-gap: 14px; }
  .kiscore { grid-row: 1; align-self: center; }
  .kihead { align-self: center; }
  .kitext { grid-column: 1 / span 2; }
}
@media (max-width: 560px) {
  .kimore { display: none; }
  .kimore.open { display: block; }
  .kitoggle {
    display: inline-flex; align-items: center; gap: 5px; margin-top: 6px;
    min-height: 40px; padding-block: 8px;
    background: none; border: none; padding: 0; cursor: pointer;
    font: inherit; font-size: .8rem; font-weight: 700; color: #15803d;
  }
  .kitoggle svg { transition: transform .2s ease; }
}
</style>
