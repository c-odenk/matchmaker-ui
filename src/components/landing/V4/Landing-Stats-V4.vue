<template>
  <section ref="statsSection" id="stats" class="relative py-12 md:py-16 lg:py-20 bg-dark-blue overflow-hidden">

    <!-- Glow (wie Hero/CTA) -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute"
        style="top:-40%; left:50%; transform:translateX(-50%); width:80%; height:140%; background: radial-gradient(ellipse at center, rgba(41,118,214,0.28) 0%, transparent 65%); filter: blur(60px);"
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <div class="text-center mb-10 md:mb-12 stats-animate-item" style="animation-delay: 0s">
        <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-white leading-tight">
          {{ headingBefore }}<span class="text-light-blue">{{ headingAccent }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div
          v-for="(kpi, index) in kpis"
          :key="kpi.label"
          class="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-7 flex flex-col gap-4 stats-animate-item"
          :style="{ 'animation-delay': `${0.1 + index * 0.1}s` }"
        >
          <div class="flex items-center gap-3.5">
            <div class="w-11 h-11 rounded-xl bg-light-blue/20 flex items-center justify-center flex-shrink-0" style="border:1px solid rgba(41,118,214,0.3);">
              <component :is="kpi.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
            </div>
            <div class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-white leading-none">{{ kpi.value }}</div>
          </div>
          <div>
            <div class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl font-semibold text-white">{{ kpi.label }}</div>
            <div class="mt-1 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white/55">{{ kpi.note }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { TrendingDown, Workflow, ShieldCheck } from 'lucide-vue-next'

export default {
  name: 'LandingStats',
  data() {
    return {
      headingBefore: 'Spürbare Entlastung, ',
      headingAccent: 'messbare Wirkung',
      // Platzhalter-Kennzahlen – vor dem Live-Gang durch echte Werte ersetzen.
      kpis: [
        {
          icon: TrendingDown,
          value: '−70 %',
          label: 'weniger Sourcing-Aufwand',
          note: 'Kein manuelles Jobboard-Screening mehr.'
        },
        {
          icon: Workflow,
          value: '4 → 1',
          label: 'Schritte bis zur Freigabe',
          note: 'Vier Agenten arbeiten zu, der Berater gibt frei.'
        },
        {
          icon: ShieldCheck,
          value: '100 %',
          label: 'EU-Hosting',
          note: 'DSGVO-konform, Daten bleiben in der EU.'
        },
      ]
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    setupIntersectionObserver() {
      if (!this.$refs.statsSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stats-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15 })
      observer.observe(this.$refs.statsSection)
    }
  }
}
</script>

<style scoped>
.stats-animate-item {
  opacity: 0;
  transform: translateY(20px);
}

.stats-animated .stats-animate-item {
  animation: statsFadeUp 0.6s ease forwards;
}

@keyframes statsFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
