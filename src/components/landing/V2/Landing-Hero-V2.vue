<template>
  <div>
    <main class="overflow-hidden">
      <section id="hero" class="bg-dark-blue relative overflow-hidden">

        <!-- Hintergrund Glow-Effekt -->
        <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <div
            class="absolute"
            style="
              top: -20%;
              right: -10%;
              width: 70%;
              height: 80%;
              background: radial-gradient(ellipse at center, rgba(41, 118, 214, 0.35) 0%, transparent 70%);
              filter: blur(40px);
            "
          ></div>
          <div
            class="absolute"
            style="
              top: -10%;
              left: 20%;
              width: 50%;
              height: 60%;
              background: radial-gradient(ellipse at center, rgba(23, 43, 77, 0.6) 0%, transparent 70%);
              filter: blur(60px);
            "
          ></div>
        </div>

        <div class="relative z-20 pt-20 md:pt-24 pb-0">

          <!-- Hero Text -->
          <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h text-center">

            <!-- Badge -->
            <div class="hero-animate-item flex justify-center mb-5" style="animation-delay: 0s">
              <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-p-small-sm text-white/70"
                style="background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.10);">
                <span class="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style="background: #22c55e;"></span>
                {{ hero.badge }}
              </span>
            </div>

            <div class="hero-animate-item" style="animation-delay: 0.1s">
              <h1 class="max-w-3xl mx-auto text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl tracking-tight text-white">
                {{ hero.heading }}
              </h1>
              <p class="mt-4 max-w-lg mx-auto text-p-sm md:text-p-md lg:text-p-lg text-white/60">
                {{ hero.subheading }}
              </p>
            </div>

            <div class="hero-animate-item mt-7 flex flex-col items-center justify-center gap-2 md:flex-row" style="animation-delay: 0.25s">
              <ButtonSecondary :icon="LogIn" :href="loginUrl">
                Jetzt anmelden
              </ButtonSecondary>
              <ButtonPrimary :icon="CalendarDays" @click="showDemoModal = true">
                Demo vereinbaren
              </ButtonPrimary>
            </div>
          </div>

          <!-- Mockups -->
          <div class="hero-animate-item hidden sm:flex items-end justify-center relative mt-14 mx-auto max-w-5xl 2xl:max-w-5xl px-4 sm:px-8 gap-0" style="animation-delay: 0.4s">

            <!-- Tablet-Platzhalter (links) -->
            <div
              class="relative flex-shrink-0 z-10"
              style="width: 20%; margin-right: -2.5%; transform: perspective(1200px) rotateY(8deg) rotateX(1deg); transform-origin: right bottom;"
            >
              <div
                class="relative w-full overflow-hidden"
                style="border-radius: 10px 10px 0 0; box-shadow: -16px 24px 60px rgba(0,0,0,0.6);"
              >
                <div
                  class="flex items-center gap-1 px-2.5 py-1.5"
                  style="background: #1a2a3f; border-bottom: 1px solid rgba(255,255,255,0.07);"
                >
                  <div class="w-1.5 h-1.5 rounded-full" style="background: rgba(255,255,255,0.2);"></div>
                  <div class="w-1.5 h-1.5 rounded-full" style="background: rgba(255,255,255,0.2);"></div>
                  <div class="w-1.5 h-1.5 rounded-full" style="background: rgba(255,255,255,0.2);"></div>
                  <div
                    class="ml-1.5 rounded px-1.5 py-0.5"
                    style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.25); font-size: 0.5rem; max-width: 80px;"
                  >
                    matchmaker.hr
                  </div>
                </div>
                <div class="w-full" style="background: #172b4d; aspect-ratio: 3/4;">
                  <div class="p-3 flex gap-2 h-full">
                    <div class="flex flex-col gap-2 w-1/4 pt-1">
                      <div class="w-5 h-5 rounded-md mb-1" style="background: rgba(255,255,255,0.2);"></div>
                      <div class="h-1.5 rounded w-full" style="background: rgba(255,255,255,0.12);"></div>
                      <div class="h-1.5 rounded w-4/5" style="background: rgba(255,255,255,0.07);"></div>
                      <div class="h-1.5 rounded w-full" style="background: rgba(255,255,255,0.15);"></div>
                      <div class="h-1.5 rounded w-3/4" style="background: rgba(255,255,255,0.07);"></div>
                      <div class="h-1.5 rounded w-full" style="background: rgba(255,255,255,0.07);"></div>
                    </div>
                    <div class="flex flex-col gap-2 flex-1">
                      <div class="h-2 rounded w-2/3" style="background: rgba(255,255,255,0.15);"></div>
                      <div class="flex gap-1">
                        <div class="h-4 rounded-full w-7" style="background: rgba(255,255,255,0.2);"></div>
                        <div class="h-4 rounded-full w-7" style="background: rgba(255,255,255,0.07);"></div>
                        <div class="h-4 rounded-full w-7" style="background: rgba(255,255,255,0.07);"></div>
                      </div>
                      <div class="rounded-lg p-2 flex flex-col gap-1.5 flex-1" style="background: rgba(255,255,255,0.06);">
                        <div class="flex items-center gap-1.5">
                          <div class="w-3 h-3 rounded-full flex-shrink-0" style="background: rgba(255,255,255,0.15);"></div>
                          <div class="h-1.5 rounded flex-1" style="background: rgba(255,255,255,0.1);"></div>
                        </div>
                        <div class="h-1.5 rounded w-full" style="background: rgba(255,255,255,0.07);"></div>
                        <div class="h-1.5 rounded w-4/5" style="background: rgba(255,255,255,0.07);"></div>
                        <div class="mt-auto self-end h-3.5 w-10 rounded-full" style="background: rgba(255,255,255,0.18);"></div>
                      </div>
                      <div class="rounded-lg p-2 flex flex-col gap-1.5" style="background: rgba(255,255,255,0.06);">
                        <div class="flex items-center gap-1.5">
                          <div class="w-3 h-3 rounded-full flex-shrink-0" style="background: rgba(255,255,255,0.15);"></div>
                          <div class="h-1.5 rounded flex-1" style="background: rgba(255,255,255,0.1);"></div>
                        </div>
                        <div class="h-1.5 rounded w-3/4" style="background: rgba(255,255,255,0.07);"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop-Screenshot (rechts, Hauptmockup) -->
            <div class="relative z-20 flex-1">
              <div
                class="relative w-full overflow-hidden"
                style="border-radius: 12px 12px 0 0; box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3);"
              >
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
                <img
                  class="w-full object-cover object-top"
                  src="@/assets/Candidate-Mockup.png"
                  alt="Zentrales Berater-Dashboard für KI-gestütztes Matching"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>

    <!-- Demo Modal -->
    <ModalDemo :isOpen="showDemoModal" @close="showDemoModal = false" />
  </div>
</template>

<script>
import { LogIn, CalendarDays } from 'lucide-vue-next'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'
import ModalDemo from '@/components/modals/ModalDemo.vue'

export default {
  name: 'LandingHero',
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ModalDemo
  },
  data() {
    return {
      LogIn,
      CalendarDays,
      showDemoModal: false,
      hero: {
        badge: 'KI-gestütztes Talentpool management',
        heading: 'Recruiting-Automatisierung, die Ihrem Urteil vertraut.',
        subheading: 'KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching, Anschreiben. Der Berater entscheidet.'
      },
      loginUrl: process.env.VUE_APP_DASHBOARD_URL
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