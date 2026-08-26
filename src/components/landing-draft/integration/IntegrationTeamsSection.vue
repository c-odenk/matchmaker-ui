<template>
  <!-- 4 · Teams: gespiegelt – Baustein links, Text rechts -->
  <section class="sec bg-white">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <IntegrationBlock
          label="Microsoft Teams"
          sub="Termine und Gesprächstranskripte"
          icon="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          :chips="['Termine', 'Transkripte']"
          :flows="flows"
          note="Übernommen wird nur, was der Berater bestätigt."
        />
      </div>

      <div>
        <EyebrowBadge>Microsoft Teams</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Termine anlegen – <span class="text-blue">und das Gespräch auswerten.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Termine entstehen aus dem Vorgang heraus. Aus dem Transkript werden Profilvorschläge – übernommen wird nur, was Sie bestätigen.
        </p>
        <FeatureList :items="features" />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import IntegrationBlock from '@/components/landing-draft/integration/IntegrationBlock.vue'

export default {
  name: 'IntegrationTeamsSection',
  components: { EyebrowBadge, FeatureList, IntegrationBlock },
  data() {
    return {
      features: [
        'Teams-Termin mit Kandidat oder Entscheider aus dem Vorgang',
        'Transkripte werden zu Vorschlägen für das Profil',
        'Übernommen wird nur, was der Berater bestätigt'
      ],
      flows: [
        { dir: 'down', label: 'Termin anlegen' },
        { dir: 'up', label: 'Transkript zurück' }
      ]
    }
  }
}
</script>
