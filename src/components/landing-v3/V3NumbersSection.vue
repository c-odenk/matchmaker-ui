<template>
  <!-- UNTERM STRICH
       Vier Zahlen, die das Produkt selbst belegt – keine Kundenmetriken, die
       wir (noch) nicht haben. Schmales Band mit Haarlinien statt Kacheln. -->
  <section class="bg-white pb-16 max-[880px]:pb-12">
    <div class="wrap">
      <div class="stats-grid grid grid-cols-4 border-y border-line max-[880px]:grid-cols-2">
        <div v-for="(z, i) in zahlen" :key="z.wert + z.text"
             class="scard px-7 py-8 max-[560px]:px-3 max-[560px]:py-6 text-center border-line"
             :class="[
               i > 0 ? 'min-[881px]:border-l' : '',
               i % 2 === 1 ? 'max-[880px]:border-l' : '',
               i > 1 ? 'max-[880px]:border-t' : ''
             ]">
          <div class="text-hero text-navy tabular-nums">{{ z.wert }}</div>
          <div class="text-[.9rem] font-semibold text-ink mt-[8px]">{{ z.titel }}</div>
          <div class="text-[.82rem] text-muted mt-[3px]">{{ z.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'V3NumbersSection',
  data() {
    return {
      zahlen: [
        { wert: '4', titel: 'KI-Agenten', text: 'vom Profil bis zum Anschreiben' },
        { wert: '6', titel: 'Schritte je Kandidat', text: 'jede Nacht, ohne Anstoß' },
        { wert: '1', titel: 'Oberfläche', text: 'statt fünf Programmen' },
        { wert: '0', titel: 'Nachrichten', text: 'ohne Freigabe' }
      ]
    }
  }
}
</script>
