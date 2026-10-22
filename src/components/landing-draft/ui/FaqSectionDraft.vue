<template>
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>{{ eyebrow }}</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px]"><slot /></h2>
      </div>

      <div class="scope border border-line rounded-[11px] overflow-hidden bg-white">
        <div v-for="(f, i) in items" :key="f.q" class="border-b border-line last:border-b-0">
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 text-left px-6 py-[18px] font-sans bg-transparent border-0 cursor-pointer transition-colors duration-150 hover:bg-surface max-[560px]:px-[18px]"
            :aria-expanded="open === i ? 'true' : 'false'"
            @click="open = open === i ? -1 : i"
          >
            <span class="text-[.98rem] font-semibold text-ink">{{ f.q }}</span>
            <span class="w-[26px] h-[26px] shrink-0 rounded-full bg-surface border border-line flex items-center justify-center text-muted transition-transform duration-200" :class="{ 'rotate-45': open === i }">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>
            </span>
          </button>
          <div class="faq-body grid" :class="{ open: open === i }">
            <div class="min-h-0 overflow-hidden">
              <p class="px-6 pb-[20px] pt-0 text-[.9rem] text-body leading-[1.65] max-w-[760px] max-[560px]:px-[18px]">{{ f.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// FAQ-Abschnitt mit aufklappbaren Antworten. Die Einträge kommen aus
// src/config/faqs.js – dieselben Daten speisen das FAQPage-Schema der Seite.
// Zugeklappte Antworten stehen trotzdem im HTML, Suchmaschinen lesen sie mit.
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'FaqSectionDraft',
  components: { EyebrowBadge },
  props: {
    eyebrow: { type: String, default: 'FAQ' },
    items: { type: Array, required: true }
  },
  data() {
    return { open: 0 }
  }
}
</script>

<style scoped>
/* Auf- und Zuklappen über eine animierte Grid-Zeile – kein height-Sprung. */
.faq-body {
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.22s cubic-bezier(0.33, 1, 0.68, 1);
}
.faq-body.open { grid-template-rows: 1fr; }
</style>
