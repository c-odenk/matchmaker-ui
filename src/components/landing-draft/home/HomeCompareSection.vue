<template>
  <!-- Pain Points als Zweispalter wie die Produktblicke weiter unten: links
       der Kopf, rechts die vier Handgriffe als weiße Karten in der grauen
       Fläche; die rote Kachel und der rote Teil der Überschrift markieren das Problem. Bewusst ohne Lösungen –
       die folgen in den Sektionen darunter. -->
  <section class="sec bg-white" id="vergleich">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text min-w-0 max-[880px]:text-center max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <EyebrowBadge rot>Was heute Zeit kostet</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Der Engpass ist nicht das Urteil. <span class="text-[#dc2626]">Es ist die Handarbeit.</span></h2>
        <p class="text-lead text-body">Erfahrene Berater erkennen Passung in Minuten. Bis dahin steckt die Zeit in Recherche, Anschreiben und Programmwechseln.</p>
        <p class="text-lead text-body mt-4">Diese Arbeit wiederholt sich für jeden Kandidaten, jeden Tag – und sie ist nicht das, wofür Kunden eine Personalberatung beauftragen.</p>
      </div>

      <div class="min-w-0 max-[880px]:w-full max-[880px]:max-w-[620px] max-[880px]:mx-auto">
        <div class="rounded-[11px] border border-line bg-surface p-6 max-[560px]:p-4">
          <ul class="list-none flex flex-col gap-[12px]">
            <li v-for="p in painPoints" :key="p.titel" class="rounded-[8px] border border-line bg-white px-5 py-[18px] flex items-start gap-[14px] max-[560px]:px-4 max-[560px]:gap-3">
              <span class="w-[34px] h-[34px] shrink-0 rounded-[7px] bg-[#fef2f2] text-[#dc2626] flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="p.icon"/></svg>
              </span>
              <span class="min-w-0 text-left">
                <span class="block text-[.96rem] font-bold text-ink leading-tight">{{ p.titel }}</span>
                <span class="block text-[.85rem] text-body leading-[1.55] mt-[6px]">{{ p.text }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'HomeCompareSection',
  components: { EyebrowBadge },
  data() {
    return {
      // Der Handgriff und was er kostet.
      painPoints: [
        {
          titel: 'Jobportale von Hand durchsehen',
          text: 'Jeden Tag dieselben Portale – für jeden Kandidaten von vorn.',
          icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        },
        {
          titel: 'Ansprechpartner einzeln heraussuchen',
          text: 'Karriereseite, Impressum, Netzwerk – Unternehmen für Unternehmen.',
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
        },
        {
          titel: 'Anschreiben von Grund auf tippen',
          text: 'Jede Nachricht beginnt mit einem leeren Feld.',
          icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
        },
        {
          titel: 'Für jeden Schritt das Programm wechseln',
          text: 'Bewerbersoftware, Postfach, Telefon, Kalender – ein Vorgang, viele Fenster.',
          icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
        }
      ]
    }
  }
}
</script>
