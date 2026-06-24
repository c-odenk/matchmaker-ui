<template>
  <section class="sec" id="pool">
    <div class="wrap">
      <div class="sec-head center">
        <span class="eyebrow"><span class="dot"></span>Der Stellenmarkt</span>
        <h2>Ihr Kandidatenpool, automatisch mit dem <span class="accent">Markt abgeglichen.</span></h2>
        <p class="lead">Der Market Agent gleicht Ihre Kandidaten laufend mit neuen Vakanzen ab. Der Matching Agent bewertet jede Empfehlung nachvollziehbar – auch schwächere Treffer werden transparent als solche markiert.</p>
      </div>
      <div class="pool-grid">
        <div class="pcard" v-for="c in candidates" :key="c.initials">
          <div class="top">
            <div class="initc">{{ c.initials }}</div>
            <div>
              <div class="nm">{{ c.name }}</div>
              <div class="ro">{{ c.role }}</div>
            </div>
          </div>
          <div class="vac" v-for="m in shownMatches(c)" :key="m.title">
            <span class="ar">→</span>
            <div>
              <div class="vt">{{ m.title }}</div>
              <div class="vc">{{ m.company }} · {{ m.source }}</div>
            </div>
            <span class="sc" :style="{ color: scoreColor(m.score) }">{{ m.score }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingTalentpoolV5',
  data() {
    return {
      candidates: [
        {
          initials: 'MM',
          name: 'Max Mustermann',
          role: 'Senior IT Projektleiter · Hamburg',
          matches: [
            { title: 'Director Cloud Architecture', company: 'Nexis Cloud Systems GmbH', source: 'LinkedIn', score: 94 },
            { title: 'Head of IT Infrastructure', company: 'Triolux AG', source: 'StepStone', score: 67 },
            // Score <= 50 -> wird vom Matching Agent herausgefiltert und nicht angezeigt
            { title: 'IT-Consultant Cloud', company: 'Webcore GmbH', source: 'Xing', score: 38 }
          ]
        },
        {
          initials: 'LH',
          name: 'Lena Hofmann',
          role: 'Senior Frontend Engineer · München',
          matches: [
            { title: 'Lead Frontend Engineer', company: 'Acme Cloud GmbH', source: 'StepStone', score: 88 },
            { title: 'Senior Frontend Developer', company: 'Brightpath AG', source: 'LinkedIn', score: 72 }
          ]
        },
        {
          initials: 'AS',
          name: 'Aylin Schuster',
          role: 'Senior SRE · Berlin',
          matches: [
            { title: 'DevOps Engineer', company: 'Cloudnine Systems GmbH', source: 'LinkedIn', score: 84 },
            { title: 'Site Reliability Engineer', company: 'Finbridge GmbH', source: 'Xing', score: 61 }
          ]
        }
      ]
    }
  },
  methods: {
    // Nur Treffer mit Score > 50 werden angezeigt – schwächere filtert der Matching Agent heraus.
    shownMatches(c) {
      return c.matches.filter(m => m.score > 50)
    },
    // Farbe nach Passung: starker Treffer grün, eingeschränkter Treffer orange.
    scoreColor(score) {
      return score >= 80 ? '#16a34a' : '#ea580c'
    }
  }
}
</script>
