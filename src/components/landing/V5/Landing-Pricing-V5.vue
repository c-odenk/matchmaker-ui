<template>
  <section class="sec" id="preise" style="background:#fff">
    <div class="wrap">
      <div class="sec-head center">
        <span class="eyebrow"><span class="dot"></span>Preise</span>
        <h2>Effizientes Talentpool-Management – <span class="accent">zum fairen Preis.</span></h2>
        <p class="lead">Wählen Sie den Plan, der zu Ihren Anforderungen passt. Upgrades oder Downgrades sind jederzeit möglich.</p>
      </div>
      <div class="price-grid">

        <div class="pcardx">
          <div class="pname">Bring Your Own Key</div>
          <div class="pdesc">Direkte Abrechnung über den eigenen API-Account, ohne weitere Aufschläge.</div>
          <div class="pprice"><b>Kostenlos</b></div>
          <div class="pdiv"></div>
          <ul class="pfeat">
            <li><img class="pfico" src="https://api.iconify.design/lucide/key-round.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Eigener KI-API-Schlüssel erforderlich</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/credit-card.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Direkte Abrechnung beim Anbieter</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/badge-check.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Keine versteckten Aufschläge oder Margen</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/scan-search.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Volle Transparenz über die eigene Nutzung</li>
          </ul>
        </div>

        <div class="pcardx feat">
          <div class="pname">Enterprise Lizenz</div>
          <div class="pdesc">Für Personalberater, die ihren gesamten Recruiting-Prozess automatisieren wollen.</div>
          <div class="pprice"><b>{{ selectedPrice }}</b><span class="pper">/ Monat</span></div>
          <div class="pdiv"></div>
          <div class="plabel">Leistungen</div>
          <ul class="pfeat">
            <li><img class="pfico" src="https://api.iconify.design/lucide/users.svg?color=%234ade80" alt="" width="17" height="17" @error="imgErr" />3 Mitarbeiter-Lizenzen</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/server.svg?color=%234ade80" alt="" width="17" height="17" @error="imgErr" />Hosting Ihrer Kandidatenprofile und Vakanzen</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/bot.svg?color=%234ade80" alt="" width="17" height="17" @error="imgErr" />Multi-Agenten-System vollständig enthalten</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/calendar-x.svg?color=%234ade80" alt="" width="17" height="17" @error="imgErr" />Monatlich kündbar, keine Mindestlaufzeit</li>
          </ul>
          <div class="pdiv"></div>
          <div class="plabel">Talent-Pool Größe</div>
          <div class="psel-wrap">
            <select class="psel" v-model="selectedPrice">
              <option value="129,00 €">Bis zu 50 Talente</option>
              <option value="159,00 €">50 – 100 Talente</option>
              <option value="199,00 €">100 – 250 Talente</option>
              <option value="249,00 €">Über 250 Talente</option>
            </select>
            <svg class="psel-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
          </div>
          <a class="pbtn pbtn-blue" :href="loginUrl">Jetzt loslegen →</a>
        </div>

        <div class="pcardx">
          <div class="pname">Zusätzliche Mitarbeiter</div>
          <div class="pdesc">Für wachsende Teams – alle Leistungen der Enterprise Lizenz, skalierbar je Mitarbeiter.</div>
          <div class="pprice"><b>19,99 €</b><span class="pper">/ Lizenz &amp; Monat</span></div>
          <div class="pdiv"></div>
          <div class="plabel">Leistungen</div>
          <ul class="pfeat">
            <li><img class="pfico" src="https://api.iconify.design/lucide/circle-plus.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Alle Leistungen der Enterprise Lizenz</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/user-check.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Skalierbar je zusätzlicher Mitarbeiter</li>
            <li><img class="pfico" src="https://api.iconify.design/lucide/calendar-x.svg?color=%23172b4d" alt="" width="17" height="17" @error="imgErr" />Monatlich kündbar, keine Mindestlaufzeit</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPricingV5',
  data() {
    return {
      selectedPrice: '129,00 €',
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#'
    }
  },
  methods: {
    imgErr(e) { e.target.style.display = 'none' }
  }
}
</script>
