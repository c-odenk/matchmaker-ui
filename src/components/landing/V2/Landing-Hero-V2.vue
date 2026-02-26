<template>
  <div>
    <main class="overflow-hidden">
      <section class="bg-gray-100 dark:bg-zinc-900">
        <div class="relative pt-20 md:pt-24 pb-0">
          <!-- Hero Text -->
          <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h text-center">
            <div class="hero-animate-item" style="animation-delay: 0.1s">
              <h1 class="max-w-4xl mx-auto text-balance text-h1-sm md:text-h1-md lg:text-h1-lg 2xl:text-h1-2xl font-bold tracking-tight text-black dark:text-white">
                Lorem ipsum dolor sit amet consetetur sadipscing elitr
              </h1>
            </div>
            <div class="hero-animate-item mt-10 flex flex-col items-center justify-center gap-4 md:flex-row" style="animation-delay: 0.25s">
              <ButtonPrimary :icon="LogIn" href="#">
                Jetzt anmelden
              </ButtonPrimary>
              <ButtonSecondary :icon="CalendarDays" href="#">
                Demo vereinbaren
              </ButtonSecondary>
            </div>
          </div>

          <!-- Dashboard Mockup – ragt unten raus -->
          <div class="hero-animate-item relative mt-32 px-4 sm:px-8" style="animation-delay: 0.4s">
            <div class="relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border border-b-0 border-gray-200 dark:border-gray-700 p-3 pb-0 shadow-2xl shadow-zinc-950/10 bg-white dark:bg-zinc-900">
              <img
                class="aspect-[16/9] relative rounded-t-xl w-full object-cover object-top"
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