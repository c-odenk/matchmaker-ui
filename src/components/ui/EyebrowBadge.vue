<template>
  <!-- Sektions-Auszeichnung über den Überschriften. Sie spricht dieselbe Form
       wie die übrigen Beschriftungen der Seite – Fußzeilen-Köpfe,
       Vergleichsspalten („Heute" / „Mit matchmaker"), Karten-Labels:
       Versalien, fett, gesperrt, in Blau. Versalsatz *braucht* die Sperrung,
       anders als gemischter Satz.
       Der zugehörige Abstand zur Überschrift beträgt 7 px; die Zeile ist
       leicht und soll als Beschriftung der Überschrift lesen, nicht als
       eigene Ebene. -->
  <span
    v-if="!pill"
    class="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase"
    :class="dark ? 'text-white/[0.6]' : 'text-blue'"
  >
    <slot />
  </span>

  <!-- Die Pille bleibt den Hero-Bereichen vorbehalten: dort steht die
       Auszeichnung allein auf der Navy-Fläche und führt keine Überschrift an,
       sondern trägt sich selbst. `wide` weitet die Polsterung im Hero. -->
  <span
    v-else
    class="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.01em] py-[6px] rounded-full"
    :class="[
      wide ? 'px-[22.4px]' : 'px-[14px]',
      dark ? 'text-white bg-white/[0.08] border border-white/[0.14]' : 'text-navy bg-navy/[0.06]'
    ]"
  >
    <span class="w-[7px] h-[7px] rounded-full shrink-0" :class="dark ? 'bg-green' : 'bg-blue'"></span>
    <slot />
  </span>
</template>

<script>
export default {
  name: 'EyebrowBadge',
  props: {
    dark: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    wide: { type: Boolean, default: false }
  }
}
</script>
