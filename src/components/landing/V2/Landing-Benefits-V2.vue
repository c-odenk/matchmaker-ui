<template>
  <section class="py-20 md:py-28 lg:pt-44 lg:pb-36 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Mobile: stacked layout with horizontal scroll cards -->
      <div class="flex flex-col sm:hidden gap-6">
        <!-- 1. Überschrift -->
        <h2 class="text-h3-sm text-black">
          KI-gestützte Automatisierung für modernes Recruiting.
        </h2>
        <!-- 2. Text -->
        <p class="text-p-sm text-black">
          matchmaker.hr übernimmt die zeitintensiven Schritte im Vermittlungsprozess – von der Marktanalyse bis zum Outreach – und schafft so Kapazität für das Wesentliche: die Beratung.
        </p>
        <!-- 3. Horizontal Scroll Cards -->
        <div class="-mx-container-h">
          <div class="benefits-scroll flex flex-row gap-3 overflow-x-auto px-container-h pb-3 snap-x snap-mandatory">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 snap-start shrink-0 w-[72vw]"
            >
              <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-blue text-white">
                <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
              </div>
              <div>
                <h3 class="text-p-small-sm font-bold text-black mb-2">
                  {{ benefit.title }}
                </h3>
                <p class="text-p-small-sm text-black">
                  {{ benefit.solution }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 4. Button -->
        <div class="self-start">
          <ButtonPrimary href="#" :icon="ArrowRight">
            Jetzt anmelden
          </ButtonPrimary>
        </div>
      </div>

      <!-- Tablet: stacked layout with 2x2 grid -->
      <div class="hidden sm:flex lg:hidden flex-col gap-6">
        <!-- 1. Überschrift -->
        <h2 class="text-h3-sm md:text-h3-md text-black">
          KI-gestützte Automatisierung für modernes Recruiting.
        </h2>
        <!-- 2. Text -->
        <p class="text-p-sm md:text-p-md text-black">
          matchmaker.hr übernimmt die zeitintensiven Schritte im Vermittlungsprozess – von der Marktanalyse bis zum Outreach – und schafft so Kapazität für das Wesentliche: die Beratung.
        </p>
        <!-- 3. Feature Grid -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-blue text-white">
              <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
            </div>
            <div>
              <h3 class="text-p-small-sm md:text-p-small-md font-bold text-black mb-2">
                {{ benefit.title }}
              </h3>
              <p class="text-p-small-sm md:text-p-small-md text-black">
                {{ benefit.solution }}
              </p>
            </div>
          </div>
        </div>
        <!-- 4. Button -->
        <div class="self-start">
          <ButtonPrimary href="#" :icon="ArrowRight">
            Jetzt anmelden
          </ButtonPrimary>
        </div>
      </div>

      <!-- Desktop (lg+): side-by-side layout -->
      <div class="hidden lg:flex flex-row gap-16 items-center">
        <!-- Left: 2x2 Feature Grid -->
        <div class="lg:w-1/2 grid grid-cols-2 gap-4">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-4"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-blue text-white">
              <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
            </div>
            <div>
              <h3 class="text-p-small-lg 2xl:text-p-small-2xl font-bold text-black mb-2">
                {{ benefit.title }}
              </h3>
              <p class="text-p-small-lg 2xl:text-p-small-2xl text-black">
                {{ benefit.solution }}
              </p>
            </div>
          </div>
        </div>
        <!-- Right: Header text -->
        <div class="lg:w-1/2 flex flex-col gap-6">
          <h2 class="text-h3-lg 2xl:text-h3-2xl text-black">
            KI-gestützte Automatisierung für modernes Recruiting.
          </h2>
          <p class="text-p-lg 2xl:text-p-2xl text-black">
            matchmaker.hr übernimmt die zeitintensiven Schritte im Vermittlungsprozess – von der Marktanalyse bis zum Outreach – und schafft so Kapazität für das Wesentliche: die Beratung.
          </p>
          <div class="self-start">
            <ButtonPrimary href="#" :icon="ArrowRight">
              Jetzt anmelden
            </ButtonPrimary>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { Search, Zap, Target, ShieldCheck, ArrowRight } from 'lucide-vue-next'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'

export default {
  name: 'LandingBenefits',
  components: {
    Search,
    Zap,
    Target,
    ShieldCheck,
    ButtonPrimary
  },
  data() {
    return {
      ArrowRight,
      benefits: [
        {
          title: 'Automatisierte Marktanalyse',
          solution: 'Kontinuierliches Scanning relevanter Quellen und automatisches abgleichen mit ihrem Kandidatenpool.',
          icon: Search
        },
        {
          title: 'Intelligentes Matching',
          solution: 'Semantisches Scoring auf Basis von Qualifikation und Erfahrung – mit transparenter Begründung.',
          icon: Target
        },
        {
          title: 'Skalierbarer Outreach',
          solution: 'Automatische Identifikation von Entscheidern und Erstellung versandfertiger Anschreiben.',
          icon: Zap
        },
        {
          title: 'Volle Kontrolle behalten',
          solution: 'Alle Aktionen durchlaufen einen menschlichen Freigabe-Schritt. Die KI bereitet vor – der Berater entscheidet.',
          icon: ShieldCheck
        }
      ]
    }
  }
}
</script>

<style scoped>
.benefits-scroll::-webkit-scrollbar {
  display: none;
}

.benefits-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>