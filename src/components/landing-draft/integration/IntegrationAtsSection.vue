<template>
  <!-- 1 · Bewerbersoftware: Text links, Baustein rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <EyebrowBadge>Bewerbersoftware</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Ihr ATS bleibt die <span class="text-blue">führende Datenquelle.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Stammdaten, Dokumente und Löschfristen bleiben dort. matchmaker übernimmt den Datensatz, arbeitet damit nach außen und schreibt die Ergebnisse zurück.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <IntegrationBlock
          label="Bewerbersoftware"
          sub="Führende Datenquelle · austauschbar"
          icon="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75"
          :chips="['Stammdaten', 'Dokumente', 'Löschfristen']"
          :flows="flows"
          note="Ein Wechsel der Bewerbersoftware kostet eine neue Anbindung – die Oberfläche darüber bleibt dieselbe."
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
  name: 'IntegrationAtsSection',
  components: { EyebrowBadge, FeatureList, IntegrationBlock },
  data() {
    return {
      features: [
        'Der Kandidatendatensatz wird aus der Bewerbersoftware übernommen',
        'Bewertung, Gespräch und Kontaktstatus fließen zurück',
        'Die Bewerbersoftware bleibt jederzeit austauschbar'
      ],
      flows: [
        { dir: 'up', label: 'Profile kommen rein' },
        { dir: 'down', label: 'Ergebnisse fließen zurück' }
      ]
    }
  }
}
</script>
