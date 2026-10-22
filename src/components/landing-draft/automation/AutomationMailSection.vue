<template>
  <!-- 5 · E-Mail: Text links, der Nachrichten-Dialog rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>E-Mail</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Der Entwurf liegt im Vorgang. <span class="text-blue">Gesendet wird aus Ihrem Postfach.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die Nachricht entsteht dort, wo der Kandidat steht. Beim Empfänger kommt Ihre Adresse an.
        </p>
        <FeatureList :items="features" />
      </div>

      <div>
        <FirmenNachrichtMockup />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import FirmenNachrichtMockup from '@/components/landing-draft/ui/FirmenNachrichtMockup.vue'

export default {
  name: 'AutomationMailSection',
  components: { EyebrowBadge, FeatureList, FirmenNachrichtMockup },
  data() {
    return {
      features: [
        'Eigenes Mailkonto, eigener Absender – kein fremder Dienst',
        'Versendet wird erst nach Ihrer Freigabe',
        'Antworten laufen im Postfach auf und stehen am Vorgang'
      ]
    }
  }
}
</script>
