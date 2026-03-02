<template>
  <div>
    <main class="overflow-hidden">
      <section class="relative overflow-hidden" style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%);">

        <!-- Dot-Pattern -->
        <div
          class="pointer-events-none absolute inset-0 opacity-20"
          style="background-image: radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px); background-size: 24px 24px;"
        ></div>

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

        <!-- Heller Akzent in der Mitte -->
        <div
          class="pointer-events-none absolute"
          style="width: 60%; height: 1px; top: 45%; left: 20%; background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);"
        ></div>

        <div class="relative pt-20 md:pt-24 pb-0">

          <!-- Hero Text -->
          <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h text-center">
            <div class="hero-animate-item" style="animation-delay: 0.1s">
              <h1 class="max-w-4xl mx-auto text-balance text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl tracking-tight text-white">
                Lorem ipsum dolor sit amet consetetur sadipscing elitr
              </h1>
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
          <div class="hero-animate-item relative mt-20 mx-auto max-w-5xl px-4 sm:px-8" style="animation-delay: 0.4s">
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
      CalendarDays
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