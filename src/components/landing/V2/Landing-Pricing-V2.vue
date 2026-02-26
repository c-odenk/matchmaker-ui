<template>
  <section class="py-20 md:py-28 2xl:pt-28 2xl:pb-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <SectionHeader
        title="Recruiting auf höchstem Niveau. Zum fairen Preis."
        description="Volle Kostenkontrolle, keine versteckten Gebühren – nur das, was Ihre Beratung wirklich weiterbringt."
      />

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <!-- Starter -->
        <div
          class="bg-white rounded-2xl p-10 flex flex-col self-stretch"
          style="border: 1px solid rgba(0,0,0,0.07); border-radius: 15px; box-shadow: rgba(0,0,0,0.1) 0px 0px 20px 0px;"
        >
          <div class="mb-6 flex flex-col min-h-[120px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-2">{{ starter.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ starter.description }}</p>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <span class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl font-bold text-black">{{ starter.price }}</span>
            <span v-if="starter.priceSuffix" class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ starter.priceSuffix }}</span>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in starter.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-deep-blue">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="1.75" />
              </div>
              {{ feature.label }}
            </li>
          </ul>
        </div>

        <!-- Pro (Featured) -->
        <div
          class="bg-blue rounded-2xl p-10 flex flex-col relative self-stretch"
          style="border: 1px solid rgba(0,0,0,0.07); border-radius: 15px; box-shadow: rgba(0,0,0,0.1) 0px 0px 20px 0px;"
        >
          <div class="pointer-events-none absolute inset-0 rounded-2xl" aria-hidden="true" style="background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.07) 0%, transparent 70%); overflow: hidden;"></div>

          <div class="relative z-10 mb-6 flex flex-col min-h-[120px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-2">{{ pro.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-white">{{ pro.description }}</p>
          </div>

          <!-- Dynamic Price -->
          <div class="relative z-10 mb-6 flex items-baseline gap-1">
            <span class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl font-bold text-white">{{ selectedTier.price }}</span>
            <span class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-white">{{ selectedTier.priceSuffix }}</span>
          </div>

          <!-- Custom Talent Pool Selector -->
          <div class="relative z-20 mb-4">
            <label class="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">Talent-Pool Größe</label>
            <div class="relative">
              <!-- Trigger -->
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="w-full flex items-center justify-between gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 text-white text-sm rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none"
              >
                <div class="flex items-center gap-2">
                  <Users class="w-4 h-4 text-white/60" :stroke-width="1.75" />
                  <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl">{{ selectedTier.label }}</span>
                </div>
                <svg
                  class="w-4 h-4 text-white/60 transition-transform duration-200"
                  :class="dropdownOpen ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Dropdown Panel -->
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
                  class="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-50 divide-y divide-gray-100"
                  style="background: rgba(255,255,255,0.97); box-shadow: 0 8px 30px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.08);"
                >
                  <button
                    v-for="tier in pro.tiers"
                    :key="tier.label"
                    @click="selectTier(tier)"
                    class="w-full flex items-center justify-between px-4 py-3 transition-all duration-150 text-black group relative"
                    :class="selectedTier.label === tier.label ? 'bg-blue/5 font-medium' : 'hover:bg-blue/5'"
                  >
                    <span
                      class="absolute left-0 top-0 bottom-0 w-0.5 bg-blue transition-all duration-150 rounded-r"
                      :class="selectedTier.label === tier.label ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
                    ></span>
                    <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl">{{ tier.label }}</span>
                    <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl font-semibold text-black">{{ tier.price }}</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>

          <!-- Button direkt unter Selector -->
          <div class="relative z-10 mb-10">
            <ButtonSecondary href="#" class="w-full">
              Jetzt loslegen
            </ButtonSecondary>
          </div>

          <ul class="relative z-10 flex flex-col gap-3 flex-1">
            <li v-for="feature in pro.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-white/80">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="1.75" />
              </div>
              {{ feature.label }}
            </li>
          </ul>
        </div>

        <!-- Addon -->
        <div
          class="bg-white rounded-2xl p-10 flex flex-col self-stretch"
          style="border: 1px solid rgba(0,0,0,0.07); border-radius: 15px; box-shadow: rgba(0,0,0,0.1) 0px 0px 20px 0px;"
        >
          <div class="mb-6 flex flex-col min-h-[120px]">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black mb-2">{{ addon.name }}</h3>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ addon.description }}</p>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <span class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl font-bold text-black">{{ addon.price }}</span>
            <span v-if="addon.priceSuffix" class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">{{ addon.priceSuffix }}</span>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in addon.features" :key="feature.label" class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black">
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-deep-blue">
                <component :is="feature.icon" class="w-4 h-4" :stroke-width="1.75" />
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

export default {
  name: 'LandingPricing',
  components: { SectionHeader, ButtonSecondary },
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
      selectedTier: null,
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
        tiers: [
          { label: 'Bis zu 50 Talente',  price: '29,99€',  priceSuffix: ' / Monat' },
          { label: '50 – 100 Talente',   price: '59,99€',  priceSuffix: ' / Monat' },
          { label: '100 – 250 Talente',  price: '99,99€',  priceSuffix: ' / Monat' },
          { label: 'Über 250 Talente',   price: '149,99€', priceSuffix: ' / Monat' },
        ],
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
        price: '19,99€',
        priceSuffix: ' / pro weitere Lizenz & Monat',
        features: [
          { label: 'Alle Leistungen der Enterprise Lizenz', icon: PlusCircle },
          { label: 'Skalierbar je zusätzlicher Mitarbeiter', icon: UserCheck },
          { label: 'Monatlich kündbar, keine Mindestlaufzeit', icon: CalendarX },
        ]
      }
    }
  },
  created() {
    this.selectedTier = this.pro.tiers[0]
  },
  methods: {
    selectTier(tier) {
      this.selectedTier = tier
      this.dropdownOpen = false
    },
    closeDropdown() {
      this.dropdownOpen = false
    }
  }
}
</script>
