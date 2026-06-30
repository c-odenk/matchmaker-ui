<template>
  <span
    class="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.01em] py-[6px] px-[14px] rounded-full"
    :class="dark ? 'text-white bg-white/[0.08] border border-white/[0.14]' : 'text-navy bg-navy/[0.06]'"
  >
    <span class="w-[7px] h-[7px] rounded-full shrink-0" :class="dark ? 'bg-green' : 'bg-blue'"></span>
    <slot />
  </span>
</template>

<script>
// Kleine „Eyebrow"-Pille über den Überschriften (hell auf Weiß, on-dark im Navy-Bereich).
export default {
  name: 'EyebrowBadge',
  props: { dark: { type: Boolean, default: false } }
}
</script>
