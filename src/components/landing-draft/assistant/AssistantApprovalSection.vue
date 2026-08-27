<template>
  <!-- Die Freigabe ist keine Zutat, sondern der Bauplan: derselbe Satz, den
       das Produktversprechen trägt. Auf dieser Seite besonders wichtig, weil
       ein Chat sonst den Eindruck erweckt, er handle eigenständig. -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-11">
        <EyebrowBadge>Freigabe</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Vorschlag, Freigabe, <span class="text-blue">Protokoll.</span></h2>
        <p class="text-[1.05rem] font-normal leading-[1.5] text-muted mt-[10px]">
          Der Assistent führt aus, entscheidet aber nicht. Nichts wird versendet, bevor
          Sie es freigegeben haben – auch nicht auf Anforderung aus dem Chat.
        </p>
      </div>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(3,1fr)] max-[880px]:grid-cols-1">
        <div v-for="(s, i) in stufen" :key="s.title" class="ben relative rounded-2xl border border-line bg-surface p-6">
          <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy text-white flex items-center justify-center text-[.78rem] font-bold tabular-nums mb-[14px]">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] text-ink mb-2">{{ s.title }}</h3>
          <p class="text-[.88rem] text-body leading-[1.6]">{{ s.text }}</p>
        </div>
      </div>

      <p class="sec-note text-center text-[.88rem] text-body mt-8 max-w-[680px] mx-auto leading-[1.6]">
        Dieselbe Kette gilt für den automatischen Durchlauf und für jeden Auftrag aus dem
        Chat – die Freigabe hängt am Vorgang, nicht am Weg dorthin.
      </p>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'AssistantApprovalSection',
  components: { EyebrowBadge },
  data() {
    return {
      stufen: [
        {
          title: 'Der Assistent legt vor',
          text: 'Treffer, Recherche, Entwurf – alles entsteht als Vorschlag, nicht als vollendete Tatsache.'
        },
        {
          title: 'Sie geben frei',
          text: 'Versand, Profiländerung und Statuswechsel brauchen Ihre Bestätigung, jedes Mal.'
        },
        {
          title: 'Der Schritt bleibt belegt',
          text: 'Wer was wann ausgelöst und freigegeben hat, ist dauerhaft nachvollziehbar.'
        }
      ]
    }
  }
}
</script>
