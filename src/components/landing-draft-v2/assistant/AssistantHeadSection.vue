<template>
  <section class="sec bg-white !pt-[88px] max-[880px]:!pt-[58px]">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[680px] text-center mb-[88px] max-[880px]:mb-[58px]">
        <h1 class="text-hero text-ink mb-[14px]">Was nicht im Ablauf steht, <span class="text-blue">erledigen Sie hier.</span></h1>
        <p class="text-lead text-body">
          Die Automatisierung deckt den wiederkehrenden Weg. Der Anruf dazwischen, der Link
          per Mail, die Frage, die kein Filter beantwortet – dafür ist der Assistent da.
        </p>
      </div>

      <!-- Eine Oberfläche, in der beide Wege zusammenlaufen: erst das Ziel,
           darunter die zwei Wege, die dorthin führen. -->
      <div class="folge rounded-[18px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="relative overflow-hidden rounded-[14px] bg-navy text-white border border-white/[0.08] shadow-price-feat px-7 py-6 max-[560px]:px-5 max-[560px]:py-5">
          <div class="absolute top-[-120%] right-[-4%] w-[52%] h-[320%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.45),transparent_65%)] blur-[55px] pointer-events-none"></div>
          <div class="relative z-[2] flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-[14px] min-w-0">
              <span class="w-[44px] h-[44px] shrink-0 rounded-xl bg-blue/25 border border-blue/[0.4] flex items-center justify-center">
                <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
              </span>
              <span class="min-w-0">
                <span class="block text-[1.18rem] font-bold tracking-[-0.01em] leading-tight">Eine Oberfläche für beides</span>
                <span class="block text-[.85rem] text-white/[0.72] mt-[2px]">Der geplante Ablauf und alles, was dazwischenkommt</span>
              </span>
            </div>
            <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[11px] py-[4px] rounded-full bg-blue/25 border border-blue/[0.35] text-[#9cc6f2] shrink-0">
              <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Kein Anwendungswechsel
            </span>
          </div>
        </div>

        <!-- Von der Oberfläche verzweigt es sich auf die beiden Wege -->
        <div class="relative h-11 max-[880px]:h-7">
          <span class="absolute left-1/2 -translate-x-1/2 top-0 h-[26px] w-px bg-[#c2ccdb] max-[880px]:h-full"></span>
          <span class="absolute left-[calc(25%-4.5px)] right-[calc(25%-4.5px)] top-[26px] h-px bg-[#c2ccdb] max-[880px]:hidden"></span>
          <span class="absolute left-[calc(25%-4.5px)] top-[26px] bottom-0 w-px bg-[#c2ccdb] max-[880px]:hidden"></span>
          <span class="absolute right-[calc(25%-4.5px)] top-[26px] bottom-0 w-px bg-[#c2ccdb] max-[880px]:hidden"></span>
          <span class="absolute left-1/2 -translate-x-1/2 top-[26px] -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-blue ring-4 ring-blue/15 max-[880px]:top-1/2"></span>
        </div>

        <div class="grid items-stretch [grid-template-columns:1fr_1fr] gap-[18px] max-[880px]:grid-cols-1">
          <div v-for="w in wege" :key="w.label" class="relative rounded-[12px] border border-line bg-white px-5 py-5 flex flex-col">
            <div class="flex items-center gap-[10px] mb-3">
              <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy/[0.07] text-navy flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="w.icon"/></svg>
              </span>
              <span class="text-[.72rem] font-bold tracking-[0.04em] uppercase text-blue">{{ w.label }}</span>
            </div>

            <div class="text-[.96rem] font-bold text-ink leading-tight">{{ w.title }}</div>

            <div class="mt-[14px] pt-[12px] border-t border-line flex flex-col gap-[8px] flex-1">
              <div v-for="z in w.punkte" :key="z" class="flex items-start gap-[10px]">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"
                     class="shrink-0 mt-[3px]" :class="w.geplant ? 'text-blue' : 'text-muted'">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="w.geplant ? 'M4.5 12.75l6 6 9-13.5' : 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'"/>
                </svg>
                <span class="text-[.82rem] text-body leading-[1.5] min-w-0">{{ z }}</span>
              </div>
            </div>

            <div class="mt-[14px] pt-[12px] border-t border-line">
              <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-navy/[0.06] text-navy">
                <span class="w-[6px] h-[6px] rounded-full shrink-0" :class="w.geplant ? 'bg-green' : 'bg-blue'"></span>{{ w.traeger }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AssistantHeadSection',
  data() {
    return {
      wege: [
        {
          label: 'Der geplante Weg',
          title: 'Läuft von selbst durch',
          traeger: 'Automatisierung',
          geplant: true,
          icon: 'M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          punkte: [
            'Treffer, Recherche und Anschreiben über Nacht',
            'Fehlende Profilangaben erkennen und nachfragen',
            'Wiederkehrende Schritte ohne Zutun'
          ]
        },
        {
          label: 'Der Einzelfall',
          title: 'Kommt ungeplant herein',
          traeger: 'KI-Assistent',
          geplant: false,
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
          punkte: [
            'Ein Kunde erwähnt am Telefon eine offene Stelle',
            'Ein Lebenslauf kommt als Link per Mail',
            'Eine Frage, für die es keinen Filter gibt'
          ]
        }
      ]
    }
  }
}
</script>
