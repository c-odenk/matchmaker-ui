<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div
        class="relative overflow-hidden rounded-2xl px-8 py-20 text-center"
        style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%);"
      >

        <!-- Blauer Glow links -->
        <div
          class="pointer-events-none absolute rounded-full"
          style="width: 55%; height: 120%; top: -10%; left: -15%; background: radial-gradient(ellipse, rgba(41,118,214,0.25) 0%, transparent 70%); filter: blur(60px);"
        ></div>

        <!-- Blauer Glow rechts -->
        <div
          class="pointer-events-none absolute rounded-full"
          style="width: 45%; height: 120%; top: -10%; right: -10%; background: radial-gradient(ellipse, rgba(23,43,77,0.5) 0%, transparent 70%); filter: blur(60px);"
        ></div>

        <!-- Grid overlay with fade-out at edges – liegt über den Glows -->
        <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.6"/>
              </pattern>
              <radialGradient id="cta-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                <stop offset="20%" stop-color="white" stop-opacity="1"/>
                <stop offset="100%" stop-color="white" stop-opacity="0"/>
              </radialGradient>
              <mask id="cta-mask">
                <rect width="100%" height="100%" fill="url(#cta-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" mask="url(#cta-mask)" opacity="0.15" />
          </svg>
        </div>

        <!-- Content -->
        <div class="relative z-20 flex flex-col items-center gap-6 px-4">
          <h2 class="max-w-5xl text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-white">
            Recruiting-Prozesse automatisieren. Beratungsqualität steigern.
          </h2>

          <p class="max-w-3xl text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl text-white">
            matchmaker.hr verbindet KI-gestützte Automatisierung mit menschlichem Urteilsvermögen – für Personalberater, die mehr leisten wollen.
          </p>

          <div class="mt-2">
            <ButtonSecondary href="#" :icon="CalendarDays">
              Jetzt Demo vereinbaren
            </ButtonSecondary>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { CalendarDays } from 'lucide-vue-next'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'

export default {
  name: 'LandingCta',
  components: { ButtonSecondary },
  data() {
    return {
      CalendarDays
    }
  }
}
</script>