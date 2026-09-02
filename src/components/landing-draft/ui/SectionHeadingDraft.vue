<template>
  <div class="sec-head mx-auto max-w-[660px] mb-11" :class="{ 'text-center': center }">
    <EyebrowBadge v-if="eyebrow" :dark="dark">{{ eyebrow }}</EyebrowBadge>
    <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] mt-[5px]" :class="dark ? 'text-white' : 'text-ink'"><slot /></h2>
    <!-- Die Präzisierung steht eine Stufe unter der Überschrift: groß genug,
         um zum Kopf zu gehören, klein genug, um ihr nicht die Wirkung zu nehmen. -->
    <p v-if="$slots.lead" class="text-[1.05rem] font-normal leading-[1.5] mt-[10px]" :class="dark ? 'text-white/[0.6]' : 'text-muted'">
      <slot name="lead" />
    </p>
  </div>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

// ENTWURFSFASSUNG des Sektionskopfs: Eyebrow + Überschrift + zweite Zeile in
// derselben Größe. Die geteilte SectionHeading.vue bleibt unberührt.
export default {
  name: 'SectionHeadingDraft',
  components: { EyebrowBadge },
  props: {
    eyebrow: { type: String, default: '' },
    center: { type: Boolean, default: true },
    dark: { type: Boolean, default: false }
  }
}
</script>
