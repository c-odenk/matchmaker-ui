<template>
  <section ref="productSection" id="product" class="py-10 md:py-20 lg:py-20 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <div class="flex flex-col gap-12 md:gap-16 lg:gap-24">

        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 product-animate-row"
          :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >

          <!-- Text -->
          <div class="w-full lg:w-1/2 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon"/>
                </svg>
              </div>
              <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black leading-snug font-bold">
                <span class="lg:hidden">{{ mobileTitle(feature) }}</span>
                <span class="hidden lg:inline">{{ feature.title }}</span>
              </h3>
            </div>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black leading-relaxed">
              {{ feature.description }}
            </p>
            <ul class="flex flex-col gap-3">
              <li v-for="(point, pIdx) in feature.points" :key="pIdx" class="flex items-center gap-3 text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
                <span class="w-2.5 h-2.5 rounded-full bg-dark-blue flex-shrink-0"></span>
                <span class="flex-1 leading-snug">{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Screenshot Platzhalter -->
          <div class="w-full lg:w-1/2">
            <div
              class="relative w-full rounded-2xl overflow-hidden shadow-xl bg-dark-blue"
              style="aspect-ratio: 16/9;"
            >
              <div class="absolute inset-0 p-4 md:p-5 flex flex-col gap-2 md:gap-3">

                <!-- Titelzeile -->
                <div class="flex items-center justify-between">
                  <div class="h-2.5 md:h-3.5 rounded-md w-2/5" style="background: rgba(255,255,255,0.15);"></div>
                  <div class="flex gap-1.5 md:gap-2">
                    <div class="h-2.5 md:h-3 rounded-full w-8 md:w-12" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-2.5 md:h-3 rounded-full w-8 md:w-12" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-2.5 md:h-3 rounded-full w-8 md:w-12" style="background: rgba(255,255,255,0.08);"></div>
                  </div>
                </div>

                <!-- Tab-Leiste -->
                <div class="flex gap-1.5 md:gap-2 mt-0.5">
                  <div class="h-5 md:h-6 rounded-full w-12 md:w-16" style="background: rgba(255,255,255,0.18);"></div>
                  <div class="h-5 md:h-6 rounded-full w-12 md:w-16" style="background: rgba(255,255,255,0.07);"></div>
                  <div class="h-5 md:h-6 rounded-full w-12 md:w-16" style="background: rgba(255,255,255,0.07);"></div>
                </div>

                <!-- Karten-Grid -->
                <div class="flex-1 grid grid-cols-2 gap-2 md:gap-3 mt-0.5">
                  <div class="rounded-xl p-2.5 md:p-3 flex flex-col gap-1.5 md:gap-2" style="background: rgba(255,255,255,0.07);">
                    <div class="flex items-center gap-1.5 md:gap-2">
                      <div class="w-4 h-4 md:w-5 md:h-5 rounded-full flex-shrink-0" style="background: rgba(255,255,255,0.15);"></div>
                      <div class="h-2 md:h-2.5 rounded w-2/3" style="background: rgba(255,255,255,0.15);"></div>
                    </div>
                    <div class="h-1.5 md:h-2 rounded w-full" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-1.5 md:h-2 rounded w-4/5" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-1.5 md:h-2 rounded w-3/5" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="mt-auto self-end h-4 md:h-5 w-12 md:w-16 rounded-full" style="background: rgba(255,255,255,0.18);"></div>
                  </div>
                  <div class="rounded-xl p-2.5 md:p-3 flex flex-col gap-1.5 md:gap-2" style="background: rgba(255,255,255,0.07);">
                    <div class="flex items-center gap-1.5 md:gap-2">
                      <div class="w-4 h-4 md:w-5 md:h-5 rounded-full flex-shrink-0" style="background: rgba(255,255,255,0.15);"></div>
                      <div class="h-2 md:h-2.5 rounded w-2/3" style="background: rgba(255,255,255,0.15);"></div>
                    </div>
                    <div class="h-1.5 md:h-2 rounded w-full" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-1.5 md:h-2 rounded w-4/5" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="h-1.5 md:h-2 rounded w-3/5" style="background: rgba(255,255,255,0.08);"></div>
                    <div class="mt-auto self-end h-4 md:h-5 w-12 md:w-16 rounded-full" style="background: rgba(255,255,255,0.18);"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingProduct',
  mounted() {
    this.setupIntersectionObserver()
  },
  data() {
    return {
      features: [
        {
          title: 'Profiling Agent – Bedarfsanalyse & Profiling',
          description: 'Strukturierte Erfassung des Suchauftrags – der Agent leitet ein präzises Qualifikationsprofil und Suchkriterien für alle nachgelagerten Agenten ab.',
          points: [
            'Strukturierte Erfassung von Qualifikationen und Rahmenbedingungen',
            'Automatische Ableitung von Such- und Matching-Kriterien',
            'Einheitliche Profilbasis für alle nachgelagerten Agenten',
          ],
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
        },
        {
          title: 'Market Agent – Vakanzidentifikation',
          description: 'Kontinuierliches Scanning des Stellenmarkts – neue Vakanzen werden automatisch erfasst, aufbereitet und mit dem Kandidatenpool abgeglichen.',
          points: [
            'Kontinuierliches Scanning von Jobboards und Unternehmenswebsites',
            'Automatischer Abgleich mit bestehenden Kandidatenprofilen',
            'Vollständige Quellenhistorie für jede identifizierte Vakanz',
          ],
          icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z',
        },
        {
          title: 'Matching Agent – Intelligentes Scoring',
          description: 'Semantisches Scoring auf Basis von Qualifikation, Karriereverlauf und implizitem Kontext – mit nachvollziehbarer Begründung je Empfehlung.',
          points: [
            'Semantisches Scoring auf Basis der Kandidaten-DNA',
            'Nachvollziehbare KI-Begründung je Empfehlung',
            'Priorisierte Shortlist auf Anforderung',
          ],
          icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 0113.5 18v-2.25z',
        },
        {
          title: 'Outreach Agent – Kontaktierung & Engagement',
          description: 'Automatische Recherche des zuständigen Ansprechpartners, individualisiertes Anschreiben und Bereitstellung zur Freigabe – in Minuten statt Stunden.',
          points: [
            'Automatische Identifikation von Entscheidern via API',
            'Hochgradig personalisierte Anschreiben je Kontakt',
            'Freigabe per Klick – kein manueller Aufwand',
          ],
          icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Alle Agenten arbeiten im Hintergrund – die finale Entscheidung liegt beim Berater. Jede Aktion durchläuft einen definierten menschlichen Freigabe-Schritt.',
          points: [
            'Kein automatischer Versand ohne Beratergenehmigung',
            'Transparente Nachvollziehbarkeit jeder Entscheidung',
            'Jederzeit steuerbar, konfigurierbar und anpassbar',
          ],
          icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
        }
      ]
    }
  },
  methods: {
    mobileTitle(feature) {
      if (!feature?.title) return ''
      const parts = feature.title.split(' – ')
      return parts.length > 1 ? parts[1] : feature.title
    },
    setupIntersectionObserver() {
      if (!this.$refs.productSection) return

      const rowEls = this.$refs.productSection.querySelectorAll('.product-animate-row')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('product-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15 })

      rowEls.forEach(el => observer.observe(el))
    }
  }
}
</script>

<style scoped>
.product-animate-row {
  opacity: 0;
  transform: translateY(28px);
}

.product-animate-row.product-animated {
  animation: rowFadeUp 0.65s ease forwards;
}

@keyframes rowFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>