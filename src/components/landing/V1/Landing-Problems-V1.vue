<template>
  <section ref="painSection" class="py-10 md:py-20 lg:py-20 bg-white overflow-x-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <div class="mb-10 md:mb-12 pain-animate-item" style="animation-delay: 0s">
        <div class="flex items-center gap-1.5 mb-4">
          <span class="w-2 h-2 rounded-full flex-shrink-0" style="background: #ef4444;"></span>
          <span class="text-p-small-sm text-black">Die Herausforderung</span>
        </div>
        <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black leading-tight max-w-2xl">
          Zu viel Zeit für operative Aufgaben. Zu wenig für Beratung.
        </h2>
      </div>

      <!-- Pain Points Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(pain, index) in painPoints"
          :key="index"
          class="flex flex-col gap-4 rounded-2xl p-6 pain-animate-item"
          :style="{
            'animation-delay': `${0.1 + index * 0.1}s`,
            'background': 'rgba(239,68,68,0.04)',
            'border': '1px solid rgba(239,68,68,0.2)'
          }"
        >
          <!-- Kennzahl + Label -->
          <div class="flex items-baseline gap-2 flex-wrap">
            <span class="font-bold text-black leading-none" style="font-size: 2.5rem;">{{ pain.stat }}</span>
            <span class="text-p-small-lg 2xl:text-p-small-2xl font-semibold" style="color: #ef4444;">{{ pain.statLabel }}</span>
          </div>

          <!-- Divider -->
          <div style="border-top: 1px solid rgba(239,68,68,0.15);"></div>

          <!-- Beschreibung -->
          <p class="text-p-small-lg 2xl:text-p-small-2xl text-black">{{ pain.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPain',
  mounted() {
    this.setupIntersectionObserver()
  },
  data() {
    return {
      painPoints: [
        {
          stat: '3 Std.',
          statLabel: 'täglich für manuelle Recherche',
          description: 'Jobboards, LinkedIn und Unternehmenswebsites werden täglich manuell durchsucht – Zeit, die direkt in die Beratung fließen könnte.',
        },
        {
          stat: '60 %',
          statLabel: 'der Matches sind nicht begründbar',
          description: 'Kandidatenauswahl nach Bauchgefühl ist fehleranfällig, schwer zu begründen und für Kunden kaum nachvollziehbar.',
        },
        {
          stat: '40 Min.',
          statLabel: 'pro Anschreiben',
          description: 'Recherche, Formulierung und Versand kosten pro Kontakt bis zu 40 Minuten – bei hunderten Kandidaten nicht skalierbar.',
        }
      ]
    }
  },
  methods: {
    setupIntersectionObserver() {
      if (!this.$refs.painSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pain-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })
      observer.observe(this.$refs.painSection)
    }
  }
}
</script>

<style scoped>
.pain-animate-item {
  opacity: 0;
  transform: translateY(20px);
}

.pain-animated .pain-animate-item {
  animation: painFadeUp 0.6s ease forwards;
}

@keyframes painFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>