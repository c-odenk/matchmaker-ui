<template>
  <section ref="productSection" id="product" class="py-10 md:py-28 lg:py-20 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">
      
      <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

        <!-- Linke Spalte: Slideshow -->
        <div class="lg:w-1/2 flex flex-col w-full product-animate-text" style="animation-delay: 0s">

          <!-- Feature-Karte -->
          <div class="relative overflow-hidden">
            <transition name="slide-fade" mode="out-in">
              <div v-if="currentFeature" :key="currentIndex" class="flex flex-col gap-4 p-1">
                <div class="flex items-center gap-3">
                  <div class="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white shadow-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="currentFeature.icon"/>
                    </svg>
                  </div>
                  <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black leading-snug font-bold">
                    <span class="lg:hidden">{{ mobileTitle }}</span>
                    <span class="hidden lg:inline">{{ currentFeature.title }}</span>
                  </h3>
                </div>
                <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black leading-relaxed">
                  {{ currentFeature.description }}
                </p>
                <ul class="flex flex-col gap-3">
                  <li v-for="(point, pIdx) in currentFeature.points" :key="pIdx" class="flex items-center gap-3 text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
                    <div class="flex-shrink-0">
                      <svg class="w-5 h-5 text-dark-blue" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="flex-1 leading-snug">{{ point }}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <!-- Dots Navigation -->
          <div class="flex items-center gap-2.5 mt-8">
            <button
              v-for="(feature, index) in features"
              :key="'dot-' + index"
              @click="goTo(index)"
              class="transition-all duration-300 rounded-full h-2.5"
              :class="currentIndex === index ? 'w-8 bg-dark-blue shadow-sm' : 'w-2.5 bg-gray-200 hover:bg-gray-300'"
            />
          </div>

        </div>

        <!-- Rechte Spalte: Video-Platzhalter -->
        <div class="w-full lg:w-1/2 product-animate-image" style="animation-delay: 0.2s">
          <div class="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50 flex flex-col items-center justify-center gap-4">
            
            <div class="w-16 h-16 rounded-full bg-dark-blue/10 border-2 border-dark-blue/20 flex items-center justify-center">
              <svg class="w-7 h-7 text-dark-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>

            <div class="flex flex-col items-center gap-1 px-6 text-center">
              <p class="text-p-small-lg font-semibold text-gray-500">Video folgt in Kürze</p>
              <p class="text-p-small-lg text-gray-400">Hier wird eine Produktdemo von matchmaker.hr zu sehen sein.</p>
            </div>

            <div class="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gray-300 rounded-tl-md"></div>
            <div class="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gray-300 rounded-tr-md"></div>
            <div class="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gray-300 rounded-bl-md"></div>
            <div class="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gray-300 rounded-br-md"></div>

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
      currentIndex: 0,
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
  computed: {
    currentFeature() {
      return this.features[this.currentIndex] || this.features[0]
    },
    mobileTitle() {
      if (!this.currentFeature?.title) return ''
      const parts = this.currentFeature.title.split(' – ')
      return parts.length > 1 ? parts[1] : this.currentFeature.title
    }
  },
  methods: {
    goTo(index) {
      this.currentIndex = index
    },
    setupIntersectionObserver() {
      if (!this.$refs.productSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('product-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      observer.observe(this.$refs.productSection)
    }
  }
}
</script>

<style scoped>
.product-animate-text {
  opacity: 0;
  transform: translateX(-30px);
}

.product-animate-image {
  opacity: 0;
  transform: scale(0.95) translateX(30px);
}

.product-animated .product-animate-text {
  animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.product-animated .product-animate-image {
  animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes slideInFromLeft {
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInFromRight {
  to { opacity: 1; transform: scale(1) translateX(0); }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>