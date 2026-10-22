<template>
  <ArticleLayout
    path="/glossar/active-sourcing"
    heading="Active Sourcing: Definition und Abgrenzung zur Akquise"
    lead="Active Sourcing heißt, passende Kandidaten gezielt zu suchen und direkt anzusprechen, statt auf Bewerbungen zu warten. Die typischen Kanäle, die rechtlichen Grenzen – und warum es das Gegenstück zur Akquise ist."
    :related="['/glossar/talentpool', '/ratgeber/kaltakquise-personalvermittlung', '/agenten']"
    rechtshinweis
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Definition</h2>
    <p>
      Beim Active Sourcing sucht eine Personalberatung oder ein Unternehmen selbst nach Menschen, die zu einer
      Stelle passen, und spricht sie direkt an. Gerade Fachkräfte, die nicht aktiv suchen, erreicht man so oft
      überhaupt erst. Im Deutschen ist auch von Direktansprache die Rede.
    </p>

    <h2>Typische Kanäle</h2>
    <ul>
      <li>Berufliche Netzwerke wie LinkedIn und Xing</li>
      <li>Lebenslaufdatenbanken von Jobportalen</li>
      <li>Fachcommunitys, Veranstaltungen und Empfehlungen</li>
      <li>Der eigene Talentpool</li>
    </ul>

    <h2>Rechtliche Grenzen</h2>
    <p>
      Ein kurzer Anruf am Arbeitsplatz, um das Interesse an einer Stelle zu klären, ist nach der Rechtsprechung des
      Bundesgerichtshofs grundsätzlich zulässig (BGH, Urteil vom 4. März 2004, I ZR 221/01). Er muss sich aber auf
      eine erste Kontaktaufnahme beschränken; ausführliche Gespräche gehören in die Freizeit des Kandidaten.
    </p>
    <p>
      Wer Daten aus öffentlichen Profilen speichert, muss die betroffene Person nach Art. 14 DSGVO innerhalb eines
      Monats darüber informieren – spätestens bei der ersten Kontaktaufnahme.
    </p>

    <h2>Active Sourcing und Akquise</h2>
    <div class="tabelle">
      <table>
        <thead><tr><th></th><th>Active Sourcing</th><th>Akquise vom Kandidaten aus</th></tr></thead>
        <tbody>
          <tr><td>Ausgangspunkt</td><td>Eine offene Stelle</td><td>Ein vorhandener Kandidat</td></tr>
          <tr><td>Gesucht wird</td><td>Der passende Kandidat</td><td>Das passende Unternehmen mit offener Stelle</td></tr>
          <tr><td>Angesprochen wird</td><td>Der Kandidat</td><td>Der Ansprechpartner im Unternehmen</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      matchmaker arbeitet in der zweiten Richtung: Für jeden Kandidaten in Ihrem Bestand werden passende Vakanzen
      gesucht, der Ansprechpartner ermittelt und das Anschreiben vorbereitet. Mehr dazu auf der Seite
      <router-link to="/agenten">Multi-Agentensystem</router-link>.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'GlossarActiveSourcing',
  components: { ArticleLayout }
}
</script>
