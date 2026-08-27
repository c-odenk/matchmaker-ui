<template>
  <component
    :is="tag"
    v-bind="tagAttrs"
    class="inline-flex items-center justify-center gap-2 h-[46px] px-[22px] rounded-[9px] text-[.96rem] font-semibold font-sans cursor-pointer transition-colors duration-[180ms]"
    :class="variantClass"
  >
    <slot />
  </component>
</template>

<script>
// ENTWURFSFASSUNG von BaseButton. Unterschied zur geteilten Fassung: die
// Attribute werden gebündelt gesetzt statt einzeln gebunden. Sonst reicht das
// leere :href als Fallthrough an <router-link> durch und löscht dort das
// erzeugte href – der Button navigiert dann zwar per Klick, lässt sich aber
// nicht im neuen Tab öffnen und ist für Crawler kein Link.
// Die Live-Seite nutzt BaseButton ausschließlich mit href, ist also nicht
// betroffen; ui/BaseButton.vue bleibt unberührt.
export default {
  name: 'BaseButtonDraft',
  props: {
    variant: { type: String, default: 'blue' }, // blue | ghost | ghost-dark | primary
    href: { type: String, default: undefined },
    to: { type: [String, Object], default: undefined }
  },
  computed: {
    tag() {
      if (this.to != null) return 'router-link'
      if (this.href != null) return 'a'
      return 'button'
    },
    tagAttrs() {
      if (this.tag === 'router-link') return { to: this.to }
      if (this.tag === 'a') return { href: this.href }
      return { type: 'button' }
    },
    variantClass() {
      return {
        'blue': 'bg-blue text-white hover:bg-blue-hover',
        'ghost': 'bg-white text-ink border border-line hover:bg-surface',
        'ghost-dark': 'bg-transparent text-white border border-white/[0.22] hover:bg-white/[0.08]',
        'primary': 'bg-navy text-white hover:bg-navy-hover'
      }[this.variant]
    }
  }
}
</script>
