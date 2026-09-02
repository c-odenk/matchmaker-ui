<template>
  <!-- 3 · Telefonie: Text links, Baustein rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>Telefonie</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Anrufen, <span class="text-blue">ohne das Profil zu verlassen.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Der Anruf läuft direkt aus dem Kandidatenprofil, über den Browser. Wer wann erreicht wurde, ist am Profil dokumentiert.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <IntegrationBlock
          label="Telefonie"
          sub="Anrufe über den Rechner"
          icon="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          :chips="['Wählen', 'Erreichbarkeit', 'Kontaktstatus']"
          :flows="flows"
          note="Telefonate laufen ohne Mitschnitt – technisch nicht vorgesehen."
        />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import IntegrationBlock from '@/components/landing-draft/integration/IntegrationBlock.vue'

export default {
  name: 'IntegrationPhoneSection',
  components: { EyebrowBadge, FeatureList, IntegrationBlock },
  data() {
    return {
      features: [
        'Anruf direkt aus dem Profil, über den Rechner',
        'Erreichbarkeit und Kontaktstatus stehen am Vorgang',
        'Keine Gesprächsaufzeichnung – technisch nicht vorgesehen'
      ],
      flows: [
        { dir: 'down', label: 'Anruf aus dem Profil' },
        { dir: 'up', label: 'Ergebnis am Vorgang' }
      ]
    }
  }
}
</script>
