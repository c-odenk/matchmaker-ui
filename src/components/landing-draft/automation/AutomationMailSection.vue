<template>
  <!-- 5 · E-Mail: Text links, der Nachrichten-Dialog rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>E-Mail</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Der Entwurf liegt im Vorgang. <span class="text-blue">Gesendet wird aus Ihrem Postfach.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die Nachricht entsteht dort, wo der Kandidat steht. Beim Empfänger kommt Ihre Adresse an.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <BrowserFrame url="app-matchmaker-hr.netlify.app/nachrichten">
          <!-- Dialogkopf -->
          <div class="flex items-center gap-[10px]">
            <span class="font-bold text-[1.02rem] text-ink leading-tight min-w-0">Nachricht an die Firma</span>
            <span class="text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-[#eef2f7] text-muted shrink-0">Entwurf</span>
            <span class="ml-auto text-muted text-[1.05rem] leading-none shrink-0">×</span>
          </div>

          <!-- Wozu die Nachricht gehört -->
          <div class="mt-[14px] grid grid-cols-2 gap-x-6 gap-y-[11px] max-[560px]:grid-cols-1">
            <div v-for="m in meta" :key="m.label" class="min-w-0">
              <div class="text-[.72rem] text-muted">{{ m.label }}</div>
              <div class="text-[.85rem] text-ink mt-[2px] leading-[1.4]">{{ m.value }}</div>
            </div>
          </div>

          <div class="mt-[14px]">
            <div class="text-[.72rem] text-muted mb-[5px]">Betreff</div>
            <div class="border border-line rounded-[7px] px-[13px] py-[9px] text-[.85rem] text-ink truncate max-[560px]:whitespace-normal max-[560px]:leading-[1.4]">
              Erfahrener IT-Projektleiter aus Hamburg – Passung zu Ihrer Vakanz
            </div>
          </div>

          <div class="mt-[12px]">
            <div class="text-[.72rem] text-muted mb-[5px]">Nachricht</div>
            <div class="border border-line rounded-[7px] bg-surface px-[13px] py-[11px]">
              <p v-for="z in text" :key="z" class="text-[.85rem] text-body leading-[1.5] mb-[8px] last:mb-0">{{ z }}</p>
            </div>
          </div>

          <!-- Das anonyme Exposé als Anhang -->
          <div class="mt-[12px] border border-line rounded-[7px] px-[13px] py-[11px] flex items-start gap-[10px]">
            <span class="w-[16px] h-[16px] shrink-0 mt-[2px] rounded-[3px] border border-blue bg-blue flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#fff" stroke-width="3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </span>
            <span class="min-w-0">
              <span class="block text-[.85rem] font-semibold text-ink leading-[1.4]">Anonymisiertes Kandidatenprofil als PDF anhängen</span>
              <span class="block text-[.76rem] text-muted mt-[2px] leading-[1.45]">Es werden keine Namen, Kontaktdaten oder Arbeitgeber übertragen.</span>
            </span>
          </div>

          <div class="flex items-center justify-end gap-[9px] mt-[14px] flex-wrap">
            <span class="h-[34px] inline-flex items-center px-[13px] rounded-[5px] text-[.76rem] font-semibold border border-line text-body">Speichern</span>
            <span class="h-[34px] inline-flex items-center gap-[7px] px-[13px] rounded-[5px] text-[.76rem] font-semibold bg-blue text-white">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              Als versandbereit markieren
            </span>
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
  name: 'AutomationMailSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      features: [
        'Eigenes Mailkonto, eigener Absender – kein fremder Dienst',
        'Versendet wird erst nach Ihrer Freigabe',
        'Antworten laufen im Postfach auf und stehen am Vorgang'
      ],
      // Alle Angaben sind Platzhalter.
      meta: [
        { label: 'Kandidat', value: 'Max Mustermann' },
        { label: 'Vakanz', value: 'Director Cloud Architecture · Nexis Cloud Systems GmbH' },
        { label: 'Empfänger', value: 'Unbekannt' },
        { label: 'Kanal', value: 'E-Mail' }
      ],
      text: [
        'Sehr geehrte Damen und Herren,',
        'mit Interesse habe ich Ihre Ausschreibung für die Position Director Cloud Architecture am Standort Berlin gelesen. Hierzu möchte ich Ihnen eine erfahrene Persönlichkeit aus der IT-Projektleitung vorstellen.'
      ]
    }
  }
}
</script>
