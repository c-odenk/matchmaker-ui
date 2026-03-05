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
        <div class="relative left-1/2 -translate-x-1/2 w-screen">
          <div
            ref="scrollContainer"
            class="benefits-scroll flex flex-row gap-3 overflow-x-auto pb-3 snap-x snap-mandatory"
            style="padding-left: 1.5rem; padding-right: 1.5rem;"
            @scroll="onScroll"
          >
            <div
              v-for="(benefit, index) in benefits"
              :key="benefit.title"
              :ref="el => { if (el) cardRefs[index] = el }"
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
            <!-- Spacer: erzwingt padding-right beim Scrollen -->
            <div class="shrink-0 w-px" aria-hidden="true" />
          </div>
        </div>
        <!-- Scroll Dots -->
        <div class="flex items-center gap-2">
          <button
            v-for="(benefit, index) in benefits"
            :key="index"
            @click="scrollToCard(index)"
            class="transition-all duration-500 rounded-full"
            :class="activeCardIndex === index
              ? 'w-8 h-2.5 bg-blue'
              : 'w-2.5 h-2.5 bg-gray-200'"
          />
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
      activeCardIndex: 0,
      cardRefs: [],
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
  },
  mounted() {
    this.cardRefs = []
  },
  methods: {
    onScroll() {
      const container = this.$refs.scrollContainer
      if (!container) return
      const containerLeft = container.getBoundingClientRect().left
      let closest = 0
      let minDistance = Infinity
      this.cardRefs.forEach((card, index) => {
        if (!card) return
        const cardLeft = card.getBoundingClientRect().left - containerLeft
        const distance = Math.abs(cardLeft)
        if (distance < minDistance) {
          minDistance = distance
          closest = index
        }
      })
      this.activeCardIndex = closest
    },
    scrollToCard(index) {
      const card = this.cardRefs[index]
      const container = this.$refs.scrollContainer
      if (!card || !container) return
      const containerPadding = parseInt(getComputedStyle(container).paddingLeft)
      container.scrollTo({
        left: card.offsetLeft - containerPadding,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.benefits-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.benefits-scroll::-webkit-scrollbar {
  display: none;
}
</style>