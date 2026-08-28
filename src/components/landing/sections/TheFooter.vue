<template>
  <footer class="bg-navy text-white/[0.66] pt-[62px] pb-[34px]">
    <div class="wrap">
      <div class="foot-grid grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 max-[880px]:grid-cols-2 max-[880px]:gap-7 max-[560px]:grid-cols-1 max-[560px]:gap-6">
        <div>
          <BrandMark dark class="mb-[14px]" />
          <p class="text-[.9rem] max-w-[270px]">Ihr Partner für effizientes Talentpool-Management.</p>
        </div>

        <div>
          <h3 class="text-white text-[.82rem] font-bold tracking-[0.04em] uppercase mb-4">Navigation</h3>
          <ul class="list-none flex flex-col gap-[11px] text-[.9rem]">
            <li><a href="/#hero" @click.prevent="go('hero')" class="hover:text-white">Start</a></li>
            <li><router-link to="/agenten" class="hover:text-white">Multi-Agentensystem</router-link></li>
            <li><router-link to="/integration" class="hover:text-white">Integration</router-link></li>
            <li><router-link to="/ki-assistent" class="hover:text-white">KI-Assistent</router-link></li>
            <li><router-link to="/preise" class="hover:text-white">Preise</router-link></li>
            <li><router-link to="/kontakt" class="hover:text-white">Kontakt</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-[.82rem] font-bold tracking-[0.04em] uppercase mb-4">Rechtliches</h3>
          <ul class="list-none flex flex-col gap-[11px] text-[.9rem]">
            <li><router-link to="/privacy" class="hover:text-white">Datenschutz</router-link></li>
            <li><router-link to="/imprint" class="hover:text-white">Impressum</router-link></li>
            <li><router-link to="/terms" class="hover:text-white">AGB</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-[.82rem] font-bold tracking-[0.04em] uppercase mb-4">Kontakt</h3>
          <ul class="list-none flex flex-col gap-[11px] text-[.9rem]">
            <li><a :href="`mailto:${legalInfo.email}`" class="hover:text-white">Email: {{ legalInfo.email }}</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-[44px] pt-[22px] flex justify-center flex-wrap gap-3 text-[.82rem] text-white/50">
        <span>© {{ year }} matchmaker.hr. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { legalInfo } from '@/config/legalInfo'
import BrandMark from '@/components/ui/BrandMark.vue'

export default {
  name: 'TheFooter',
  components: { BrandMark },
  data() {
    return { year: new Date().getFullYear(), legalInfo }
  },
  methods: {
    go(id) {
      if (this.$route.path === '/') {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
      }
      this.$router.push({ path: '/', hash: '#' + id })
    }
  }
}
</script>
