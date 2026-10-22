<template>
  <!-- Produktblick Anschreiben: links der Text zum Outreach Agent, rechts sein
       Ergebnis – der Entwurf an die Firma mit anonymem Exposé. Text links wie
       beim Matching, damit sich die Seiten mit dem Telefon-Abschnitt abwechseln. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text min-w-0 max-[880px]:text-center max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <EyebrowBadge>Anschreiben</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Die KI bereitet vor. <span class="text-blue">Der Berater entscheidet.</span></h2>
        <p class="text-lead text-body">Der Outreach Agent ermittelt den Ansprechpartner im Unternehmen und formuliert das Anschreiben – mit anonymisiertem Kandidatenprofil. Nichts geht raus, bevor es freigegeben ist.</p>
        <ProviderRow :items="channels" />
        <FeatureList :items="features" />
      </div>

      <div class="relative min-w-0 max-[880px]:w-full max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <FirmenNachrichtMockup empfaenger="Christian Weber" />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import ProviderRow from '@/components/ui/ProviderRow.vue'
import FirmenNachrichtMockup from '@/components/landing-draft/ui/FirmenNachrichtMockup.vue'
import { OUTREACH_CHANNELS } from '@/config/channels'

export default {
  name: 'HomeOutreachSection',
  components: { EyebrowBadge, FeatureList, ProviderRow, FirmenNachrichtMockup },
  data() {
    return {
      channels: OUTREACH_CHANNELS,
      features: [
        'Ansprechpartner im Unternehmen recherchiert',
        'Text in der Länge, die zum Kanal passt',
        'Kandidat bleibt anonym – auf Wunsch mit Profil als PDF',
        'Die Nachricht geht erst nach der Freigabe raus'
      ]
    }
  }
}
</script>
