<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :type="tag === 'button' ? 'button' : undefined"
    class="inline-flex items-center justify-center gap-2 h-[46px] px-[22px] rounded-[9px] text-[.97rem] font-semibold font-sans cursor-pointer transition-colors duration-[180ms]"
    :class="variantClass"
  >
    <slot />
  </component>
</template>

<script>
// Zentrale Button-Komponente. Rendert <a> (href), <router-link> (to) oder
// <button>. Varianten entsprechen den früheren .btn-* Klassen.
export default {
  name: 'BaseButton',
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
