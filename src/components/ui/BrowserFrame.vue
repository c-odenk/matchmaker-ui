<template>
  <div class="relative rounded-[14px] overflow-hidden shadow-browser border border-line">
    <!-- Fensterleiste -->
    <div class="flex items-center gap-[7px] px-4 py-[11px] bg-navy-2">
      <i class="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></i>
      <i class="w-[11px] h-[11px] rounded-full bg-[#febc2e]"></i>
      <i class="w-[11px] h-[11px] rounded-full bg-[#28c840]"></i>
      <span class="ml-3 text-[.72rem] text-white/40 bg-white/[0.06] px-3 py-1 rounded-[6px] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{{ url }}</span>
    </div>
    <!-- Inhaltsfläche (frühere .dash) -->
    <div class="bg-white text-ink px-[22px] py-5">
      <slot />
    </div>
  </div>
</template>

<script>
// Browser-Mockup-Rahmen (Fensterleiste + Inhaltsfläche). Inhalt via Slot.
export default {
  name: 'BrowserFrame',
  props: { url: { type: String, required: true } }
}
</script>
