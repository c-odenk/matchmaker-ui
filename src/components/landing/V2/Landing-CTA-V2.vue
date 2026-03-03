<template>
  <section class="py-12 md:py-16 lg:pt-6 lg:pb-16 2xl:pt-6 2xl:pb-16 bg-white">
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

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center gap-6 px-4">
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