<template>
  <section class="sec" id="pool">
    <div class="wrap">
      <SectionHeading eyebrow="Der Stellenmarkt">
        Ihr Kandidatenpool, automatisch mit dem <span class="text-blue">Markt abgeglichen.</span>
        <template #lead>Der Market Agent gleicht Ihre Kandidaten laufend mit neuen Vakanzen ab. Der Matching Agent bewertet jede Empfehlung nachvollziehbar – auch schwächere Treffer werden transparent als solche markiert.</template>
      </SectionHeading>

      <div class="pool-grid grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
        <div v-for="c in candidates" :key="c.initials" class="pcard bg-white border border-line rounded-2xl p-6 transition-all duration-[180ms] flex flex-col hover:border-[#cdd9ea] hover:-translate-y-[3px] hover:shadow-card-hover">
          <div class="flex items-center gap-3">
            <div class="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-full bg-navy text-white font-bold text-[.85rem] tracking-[0.03em]">{{ c.initials }}</div>
            <div>
              <div class="font-bold text-[.96rem]">{{ c.name }}</div>
              <div class="text-[.78rem] text-muted">{{ c.role }}</div>
            </div>
          </div>
          <div v-for="m in shownMatches(c)" :key="m.title" class="flex items-center gap-[9px] mt-[14px] p-[11px] border border-line rounded-[10px]">
            <span class="text-blue font-bold">→</span>
            <div>
              <div class="text-[.84rem] font-semibold leading-[1.25]">{{ m.title }}</div>
              <div class="text-[.73rem] text-muted">{{ m.company }} · {{ m.source }}</div>
            </div>
            <span class="ml-auto font-extrabold text-[1.05rem] shrink-0" :style="{ color: scoreColor(m.score) }">{{ m.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'TalentpoolSection',
  components: { SectionHeading },
  data() {
    return {
      candidates: [
        {
          initials: 'MM', name: 'Max Mustermann', role: 'Senior IT Projektleiter · Hamburg',
          matches: [
            { title: 'Director Cloud Architecture', company: 'Nexis Cloud Systems GmbH', source: 'LinkedIn', score: 94 },
            { title: 'Head of IT Infrastructure', company: 'Triolux AG', source: 'StepStone', score: 67 },
            { title: 'IT-Consultant Cloud', company: 'Webcore GmbH', source: 'Xing', score: 38 }
          ]
        },
        {
          initials: 'LH', name: 'Lena Hofmann', role: 'Senior Frontend Engineer · München',
          matches: [
            { title: 'Lead Frontend Engineer', company: 'Acme Cloud GmbH', source: 'StepStone', score: 88 },
            { title: 'Senior Frontend Developer', company: 'Brightpath AG', source: 'LinkedIn', score: 72 }
          ]
        },
        {
          initials: 'AS', name: 'Aylin Schuster', role: 'Senior SRE · Berlin',
          matches: [
            { title: 'DevOps Engineer', company: 'Cloudnine Systems GmbH', source: 'LinkedIn', score: 84 },
            { title: 'Site Reliability Engineer', company: 'Finbridge GmbH', source: 'Xing', score: 61 }
          ]
        }
      ]
    }
  },
  methods: {
    shownMatches(c) { return c.matches.filter(m => m.score > 50) },
    scoreColor(score) { return score >= 80 ? '#16a34a' : '#ea580c' }
  }
}
</script>
