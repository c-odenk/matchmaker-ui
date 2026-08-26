<template>
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>FAQ</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px]">Häufige Fragen <span class="text-blue">zum Preis</span></h2>
      </div>

      <div class="scope border border-line rounded-[18px] overflow-hidden bg-white">
        <div v-for="(f, i) in faqs" :key="f.q" class="border-b border-line last:border-b-0">
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 text-left px-6 py-[18px] font-sans bg-transparent border-0 cursor-pointer transition-colors duration-150 hover:bg-surface max-[560px]:px-[18px]"
            :aria-expanded="open === i ? 'true' : 'false'"
            @click="open = open === i ? -1 : i"
          >
            <span class="text-[.98rem] font-semibold text-ink">{{ f.q }}</span>
            <span class="w-[26px] h-[26px] shrink-0 rounded-full bg-surface border border-line flex items-center justify-center text-muted transition-transform duration-200" :class="{ 'rotate-45': open === i }">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>
            </span>
          </button>
          <div class="faq-body grid" :class="{ open: open === i }">
            <div class="min-h-0 overflow-hidden">
              <p class="px-6 pb-[20px] pt-0 text-[.9rem] text-body leading-[1.65] max-w-[760px] max-[560px]:px-[18px]">{{ f.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'PricingFaqSection',
  components: { EyebrowBadge },
  data() {
    return {
      open: 0,
      faqs: [
        {
          q: 'Was kostet die Nutzung der KI zusätzlich?',
          a: 'Nichts, was über uns läuft. Die Rechenkosten zahlen Sie direkt an Ihren KI-Anbieter über Ihren eigenen API-Schlüssel – ohne versteckte Aufschläge oder Margen, mit voller Transparenz über die eigene Nutzung.'
        },
        {
          q: 'Kostet jede Anbindung extra?',
          a: 'Nein. Alle angebundenen Systeme sind in der Enterprise Lizenz enthalten – Bewerbersoftware, Teams, Telefonie, Mailkonto, Jobportale, Handelsregister und Ihre Homepage. Es gibt keine Gebühr je Integration.'
        },
        {
          q: 'Muss ich meine Bewerbersoftware ersetzen?',
          a: 'Nein. matchmaker setzt auf Ihre bestehende Bewerbersoftware auf – sie bleibt die rechtlich führende Datenquelle. Ein späterer Wechsel kostet nur eine neue Anbindung, nicht Ihre Arbeitsweise.'
        },
        {
          q: 'Wie viele Mitarbeiter kann ich anlegen?',
          a: 'In der Enterprise Lizenz sind 3 Mitarbeiter-Lizenzen enthalten. Jede weitere kostet 19,99 € pro Lizenz und Monat und enthält alle Leistungen der Enterprise Lizenz.'
        },
        {
          q: 'Gibt es eine Mindestlaufzeit?',
          a: 'Nein. Die Enterprise Lizenz und jede zusätzliche Mitarbeiter-Lizenz sind monatlich kündbar, ohne Mindestlaufzeit.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Auf- und Zuklappen über eine animierte Grid-Zeile – kein height-Sprung. */
.faq-body {
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.22s cubic-bezier(0.33, 1, 0.68, 1);
}
.faq-body.open { grid-template-rows: 1fr; }
</style>
