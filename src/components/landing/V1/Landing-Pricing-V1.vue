<template>
  <section ref="pricingSection" id="pricing" class="py-20 md:py-28 lg:py-20 lg:pb-4 2xl:pt-28 2xl:pb-16 bg-white">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <SectionHeader
        title="Effizientes Talentpool management - zum fairen Preis"
        description="Wählen Sie den Plan, der zu Ihren Anforderungen passt. Upgrades oder Downgrades sind jederzeit möglich."
        align="left"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <div
          class="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-7 lg:p-8 flex flex-col self-stretch pricing-animate-card"
          style="animation-delay: 0s"
        >
          <div class="mb-6 flex flex-col min-h-[125px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-2">{{ starter.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ starter.description }}</p>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black">{{ starter.price }}</span>
            <span v-if="starter.priceSuffix" class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ starter.priceSuffix }}</span>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in starter.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-dark-blue">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="2" />
              </div>
              {{ feature.label }}
            </li>
          </ul>
        </div>

        <div
          class="bg-dark-blue rounded-2xl p-10 md:p-7 lg:p-8 flex flex-col relative self-stretch shadow-xl scale-[1.02] z-10 pricing-animate-card"
          style="border: 1px solid rgba(255,255,255,0.1); animation-delay: 0.25s"
        >
          <div class="relative z-10 mb-6 flex flex-col min-h-[125px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-2">{{ pro.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-white">{{ pro.description }}</p>
          </div>

          <div class="relative z-10 mb-6 flex items-baseline gap-1">
            <template v-if="plansLoading">
              <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-white opacity-40">–,–€</span>
            </template>
            <template v-else>
              <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-white">{{ selectedTier.price }}</span>
              <span class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-white">{{ selectedTier.priceSuffix }}</span>
            </template>
          </div>

          <ul class="relative z-10 flex flex-col gap-3 mb-8">
            <li v-for="feature in pro.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-green-400">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="2.5" />
              </div>
              {{ feature.label }}
            </li>
          </ul>

          <div class="relative z-20 mb-4">
            <label class="block text-white text-[10px] font-bold mb-2 uppercase tracking-widest">Talent-Pool Größe</label>
            <div class="relative" v-click-outside="closeDropdown">
              <button
                @click="dropdownOpen = !dropdownOpen"
                :disabled="plansLoading"
                class="w-full flex items-center justify-between gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 text-white text-sm rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div class="flex items-center gap-2">
                  <Users class="w-4 h-4 text-white/60" :stroke-width="1.75" />
                  <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl">{{ plansLoading ? 'Wird geladen…' : selectedTier.label }}</span>
                </div>
                <svg
                  class="w-4 h-4 text-white/60 transition-transform duration-200"
                  :class="dropdownOpen ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <transition
                enter-active-class="transition ease-out duration-150"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="dropdownOpen"
                  class="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-50 divide-y divide-gray-100 bg-white shadow-2xl border border-gray-100"
                >
                  <button
                    v-for="tier in pro.tiers"
                    :key="tier.label"
                    @click="selectTier(tier)"
                    class="w-full flex items-center justify-between px-4 py-3 transition-all duration-150 text-black group relative"
                    :class="selectedTier.label === tier.label ? 'bg-dark-blue/5 font-medium' : 'hover:bg-dark-blue/5'"
                  >
                    <span
                      class="absolute left-0 top-0 bottom-0 w-0.5 bg-dark-blue transition-all duration-150 rounded-r"
                      :class="selectedTier.label === tier.label ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
                    ></span>
                    <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl">{{ tier.label }}</span>
                    <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl font-semibold text-black">{{ tier.price }}</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>

          <div class="relative z-10 mb-6">
            <ButtonSecondary :href="loginUrl" class="w-full">
              Jetzt loslegen
            </ButtonSecondary>
          </div>
        </div>

        <div
          class="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-7 lg:p-8 flex flex-col self-stretch pricing-animate-card"
          style="animation-delay: 0.5s"
        >
          <div class="mb-6 flex flex-col min-h-[125px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-2">{{ addon.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ addon.description }}</p>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <template v-if="plansLoading">
              <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black opacity-40">–,–€</span>
            </template>
            <template v-else>
              <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black">{{ addon.price }}</span>
              <span v-if="addon.priceSuffix" class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ addon.priceSuffix }}</span>
            </template>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in addon.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-dark-blue">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="2" />
              </div>
              {{ feature.label }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { KeyRound, CreditCard, BadgeCheck, ScanSearch, Users, Server, Bot, CalendarX, PlusCircle, UserCheck } from 'lucide-vue-next'
import SectionHeader from '@/components/common/SectionHeader.vue'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'

const CACHE_KEY = 'matchmaker_plans_cache'

function formatPrice(preis) {
  return preis.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '€'
}

function tierLabel(maxKandidaten) {
  if (!maxKandidaten) return 'Über 250 Talente'
  if (maxKandidaten <= 50)  return 'Bis zu 50 Talente'
  if (maxKandidaten <= 100) return '50 – 100 Talente'
  return '100 – 250 Talente'
}

export default {
  name: 'LandingPricing',
  components: { SectionHeader, ButtonSecondary, Users },
  directives: {
    clickOutside: {
      mounted(el, binding) {
        el._clickOutside = (e) => {
          if (!el.contains(e.target)) binding.value()
        }
        document.addEventListener('click', el._clickOutside)
      },
      unmounted(el) {
        document.removeEventListener('click', el._clickOutside)
      }
    }
  },
  data() {
    return {
      plansLoading: true,
      selectedTier: { label: '', price: '', priceSuffix: ' / Monat' },
      dropdownOpen: false,
      starter: {
        name: 'Bring Your Own Key',
        description: 'Volle Kostenkontrolle – direkte Abrechnung über den eigenen API-Account, ohne weitere Aufschläge.',
        price: 'Kostenlos',
        priceSuffix: null,
        features: [
          { label: 'Eigener KI-API-Schlüssel erforderlich', icon: KeyRound },
          { label: 'Direkte Abrechnung beim Anbieter', icon: CreditCard },
          { label: 'Keine versteckten Aufschläge oder Margen', icon: BadgeCheck },
          { label: 'Vollständige Transparenz über die eigene Nutzung', icon: ScanSearch },
        ]
      },
      pro: {
        name: 'Enterprise Lizenz',
        description: 'Für Personalberater, die ihren gesamten Recruiting-Prozess automatisieren wollen.',
        tiers: [],
        features: [
          { label: '3 Mitarbeiter-Lizenzen', icon: Users },
          { label: 'Hosting ihrer Kandidatenprofile und Vakanzen', icon: Server },
          { label: 'Multi-Agenten-System vollständig enthalten', icon: Bot },
          { label: 'Monatlich kündbar, keine Mindestlaufzeit', icon: CalendarX },
        ]
      },
      addon: {
        name: 'Zusätzliche Mitarbeiter',
        description: 'Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.',
        price: '',
        priceSuffix: ' / pro weitere Lizenz & Monat',
        features: [
          { label: 'Alle Leistungen der Enterprise Lizenz', icon: PlusCircle },
          { label: 'Skalierbar je zusätzlicher Mitarbeiter', icon: UserCheck },
          { label: 'Monatlich kündbar, keine Mindestlaufzeit', icon: CalendarX },
        ]
      },
      loginUrl: process.env.VUE_APP_DASHBOARD_URL
    }
  },
  async created() {
    await this.fetchPlans()
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    applyPlans(data) {
      this.pro.tiers = data.plans.map(plan => ({
        label:       tierLabel(plan.maxKandidaten),
        price:       formatPrice(plan.preisProMonat),
        priceSuffix: ' / Monat',
        tier:        plan.tier,
      }))
      this.addon.price = formatPrice(data.zusatzlizenzPreisProMonat)
      if (!this.selectedTier.label) this.selectedTier = this.pro.tiers[0]
    },

    async fetchPlans() {
      // ── 1. Cache sofort anzeigen – kein Warten auf API ──────────────
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          this.applyPlans(JSON.parse(cached))
          this.plansLoading = false
        }
      } catch (e) {
        // localStorage nicht verfügbar – kein Problem, weiter mit API
      }

      // ── 2. Frische Daten im Hintergrund laden & Cache aktualisieren ──
      try {
        const res = await fetch(`${process.env.VUE_APP_API_URL}/api/subscriptions/plans`)
        const { data } = await res.json()
        localStorage.setItem(CACHE_KEY, JSON.stringify(data))
        this.applyPlans(data)
      } catch (e) {
        console.error('Preise konnten nicht geladen werden:', e)
      } finally {
        this.plansLoading = false
      }
    },

    selectTier(tier) {
      this.selectedTier = tier
      this.dropdownOpen = false
    },
    closeDropdown() {
      this.dropdownOpen = false
    },
    setupIntersectionObserver() {
      if (!this.$refs.pricingSection) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pricing-animated')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.3
      })

      observer.observe(this.$refs.pricingSection)
    }
  }
}
</script>

<style scoped>
.pricing-animate-card {
  opacity: 0;
  transform: translateY(20px);
}

.pricing-animated .pricing-animate-card {
  animation: pricingFadeUp 0.6s ease forwards;
}

@keyframes pricingFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>