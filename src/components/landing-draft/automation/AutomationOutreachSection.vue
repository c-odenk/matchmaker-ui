<template>
  <!-- 6 · Versandkanäle: derselbe Entwurf, vier Wege hinaus.
       Karten-Raster wie auf der Integrationsseite („Quellen") – bewusst
       flacher als die Kanalübersicht weiter oben, damit sich die beiden
       Abschnitte auf derselben Seite nicht doppeln. -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Versandkanäle</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Vier Kanäle – <span class="text-blue">und je einer der passende Ton.</span></h2>
        <p class="text-lead text-body">
          Der Outreach Agent schreibt nicht einen Brief für alle Wege. Eine E-Mail darf ausholen, eine Nachricht im Netzwerk nicht, eine auf dem Handy erst recht nicht.
        </p>
      </div>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="k in kanaele" :key="k.title" class="ben bg-surface border border-line rounded-2xl p-6 flex flex-col">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <ProviderMark :name="k.name" :size="20" />
          </div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ k.title }}</h3>
          <p class="text-[.88rem] text-body flex-1">{{ k.text }}</p>

          <div class="mt-4 pt-[13px] border-t border-line flex items-center justify-between gap-3 flex-wrap">
            <span class="text-[.76rem] font-semibold text-ink tabular-nums">{{ k.laenge }}</span>
            <span
              class="inline-flex items-center gap-[5px] text-[.72rem]"
              :class="k.pdf ? 'text-blue font-semibold' : 'text-muted'"
            >
              <svg v-if="k.pdf" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              {{ k.pdf ? 'Profil-PDF' : 'ohne Anhang' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Was für alle Kanäle gleich bleibt – und was WhatsApp zusätzlich verlangt -->
      <div class="scope mt-[18px] border border-line rounded-[11px] bg-surface px-6 py-5 flex items-start gap-[14px] max-[560px]:flex-col">
        <div class="w-9 h-9 shrink-0 rounded-[7px] bg-navy/[0.06] text-navy flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>
        </div>
        <div>
          <div class="text-[.95rem] font-bold text-ink mb-1">Gleich bleibt, was zählt</div>
          <p class="text-[.88rem] text-body leading-[1.6]">
            Auf jedem Kanal gilt dasselbe: Der Kandidat bleibt anonym, erfunden wird nichts, und hinaus geht erst, was Sie freigegeben haben. Nur WhatsApp setzt ein eigenes Meta-Business-Konto voraus und wird von Meta je Konversation abgerechnet – direkt an Sie, ohne Aufschlag von uns.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import ProviderMark from '@/components/ui/ProviderMark.vue'

export default {
  name: 'AutomationOutreachSection',
  components: { EyebrowBadge, ProviderMark },
  data() {
    return {
      kanaele: [
        {
          name: 'mail', title: 'E-Mail', laenge: '100–180 Wörter', pdf: true,
          text: 'Versand über Ihr eigenes Postfach. Beim Empfänger kommt Ihre Adresse an, Antworten laufen wie gewohnt bei Ihnen auf.'
        },
        {
          name: 'linkedin', title: 'LinkedIn', laenge: '60–90 Wörter', pdf: false,
          text: 'Kurz und direkt, wie es im Netzwerk erwartet wird – dort, wo der Ansprechpartner beruflich ohnehin erreichbar ist.'
        },
        {
          name: 'xing', title: 'Xing', laenge: '60–90 Wörter', pdf: false,
          text: 'Derselbe Zuschnitt für den deutschsprachigen Raum, falls Ihre Ansprechpartner dort aktiver sind.'
        },
        {
          name: 'whatsapp', title: 'WhatsApp', laenge: '40–70 Wörter', pdf: true,
          text: 'Der Kanal, in dem viele ohnehin schreiben – mit Verlauf und Freigabe im Vorgang statt auf dem privaten Handy.'
        }
      ]
    }
  }
}
</script>
