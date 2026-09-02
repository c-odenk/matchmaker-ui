<template>
  <!-- 4 · Übergang: ab hier geht es um das, was der Berater selbst auslöst.
       Die vier Kanäle einmal im Überblick, danach jeder einzeln. -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Aus dem Vorgang</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Ein System statt <span class="text-blue">fünf Anwendungen.</span></h2>
        <p class="text-lead text-body">Nachricht, Anruf, Termin und Auswertung laufen dort, wo der Kandidat steht – ohne Programmwechsel.</p>
      </div>

      <!-- Der Vorgang als Schicht, darunter die vier Kanäle, die daran hängen.
           Gleiche Bildsprache wie Hero und Integrationsseite: oben die eigene
           Ebene, darunter das Angebundene, dazwischen die Zuleitung. -->
      <div class="scope rounded-[11px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="rounded-[8px] bg-navy border border-navy text-white shadow-price-feat px-6 py-5 flex items-center justify-between gap-6 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-[14px]">
          <div class="min-w-0">
            <div class="text-[.96rem] font-bold leading-tight text-white">Der Vorgang</div>
            <div class="text-[.82rem] text-white/[0.72] mt-[6px] leading-[1.5]">Kandidat, Mandat und Verlauf an einer Stelle.</div>
          </div>
          <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full bg-blue/25 text-[#9cc6f2] shrink-0">
            <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>Eine Oberfläche
          </span>
        </div>

        <!-- Zuleitungen: nur dort, wo vier Spalten stehen; darunter trägt der
             Abstand die Zuordnung allein. -->
        <div class="grid grid-cols-4 gap-[14px] max-[880px]:hidden" aria-hidden="true">
          <span v-for="k in kanaele" :key="k.title" class="h-[26px] flex justify-center">
            <span class="w-[2px] h-full rounded-full bg-gradient-to-b from-line to-blue"></span>
          </span>
        </div>

        <div class="grid grid-cols-4 gap-[14px] max-[880px]:grid-cols-2 max-[880px]:mt-[22px] max-[560px]:grid-cols-1">
          <div v-for="k in kanaele" :key="k.title" class="rounded-[8px] border border-line bg-white px-5 py-5 flex flex-col">
            <span class="w-[34px] h-[34px] shrink-0 rounded-[7px] bg-navy/[0.07] text-navy flex items-center justify-center mb-3">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="k.icon"/></svg>
            </span>
            <div class="text-[.96rem] font-bold leading-tight text-ink">{{ k.title }}</div>
            <div class="text-[.82rem] text-body mt-[6px] leading-[1.5] flex-1">{{ k.text }}</div>
            <div class="mt-[14px] pt-[12px] border-t border-line">
              <span class="text-[.72rem] text-muted">Statt: {{ k.instead }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'AutomationChannelsSection',
  components: { EyebrowBadge },
  data() {
    return {
      kanaele: [
        {
          title: 'E-Mail',
          text: 'Entwurf im Vorgang, Versand über Ihr Postfach.',
          instead: 'Mailprogramm',
          icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        },
        {
          title: 'Telefon',
          text: 'Anruf aus dem Profil, über den Rechner.',
          instead: 'Telefonanlage',
          icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        },
        {
          title: 'Teams-Termin',
          text: 'Einladung an Kandidat oder Entscheider.',
          instead: 'Kalenderprogramm',
          icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
        },
        {
          title: 'Auswertung',
          text: 'Das Transkript wird zum Vorschlag fürs Profil.',
          instead: 'Notizen abtippen',
          icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z'
        }
      ]
    }
  }
}
</script>
