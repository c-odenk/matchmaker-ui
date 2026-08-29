<template>
  <!-- 1 · Woher die Daten stammen: Text links, Baustein rechts -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>Herkunft</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Klar benannte Quellen – <span class="text-blue">keine davon geheim.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Kandidatendaten kommen aus Ihrer Bewerbersoftware oder von Ihnen. Alles Weitere aus öffentlichen Quellen und Ihren eigenen Gesprächen.
        </p>
        <FeatureList :items="features" />
      </div>

      <div class="rounded-[11px] border border-line bg-white p-7 max-[560px]:p-5">
        <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-4">Datenherkunft</div>
        <div class="flex flex-col gap-3">
          <div v-for="s in sources" :key="s.title" class="flex items-start gap-[13px] rounded-[8px] border border-line bg-surface px-4 py-[13px] max-[560px]:flex-wrap">
            <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-navy/[0.07] text-navy flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-[.88rem] font-bold text-ink leading-tight">{{ s.title }}</span>
              <span class="block text-[.78rem] text-muted leading-[1.45] mt-[2px]">{{ s.text }}</span>
            </span>
            <span class="text-[.72rem] font-semibold px-[9px] py-[3px] rounded-full shrink-0 whitespace-nowrap max-[560px]:basis-[calc(100%_-_43px)] max-[560px]:ml-[43px] max-[560px]:mt-[5px] max-[560px]:w-fit"
                  :class="s.personal ? 'bg-navy/[0.06] text-navy' : 'bg-[#e7f8ee] text-[#15803d]'">{{ s.personal ? 'Personenbezogen' : 'Öffentlich' }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

export default {
  name: 'DataSourcesSection',
  components: { EyebrowBadge, FeatureList },
  data() {
    return {
      features: [
        'Kandidatendaten aus Ihrer Bewerbersoftware oder von Ihnen angelegt',
        'Vakanzen und Firmendaten aus öffentlich zugänglichen Quellen',
        'Gesprächsinhalte nur aus Terminen, die Sie selbst geführt haben'
      ],
      sources: [
        {
          title: 'Bewerbersoftware', text: 'Kandidatenprofile und Lebenslaufdaten', personal: true,
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375'
        },
        {
          title: 'In matchmaker angelegt', text: 'Kandidaten und Mandate, die Sie selbst hinzufügen', personal: true,
          icon: 'M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Jobportale und Karriereseiten', text: 'Ausgeschriebene Stellen im Markt',
          icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z'
        },
        {
          title: 'Handelsregister und Impressum', text: 'Firmendaten und Ansprechpartner',
          icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
        },
        {
          title: 'Teams-Transkripte', text: 'Nur aus Gesprächen, die Sie selbst führen', personal: true,
          icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z'
        }
      ]
    }
  }
}
</script>
