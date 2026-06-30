<template>
  <section class="sec bg-white" id="preise">
    <div class="wrap">
      <SectionHeading eyebrow="Preise">
        Effizientes Talentpool-Management – <span class="text-blue">zum fairen Preis.</span>
        <template #lead>Wählen Sie den Plan, der zu Ihren Anforderungen passt. Upgrades oder Downgrades sind jederzeit möglich.</template>
      </SectionHeading>

      <div class="price-grid grid grid-cols-3 gap-5 items-stretch max-[880px]:grid-cols-1 max-[880px]:max-w-[460px] max-[880px]:mx-auto">

        <!-- Bring Your Own Key -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] bg-white border border-line shadow-price">
          <div class="text-[1.18rem] font-bold">Bring Your Own Key</div>
          <div class="text-[.85rem] text-body mt-[7px] leading-[1.5] min-h-[48px]">Direkte Abrechnung über den eigenen API-Account, ohne weitere Aufschläge.</div>
          <div class="flex items-baseline gap-[6px] mt-[18px]"><b class="text-[1.9rem] font-extrabold tracking-[-0.02em]">Kostenlos</b></div>
          <div class="border-t border-line my-5"></div>
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in byokFeatures" :key="f.text" class="flex items-start gap-[10px] text-[.86rem] text-ink leading-[1.4]"><img class="shrink-0 mt-px w-[17px] h-[17px]" :src="f.icon" alt="" width="17" height="17" @error="imgErr" />{{ f.text }}</li>
          </ul>
        </div>

        <!-- Enterprise (Feature-Karte) -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] relative bg-navy border border-navy text-white shadow-price-feat">
          <div class="text-[1.18rem] font-bold">Enterprise Lizenz</div>
          <div class="text-[.85rem] text-white/[0.72] mt-[7px] leading-[1.5] min-h-[48px]">Für Personalberater, die ihren gesamten Recruiting-Prozess automatisieren wollen.</div>
          <div class="flex items-baseline gap-[6px] mt-[18px]"><b class="text-[1.9rem] font-extrabold tracking-[-0.02em]">{{ selectedPrice }}</b><span class="text-[.82rem] text-white/[0.72]">/ Monat</span></div>
          <div class="border-t border-white/[0.13] my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60 mb-[13px]">Leistungen</div>
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in enterpriseFeatures" :key="f.text" class="flex items-start gap-[10px] text-[.86rem] text-white leading-[1.4]"><img class="shrink-0 mt-px w-[17px] h-[17px]" :src="f.icon" alt="" width="17" height="17" @error="imgErr" />{{ f.text }}</li>
          </ul>
          <div class="border-t border-white/[0.13] my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60 mb-[13px]">Talent-Pool Größe</div>
          <div class="relative">
            <select class="w-full h-[42px] pl-[14px] pr-[38px] rounded-[10px] border border-white/[0.22] bg-white/[0.06] text-white text-[.86rem] font-medium cursor-pointer appearance-none focus:outline-none focus:border-blue hover:border-white/40 [&>option]:text-navy" v-model="selectedPrice" aria-label="Talent-Pool Größe">
              <option value="129,00 €">Bis zu 50 Talente</option>
              <option value="159,00 €">50 – 100 Talente</option>
              <option value="199,00 €">100 – 250 Talente</option>
              <option value="249,00 €">Über 250 Talente</option>
            </select>
            <svg class="absolute right-[13px] top-1/2 -translate-y-1/2 pointer-events-none text-white/70" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
          </div>
          <a class="h-[44px] rounded-[9px] flex items-center justify-center gap-[7px] text-[.92rem] font-semibold transition-colors duration-[180ms] cursor-pointer bg-blue text-white mt-5 hover:bg-blue-hover" :href="loginUrl">Jetzt loslegen →</a>
        </div>

        <!-- Zusätzliche Mitarbeiter -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] bg-white border border-line shadow-price">
          <div class="text-[1.18rem] font-bold">Zusätzliche Mitarbeiter</div>
          <div class="text-[.85rem] text-body mt-[7px] leading-[1.5] min-h-[48px]">Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.</div>
          <div class="flex items-baseline gap-[6px] mt-[18px]"><b class="text-[1.9rem] font-extrabold tracking-[-0.02em]">19,99 €</b><span class="text-[.82rem] text-muted">/ Lizenz &amp; Monat</span></div>
          <div class="border-t border-line my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-muted mb-[13px]">Leistungen</div>
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in extraFeatures" :key="f.text" class="flex items-start gap-[10px] text-[.86rem] text-ink leading-[1.4]"><img class="shrink-0 mt-px w-[17px] h-[17px]" :src="f.icon" alt="" width="17" height="17" @error="imgErr" />{{ f.text }}</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const ic = (name, color) => `https://api.iconify.design/lucide/${name}.svg?color=${color}`
const navy = '%23172b4d'
const greenC = '%234ade80'

export default {
  name: 'PricingSection',
  components: { SectionHeading },
  data() {
    return {
      selectedPrice: '129,00 €',
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      byokFeatures: [
        { icon: ic('key-round', navy), text: 'Eigener KI-API-Schlüssel erforderlich' },
        { icon: ic('credit-card', navy), text: 'Direkte Abrechnung beim Anbieter' },
        { icon: ic('badge-check', navy), text: 'Keine versteckten Aufschläge oder Margen' },
        { icon: ic('scan-search', navy), text: 'Volle Transparenz über die eigene Nutzung' }
      ],
      enterpriseFeatures: [
        { icon: ic('users', greenC), text: '3 Mitarbeiter-Lizenzen' },
        { icon: ic('server', greenC), text: 'Hosting Ihrer Kandidatenprofile und Vakanzen' },
        { icon: ic('bot', greenC), text: 'Multi-Agenten-System vollständig enthalten' },
        { icon: ic('calendar-x', greenC), text: 'Monatlich kündbar, keine Mindestlaufzeit' }
      ],
      extraFeatures: [
        { icon: ic('circle-plus', navy), text: 'Alle Leistungen der Enterprise Lizenz' },
        { icon: ic('user-check', navy), text: 'Skalierbar je zusätzlicher Mitarbeiter' },
        { icon: ic('calendar-x', navy), text: 'Monatlich kündbar, keine Mindestlaufzeit' }
      ]
    }
  },
  methods: {
    imgErr(e) { e.target.style.display = 'none' }
  }
}
</script>
