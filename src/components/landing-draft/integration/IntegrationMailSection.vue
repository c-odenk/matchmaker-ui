<template>
  <!-- 2 · Postfach: gespiegelt – Baustein links, Text rechts -->
  <section class="sec bg-surface">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <IntegrationBlock
          label="Mailkonto"
          sub="Eigener Absender · eigener Verlauf"
          icon="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          :chips="['Versand', 'Antworten', 'Verlauf']"
          :flows="flows"
          note="Beim Empfänger kommt Ihre Adresse an, nicht die eines fremden Dienstes."
        />
      </div>

      <div>
        <EyebrowBadge>E-Mail</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Versand aus <span class="text-blue">Ihrem eigenen Postfach.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die Nachricht entsteht im Vorgang, versendet wird über Ihr Konto. Antworten laufen wie gewohnt bei Ihnen auf.
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
  name: 'IntegrationMailSection',
  components: { EyebrowBadge, FeatureList, IntegrationBlock },
  data() {
    return {
      features: [
        'Eigenes Mailkonto, eigener Absender',
        'Entwurf entsteht im Vorgang – gesendet wird erst nach Ihrer Freigabe',
        'Antworten laufen wie gewohnt in Ihrem Postfach auf'
      ],
      flows: [
        { dir: 'down', label: 'Freigegebene Nachricht' },
        { dir: 'up', label: 'Antworten am Vorgang' }
      ]
    }
  }
}
</script>
