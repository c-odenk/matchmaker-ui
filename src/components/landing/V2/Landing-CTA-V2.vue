<template>
  <section class="py-12 md:py-0 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="relative overflow-hidden rounded-2xl bg-blue px-8 py-20 text-center">

        <!-- Radial gradient -->
        <div
          class="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style="background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.07) 0%, transparent 70%);"
        ></div>

        <!-- Decorative blurred circles -->
        <div class="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true"></div>
        <div class="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true"></div>

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
