<template>
  <section class="sec bg-white !pt-[88px] max-[880px]:!pt-[58px]">
    <div class="wrap">
      <!-- Kopf -->
      <div class="sec-head mx-auto max-w-[680px] text-center mb-[88px] max-[880px]:mb-[58px]">
        <h1 class="text-hero text-ink mb-[14px]">
          Ein Preis. <span class="text-blue">Keine Staffelung.</span>
        </h1>
        <p class="text-lead text-body">
          matchmaker.hr setzt auf Ihre bestehenden Systeme auf; das Multi-Agentensystem ist vollständig enthalten. Die Rechenkosten der KI zahlen Sie ohne Aufschlag direkt an Ihren Anbieter.
        </p>
      </div>

      <!-- Karten: volle Wrap-Breite wie alle anderen Sektionen -->
      <div class="price-grid grid grid-cols-1 gap-5 items-stretch max-w-[460px] mx-auto min-[700px]:grid-cols-2 min-[700px]:max-w-none min-[700px]:mx-0 min-[881px]:grid-cols-3">

        <!-- Bring Your Own Key: Abrechnungsoption, kein eigener Tarif -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] bg-white border border-line shadow-price order-3 min-[700px]:order-3 min-[700px]:col-span-2 min-[881px]:order-1 min-[881px]:col-span-1 min-[700px]:max-[880px]:flex-row min-[700px]:max-[880px]:items-center min-[700px]:max-[880px]:gap-8">
          <div class="min-[700px]:max-[880px]:flex-1">
            <div class="flex items-center h-[24px] mb-[10px]"><span class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-muted">Abrechnung der KI</span></div>
            <div class="text-[1.18rem] font-bold">Bring Your Own Key</div>
            <div class="text-[.85rem] text-body mt-[7px] leading-[1.5] min-h-[48px]">Direkte Abrechnung über den eigenen API-Account, ohne weitere Aufschläge.</div>
            <div class="flex items-baseline flex-wrap gap-x-[6px] mt-[18px]"><b class="text-[1.9rem] font-extrabold tracking-[-0.02em] whitespace-nowrap leading-none">Kostenlos</b></div>
            </div>
          <div class="border-t border-line my-5 min-[700px]:max-[880px]:hidden"></div>
          <ul class="list-none flex flex-col gap-3 min-[700px]:max-[880px]:flex-1 min-[700px]:max-[880px]:border-l min-[700px]:max-[880px]:border-line min-[700px]:max-[880px]:pl-8">
            <li v-for="f in byokFeatures" :key="f" class="flex items-start gap-[10px] text-[.86rem] text-ink leading-[1.4]">
              <span class="shrink-0 w-[18px] h-[18px] mt-[1px] rounded-full bg-navy/[0.07] text-navy flex items-center justify-center text-[.64rem]">✓</span>{{ f }}
            </li>
          </ul>
        </div>

        <!-- Enterprise: ein Preis, keine Staffelung -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] relative bg-navy border border-navy text-white shadow-price-feat order-1 min-[700px]:order-1 min-[881px]:order-2">
          <div class="flex items-center justify-between gap-3 h-[24px] mb-[10px]">
            <span class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60">Lizenz</span>
            <span class="text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-green/[0.18] text-[#7ee2a8]">Alles enthalten</span>
          </div>
          <div class="text-[1.18rem] font-bold">Enterprise Lizenz</div>
          <div class="text-[.85rem] text-white/[0.72] mt-[7px] leading-[1.5] min-h-[48px]">Für Personalberatungen, die den Weg vom Kandidatenprofil zum Erstkontakt automatisieren.</div>
          <div class="flex items-baseline flex-wrap gap-x-[6px] mt-[18px]">
            <b class="text-[1.9rem] font-extrabold tracking-[-0.02em] whitespace-nowrap leading-none">129,00 €</b>
            <span class="text-[.82rem] text-white/[0.72]">/ Monat</span>
            <span class="basis-full text-[.72rem] text-white/[0.55] mt-[3px]">zzgl. gesetzlicher USt.</span>
          </div>
          <div class="border-t border-white/[0.13] my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60 mb-[13px]">Leistungen</div>
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in enterpriseFeatures" :key="f" class="flex items-start gap-[10px] text-[.86rem] text-white leading-[1.4]">
              <span class="shrink-0 w-[18px] h-[18px] mt-[1px] rounded-full bg-green/25 text-[#7ee2a8] flex items-center justify-center text-[.64rem]">✓</span>{{ f }}
            </li>
          </ul>
          <a class="h-[44px] rounded-[9px] flex items-center justify-center gap-[7px] text-[.92rem] font-semibold transition-colors duration-[180ms] cursor-pointer bg-blue text-white mt-7 hover:bg-blue-hover" href="/entwurf-v2/kontakt">Demo vereinbaren</a>
        </div>

        <!-- Zusätzliche Mitarbeiter: Add-on -->
        <div class="pcardx flex flex-col rounded-[18px] px-7 py-[30px] bg-white border border-line shadow-price order-2 min-[700px]:order-2 min-[881px]:order-3">
          <div class="flex items-center h-[24px] mb-[10px]"><span class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-muted">Add-on</span></div>
          <div class="text-[1.18rem] font-bold">Zusätzliche Mitarbeiter</div>
          <div class="text-[.85rem] text-body mt-[7px] leading-[1.5] min-h-[48px]">Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.</div>
          <div class="flex items-baseline flex-wrap gap-x-[6px] mt-[18px]">
            <b class="text-[1.9rem] font-extrabold tracking-[-0.02em] whitespace-nowrap leading-none">19,99 €</b>
            <span class="text-[.82rem] text-muted">/ Lizenz &amp; Monat</span>
            <span class="basis-full text-[.72rem] text-muted mt-[3px]">zzgl. gesetzlicher USt.</span>
          </div>
          <div class="border-t border-line my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-muted mb-[13px]">Leistungen</div>
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in extraFeatures" :key="f" class="flex items-start gap-[10px] text-[.86rem] text-ink leading-[1.4]">
              <span class="shrink-0 w-[18px] h-[18px] mt-[1px] rounded-full bg-[#e7f8ee] text-[#15803d] flex items-center justify-center text-[.64rem]">✓</span>{{ f }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingPlansSection',
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      enterpriseFeatures: [
        '3 Mitarbeiter-Lizenzen',
        'Hosting Ihrer Kandidatenprofile und Vakanzen',
        'Integrationen vollständig enthalten',
        'Multi-Agentensystem vollständig enthalten',
        'Automatisierungen vollständig enthalten',
        'Monatlich kündbar, keine Mindestlaufzeit'
      ],
      extraFeatures: [
        'Alle Leistungen der Enterprise Lizenz',
        'Skalierbar je zusätzlicher Mitarbeiter',
        'Monatlich kündbar, keine Mindestlaufzeit'
      ],
      byokFeatures: [
        'Eigener KI-API-Schlüssel erforderlich',
        'Direkte Abrechnung beim Anbieter',
        'Keine versteckten Aufschläge oder Margen',
        'Volle Transparenz über die eigene Nutzung'
      ]
    }
  }
}
</script>
