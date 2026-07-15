<template>
  <section class="border-y border-line bg-white">
    <div class="wrap sources-row flex items-center justify-center gap-x-[30px] gap-y-4 flex-wrap py-6 max-[560px]:gap-x-5 max-[560px]:gap-y-[10px] max-[560px]:py-5">
      <!-- Tablet-Band: Label als eigene Zeile, Quellen-Logos darunter -->
      <span class="text-p font-semibold text-muted min-[561px]:max-[880px]:w-full min-[561px]:max-[880px]:text-center">Der Market Agent scannt kontinuierlich</span>

      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
          <rect x="3.75" y="8.25" width="16.5" height="11.25" rx="2.25"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 8.25V6a1.5 1.5 0 011.5-1.5h4.5A1.5 1.5 0 0115.75 6v2.25M3.75 13.5h16.5"/>
        </svg>Jobportale
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
        </svg>Jobnetzwerke
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
        </svg>Unternehmensseiten
      </span>
    </div>
  </section>
</template>

<script>
// „Der Market Agent scannt kontinuierlich …" – Quellen-Leiste unter dem Hero.
export default {
  name: 'SourcesBar'
}
</script>
