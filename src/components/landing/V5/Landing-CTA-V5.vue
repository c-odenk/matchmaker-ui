<template>
  <section class="py-16 md:py-24 lg:py-12 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      
      <div 
        class="relative bg-blue rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden shadow-xl border border-white/10"
      >
        <div class="relative z-10 flex flex-col items-center max-w-full mx-auto gap-10">
          
          <div class="flex flex-col gap-3 px-4">
            <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-white font-bold leading-tight max-w-6xl mx-auto">
              Die Zukunft der Personalberatung startet hier.
            </h2>

            <p class="text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl text-white/90 max-w-4xl mx-auto">
              Ihr Multi-Agenten-System für intelligentes Sourcing, präzises Matching und automatisierten Outreach.
            </p>
          </div>

          <div class="flex flex-col items-center gap-2">
            <ButtonSecondary href="#" :icon="CalendarDays">
              Jetzt Demo vereinbaren
            </ButtonSecondary>
            
            <div class="flex items-center gap-2 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white/70">
              <span class="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
              Termine diese Woche verfügbar
            </div>
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