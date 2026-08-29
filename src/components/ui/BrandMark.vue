<template>
  <span
    class="flex items-center gap-[10px] font-bold tracking-[-0.02em] whitespace-nowrap"
    :class="[dark ? 'text-white' : 'text-ink', gross ? 'text-[1.08rem]' : 'text-[1.05rem]']"
  >
    <!-- Zeichen: Monogramm in derselben Schrift wie die Wortmarke. Eine
         gezeichnete Form (Winkel, Funken, Stränge) liest sich bei 16 px immer
         als Bediensymbol; der Buchstabe bleibt in jeder Größe scharf und
         bindet Bild- und Wortmarke typografisch zusammen. -->
    <span
      class="shrink-0 flex items-center justify-center rounded-[7px] font-bold leading-none tracking-[-0.04em]"
      :class="[
        dark ? 'bg-white text-navy' : 'bg-navy text-white',
        gross ? 'w-8 h-8 text-[1.18rem]' : 'w-[30px] h-[30px] text-[1.08rem]'
      ]"
      aria-hidden="true"
    ><span class="-mt-px">m</span></span>

    <span>matchmaker<span :class="dark ? 'text-white/[0.55]' : 'text-muted'">.hr</span></span>
  </span>
</template>

<script>
// Wort-Bild-Marke von matchmaker.hr. Liegt bewusst zentral, damit Header und
// Footer dieselbe Marke zeigen und nicht auseinanderlaufen.
export default {
  name: 'BrandMark',
  props: {
    dark: { type: Boolean, default: false }, // auf Navy-Flächen (Footer)
    gross: { type: Boolean, default: true }
  }
}
</script>
