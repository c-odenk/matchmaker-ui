<template>
  <section ref="ctaSection" id="cta" class="py-12 md:py-16 lg:py-20 2xl:py-16">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <div class="relative overflow-hidden rounded-3xl bg-dark-blue px-6 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20">

        <!-- Glow-Effekte (wie Hero) -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            class="absolute"
            style="
              top: -40%;
              right: -10%;
              width: 65%;
              height: 110%;
              background: radial-gradient(ellipse at center, rgba(41, 118, 214, 0.4) 0%, transparent 65%);
              filter: blur(50px);
            "
          ></div>
          <div
            class="absolute"
            style="
              top: -20%;
              left: -15%;
              width: 50%;
              height: 80%;
              background: radial-gradient(ellipse at center, rgba(100, 160, 230, 0.18) 0%, transparent 70%);
              filter: blur(60px);
            "
          ></div>
        </div>

        <div class="relative z-10 flex flex-col items-center text-center">

          <!-- Badge -->
          <div class="cta-animate-item" style="animation-delay: 0s">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-p-small text-white"
              style="background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.12);">
              <span class="w-2 h-2 rounded-full animate-pulse flex-shrink-0 bg-green-500"></span>
              Persönliche Demo – 15 Minuten
            </span>
          </div>

          <h2 class="cta-animate-item mt-5 max-w-2xl text-h2 text-white leading-tight" style="animation-delay: 0.1s">
            {{ heading }}
          </h2>
          <p class="cta-animate-item mt-4 max-w-xl text-p-lead text-white/80" style="animation-delay: 0.2s">
            {{ subtext }}
          </p>

          <!-- Aktionen -->
          <div class="cta-animate-item mt-7 flex flex-col items-center justify-center gap-2 md:flex-row" style="animation-delay: 0.3s">
            <ButtonSecondary :icon="CalendarDays" @click="showDemoModal = true">
              Demo vereinbaren
            </ButtonSecondary>
            <a
              :href="loginUrl"
              class="inline-flex items-center justify-center gap-2 rounded-button px-8 py-2.5 text-p text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-200 md:min-w-[160px]"
            >
              <span class="text-nowrap">Jetzt anmelden</span>
              <ArrowRight class="w-4 h-4" :stroke-width="1.75" />
            </a>
          </div>

          <!-- Trust-Bullets -->
          <div class="cta-animate-item mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2" style="animation-delay: 0.4s">
            <span v-for="item in trustItems" :key="item" class="flex items-center gap-1.5 text-p-small text-white/70">
              <span class="w-2 h-2 rounded-full flex-shrink-0 bg-green-500"></span>
              {{ item }}
            </span>
          </div>

          <!-- Mockup, unten angeschnitten (wie Hero) -->
          <div class="cta-animate-item mt-10 md:mt-12 w-full max-w-3xl" style="animation-delay: 0.5s">
            <div
              class="overflow-hidden"
              style="border-radius: 12px 12px 0 0; border: 1px solid rgba(255,255,255,0.1); border-bottom: 0; box-shadow: 0 -12px 48px rgba(0,0,0,0.35);"
            >
              <!-- Browser Bar -->
              <div class="flex items-center gap-1.5 px-3 py-2 bg-browser-frame" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <div class="w-2 h-2 rounded-full" style="background: #ff5f57;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #febc2e;"></div>
                <div class="w-2 h-2 rounded-full" style="background: #28c840;"></div>
                <div
                  class="ml-2 flex-1 rounded px-2 py-0.5 text-left"
                  style="background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35); max-width: 160px; font-size: 0.65rem;"
                >
                  matchmaker.hr
                </div>
              </div>
              <!-- Screenshot (oben sichtbar, unten vom Panel beschnitten) -->
              <div class="w-full overflow-hidden" style="aspect-ratio: 16 / 6;">
                <img
                  :src="workflowMockup"
                  alt="Workflow-Ansicht in matchmaker.hr mit Agenten-Pipeline und Freigabe-Schritten"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Demo Modal -->
    <ModalDemo :isOpen="showDemoModal" @close="showDemoModal = false" />
  </section>
</template>

<script>
import { CalendarDays, ArrowRight } from 'lucide-vue-next'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'
import ModalDemo from '@/components/modals/ModalDemo.vue'
import workflowMockup from '@/assets/Workflow-Mockup.png'

export default {
  name: 'LandingCta',
  components: { ButtonSecondary, ArrowRight, ModalDemo },
  data() {
    return {
      CalendarDays,
      workflowMockup,
      showDemoModal: false,
      heading: 'Recruiting-Prozesse automatisieren. Beratungsqualität steigern.',
      subtext: 'matchmaker.hr verbindet KI-gestützte Automatisierung mit menschlichem Urteilsvermögen.',
      trustItems: ['DSGVO-konform', 'EU-Hosting', 'Human-in-the-Loop'],
      loginUrl: process.env.VUE_APP_DASHBOARD_URL
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    setupIntersectionObserver() {
      if (!this.$refs.ctaSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cta-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15 })
      observer.observe(this.$refs.ctaSection)
    }
  }
}
</script>

<style scoped>
.cta-animate-item {
  opacity: 0;
  transform: translateY(20px);
}

.cta-animated .cta-animate-item {
  animation: ctaFadeUp 0.6s ease forwards;
}

@keyframes ctaFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
