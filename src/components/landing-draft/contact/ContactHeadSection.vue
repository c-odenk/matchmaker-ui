<template>
  <section class="sec bg-white !pt-[88px] !pb-[88px] max-[1000px]:!pt-[58px] max-[1000px]:!pb-[58px]">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center">
        <EyebrowBadge>Demo buchen</EyebrowBadge>
        <h1 class="text-section text-ink mt-[18px]">Ihre persönliche <span class="text-blue">matchmaker-Einführung.</span></h1>
        <p class="text-[1.05rem] font-normal leading-[1.5] text-muted mt-[10px]">
          15 Minuten, live mit unserem Team. Wir sehen uns Ihren heutigen Ablauf an, zeigen
          matchmaker in der Praxis und besprechen die Anbindung an Ihre Systeme.
        </p>
        <div class="flex items-center justify-center gap-5 mt-6 flex-wrap text-[.82rem] text-body">
          <span v-for="t in trust" :key="t.label" class="inline-flex items-center gap-[7px]">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="text-blue shrink-0"><path stroke-linecap="round" stroke-linejoin="round" :d="t.icon"/></svg>{{ t.label }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Ablauf und Formular -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.05fr] gap-[52px] items-start max-[1000px]:grid-cols-1 max-[1000px]:gap-[34px]">
      <div class="two-text max-[1000px]:order-2">
        <EyebrowBadge>Ablauf</EyebrowBadge>
        <h2 class="text-section text-ink mt-[14px] mb-[24px]">Was Sie in der Demo <span class="text-blue">erwartet.</span></h2>

        <ol class="list-none flex flex-col gap-[14px]">
          <li v-for="(s, i) in steps" :key="s.title"
              class="flex items-start gap-[15px] rounded-[14px] border border-line bg-white px-[19px] py-[17px]">
            <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy text-white flex items-center justify-center text-[.78rem] font-bold tabular-nums">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="min-w-0">
              <span class="block text-[.98rem] font-bold text-ink leading-tight">{{ s.title }}</span>
              <span class="block text-[.9rem] text-body leading-[1.6] mt-[5px]">{{ s.text }}</span>
            </span>
          </li>
        </ol>
      </div>

      <div class="max-[1000px]:order-1">
        <DemoForm />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import DemoForm from '@/components/landing-draft/contact/DemoForm.vue'

export default {
  name: 'ContactHeadSection',
  components: { EyebrowBadge, DemoForm },
  data() {
    return {
      trust: [
        { label: '15 Minuten', icon: 'M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'per Video-Call', icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h8.25a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 8.25v8.25a2.25 2.25 0 002.25 2.25z' },
        { label: 'unverbindlich', icon: 'M4.5 12.75l6 6 9-13.5' }
      ],
      steps: [
        {
          title: 'Kurze Bestandsaufnahme',
          text: 'Wir verstehen Ihren heutigen Ablauf: Bewerbersoftware, Postfach, Telefonie und wie Sie heute ansprechen.'
        },
        {
          title: 'Live-Durchlauf durch matchmaker',
          text: 'Vom Kandidatenprofil zum fertigen Vorschlag – mit Treffern, Begründung und vorbereitetem Anschreiben.'
        },
        {
          title: 'Anbindung an Ihre Systeme',
          text: 'Wie sich matchmaker über Ihren bestehenden Stack legt: Schnittstellen, Datenwege und was wo liegen bleibt.'
        },
        {
          title: 'Fit-Gespräch und nächste Schritte',
          text: 'Passt matchmaker zu Ihrer Beratung? Wir klären Bedarf, Teamgröße, Lizenzen und Start – offen und ohne Verkaufsdruck.'
        }
      ]
    }
  }
}
</script>

