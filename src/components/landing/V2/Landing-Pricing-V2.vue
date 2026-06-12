<template>
  <section ref="pricingSection" id="pricing" class="py-12 md:py-16 lg:py-20 lg:pb-4 2xl:pt-28 2xl:pb-16 bg-white">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <SectionHeader
        title="Effizientes Talentpool-Management – zum fairen Preis"
        description="Wählen Sie den Plan, der zu Ihren Anforderungen passt. Upgrades oder Downgrades sind jederzeit möglich."
        align="left"
        marginBottom="mb-8"
      />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

        <!-- Starter -->
        <div
          class="rounded-2xl overflow-hidden flex flex-col pricing-animate-card border border-gray-200 bg-gray-50"
          style="animation-delay: 0s;"
        >
          <div class="px-7 pt-6 pb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-1">{{ starter.name }}</h3>
            <p class="text-p-small-lg 2xl:text-p-small-2xl text-black mb-6">{{ starter.description }}</p>
            <div class="flex items-baseline gap-1">
              <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black">{{ starter.price }}</span>
            </div>
          </div>

          <div class="mx-7 border-t border-gray-200"></div>

          <div class="px-7 py-6 flex-1 flex flex-col">
            <ul class="flex flex-col gap-3 flex-1">
              <li v-for="feature in starter.features" :key="feature.label" class="flex items-start gap-3 text-p-small-lg 2xl:text-p-small-2xl text-black">
                <div class="flex-shrink-0 mt-0.5">
                  <component :is="feature.icon" class="w-4 h-4 text-dark-blue" :stroke-width="2" />
                </div>
                {{ feature.label }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Pro -->
        <div
          class="rounded-2xl overflow-hidden flex flex-col pricing-animate-card bg-dark-blue"
          style="animation-delay: 0.15s;"
        >
          <div class="px-7 pt-6 pb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-1">{{ pro.name }}</h3>
            <p class="text-p-small-lg 2xl:text-p-small-2xl mb-6 text-white">{{ pro.description }}</p>
            <div class="flex items-baseline gap-1.5">
              <template v-if="plansLoading || !selectedTier.price">
                <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-white opacity-40">–,–€</span>
              </template>
              <template v-else>
                <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-white">{{ selectedTier.price }}</span>
                <span class="text-p-small-lg 2xl:text-p-small-2xl text-white">{{ selectedTier.priceSuffix }}</span>
              </template>
            </div>
          </div>

          <div class="mx-7" style="border-top: 1px solid rgba(255,255,255,0.1);"></div>

          <div class="px-7 py-6 flex-1 flex flex-col">
            <p class="text-[10px] font-bold uppercase tracking-widest mb-4 text-white">Leistungen</p>
            <ul class="flex flex-col gap-3 mb-6">
              <li v-for="feature in pro.features" :key="feature.label" class="flex items-start gap-3 text-p-small-lg 2xl:text-p-small-2xl text-white">
                <div class="flex-shrink-0 mt-0.5">
                  <component :is="feature.icon" class="w-4 h-4 text-green-400" :stroke-width="2" />
                </div>
                {{ feature.label }}
              </li>
            </ul>

            <div class="mb-4" style="border-top: 1px solid rgba(255,255,255,0.1);"></div>

            <div v-if="pro.tiers.length" class="mb-5">
              <p class="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">Talent-Pool Größe</p>
              <div class="flex flex-col gap-1.5">
                <button
                  v-for="tier in pro.tiers"
                  :key="tier.label"
                  @click="selectTier(tier)"
                  class="flex items-center justify-between px-3 py-2 rounded-xl border transition-all duration-150 text-left"
                  :class="selectedTier.label === tier.label
                    ? 'border-white/30'
                    : 'border-white/10 hover:border-white/20'"
                  :style="selectedTier.label === tier.label
                    ? 'background: rgba(255,255,255,0.12);'
                    : 'background: transparent;'"
                >
                  <span class="text-p-small-lg 2xl:text-p-small-2xl text-white">{{ tier.label }}</span>
                  <span class="text-p-small-lg 2xl:text-p-small-2xl font-semibold text-white">{{ tier.price }}</span>
                </button>
              </div>
            </div>

            <ButtonSecondary :href="loginUrl" class="w-full mt-auto">
              Jetzt loslegen
            </ButtonSecondary>
          </div>
        </div>

        <!-- Addon -->
        <div
          class="rounded-2xl overflow-hidden flex flex-col pricing-animate-card border border-gray-200 bg-gray-50"
          style="animation-delay: 0.3s;"
        >
          <div class="px-7 pt-6 pb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-1">{{ addon.name }}</h3>
            <p class="text-p-small-lg 2xl:text-p-small-2xl text-black mb-6">{{ addon.description }}</p>
            <div class="flex items-baseline gap-1 flex-wrap">
              <template v-if="plansLoading || !addon.price">
                <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black opacity-40">–,–€</span>
              </template>
              <template v-else>
                <span class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl font-bold text-black">{{ addon.price }}</span>
                <span v-if="addon.priceSuffix" class="text-p-small-lg 2xl:text-p-small-2xl text-black">{{ addon.priceSuffix }}</span>
              </template>
            </div>
          </div>

          <div class="mx-7 border-t border-gray-200"></div>

          <div class="px-7 py-6 flex-1 flex flex-col">
            <p class="text-[10px] font-bold uppercase tracking-widest text-black mb-4">Leistungen</p>
            <ul class="flex flex-col gap-3 flex-1">
              <li v-for="feature in addon.features" :key="feature.label" class="flex items-start gap-3 text-p-small-lg 2xl:text-p-small-2xl text-black">
                <div class="flex-shrink-0 mt-0.5">
                  <component :is="feature.icon" class="w-4 h-4 text-dark-blue" :stroke-width="2" />
                </div>
                {{ feature.label }}
              </li>
            </ul>
          </div>
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
  components: { SectionHeader, ButtonSecondary },
  data() {
    return {
      plansLoading: true,
      selectedTier: { label: '', price: '', priceSuffix: ' / Monat' },
      starter: {
        name: 'Bring Your Own Key',
        description: 'Direkte Abrechnung über den eigenen API-Account, ohne weitere Aufschläge.',
        price: 'Kostenlos',
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
          { label: 'Hosting Ihrer Kandidatenprofile und Vakanzen', icon: Server },
          { label: 'Multi-Agenten-System vollständig enthalten', icon: Bot },
          { label: 'Monatlich kündbar, keine Mindestlaufzeit', icon: CalendarX },
        ]
      },
      addon: {
        name: 'Zusätzliche Mitarbeiter',
        description: 'Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.',
        price: '',
        priceSuffix: ' / Lizenz & Monat',
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
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          this.applyPlans(JSON.parse(cached))
          this.plansLoading = false
        }
      } catch (e) { /* localStorage nicht verfügbar */ }
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
      }, { threshold: 0.15 })
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