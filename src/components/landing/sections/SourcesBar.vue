<template>
  <section class="border-y border-line bg-white">
    <div class="wrap sources-row flex items-center justify-center gap-x-[30px] gap-y-4 flex-wrap py-6 max-[560px]:gap-x-5 max-[560px]:gap-y-[10px] max-[560px]:py-5">
      <!-- Tablet-Band: Label als eigene Zeile, Quellen-Logos darunter -->
      <span class="text-p font-semibold text-muted min-[561px]:max-[880px]:w-full min-[561px]:max-[880px]:text-center">Der Market Agent scannt kontinuierlich</span>

      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <span class="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#0A66C2] text-white text-[11px] font-extrabold shrink-0">S</span>StepStone
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <img src="https://cdn.simpleicons.org/indeed" width="17" height="17" alt="" loading="lazy" @error="imgErr" />Indeed
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <img src="https://api.iconify.design/simple-icons/linkedin.svg?color=%230A66C2" width="17" height="17" alt="" loading="lazy" @error="imgErr" />LinkedIn
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <img src="https://cdn.simpleicons.org/xing" width="17" height="17" alt="" loading="lazy" @error="imgErr" />Xing
      </span>
      <span class="inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.92rem]">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
        </svg>Unternehmenswebsites
      </span>
    </div>
  </section>
</template>

<script>
// „Der Market Agent scannt kontinuierlich …" – Quellen-Leiste unter dem Hero.
export default {
  name: 'SourcesBar',
  methods: {
    imgErr(e) { e.target.style.display = 'none' }
  }
}
</script>
