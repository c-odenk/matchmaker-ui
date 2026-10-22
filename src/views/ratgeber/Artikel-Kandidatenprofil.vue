<template>
  <ArticleLayout
    path="/ratgeber/kandidatenprofil-vorlage"
    heading="Kandidatenprofil: Vorlage für die Vorstellung beim Kunden"
    lead="Ein gutes Kandidatenprofil zeigt in wenigen Zeilen, warum jemand zur Stelle passt – ohne zu verraten, wer es ist. Aufbau, eine Vorlage zum Übernehmen und was Sie vor dem Versand entfernen."
    :related="['/ratgeber/mpc-methode', '/ratgeber/kaltakquise-personalvermittlung', '/agenten']"
    rechtshinweis
    cta-title="Das anonyme Exposé entsteht in matchmaker automatisch."
    cta-text="Wie aus einem Profil und einer passenden Vakanz ein Anschreiben mit Exposé wird, zeigen wir in 15 Minuten."
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Wozu ein anonymisiertes Profil?</h2>
    <p>
      Wer einen Kandidaten vorstellt, will zwei Dinge zugleich: das Interesse des Unternehmens wecken und den
      Kandidaten schützen. Ein anonymisiertes Kurzprofil – oft Exposé genannt – leistet beides. Das Unternehmen
      sieht, was der Kandidat kann. Wer es ist, erfährt es erst, wenn es mit Ihnen spricht und der Kandidat
      zugestimmt hat.
    </p>
    <p>
      Nebenbei hilft das Kurzprofil gegen Benachteiligung: Was nichts mit der Qualifikation zu tun hat, steht gar
      nicht erst darin.
    </p>

    <h2>Der Aufbau</h2>
    <div class="tabelle">
      <table>
        <thead><tr><th>Baustein</th><th>Inhalt</th></tr></thead>
        <tbody>
          <tr><td>Überschrift</td><td>Aktuelle oder angestrebte Funktion, Region, Verfügbarkeit.</td></tr>
          <tr><td>Kurzfassung</td><td>Zwei bis drei Sätze: Warum passt dieser Mensch zu dieser Art Stelle?</td></tr>
          <tr><td>Erfahrung</td><td>Jahre im Fach, davon mit Führung; Branchen und Unternehmensgrößen – ohne Firmennamen.</td></tr>
          <tr><td>Belegte Erfolge</td><td>Zwei bis vier konkrete Ergebnisse mit Zahlen.</td></tr>
          <tr><td>Kenntnisse</td><td>Fachliche Schwerpunkte, Werkzeuge, Zertifikate, Sprachen.</td></tr>
          <tr><td>Rahmen</td><td>Gehaltsrahmen, Kündigungsfrist, Arbeitsmodell, Reisebereitschaft.</td></tr>
          <tr><td>Wechselmotivation</td><td>Was der Kandidat sucht – sachlich, ohne Kritik am Arbeitgeber.</td></tr>
          <tr><td>Einschätzung</td><td>Ihr Urteil aus dem Gespräch in zwei Sätzen.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Vorlage zum Übernehmen</h2>
    <div class="kasten">
      <div class="kasten-titel">Kandidatenprofil (anonymisiert)</div>
      <pre class="vorlage">Senior IT-Projektleitung · Raum Hamburg · verfügbar ab [Datum]

Kurzfassung
[Zwei bis drei Sätze, warum dieses Profil zu Stellen dieser Art passt.]

Erfahrung
12 Jahre IT-Infrastruktur, davon 6 Jahre mit Personalverantwortung
Branchen: [z. B. Logistik, Industrie] · Unternehmensgröße: [z. B. 500–2.000 Beschäftigte]

Belegte Erfolge
– Cloud-Infrastruktur von 10 auf 200 Knoten skaliert
– Team von 12 Personen aufgebaut und geführt
– Budgetverantwortung 1,5 Mio. € pro Jahr

Kenntnisse
[Fachliche Schwerpunkte] · Zertifikate: PMP, Certified Scrum Master · Sprachen: Deutsch, Englisch

Rahmen
Gehaltsrahmen 95–110 Tsd. € · Kündigungsfrist [x] Monate · hybrid, bis zu 80 % remote

Wechselmotivation
[Was gesucht wird, z. B. mehr Gestaltungsspielraum, nächster Karriereschritt]

Unsere Einschätzung
[Zwei Sätze aus dem Gespräch.]</pre>
    </div>

    <h2>Was vor dem Versand entfernt wird</h2>
    <ul>
      <li>Name, Foto, Anschrift, E-Mail-Adresse und Telefonnummer</li>
      <li>Geburtsdatum und Alter, Familienstand, Staatsangehörigkeit, Religion, Angaben zur Gesundheit</li>
      <li>Namen des aktuellen und früherer Arbeitgeber – stattdessen Branche und Größe</li>
      <li>Genaue Monatsangaben, wenn sie zusammen mit anderen Angaben auf die Person schließen lassen</li>
      <li>Seltene Kombinationen aus Funktion, Region und Spezialgebiet, die den Kandidaten erkennbar machen</li>
    </ul>
    <p>
      Prüfen Sie am Ende mit fremdem Blick: Könnte jemand aus der Branche erraten, um wen es geht? Dann
      verallgemeinern Sie weiter.
    </p>

    <h2>Rechtlich zu beachten</h2>
    <ul>
      <li><strong>Einverständnis des Kandidaten:</strong> Auch ein anonymisiertes Profil kann personenbezogen sein. Holen Sie das Einverständnis vor der Vorstellung ein, am besten für das konkrete Unternehmen.</li>
      <li><strong>Versandweg:</strong> Ein Profil mit Vermittlungsangebot ist Werbung. Per E-Mail braucht es die vorherige Einwilligung des Empfängers – mehr dazu im Beitrag <router-link to="/ratgeber/kaltakquise-personalvermittlung">Kaltakquise in der Personalvermittlung</router-link>.</li>
      <li><strong>Gleichbehandlung:</strong> Angaben, die nach dem AGG nicht über eine Einstellung entscheiden dürfen, gehören nicht ins Profil.</li>
    </ul>

    <h2>Häufige Fehler</h2>
    <ul>
      <li>Der Lebenslauf wird gekürzt statt ein Argument aufgebaut.</li>
      <li>Superlative ohne Beleg („absoluter Top-Kandidat“).</li>
      <li>Kein Gehaltsrahmen – das Unternehmen kann nicht einschätzen, ob es passt.</li>
      <li>Ein Profil für alle: Die Kurzfassung sollte zur Art der Stelle passen, für die Sie vorstellen.</li>
    </ul>

    <h2>Mit matchmaker</h2>
    <p>
      In matchmaker entsteht das Exposé zusammen mit dem Anschreiben: ohne Name, Kontaktdaten und Arbeitgeber,
      zugeschnitten auf die gefundene Vakanz. Per E-Mail und WhatsApp lässt es sich als PDF anhängen. Hinaus geht es
      erst nach Ihrer Freigabe.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'ArtikelKandidatenprofil',
  components: { ArticleLayout }
}
</script>
