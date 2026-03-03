<template>
  <div>
    <main class="overflow-hidden">
      <section class="relative overflow-hidden" style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%);">

        <!-- Blauer Glow oben links -->
        <div
          class="pointer-events-none absolute rounded-full"
          style="width: 55%; height: 70%; top: -30%; left: -15%; background: radial-gradient(ellipse, rgba(41,118,214,0.3) 0%, transparent 70%); filter: blur(60px);"
        ></div>

        <!-- Blauer Glow oben rechts -->
        <div
          class="pointer-events-none absolute rounded-full"
          style="width: 45%; height: 55%; top: -20%; right: -10%; background: radial-gradient(ellipse, rgba(23,43,77,0.6) 0%, transparent 70%); filter: blur(60px);"
        ></div>

        <!-- Grid overlay with fade-out at edges -->
        <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.6"/>
              </pattern>
              <radialGradient id="hero-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
                <stop offset="20%" stop-color="white" stop-opacity="1"/>
                <stop offset="100%" stop-color="white" stop-opacity="0"/>
              </radialGradient>
              <mask id="hero-mask">
                <rect width="100%" height="100%" fill="url(#hero-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" opacity="0.25" />
          </svg>
        </div>

        <div class="relative z-20 pt-28 md:pt-36 pb-0">

          <!-- Hero Text -->
          <div class="mx-auto w-full px-container-h text-center">
            <div class="hero-animate-item" style="animation-delay: 0.1s">
              <h1 class="max-w-4xl mx-auto text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl tracking-tight text-white">
                {{ hero.heading }}
              </h1>
              <p class="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/80">
                {{ hero.subheading }}
              </p>
            </div>
            <div class="hero-animate-item mt-10 flex flex-col items-center justify-center gap-2 md:flex-row" style="animation-delay: 0.25s">
              <ButtonSecondary :icon="LogIn" href="#">
                Jetzt anmelden
              </ButtonSecondary>
              <ButtonPrimary :icon="CalendarDays" href="#">
                Demo vereinbaren
              </ButtonPrimary>
            </div>
          </div>

          <!-- Dashboard Mockup -->
          <div class="hero-animate-item relative mt-28 mx-auto max-w-5xl px-4 sm:px-8" style="animation-delay: 0.4s">
            <div
              class="relative w-full overflow-hidden"
              style="border-radius: 12px 12px 0 0; box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3);"
            >

              <!-- Browser Topbar -->
              <div
                class="flex items-center gap-1.5 px-3 py-2"
                style="background: #1e2d42; border-bottom: 1px solid rgba(255,255,255,0.08);"
              >
                <div class="w-2 h-2 rounded-full" style="background: #ff5f57;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #febc2e;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #28c840;"></div>
                <div
                  class="ml-2 flex-1 rounded px-2 py-0.5"
                  style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35); max-width: 160px; font-size: 0.65rem;"
                >
                  matchmaker.hr
                </div>
              </div>

              <!-- Screenshot -->
              <img
                class="w-full object-cover object-top"
                src="@/assets/Dashboard-Mockup.png"
                alt="Zentrales Berater-Dashboard für KI-gestütztes Matching"
                width="2700"
                height="1440"
              />

            </div>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { LogIn, CalendarDays } from 'lucide-vue-next'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'

export default {
  name: 'LandingHero',
  components: {
    ButtonPrimary,
    ButtonSecondary
  },
  data() {
    return {
      LogIn,
      CalendarDays,
      hero: {
        heading: 'Recruiting-Automatisierung, die Ihrem Urteil vertraut.',
        subheading: 'KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching, Anschreiben. Der Berater entscheidet. Immer.'
      }
    }
  }
}
</script>

<style scoped>
.hero-animate-item {
  animation: heroFadeUp 0.6s ease both;
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>