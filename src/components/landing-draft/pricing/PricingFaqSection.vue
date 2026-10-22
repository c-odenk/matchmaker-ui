<template>
  <FaqSectionDraft :items="faqs">Häufige Fragen <span class="text-blue">zum Preis</span></FaqSectionDraft>
</template>

<script>
import FaqSectionDraft from '@/components/landing-draft/ui/FaqSectionDraft.vue'
import { pricingFaq } from '@/config/faqs'

export default {
  name: 'PricingFaqSection',
  components: { FaqSectionDraft },
  data() {
    return { faqs: pricingFaq }
  }
}
</script>
