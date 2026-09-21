<template>
  <!-- Anbieter bzw. Kanäle einer Sektion als schmales Band zwischen Fließtext
       und Häkchenliste. Zwei Haarlinien statt einer Fläche – dieselbe Bauform
       wie die Quellenleiste unter dem Hero; die Symbolkachel ist die der
       Karten und Bausteine. Damit sitzt die Zeile im Layout, ohne ein
       zusätzliches Kästchen in die Textspalte zu setzen. -->
  <div
    class="border-y border-line py-[15px] max-w-[620px] flex flex-wrap items-center gap-x-[26px] gap-y-[12px]"
    :class="[spacing, centerOnMobile ? 'max-[880px]:mx-auto max-[880px]:justify-center' : '']"
  >
    <span
      v-for="p in items" :key="p.label"
      class="inline-flex items-center gap-[10px] text-[.9rem] font-semibold text-ink whitespace-nowrap"
    >
      <span class="w-[30px] h-[30px] shrink-0 rounded-[6px] bg-navy/[0.07] text-navy flex items-center justify-center">
        <ProviderMark :name="p.name" :size="16" />
      </span>{{ p.label }}
    </span>
  </div>
</template>

<script>
import ProviderMark from '@/components/ui/ProviderMark.vue'

export default {
  name: 'ProviderRow',
  components: { ProviderMark },
  props: {
    items: { type: Array, required: true },
    spacing: { type: String, default: 'mt-[24px]' },
    centerOnMobile: { type: Boolean, default: true }
  }
}
</script>
