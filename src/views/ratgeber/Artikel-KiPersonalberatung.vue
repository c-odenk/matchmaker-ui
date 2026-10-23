<template>
  <ArticleLayout
    path="/ratgeber/ki-in-der-personalberatung"
    heading="KI in der Personalberatung: Was sie vorbereitet, was Sie entscheiden"
    lead="KI kann in der Personalberatung viel Handarbeit abnehmen – aber nicht jede Aufgabe eignet sich. Welche Schritte sich heute verlässlich vorbereiten lassen, wo die Grenzen liegen und woran Sie ein brauchbares Werkzeug erkennen."
    :related="['/agenten', '/ratgeber/eu-ai-act-recruiting', '/daten']"
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Wo die Zeit heute hingeht</h2>
    <p>
      Erfahrene Berater erkennen Passung oft in wenigen Minuten. Was den Tag füllt, ist die Arbeit drumherum:
      Lebensläufe in ein einheitliches Format bringen, Jobportale und Karriereseiten durchsehen, den zuständigen
      Ansprechpartner in einem Unternehmen suchen, Anschreiben formulieren, zwischen Bewerbersoftware, Postfach,
      Telefon und Kalender wechseln und Gesprächsnotizen nachtragen. Genau dort setzt KI sinnvoll an – bei der
      Vorbereitung, nicht bei der Entscheidung.
    </p>

    <h2>Was KI heute verlässlich vorbereitet</h2>
    <div class="tabelle">
      <table>
        <thead><tr><th>Aufgabe</th><th>Was KI leistet</th><th>Worauf es ankommt</th></tr></thead>
        <tbody>
          <tr><td>Lebenslauf aufbereiten</td><td>Liest das Dokument und erstellt ein strukturiertes Qualifikationsprofil; erkennt fehlende Angaben.</td><td>Geschützte Merkmale wie Alter oder Familienstand gehören nicht ins Profil.</td></tr>
          <tr><td>Markt beobachten</td><td>Sucht laufend offene Stellen auf Jobportalen und Karriereseiten und sortiert grob vor.</td><td>Klare Kriterien, sonst wird die Trefferliste lang statt gut.</td></tr>
          <tr><td>Passung bewerten</td><td>Vergleicht Profil und Stelle inhaltlich statt nur nach Stichworten und begründet das Ergebnis.</td><td>Eine Begründung je Kriterium – ein Score allein ist nicht prüfbar.</td></tr>
          <tr><td>Ansprechpartner recherchieren</td><td>Ermittelt, wer im Unternehmen für die Stelle zuständig ist.</td><td>Quelle und Aktualität sollten erkennbar sein.</td></tr>
          <tr><td>Anschreiben entwerfen</td><td>Formuliert eine Nachricht in der Länge, die zum Kanal passt.</td><td>Nichts erfinden, Kandidat anonym halten, Freigabe vor dem Versand.</td></tr>
          <tr><td>Gespräche auswerten</td><td>Macht aus einem Transkript einen Vorschlag für das Profil.</td><td>Aufzeichnung nur angekündigt; Übernahme ins Profil nach Prüfung.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Was beim Berater bleibt</h2>
    <ul>
      <li><strong>Das Urteil über Menschen.</strong> Motivation, Persönlichkeit und kulturelle Passung erkennt ein Gespräch besser als ein Modell.</li>
      <li><strong>Die Beziehung.</strong> Kandidaten und Kunden vertrauen einer Person, nicht einem Programm.</li>
      <li><strong>Die Verhandlung.</strong> Gehalt, Zeitpunkt, Gegenangebote – das bleibt Handwerk.</li>
      <li><strong>Die Entscheidung.</strong> Ob ein Kandidat vorgestellt wird und ob eine Nachricht hinausgeht, entscheidet ein Mensch. Ausschließlich automatisierte Entscheidungen über Personen sind nach Art. 22 DSGVO grundsätzlich unzulässig.</li>
    </ul>
    <p class="merksatz">Die KI bereitet vor. Der Berater entscheidet. Dieses Prinzip heißt Human in the Loop.</p>

    <h2>Die Risiken – und wie man ihnen begegnet</h2>
    <h3>Erfundene Angaben</h3>
    <p>
      Sprachmodelle formulieren auch dann flüssig, wenn ihnen Informationen fehlen. Ein Anschreiben kann so eine
      Qualifikation behaupten, die im Profil nicht steht. Gegenmittel: klare Vorgaben, nur vorhandene Angaben zu
      verwenden, und eine Prüfung vor jedem Versand.
    </p>
    <h3>Verzerrungen</h3>
    <p>
      Modelle können Muster aus ihren Trainingsdaten übernehmen. Entfernen Sie Name, Foto und geschützte Merkmale,
      bevor ein Profil bewertet wird, und prüfen Sie, ob gleiche Qualifikation gleich bewertet wird.
    </p>
    <h3>Datenschutz</h3>
    <p>
      Kandidatendaten sind sensibel. Klären Sie, wo die Daten gespeichert werden, ob sie zum Training genutzt
      werden und was beim KI-Aufruf übermittelt wird. Je weniger identifizierende Angaben das Modell sieht, desto
      besser.
    </p>
    <h3>Regulierung</h3>
    <p>
      Recruiting gilt nach der europäischen KI-Verordnung als Hochrisiko-Bereich. Was das bedeutet, steht im
      Beitrag <router-link to="/ratgeber/eu-ai-act-recruiting">EU AI Act im Recruiting</router-link>.
    </p>
    <h3>Unklare Kosten</h3>
    <p>
      Viele Werkzeuge rechnen KI-Nutzung pauschal oder mit Aufschlag ab. Fragen Sie, was ein Durchlauf kostet und
      ob die Kosten nach oben begrenzt sind.
    </p>

    <h2>Woran Sie ein brauchbares Werkzeug erkennen</h2>
    <div class="kasten">
      <div class="kasten-titel">Checkliste</div>
      <ul>
        <li>Jede Bewertung hat eine nachvollziehbare Begründung.</li>
        <li>Nichts geht ohne Freigabe hinaus.</li>
        <li>Namen und Kontaktdaten werden vor dem KI-Aufruf entfernt.</li>
        <li>Daten liegen in der EU und werden nicht zum Training genutzt.</li>
        <li>Das Werkzeug setzt auf Ihre Bewerbersoftware auf, statt eine zweite Insel zu bilden.</li>
        <li>KI-Kosten sind transparent und begrenzt.</li>
        <li>Jeder Schritt wird protokolliert; Auskunft und Löschung sind auf Knopfdruck möglich.</li>
      </ul>
    </div>

    <h2>Einstieg in drei Schritten</h2>
    <ol>
      <li><strong>Einen Engpass wählen.</strong> Beginnen Sie dort, wo die meiste Handarbeit anfällt – oft die Suche nach passenden offenen Stellen für vorhandene Kandidaten.</li>
      <li><strong>Mit echten Profilen testen.</strong> Vergleichen Sie die Vorschläge einige Wochen lang mit Ihrem eigenen Urteil.</li>
      <li><strong>Den Ablauf festlegen.</strong> Wer gibt frei, was wird protokolliert, wie werden Kandidaten informiert? Schulen Sie Ihr Team – die Pflicht zur KI-Kompetenz gilt bereits.</li>
    </ol>

    <h2>So setzt matchmaker das um</h2>
    <p>
      In matchmaker übernehmen vier spezialisierte Agenten die Vorbereitung: Der Profiling Agent erstellt das
      Qualifikationsprofil, der Market Agent sucht passende Vakanzen, der Matching Agent bewertet die Passung mit
      Begründung, und der Outreach Agent ermittelt den Ansprechpartner und entwirft das Anschreiben. Die Freigabe
      bleibt beim Berater. Mehr dazu unter <router-link to="/agenten">Multi-Agentensystem</router-link>.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'ArtikelKiPersonalberatung',
  components: { ArticleLayout }
}
</script>
