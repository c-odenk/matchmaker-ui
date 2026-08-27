<template>
  <section class="sec bg-white !pt-[88px] max-[880px]:!pt-[58px]">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[680px] text-center mb-[88px] max-[880px]:mb-[58px]">
        <h1 class="text-hero text-ink mb-[14px]">Wo Ihre Daten liegen – <span class="text-blue">und wo nicht.</span></h1>
        <p class="text-lead text-body">
          Personalberatung arbeitet mit sensiblen Daten. Deshalb liegt der Weg offen: welche Station was speichert und was nur durchläuft.
        </p>
      </div>

      <!-- Der Weg der Daten: drei Stationen, eine davon nur auf Zeit -->
      <div class="scope rounded-[18px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-5">Der Weg der Daten</div>

        <div class="grid items-stretch [grid-template-columns:1fr_auto_1fr_auto_1fr] gap-0 max-[880px]:grid-cols-1">
          <template v-for="(st, i) in stations" :key="st.title">
            <div class="rounded-[12px] border px-5 py-5 flex flex-col"
                 :class="st.own ? 'bg-navy border-navy text-white shadow-price-feat' : 'bg-white border-line'">
              <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] flex items-center justify-center mb-3"
                    :class="st.own ? 'bg-blue/25 border border-blue/[0.4] text-white' : 'bg-navy/[0.07] text-navy'">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="st.icon"/></svg>
              </span>
              <div class="text-[.96rem] font-bold leading-tight" :class="st.own ? 'text-white' : 'text-ink'">{{ st.title }}</div>
              <div class="text-[.82rem] mt-[6px] leading-[1.5] flex-1" :class="st.own ? 'text-white/[0.72]' : 'text-body'">{{ st.text }}</div>
              <div class="mt-[14px] pt-[12px] border-t" :class="st.own ? 'border-white/[0.13]' : 'border-line'">
                <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full"
                      :class="st.keeps ? (st.own ? 'bg-blue/25 text-[#9cc6f2]' : 'bg-navy/[0.06] text-navy') : 'bg-[#fff7ed] text-[#9a3412]'">
                  <span class="w-[6px] h-[6px] rounded-full shrink-0" :class="st.keeps ? 'bg-green' : 'bg-[#ea580c]'"></span>{{ st.badge }}
                </span>
              </div>
            </div>

            <div v-if="i < stations.length - 1" class="flex items-center justify-center px-4 max-[880px]:py-3">
              <span class="w-9 h-9 rounded-full bg-white border border-line text-muted flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="max-[880px]:rotate-90"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </span>
            </div>
          </template>
        </div>

        <!-- Was künftig möglich wird -->
        <div class="mt-[18px] rounded-[12px] border border-dashed border-[#c2ccdb] bg-white px-5 py-5 flex items-start gap-[14px] max-[560px]:flex-col">
          <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy/[0.07] text-navy flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H15.9a.75.75 0 00-.7.5 2.25 2.25 0 01-2.1 1.45h-2.2a2.25 2.25 0 01-2.1-1.45.75.75 0 00-.7-.5H5.25a3 3 0 00-3 3"/></svg>
          </span>
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="text-[.96rem] font-bold text-ink">Betrieb im eigenen Rechenzentrum</span>
              <span class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">Auf der Roadmap</span>
            </div>
            <p class="text-[.88rem] text-body leading-[1.6]">
              Perspektivisch lässt sich die Verarbeitung vollständig in Ihrer eigenen Infrastruktur betreiben – Ihre Daten verlassen sie dann zu keinem Zeitpunkt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DataHeadSection',
  data() {
    return {
      stations: [
        {
          title: 'Bewerbersoftware',
          text: 'Stammdaten, Originaldokumente und Löschfristen – die Personalakte bleibt dort.',
          badge: 'Dauerhaft · beim ATS-Anbieter',
          keeps: true,
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75'
        },
        {
          title: 'matchmaker-Datenbank',
          text: 'Gespiegelte Profile, Bewertungen, Entwürfe und Protokolle.',
          badge: 'Dauerhaft · Serverstandort wählbar',
          keeps: true,
          own: true,
          icon: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-13.5 0v.75a3 3 0 003 3h7.5a3 3 0 003-3v-.75'
        },
        {
          title: 'KI-Dienst',
          text: 'Nur für die Dauer des Aufrufs – und ausschließlich ohne Klarnamen.',
          badge: 'Nur während der Verarbeitung',
          keeps: true,
          icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
        }
      ]
    }
  }
}
</script>
