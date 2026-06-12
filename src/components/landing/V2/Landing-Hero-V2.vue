<template>
  <div>
    <main class="overflow-hidden">
      <section id="hero" class="bg-dark-blue relative overflow-hidden">

        <!-- Hintergrund Glow-Effekte -->
        <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          <!-- Blauer Glow oben rechts -->
          <div
            class="absolute"
            style="
              top: -30%;
              right: -15%;
              width: 75%;
              height: 90%;
              background: radial-gradient(ellipse at center, rgba(41, 118, 214, 0.45) 0%, transparent 65%);
              filter: blur(50px);
            "
          ></div>
          <!-- Hellblauer Akzent oben mitte -->
          <div
            class="absolute"
            style="
              top: -10%;
              left: 30%;
              width: 40%;
              height: 50%;
              background: radial-gradient(ellipse at center, rgba(100, 160, 230, 0.2) 0%, transparent 70%);
              filter: blur(60px);
            "
          ></div>
          <!-- Tiefer blauer Akzent unten links -->
          <div
            class="absolute"
            style="
              bottom: 0;
              left: -10%;
              width: 50%;
              height: 60%;
              background: radial-gradient(ellipse at center, rgba(23, 43, 77, 0.8) 0%, transparent 70%);
              filter: blur(40px);
            "
          ></div>
        </div>

        <div class="relative z-20 pt-20 md:pt-24 pb-0">

          <!-- Hero Text -->
          <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h text-center">

            <!-- Badge -->
            <div class="hero-animate-item flex justify-center mb-5" style="animation-delay: 0s">
              <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-p-small-sm text-white"
                style="background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.12);">
                <span class="w-2 h-2 rounded-full animate-pulse flex-shrink-0 bg-green-500"></span>
                {{ hero.badge }}
              </span>
            </div>

            <div class="hero-animate-item" style="animation-delay: 0.1s">
              <h1 class="max-w-3xl mx-auto text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl tracking-tight text-white">
                {{ hero.heading }}
              </h1>
              <p class="mt-4 max-w-lg mx-auto text-p-sm md:text-p-md lg:text-p-lg text-white">
                {{ hero.subheading }}
              </p>
            </div>

            <div class="hero-animate-item mt-7 flex flex-col items-center justify-center gap-2 md:flex-row" style="animation-delay: 0.25s">
              <ButtonSecondary :icon="LogIn" :href="loginUrl">
                Jetzt anmelden
              </ButtonSecondary>
              <button
                type="button"
                @click="showDemoModal = true"
                class="inline-flex items-center justify-center gap-2 rounded-button px-8 py-2.5 text-p text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-200 md:min-w-[160px] cursor-pointer"
              >
                <CalendarDaysIcon class="w-4 h-4 flex-shrink-0" :stroke-width="1.75" />
                <span class="text-nowrap">Demo vereinbaren</span>
              </button>
            </div>
          </div>

          <!-- Mockups: Desktop + Tablet -->
          <div
            class="hero-animate-item hidden md:flex items-end justify-center relative mt-14 mx-auto max-w-5xl px-4 sm:px-8 gap-0"
            style="animation-delay: 0.4s"
          >
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
                  class="flex items-center gap-1 px-2.5 py-1.5 bg-browser-frame-bar"
                  style="border-bottom: 1px solid rgba(255,255,255,0.07);"
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
                <div class="w-full bg-dark-blue" style="aspect-ratio: 3/4;">
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
                  class="flex items-center gap-1.5 px-3 py-2 bg-browser-frame"
                  style="border-bottom: 1px solid rgba(255,255,255,0.08);"
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

          <!-- Mockup: Smartphone (nur sichtbar auf sm, nicht md+) -->
          <div
            class="hero-animate-item block md:hidden relative mt-10 mx-auto px-container-h pb-10"
            style="animation-delay: 0.4s"
          >
            <div
              class="relative w-full overflow-hidden rounded-2xl"
              style="box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08);"
            >
              <div
                class="flex items-center gap-1.5 px-3 py-2 bg-browser-frame"
                style="border-bottom: 1px solid rgba(255,255,255,0.08);"
              >
                <div class="w-2 h-2 rounded-full" style="background: #ff5f57;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #febc2e;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #28c840;"></div>
                <div
                  class="ml-2 flex-1 rounded px-2 py-0.5"
                  style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35); max-width: 120px; font-size: 0.6rem;"
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
      </section>
    </main>

    <!-- Demo Modal -->
    <ModalDemo :isOpen="showDemoModal" @close="showDemoModal = false" />
  </div>
</template>

<script>
import { LogIn, CalendarDays as CalendarDaysIcon } from 'lucide-vue-next'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'
import ModalDemo from '@/components/modals/ModalDemo.vue'

export default {
  name: 'LandingHero',
  components: {
    ButtonSecondary,
    CalendarDaysIcon,
    ModalDemo
  },
  data() {
    return {
      LogIn,
      showDemoModal: false,
      hero: {
        badge: 'KI-gestütztes Talentpool-Management',
        heading: 'Recruiting-Automatisierung, die Ihrem Urteil vertraut.',
        subheading: 'KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching, Anschreiben. Sie entscheiden.'
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