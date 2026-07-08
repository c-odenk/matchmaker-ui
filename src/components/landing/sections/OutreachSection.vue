<template>
  <!-- Outreach: Mockup links, Text rechts (gespiegelt) -->
  <section class="sec bg-white">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="min-w-0 max-[880px]:order-2">
        <BrowserFrame url="app-matchmaker-hr.netlify.app/nachrichten">
          <div class="flex items-center gap-[9px] font-bold text-[.98rem]">Nachricht an Christian Weber <span class="src-pill !ml-0">Entwurf</span></div>
          <div class="grid [grid-template-columns:120px_1fr] gap-x-[22px] gap-y-[6px] mt-[14px] max-[560px]:grid-cols-1 max-[560px]:gap-y-[10px]">
            <div><div class="msg-lbl">Kandidat</div><div class="msg-val">Max Mustermann</div></div>
            <div><div class="msg-lbl">Vakanz</div><div class="msg-val">Director Cloud Architecture &amp; Enterprise IT (m/w/d) · Nexis Cloud Systems GmbH</div></div>
          </div>
          <div class="msg-field">
            <div class="msg-lbl">Empfänger &amp; Kanal auswählen</div>
            <div class="flex items-center gap-2 text-[.81rem] flex-wrap"><span class="font-semibold">Christian Weber</span><span class="src-pill !ml-0">E-Mail</span><span class="text-muted">c.weber@nexis-cloud.example.com</span></div>
          </div>
          <div class="mt-[13px]"><div class="msg-lbl">Betreff</div><div class="msg-input">Erfahrener Director Cloud Architecture – Passung zu Ihrer Vakanz</div></div>
          <div class="mt-[13px]">
            <div class="msg-lbl">Nachricht</div>
            <div class="msg-body msg-body-full">Sehr geehrte Damen und Herren,<br><br>ich melde mich, weil ich eine Führungspersönlichkeit betreue, die hervorragend auf Ihre Position als Director Cloud Architecture &amp; Enterprise IT passt.<br><br>Die Person bringt 12 Jahre IT-Erfahrung mit, davon 5 in leitender Funktion, und hat eine Cloud-Infrastruktur von 10 auf 200 Knoten skaliert …<br><br>Gerne sende ich Ihnen das vollständige Profil zu oder stehe für ein kurzes Gespräch zur Verfügung.</div>
            <div class="msg-body msg-body-short">Sehr geehrte Damen und Herren,<br><br>ich betreue eine Führungspersönlichkeit, die hervorragend auf Ihre Vakanz als Director Cloud Architecture passt – 12 Jahre IT-Erfahrung, davon 5 in leitender Funktion.<br><br>Gerne sende ich Ihnen das vollständige Profil zu.</div>
          </div>
          <div class="msg-foot">
            <span class="msg-btn">Schließen</span>
            <span class="msg-btn">Speichern</span>
            <span class="msg-btn msg-btn-primary">Als Versandbereit markieren</span>
          </div>
        </BrowserFrame>
      </div>

      <div class="min-w-0 max-[880px]:order-1 max-[880px]:text-center max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <EyebrowBadge>Kontaktaufnahme</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Das Anschreiben? <span class="text-blue">Schon formuliert.</span></h2>
        <p class="text-lead text-body">Der Outreach Agent recherchiert den passenden Ansprechpartner, wählt den Kanal und formuliert eine individuelle Nachricht – versandfertig als Entwurf. Sie prüfen, passen bei Bedarf an und geben frei.</p>
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
  name: 'OutreachSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      features: [
        'Ansprechpartner und Kanal automatisch ermittelt',
        'Individuell formulierter Betreff und Text je Kontakt',
        'Versand erst nach Ihrer Freigabe – „Als versandbereit markieren"'
      ]
    }
  }
}
</script>

<style scoped>
.src-pill { display: inline-block; font-size: .66rem; font-weight: 600; color: #56657c; background: #eef2f7; border: 1px solid #e7ebf1; border-radius: 6px; padding: 1px 7px; margin-left: 4px; vertical-align: middle; }
.msg-lbl { font-size: .68rem; font-weight: 600; color: #7c8aa0; margin-bottom: 4px; }
.msg-val { font-size: .81rem; font-weight: 600; color: #0f172a; line-height: 1.35; }
.msg-field { margin-top: 14px; border: 1.5px solid #ea580c; border-radius: 10px; padding: 10px 13px; background: #fff; }
.msg-input { font-size: .8rem; color: #0f172a; background: #f6f8fc; border: 1px solid #e7ebf1; border-radius: 9px; padding: 9px 12px; margin-top: 4px; }
.msg-body { font-size: .78rem; color: #475569; background: #f6f8fc; border: 1px solid #e7ebf1; border-radius: 9px; padding: 11px 13px; margin-top: 4px; line-height: 1.55; }
.msg-body-short { display: none; }
.msg-foot { display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px; }
.msg-btn { height: 34px; display: inline-flex; align-items: center; padding: 0 13px; border-radius: 8px; font-size: .76rem; font-weight: 600; border: 1px solid #e7ebf1; background: #fff; color: #0f172a; }
.msg-btn-primary { background: #ea580c; color: #fff; border-color: #ea580c; }
@media (max-width: 560px) {
  .msg-body-full { display: none; }
  .msg-body-short { display: block; }
  .msg-foot { flex-wrap: wrap; }
}
</style>
