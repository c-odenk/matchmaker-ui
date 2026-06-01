<template>
  <section ref="benefitsSection" class="py-10 md:py-28 lg:pt-40 lg:pb-20 bg-white overflow-x-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Mobile + Tablet: stacked layout -->
      <div class="lg:hidden flex flex-col gap-6">

        <!-- Trust Bullets (versteckt auf Mobile) -->
        <div class="hidden sm:flex flex-wrap items-center gap-x-5 gap-y-2 -mb-2 benefits-animate-item" style="animation-delay: 0s">
          <span v-for="item in trustItems" :key="item"
            class="flex items-center gap-1.5 text-p-small-sm text-black">
            <span class="w-2 h-2 rounded-full flex-shrink-0" style="background: #22c55e;"></span>
            {{ item }}
          </span>
        </div>

        <h2 class="text-h3-sm md:text-h3-md text-black benefits-animate-item" style="animation-delay: 0.1s">{{ heading }}</h2>
        <p class="text-p-sm md:text-p-md text-black benefits-animate-item" style="animation-delay: 0.2s">{{ subtext }}</p>

        <div class="hidden sm:block self-start benefits-animate-item" style="animation-delay: 0.3s">
          <ButtonPrimary href="#" :icon="ArrowRight" iconPosition="trailing">
            Jetzt anmelden
          </ButtonPrimary>
        </div>

        <!-- Mobile: horizontal scroll -->
        <div class="sm:hidden">
          <div
            ref="scrollContainer"
            class="benefits-scroll flex flex-row overflow-x-auto snap-x snap-mandatory"
            @scroll="onScroll"
          >
            <div
              v-for="(benefit, index) in benefits"
              :key="benefit.title"
              :ref="el => { if (el) cardRefs[index] = el }"
              class="shrink-0 w-full snap-start pb-3"
            >
              <div class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 h-full">
                <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white">
                  <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
                </div>
                <div>
                  <h3 class="text-p-small-sm font-bold text-black mb-2">{{ benefit.title }}</h3>
                  <p class="text-p-small-sm text-black">{{ benefit.solution }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <button
              v-for="(benefit, index) in benefits"
              :key="index"
              @click="scrollToCard(index)"
              class="transition-all duration-500 rounded-full"
              :class="activeCardIndex === index ? 'w-8 h-2.5 bg-dark-blue' : 'w-2.5 h-2.5 bg-gray-200'"
            />
          </div>
        </div>

        <!-- Tablet: 2x2 grid -->
        <div class="hidden sm:grid grid-cols-2 gap-4">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 benefits-animate-item"
            :style="{ 'animation-delay': `${0.4 + index * 0.1}s` }"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white">
              <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
            </div>
            <div>
              <h3 class="text-p-small-sm md:text-p-small-md font-bold text-black mb-2">{{ benefit.title }}</h3>
              <p class="text-p-small-sm md:text-p-small-md text-black">{{ benefit.solution }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Desktop: side-by-side -->
      <div class="hidden lg:flex flex-row gap-16 items-center">

        <!-- Karten links -->
        <div class="lg:w-1/2 grid grid-cols-2 gap-4">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="flex flex-col gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 benefits-animate-item"
            :style="{ 'animation-delay': `${0.2 + index * 0.1}s` }"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white">
              <component :is="benefit.icon" class="w-4 h-4" :stroke-width="1.5" />
            </div>
            <div>
              <h3 class="text-p-small-lg 2xl:text-p-small-2xl font-bold text-black mb-2">{{ benefit.title }}</h3>
              <p class="text-p-small-lg 2xl:text-p-small-2xl text-black">{{ benefit.solution }}</p>
            </div>
          </div>
        </div>

        <!-- Text rechts -->
        <div class="lg:w-1/2 flex flex-col gap-6">
          <div class="flex flex-wrap items-center gap-x-5 gap-y-8 -mb-4 benefits-animate-item" style="animation-delay: 0s">
            <span v-for="item in trustItems" :key="item"
              class="flex items-center gap-1.5 text-p-small-lg 2xl:text-p-small-2xl text-black">
              <span class="w-2 h-2 rounded-full flex-shrink-0" style="background: #22c55e;"></span>
              {{ item }}
            </span>
          </div>
          <h2 class="text-h3-lg 2xl:text-h3-2xl text-black benefits-animate-item" style="animation-delay: 0.1s">{{ heading }}</h2>
          <p class="text-p-lg 2xl:text-p-2xl text-black benefits-animate-item" style="animation-delay: 0.2s">{{ subtext }}</p>
          <div class="self-start benefits-animate-item" style="animation-delay: 0.3s">
            <ButtonPrimary :href="loginUrl" :icon="ArrowRight" iconPosition="trailing">
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
  components: { Search, Zap, Target, ShieldCheck, ButtonPrimary },
  data() {
    return {
      ArrowRight,
      activeCardIndex: 0,
      cardRefs: [],
      heading: 'KI-gestützte Automatisierung für modernes Recruiting',
      subtext: 'matchmaker.hr übernimmt die zeitintensiven Schritte im Vermittlungsprozess – von der Marktanalyse bis zum Outreach – und schafft so Kapazität für das Wesentliche: die Beratung.',
      trustItems: ['DSGVO-konform', 'EU-Hosting', 'Human-in-the-Loop'],
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
      ],
      loginUrl: process.env.VUE_APP_DASHBOARD_URL
    }
  },
  mounted() {
    this.cardRefs = []
    this.setupIntersectionObserver()
  },
  methods: {
    onScroll() {
      const container = this.$refs.scrollContainer
      if (!container) return
      this.activeCardIndex = Math.round(container.scrollLeft / container.offsetWidth)
    },
    scrollToCard(index) {
      const container = this.$refs.scrollContainer
      if (!container) return
      container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' })
    },
    setupIntersectionObserver() {
      if (!this.$refs.benefitsSection) return
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('benefits-animated')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.3
      })
      
      observer.observe(this.$refs.benefitsSection)
    }
  }
}
</script>

<style scoped>
.benefits-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.benefits-scroll::-webkit-scrollbar { display: none; }

.benefits-animate-item {
  opacity: 0;
  transform: translateY(20px);
}

.benefits-animated .benefits-animate-item {
  animation: benefitsFadeUp 0.6s ease forwards;
}

@keyframes benefitsFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>