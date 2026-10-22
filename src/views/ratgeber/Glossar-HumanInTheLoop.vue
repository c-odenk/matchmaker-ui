<template>
  <ArticleLayout
    path="/glossar/human-in-the-loop"
    heading="Human in the Loop: Die KI bereitet vor, der Mensch entscheidet"
    lead="Human in the Loop bedeutet, dass ein Mensch die Ergebnisse einer KI prüft und freigibt, bevor sie wirken. Was das im Recruiting konkret heißt und warum es rechtlich zählt."
    :related="['/agenten', '/ratgeber/ki-in-der-personalberatung', '/ratgeber/eu-ai-act-recruiting']"
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Definition</h2>
    <p>
      „Human in the Loop“ – auf Deutsch etwa „der Mensch bleibt im Ablauf“ – beschreibt ein System, in dem eine
      KI Vorschläge macht, ein Mensch sie aber prüft, ändern kann und ausdrücklich freigibt. Erst nach der Freigabe
      hat das Ergebnis eine Wirkung: Eine Nachricht wird versendet, ein Profil geändert, ein Status gesetzt.
    </p>

    <h2>Die Abgrenzung</h2>
    <div class="tabelle">
      <table>
        <thead><tr><th>Begriff</th><th>Rolle des Menschen</th></tr></thead>
        <tbody>
          <tr><td><strong>Human in the Loop</strong></td><td>Prüft und gibt jedes Ergebnis frei, bevor es wirkt.</td></tr>
          <tr><td><strong>Human on the Loop</strong></td><td>Überwacht ein automatisch laufendes System und greift nur bei Bedarf ein.</td></tr>
          <tr><td><strong>Human out of the Loop</strong></td><td>Ist nicht beteiligt; das System entscheidet und handelt allein.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Was das im Recruiting heißt</h2>
    <p>
      Die KI bereitet vor: Sie bewertet, wie gut ein Kandidat zu einer Stelle passt, begründet das Ergebnis und
      entwirft ein Anschreiben. Der Berater entscheidet: Er prüft Treffer und Begründung, passt den Entwurf an und
      gibt den Versand frei – oder verwirft ihn.
    </p>

    <h2>Warum es zählt</h2>
    <ul>
      <li><strong>Datenschutz:</strong> Ausschließlich automatisierte Entscheidungen mit erheblicher Wirkung für eine Person sind nach Art. 22 DSGVO grundsätzlich unzulässig.</li>
      <li><strong>KI-Verordnung:</strong> Für Hochrisiko-Systeme – dazu zählt Recruiting – verlangt Art. 14 der KI-Verordnung, dass Menschen das System wirksam beaufsichtigen können.</li>
      <li><strong>Qualität:</strong> Sprachmodelle können sich irren oder Angaben erfinden. Die Prüfung fängt das ab, bevor es einen Kandidaten oder Kunden erreicht.</li>
    </ul>

    <h2>Woran gute Umsetzung zu erkennen ist</h2>
    <ul>
      <li>Die Freigabe ist ein Pflichtschritt, kein optionaler Haken.</li>
      <li>Die Begründung der KI ist sichtbar, nicht nur ein Score.</li>
      <li>Der Mensch kann ändern und verwerfen, nicht nur bestätigen.</li>
      <li>Wer wann was freigegeben hat, wird protokolliert.</li>
    </ul>
    <p>
      In matchmaker arbeiten die Agenten im Hintergrund und legen versandfertige Vorschläge vor. Hinaus geht nichts,
      bevor der Berater es freigegeben hat. Mehr dazu unter <router-link to="/agenten">Multi-Agentensystem</router-link>.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'GlossarHumanInTheLoop',
  components: { ArticleLayout }
}
</script>
