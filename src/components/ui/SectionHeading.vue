<template>
  <div class="sec-head mx-auto max-w-[660px] mb-10" :class="{ 'text-center': center }">
    <EyebrowBadge v-if="eyebrow">{{ eyebrow }}</EyebrowBadge>
    <h2 class="text-section text-ink mt-[18px] mb-[14px]"><slot /></h2>
    <p v-if="$slots.lead" class="text-lead text-body"><slot name="lead" /></p>
  </div>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

// Zentrierter Section-Kopf: Eyebrow + H2 (+ optionaler Lead via #lead-Slot).
// Die Marker-Klasse .sec-head dient dem Scroll-Reveal.
export default {
  name: 'SectionHeading',
  components: { EyebrowBadge },
  props: {
    eyebrow: { type: String, default: '' },
    center: { type: Boolean, default: true }
  }
}
</script>
