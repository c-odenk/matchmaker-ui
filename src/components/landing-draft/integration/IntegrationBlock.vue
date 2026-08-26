<template>
  <!-- Abstrakte Darstellung statt App-Screen: matchmaker als Bedienschicht oben,
       das angebundene System als Baustein darunter, dazwischen was fließt. -->
  <div class="rounded-[18px] border border-line bg-white p-7 max-[560px]:p-5">
    <!-- Bedienschicht -->
    <div class="rounded-[12px] bg-navy text-white px-5 py-4 flex items-center gap-3">
      <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-white/[0.12] flex items-center justify-center">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
      </span>
      <span class="min-w-0">
        <span class="block text-[.92rem] font-bold leading-tight">matchmaker</span>
        <span class="block text-[.72rem] text-white/60">Bedienschicht</span>
      </span>
    </div>

    <!-- Was zwischen den Ebenen läuft -->
    <!-- Zwei Bahnen nebeneinander statt zwei gestapelter Pillen: die
         Gegenläufigkeit wird dadurch auf einen Blick lesbar. Der Verlauf der
         Bahn zeigt die Richtung, die Spitze sitzt am ankommenden Ende. -->
    <div class="grid gap-4 py-[6px]" :class="flows.length > 1 ? 'grid-cols-2' : 'grid-cols-1'">
      <div v-for="f in flows" :key="f.label" class="relative flex justify-center py-[18px]">
        <span
          class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full"
          :class="f.dir === 'up' ? 'bg-gradient-to-t from-line to-blue' : 'bg-gradient-to-b from-line to-blue'"
        ></span>
        <span
          class="absolute left-1/2 -translate-x-1/2 text-blue"
          :class="f.dir === 'up' ? 'top-[-5px]' : 'bottom-[-5px]'"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4">
            <path stroke-linecap="round" stroke-linejoin="round" :d="f.dir === 'up' ? 'M4.5 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'"/>
          </svg>
        </span>
        <span class="relative z-[2] bg-white border border-line rounded-[10px] px-[11px] py-[6px] text-[.76rem] text-body text-center leading-[1.3]">{{ f.label }}</span>
      </div>
    </div>

    <!-- Der angebundene Baustein -->
    <div class="rounded-[12px] border border-line bg-surface px-5 py-4">
      <div class="flex items-center gap-3">
        <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-navy/[0.07] text-navy flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="icon"/></svg>
        </span>
        <span class="min-w-0">
          <span class="block text-[.92rem] font-bold text-ink leading-tight">{{ label }}</span>
          <span class="block text-[.72rem] text-muted">{{ sub }}</span>
        </span>
      </div>
      <div v-if="chips.length" class="flex flex-wrap gap-[6px] mt-[13px]">
        <span v-for="c in chips" :key="c" class="text-[.72rem] font-semibold text-body bg-white border border-line rounded-[6px] px-[8px] py-[2px]">{{ c }}</span>
      </div>
    </div>

    <p v-if="note" class="text-[.76rem] text-muted mt-[14px]">{{ note }}</p>
  </div>
</template>

<script>
export default {
  name: 'IntegrationBlock',
  props: {
    label: { type: String, required: true },
    sub: { type: String, default: '' },
    icon: { type: String, required: true },
    chips: { type: Array, default: () => [] },
    flows: { type: Array, required: true },
    note: { type: String, default: '' }
  }
}
</script>
