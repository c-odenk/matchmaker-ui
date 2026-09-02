<template>
  <!-- 2 · Telefonie: gespiegelt – Anruffenster links, Text rechts -->
  <section class="sec bg-white">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <PhoneCallMockup align="left" />
      </div>

      <div class="two-text">
        <EyebrowBadge>Telefonie</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Gewählt wird aus dem Profil, <span class="text-blue">gesprochen über den Rechner.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Eckdaten und offene Punkte stehen während des Gesprächs daneben. Nichts muss nachgeschlagen werden.
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
  name: 'AutomationPhoneSection',
  components: { EyebrowBadge, FeatureList, PhoneCallMockup },
  data() {
    return {
      features: [
        'Anruf direkt aus dem Profil, ohne eigene Telefonanlage',
        'Notiz, Erreichbarkeit und Kontaktstatus landen am Vorgang',
        'Keine Gesprächsaufzeichnung – technisch nicht vorgesehen'
      ]
    }
  }
}
</script>
