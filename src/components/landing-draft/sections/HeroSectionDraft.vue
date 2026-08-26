<template>
  <!-- ENTWURF: Headline auf das Nacht-/Morgen-Narrativ umgestellt,
       Lead benennt die Aufsatzschicht, Trust-Badges korrigiert
       (kein „EU-Hosting"-Claim mehr – siehe Systementwurf S. 5). -->
  <section class="hero relative bg-navy text-white overflow-hidden" id="hero">
    <div class="absolute top-[-20%] right-[-10%] w-[55%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.5),transparent_65%)] blur-[60px] pointer-events-none"></div>
    <div class="absolute bottom-[-30%] left-[-8%] w-[45%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.2),transparent_70%)] blur-[70px] pointer-events-none"></div>

    <div class="wrap relative z-[2] grid [grid-template-columns:1.5fr_.9fr] gap-11 items-center pt-[74px] px-6 pb-[84px] max-[880px]:grid-cols-1 max-[880px]:gap-9 max-[880px]:pt-10 max-[880px]:pb-[54px] max-[560px]:pt-20 max-[560px]:pb-[94px]">
      <div class="hero-left relative max-[880px]:text-center">
        <EyebrowBadge dark class="!px-[22.4px]">Die Steuerungsschicht für Ihre Personalberatung</EyebrowBadge>

        <div class="flex items-center gap-[4px] mb-[14px] ml-[5px] mt-[8px] max-[880px]:justify-center max-[880px]:ml-0">
          <span class="text-[#fbbf24] text-[.92rem] tracking-[1px]">★★★★★</span>
          <span class="text-[.82rem] text-white/[0.72]">Aus der Beratungspraxis empfohlen</span>
        </div>

        <h1 class="text-hero mt-5">
          Nachts arbeitet das System. <br>
          <span class="text-[#5fa0ea]">Morgens</span> entscheiden Sie.
        </h1>

        <p class="text-lead text-white/[0.82] max-w-[614px] mt-[18px] max-[880px]:mx-auto">
          matchmaker setzt auf Ihre bestehende Bewerbersoftware auf und bündelt Marktsuche, Firmenrecherche, Bewertung und Anschreiben an einer Oberfläche. Sechs Schritte laufen über Nacht – Sie prüfen und geben frei.
        </p>

        <div class="flex gap-3 mt-[30px] flex-wrap max-[880px]:justify-center max-[560px]:flex-col max-[560px]:items-stretch">
          <BaseButtonDraft variant="blue" :href="loginUrl" class="max-[560px]:w-full">Jetzt anmelden →</BaseButtonDraft>
          <BaseButtonDraft variant="ghost-dark" class="max-[560px]:w-full" to="/entwurf/kontakt">Demo vereinbaren</BaseButtonDraft>
        </div>

        <!-- Belegbare Trust-Punkte statt pauschaler Siegel -->
        <div class="flex gap-[10.7px] mt-[8px] flex-wrap text-[.85rem] text-white/[0.62] max-[880px]:justify-center max-[560px]:gap-2 max-[560px]:text-[.76rem]">
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>Bewertung ohne Klarnamen</span>
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>Kein Versand ohne Freigabe</span>
          <span class="inline-flex items-center gap-[7px] whitespace-nowrap max-[560px]:gap-[5px]"><span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>Serverstandort wählbar</span>
        </div>
      </div>

      <div class="hero-visual relative max-[880px]:hidden">
        <div class="relative w-full max-w-[440px] ml-auto">
          <div class="relative w-full rounded-[22px] overflow-hidden aspect-[4/4.4] shadow-hero-photo border border-white/10">
            <picture>
              <source :srcset="heroAvif" type="image/avif" />
              <source :srcset="heroWebp" type="image/webp" />
              <img
                :src="heroImg"
                alt="Personalberaterin arbeitet mit matchmaker.hr am Laptop"
                width="907" height="982"
                fetchpriority="high" decoding="async"
                class="block w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButtonDraft from '@/components/landing-draft/ui/BaseButtonDraft.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import heroImg from '@/assets/Hero-Consultant.jpg'
import heroWebp from '@/assets/Hero-Consultant.webp'
import heroAvif from '@/assets/Hero-Consultant.avif'

export default {
  name: 'HeroSectionDraft',
  components: { BaseButtonDraft, EyebrowBadge },
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      heroImg, heroWebp, heroAvif
    }
  }
}
</script>
