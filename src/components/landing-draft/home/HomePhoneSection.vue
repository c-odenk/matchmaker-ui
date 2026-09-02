<template>
  <!-- Telefonie als Produktblick – Mockup links, damit der Wechsel zur
       Automatisierungs-Sektion darunter nicht monoton wirkt -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="max-[880px]:order-2">
        <PhoneCallMockup class="!ml-0 !mr-auto max-[880px]:!mx-auto" />
      </div>

      <div class="two-text max-[880px]:order-1">
        <EyebrowBadge>Telefonie</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Anrufen, <span class="text-blue">ohne das Profil zu verlassen.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Der Anruf läuft über den Rechner, direkt aus dem Profil. Wer wann erreicht wurde, steht am Vorgang.
        </p>
        <FeatureList :items="features" />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import PhoneCallMockup from '@/components/landing-draft/integration/PhoneCallMockup.vue'

export default {
  name: 'HomePhoneSection',
  components: { EyebrowBadge, FeatureList, PhoneCallMockup },
  data() {
    return {
      features: [
        'Anruf direkt aus dem Profil, über den Rechner',
        'Eckdaten und offene Punkte stehen währenddessen daneben',
        'Notiz landet direkt am Vorgang'
      ]
    }
  }
}
</script>
