<template>
  <!-- Textspalte einer Station im Durchlauf. Über der Überschrift steht, wer
       arbeitet; darunter, welchen Handgriff aus der Ausgangslage das ersetzt –
       durchgestrichen. Bei der letzten Station steht stattdessen, was beim
       Berater bleibt. -->
  <div class="two-text min-w-0 max-[880px]:text-center max-[880px]:max-w-[620px] max-[880px]:mx-auto">
    <span class="inline-flex items-center text-[clamp(0.74rem,0.6375rem+0.436vw,0.92rem)] font-semibold text-navy">{{ s.agent }}</span>

    <h3 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[10px] mb-[14px]">
      {{ s.titel }} <span class="text-blue">{{ s.titelBlau }}</span>
    </h3>
    <p class="text-lead text-body max-w-[540px] max-[880px]:mx-auto">{{ s.text }}</p>

    <ProviderRow v-if="s.kanaele" :items="s.kanaele" />
    <FeatureList :items="s.features" />

    <!-- Bezug zur Ausgangslage -->
    <!-- Eine Zeile: Auszeichnung links, Handgriffe dahinter -->
    <div class="mt-[24px] pt-[16px] border-t border-line flex flex-nowrap items-baseline gap-x-[12px] max-[1100px]:flex-wrap max-[1100px]:gap-y-[6px] max-[880px]:max-w-[540px] max-[880px]:mx-auto max-[880px]:justify-center">
      <span class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted whitespace-nowrap">{{ s.ersetzt ? 'Statt von Hand' : 'Bleibt beim Berater' }}</span>
      <template v-if="s.ersetzt">
        <span v-for="e in s.ersetzt" :key="e" class="text-[.8rem] text-muted line-through decoration-[#dc2626]/60 whitespace-nowrap">{{ e }}</span>
      </template>
      <span v-else class="text-[.82rem] font-semibold text-[#15803d] whitespace-nowrap">{{ s.bleibt }}</span>
    </div>
  </div>
</template>

<script>
import FeatureList from '@/components/ui/FeatureList.vue'
import ProviderRow from '@/components/ui/ProviderRow.vue'

export default {
  name: 'V3StationText',
  components: { FeatureList, ProviderRow },
  props: { s: { type: Object, required: true } }
}
</script>
