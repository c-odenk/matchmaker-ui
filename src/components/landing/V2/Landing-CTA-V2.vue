<template>
  <section ref="ctaSection" id="cta" class="py-12 md:py-16 lg:py-20 2xl:py-16">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <div class="relative overflow-hidden rounded-3xl bg-dark-blue px-6 md:px-10 lg:px-14 py-10 md:py-12">

        <!-- Glow-Effekt (dezent, wie Hero) -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            class="absolute"
            style="
              top: -60%;
              right: -10%;
              width: 55%;
              height: 200%;
              background: radial-gradient(ellipse at center, rgba(41, 118, 214, 0.35) 0%, transparent 65%);
              filter: blur(50px);
            "
          ></div>
        </div>

        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

          <!-- Text links -->
          <div class="flex-1 flex flex-col gap-3 cta-animate-item" style="animation-delay: 0s">
            <h2 class="text-h2 text-white leading-tight max-w-2xl">
              {{ heading }}
            </h2>
            <p class="text-p-lead text-white/80 max-w-xl">
              {{ subtext }}
            </p>
          </div>

          <!-- Aktionen rechts -->
          <div class="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0 cta-animate-item" style="animation-delay: 0.15s">
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

export default {
  name: 'LandingCta',
  components: { ButtonSecondary, ArrowRight, ModalDemo },
  data() {
    return {
      CalendarDays,
      showDemoModal: false,
      heading: 'Recruiting-Prozesse automatisieren. Beratungsqualität steigern.',
      subtext: 'Lassen Sie sich matchmaker.hr in 15 Minuten persönlich zeigen – oder starten Sie direkt.',
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
