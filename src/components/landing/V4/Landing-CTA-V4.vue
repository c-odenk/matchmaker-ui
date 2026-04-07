<template>
  <section class="py-12 md:py-16 lg:py-20 2xl:py-16">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <div
        class="relative overflow-hidden bg-gray-50 border border-gray-200 rounded-3xl flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-8 md:px-12 lg:px-16 py-12 lg:pb-0 2xl:py-16"
        
      >
        <!-- Linke Spalte: Text + Button -->
        <div class="lg:w-1/2 flex flex-col gap-6 z-10">
          <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black leading-tight">
            {{ heading }}
          </h2>
          <p class="text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl text-black max-w-md">
            {{ subtext }}
          </p>
          <div class="self-start">
            <ButtonPrimary href="#" :icon="CalendarDays">
              Jetzt Demo vereinbaren
            </ButtonPrimary>
          </div>
        </div>

        <!-- Rechte Spalte: Screenshots übereinander, leicht geneigt, ragen raus -->
        <div class="lg:w-1/2 relative h-[280px] md:h-[340px] lg:h-[380px] w-full lg:overflow-visible">

          <!-- Hinteres Element (leicht gedreht, versetzt) -->
          <div
            class="absolute rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white"
            style="width: 75%; aspect-ratio: 16/10; top: 10%; right: 0; transform: rotate(3deg) translateY(-5%); box-shadow: 0 20px 60px rgba(0,0,0,0.12);"
          >
            <div class="placeholder-box h-full">
              <span class="opacity-20 text-[10px] font-bold uppercase tracking-widest text-gray-500">Screenshot folgt</span>
            </div>
          </div>

          <!-- Vorderes Element (gerade, leicht links) -->
          <div
            class="absolute rounded-2xl overflow-hidden border border-gray-200 bg-white"
            style="width: 75%; aspect-ratio: 16/10; top: 0; right: 10%; box-shadow: 0 20px 60px rgba(0,0,0,0.1);"
          >
            <!-- Browser Header -->
            <div class="flex items-center gap-1.5 px-3 py-2.5 flex-shrink-0" style="background: #1e2d42; border-bottom: 1px solid rgba(255,255,255,0.08);">
              <div class="w-2 h-2 rounded-full" style="background: #ff5f57;"></div>
              <div class="w-2 h-2 rounded-full" style="background: #febc2e;"></div>
              <div class="w-2 h-2 rounded-full" style="background: #28c840;"></div>
              <div class="ml-2 rounded px-2 py-0.5" style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35); font-size: 0.6rem;">
                matchmaker.hr
              </div>
            </div>
            <div class="placeholder-box flex-1 h-full">
              <span class="opacity-20 text-[10px] font-bold uppercase tracking-widest text-gray-500">Screenshot folgt</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { CalendarDays } from 'lucide-vue-next'
// import ButtonSecondary from '@/components/common/ButtonSecondary.vue'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue';

export default {
  name: 'LandingCta',
  components: { ButtonPrimary },
  data() {
    return {
      CalendarDays,
      heading: 'Recruiting-Prozesse automatisieren. Beratungsqualität steigern.',
      subtext: 'matchmaker.hr verbindet KI-gestützte Automatisierung mit menschlichem Urteilsvermögen.'
    }
  }
}
</script>

<style scoped>
.placeholder-box {
  @apply w-full h-full flex items-center justify-center bg-gray-50;
}
</style>