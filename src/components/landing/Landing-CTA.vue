<template>
  <section class="py-4 md:py-6 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="relative overflow-hidden rounded-2xl bg-deep-blue px-8 py-20 text-center">

        <!-- Grid overlay with fade-out at edges -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.8"/>
              </pattern>
              <radialGradient id="cta-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                <stop offset="30%" stop-color="white" stop-opacity="1"/>
                <stop offset="100%" stop-color="white" stop-opacity="0"/>
              </radialGradient>
              <mask id="cta-mask">
                <rect width="100%" height="100%" fill="url(#cta-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" mask="url(#cta-mask)" opacity="0.12" />
          </svg>
        </div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center gap-6 px-4">
          <h2 class="max-w-full text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-white leading-tight">
            Starte deine Lernreise mit <br class="hidden md:block" /> matchmaker.hr
          </h2>
          <p class="paragraph-lead max-w-4xl text-white">
            Lerne effektiver, bereite dich gezielt auf Prüfungen vor und schließe deine Wissenslücken – mit KI-gestützten Tools.
          </p>
          <button class="mt-2 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200 px-8 py-3 text-sm font-semibold text-deep-blue shadow-lg">
            Jetzt kostenlos starten
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingCta'
}
</script>