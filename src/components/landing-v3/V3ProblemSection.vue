<template>
  <!-- KAPITEL 1 · AUSGANGSLAGE
       Zentrierter Kopf, darunter drei Karten. Jede Karte zeigt ihren Schmerz
       oben als kleine Szene (Bestand, Zeitstrahl, Fensterwirrwarr), unten in
       zwei Zeilen Text. Die Szenen sind Illustrationen mit Platzhalterdaten,
       keine Produktoberflächen und keine Kennzahlen. -->
  <section class="sec bg-white" id="ausgangslage">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[700px] text-center mb-11">
        <EyebrowBadge rot>Was heute Zeit kostet</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px]">
          Der Bestand ist da. <span class="text-[#dc2626] min-[561px]:whitespace-nowrap">Die Zeit, ihn zu vermitteln, nicht.</span>
        </h2>
        <p class="text-[1.05rem] leading-[1.5] text-muted mt-[10px]">
          Vor jeder Vorstellung stehen Recherche, Abgleich und Anschreiben. Ihre Erfahrung zählt erst ganz am Ende.
        </p>
      </div>

      <div class="ben-grid grid grid-cols-3 gap-[14px] max-[880px]:grid-cols-1 max-[560px]:max-w-[460px] max-[560px]:mx-auto">
        <!-- Tablet (561–880px): Szene links, Text rechts – sonst stünden schmale Karten in viel Leerraum -->
        <div v-for="f in folgen" :key="f.titel" class="ben rounded-[11px] border border-line bg-white overflow-hidden flex flex-col min-[561px]:max-[880px]:flex-row">
          <!-- Szene -->
          <div class="relative h-[176px] shrink-0 bg-surface border-b border-line overflow-hidden min-[561px]:max-[880px]:w-1/2 min-[561px]:max-[880px]:border-b-0 min-[561px]:max-[880px]:border-r">
            <div class="absolute inset-0 szene-raster pointer-events-none"></div>

            <!-- 1 · Bestand, der liegt -->
            <div v-if="f.szene === 'bestand'" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-48px)] max-w-[300px]">
              <div class="rounded-[8px] border border-line bg-white shadow-[0_10px_24px_-14px_rgba(23,43,77,.25)] px-[14px] py-[10px]">
                <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-[6px]">Bestand · ohne Suche</div>
                <div v-for="k in kandidaten" :key="k.init" class="flex items-center gap-[9px] py-[5px] border-t border-line first-of-type:border-t-0">
                  <span class="w-[22px] h-[22px] shrink-0 rounded-full bg-navy text-white flex items-center justify-center text-[.64rem] font-bold">{{ k.init }}</span>
                  <span class="flex-1 min-w-0 text-[.76rem] text-ink font-semibold truncate">{{ k.rolle }}</span>
                  <span class="shrink-0 inline-flex items-center gap-[4px] text-[.64rem] font-semibold text-[#dc2626]">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{{ k.seit }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 2 · Zeitstrahl: zu spät gesehen -->
            <div v-else-if="f.szene === 'zeit'" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
              <ol class="list-none relative">
                <span class="absolute left-[5px] top-[12px] bottom-[12px] w-px bg-[#d5dde8]"></span>
                <li v-for="z in zeitstrahl" :key="z.tag" class="relative flex items-center gap-[12px] py-[7px]">
                  <span class="relative z-[1] w-[11px] h-[11px] shrink-0 rounded-full ring-4 ring-surface" :class="z.farbe"></span>
                  <span class="w-[26px] shrink-0 text-[.72rem] font-bold text-muted">{{ z.tag }}</span>
                  <span class="text-[.78rem] leading-tight" :class="z.wichtig ? 'font-bold text-[#dc2626]' : 'font-semibold text-ink'">{{ z.text }}</span>
                </li>
              </ol>
            </div>

            <!-- 3 · Fensterwirrwarr -->
            <div v-else class="absolute left-1/2 top-[18px] -translate-x-1/2 w-[236px] h-[140px]">
              <div v-for="(w, i) in fenster" :key="w"
                   class="absolute w-[158px] rounded-[6px] border border-line bg-white shadow-[0_8px_18px_-10px_rgba(23,43,77,.3)] overflow-hidden"
                   :style="{ left: i * 26 + 'px', top: i * 22 + 'px', zIndex: i }">
                <!-- Titelleiste trägt den Namen: bei der Staffelung bleibt genau sie sichtbar -->
                <div class="flex items-center gap-[4px] px-[8px] h-[22px] bg-navy-2">
                  <i class="w-[5px] h-[5px] rounded-full bg-white/30"></i><i class="w-[5px] h-[5px] rounded-full bg-white/30"></i><i class="w-[5px] h-[5px] rounded-full bg-white/30"></i>
                  <span class="ml-[6px] text-[.64rem] font-semibold text-white/85 truncate">{{ w }}</span>
                </div>
                <div class="px-[9px] py-[9px] flex flex-col gap-[5px]">
                  <i class="h-[5px] w-[80%] rounded-full bg-[#e7ebf1]"></i>
                  <i class="h-[5px] w-[55%] rounded-full bg-[#e7ebf1]"></i>
                  <i class="h-[5px] w-[68%] rounded-full bg-[#e7ebf1]"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="px-6 pt-[18px] pb-6 min-[561px]:max-[880px]:self-center min-[561px]:max-[880px]:py-6">
            <div class="text-[1.02rem] font-bold text-ink leading-tight">{{ f.titel }}</div>
            <div class="text-[.9rem] text-body leading-[1.55] mt-[7px]">{{ f.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'V3ProblemSection',
  components: { EyebrowBadge },
  data() {
    return {
      folgen: [
        { szene: 'bestand', titel: 'Profile bleiben liegen', text: 'Für die Suche fehlt die Zeit – also wartet der Bestand.' },
        { szene: 'zeit', titel: 'Stellen fallen zu spät auf', text: 'Wenn sie gesehen werden, haben andere schon angerufen.' },
        { szene: 'fenster', titel: 'Beratung wird zur Recherche', text: 'Die Zeit geht in Portale und Postfach statt ins Gespräch.' }
      ],
      // Platzhalter wie auf /agenten
      kandidaten: [
        { init: 'MM', rolle: 'IT-Projektleiter', seit: '3 Wo.' },
        { init: 'LH', rolle: 'Frontend Engineer', seit: '5 Wo.' },
        { init: 'AS', rolle: 'Senior SRE', seit: '8 Wo.' }
      ],
      zeitstrahl: [
        { tag: 'Mo', text: 'Stelle geht online', farbe: 'bg-blue' },
        { tag: 'Di', text: 'Wettbewerber ruft an', farbe: 'bg-[#b6c2d3]' },
        { tag: 'Do', text: 'Sie entdecken die Anzeige', farbe: 'bg-[#dc2626]', wichtig: true }
      ],
      fenster: ['Bewerbersoftware', 'Jobportal', 'Handelsregister', 'Postfach']
    }
  }
}
</script>

<style scoped>
/* Feines Punktraster als Grund der Szenen */
.szene-raster {
  background-image: radial-gradient(rgba(23, 43, 77, 0.07) 1px, transparent 1px);
  background-size: 14px 14px;
}
</style>
