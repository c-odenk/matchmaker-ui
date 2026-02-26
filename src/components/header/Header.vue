<template>
  <header>
    <nav class="w-full bg-gray-100">
      <div
        class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h"
      >
        <div class="relative flex items-center justify-between py-4">

          <!-- Logo / Brand Name -->
          <router-link to="/" class="flex items-center gap-3 shrink-0">
            <div class="w-9 h-9 rounded-xl bg-blue flex items-center justify-center shadow-sm">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
              </svg>
            </div>
            <span class="text-gray-900 font-semibold tracking-tight text-xl">
              matchmaker<span class="text-deep-blue">.</span>hr
            </span>
          </router-link>

          <!-- Center Nav Links (Desktop) -->
          <ul class="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.href"
                class="uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
                active-class="text-gray-900 font-medium"
                @click="closeMenu"
              >{{ item.name }}</router-link>
            </li>
          </ul>

          <!-- Right: CTA (Desktop) -->
          <div class="hidden lg:flex items-center">
            <ButtonPrimary href="/register">
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

        <!-- Mobile Menu -->
        <div
          v-if="isMenuOpen"
          class="lg:hidden pb-6 border-t border-gray-100 mt-1"
        >
          <ul class="flex flex-col gap-4 pt-4">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.href"
                class="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                active-class="text-gray-900 font-medium"
                @click="closeMenu"
              >{{ item.name }}</router-link>
            </li>
          </ul>
          <div class="mt-6">
            <ButtonPrimary href="/register" class="w-full">
              Anmelden
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'

export default {
  name: 'AppHeader',
  components: { ButtonPrimary },

  data() {
    return {
      isMenuOpen: false,
      navItems: [
        { name: 'Home',    href: '/' },
        { name: 'Produkt', href: '/produkt' },
        { name: 'Preise',  href: '/preise' },
      ]
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

.nav-brand {
  font-family: 'Instrument Serif', Georgia, serif;
  font-weight: 400;
  letter-spacing: -0.01em;
}
</style>