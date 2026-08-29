<template>
  <section class="sec bg-white !pt-[88px] max-[880px]:!pt-[58px]">
    <div class="wrap">
      <!-- Kopf -->
      <div class="sec-head mx-auto max-w-[680px] text-center mb-[88px] max-[880px]:mb-[58px]">
        <h1 class="text-hero text-ink mb-[14px]">
          Effizientes Talentpool-Management – <span class="text-blue">zum fairen Preis.</span>
        </h1>
        <p class="text-lead text-body">
          matchmaker setzt auf Ihre bestehenden Systeme auf – das Multi-Agenten-System ist vollständig enthalten. Keine Staffelung und keine versteckten Margen.
        </p>
      </div>

      <!-- Karten: volle Wrap-Breite wie alle anderen Sektionen -->
      <div class="price-grid grid grid-cols-1 gap-5 items-stretch max-w-[460px] mx-auto min-[700px]:grid-cols-2 min-[700px]:max-w-none min-[700px]:mx-0 min-[881px]:grid-cols-3">

        <!-- Bring Your Own Key: Abrechnungsoption, kein eigener Tarif -->
        <div class="pcardx flex flex-col rounded-[11px] px-7 py-[30px] bg-white border border-line shadow-price order-3 min-[700px]:order-3 min-[700px]:col-span-2 min-[881px]:order-1 min-[881px]:col-span-1 min-[700px]:max-[880px]:flex-row min-[700px]:max-[880px]:items-center min-[700px]:max-[880px]:gap-8">
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
        <div class="pcardx flex flex-col rounded-[11px] px-7 py-[30px] relative bg-navy border border-navy text-white shadow-price-feat order-1 min-[700px]:order-1 min-[881px]:order-2">
          <div class="flex items-center justify-between gap-3 h-[24px] mb-[10px]">
            <span class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60">Lizenz</span>
            <span class="text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-green/[0.18] text-[#7ee2a8]">Alles enthalten</span>
          </div>
          <div class="text-[1.18rem] font-bold">Enterprise Lizenz</div>
          <div class="text-[.85rem] text-white/[0.72] mt-[7px] leading-[1.5] min-h-[48px]">Für Personalberater, die ihren gesamten Recruiting-Prozess automatisieren wollen.</div>
          <div class="flex items-baseline flex-wrap gap-x-[6px] mt-[18px]">
            <b class="text-[1.9rem] font-extrabold tracking-[-0.02em] whitespace-nowrap leading-none">129,00 €</b>
            <span class="text-[.82rem] text-white/[0.72]">/ Monat</span>
          </div>
          <div class="border-t border-white/[0.13] my-5"></div>
          <div class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-white/60 mb-[13px]">Leistungen</div>
          <!-- Statt Häkchen je ein Symbol zur Leistung: Die Liste ist der Kern
               der Kachel, die Symbole machen sie überfliegbar. -->
          <ul class="list-none flex flex-col gap-3">
            <li v-for="f in enterpriseFeatures" :key="f.text" class="flex items-start gap-[10px] text-[.86rem] text-white leading-[1.4]">
              <span class="shrink-0 w-5 h-5 mt-px rounded-full bg-green/25 text-[#7ee2a8] flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9">
                  <g :transform="f.versatz ? `translate(${f.versatz} 0)` : undefined">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="f.icon" />
                  </g>
                </svg>
              </span>{{ f.text }}
            </li>
          </ul>
          <a class="h-[44px] rounded-[6px] flex items-center justify-center gap-[7px] text-[.92rem] font-semibold transition-colors duration-[180ms] cursor-pointer bg-blue text-white mt-7 hover:bg-blue-hover" :href="loginUrl">Jetzt loslegen →</a>
        </div>

        <!-- Zusätzliche Mitarbeiter: Add-on -->
        <div class="pcardx flex flex-col rounded-[11px] px-7 py-[30px] bg-white border border-line shadow-price order-2 min-[700px]:order-2 min-[881px]:order-3">
          <div class="flex items-center h-[24px] mb-[10px]"><span class="text-[.64rem] font-bold tracking-[0.09em] uppercase text-muted">Add-on</span></div>
          <div class="text-[1.18rem] font-bold">Zusätzliche Mitarbeiter</div>
          <div class="text-[.85rem] text-body mt-[7px] leading-[1.5] min-h-[48px]">Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.</div>
          <div class="flex items-baseline flex-wrap gap-x-[6px] mt-[18px]">
            <b class="text-[1.9rem] font-extrabold tracking-[-0.02em] whitespace-nowrap leading-none">19,99 €</b>
            <span class="text-[.82rem] text-muted">/ Lizenz &amp; Monat</span>
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
      // Symbole aus demselben Satz wie die Kopfnavigation, damit „Integrationen",
      // „Multi-Agenten-System" und „Automatisierungen" dort wiedererkannt werden.
      enterpriseFeatures: [
        {
          text: '3 Mitarbeiter-Lizenzen',
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
        },
        {
          text: 'Hosting Ihrer Kandidatenprofile und Vakanzen',
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75'
        },
        {
          text: 'Integrationen vollständig enthalten',
          icon: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
        },
        {
          // Der Funke sitzt im 24er-Raster links; 3 Einheiten nach rechts,
          // damit er im Kreis mittig steht.
          text: 'Multi-Agenten-System vollständig enthalten',
          versatz: 3,
          icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'
        },
        {
          text: 'Automatisierungen vollständig enthalten',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        },
        {
          text: 'Monatlich kündbar, keine Mindestlaufzeit',
          icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
        }
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
