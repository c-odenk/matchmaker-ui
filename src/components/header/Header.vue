<template>
  <header>
    <nav class="w-full bg-white">
      <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">
        <div class="relative flex items-center justify-between py-4">

          <!-- Logo / Brand Name -->
          <router-link to="/" class="flex items-center gap-3 shrink-0">
            <div class="w-9 h-9 rounded-xl bg-dark-blue flex items-center justify-center shadow-sm">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
              </svg>
            </div>
            <span class="text-gray-900 font-semibold tracking-tight text-xl">
              matchmaker<span class="text-dark-blue">.</span>hr
            </span>
          </router-link>

          <!-- Center Nav Links (Desktop) -->
          <ul class="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
            <li v-for="item in navItems" :key="item.name">
              <a href="#" class="uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200" @click.prevent="scrollToSection(item.anchor)">{{ item.name }}</a>
            </li>
          </ul>

          <!-- Right: CTA (Desktop) -->
          <div class="hidden lg:flex items-center">
            <ButtonPrimary :href="loginUrl" :icon="ArrowRight" iconPosition="trailing">
              Anmelden
            </ButtonPrimary>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            @click="toggleMenu"
            :aria-label="isMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
            class="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu (Fullscreen) -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 top-[57px] bg-white z-50 overflow-y-auto">
          <div class="px-container-h py-8 flex flex-col gap-8 h-full">

            <!-- Hauptnavigation -->
            <div class="flex flex-col gap-1">
              <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Navigation</p>
              <button
                v-for="item in navItems"
                :key="item.name"
                class="flex items-center justify-between py-2.5 px-4 rounded-xl text-gray-800 hover:bg-gray-50 hover:text-dark-blue transition-colors duration-150 group w-full text-left"
                @click="scrollToSection(item.anchor)"
              >
                <span class="text-lg font-medium">{{ item.name }}</span>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-dark-blue transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Rechtliches -->
            <div class="flex flex-col gap-1">
              <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Rechtliches</p>
              <router-link
                v-for="item in legalItems"
                :key="item.name"
                :to="item.to"
                class="flex items-center justify-between py-2.5 px-4 rounded-xl text-gray-800 hover:bg-gray-50 hover:text-dark-blue transition-colors duration-150 group"
                @click="closeMenu"
              >
                <span class="text-lg font-medium">{{ item.name }}</span>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-dark-blue transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>

            <!-- CTA -->
            <div class="mt-auto pb-8">
              <ButtonPrimary :href="loginUrl" :icon="ArrowRight" iconPosition="trailing" class="w-full">
                Anmelden
              </ButtonPrimary>
            </div>

          </div>
        </div>
      </transition>

    </nav>
  </header>
</template>

<script>
import { ArrowRight } from 'lucide-vue-next'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'

export default {
  name: 'AppHeader',
  components: { ButtonPrimary },
  data() {
    return {
      ArrowRight,
      isMenuOpen: false,
      navItems: [
        { name: 'Home',    anchor: 'hero' },
        { name: 'Produkt', anchor: 'product' },
        { name: 'Preise',  anchor: 'pricing' },
      ],
      legalItems: [
        { name: 'Datenschutz', to: '/privacy' },
        { name: 'Impressum',   to: '/imprint' },
        { name: 'AGB',         to: '/terms'   },
      ],
      loginUrl: process.env.VUE_APP_DASHBOARD_URL
    }
  },
  watch: {
    isMenuOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  },
  methods: {
    scrollToSection(anchorId) {
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      this.closeMenu()
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

