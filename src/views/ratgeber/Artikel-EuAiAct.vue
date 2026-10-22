<template>
  <ArticleLayout
    path="/ratgeber/eu-ai-act-recruiting"
    heading="EU AI Act im Recruiting: Was Personalberatungen jetzt wissen müssen"
    lead="Die europäische KI-Verordnung stuft KI im Recruiting als Hochrisiko ein. Was das für Anbieter und für Personalberatungen bedeutet, welche Pflichten gelten und welche Fristen nach aktuellem Stand laufen."
    :related="['/daten', '/ratgeber/ki-in-der-personalberatung', '/glossar/human-in-the-loop']"
    rechtshinweis
    cta-title="Sehen Sie, wie eine Bewertung in matchmaker zustande kommt."
    cta-text="Begründung, Bericht, Protokoll und Freigabe – in 15 Minuten an einem Beispiel gezeigt."
    cta-to="/daten"
    cta-label="Datenschutz ansehen →"
  >
    <div class="kasten">
      <div class="kasten-titel">Das Wichtigste in Kürze</div>
      <ul>
        <li>KI-Systeme für die Einstellung und Auswahl von Personen – etwa zum Sichten von Bewerbungen oder Bewerten von Kandidaten – gelten als <strong>Hochrisiko</strong> (Anhang III Nr. 4).</li>
        <li>Die meisten Pflichten treffen den <strong>Anbieter</strong> des Systems. Aber auch die Personalberatung, die es einsetzt, hat als <strong>Betreiber</strong> eigene Pflichten (Art. 26).</li>
        <li>Seit dem 2. Februar 2025 gelten bereits die <strong>Verbote</strong> (Art. 5) und die Pflicht zur <strong>KI-Kompetenz</strong> der Mitarbeitenden (Art. 4).</li>
        <li>Die Pflichten für Hochrisiko-Systeme nach Anhang III gelten nach aktuellem Stand ab dem <strong>2. Dezember 2027</strong>. Ursprünglich war der 2. August 2026 vorgesehen.</li>
        <li>Die <strong>DSGVO</strong> gilt unabhängig davon: Ausschließlich automatisierte Entscheidungen über Menschen sind nach Art. 22 DSGVO grundsätzlich unzulässig.</li>
      </ul>
    </div>

    <h2>Warum Recruiting als Hochrisiko gilt</h2>
    <p>
      Die KI-Verordnung (Verordnung (EU) 2024/1689) teilt KI-Systeme nach ihrem Risiko ein. Als hochriskant gelten
      unter anderem die Bereiche, die in Anhang III aufgezählt sind. Unter Nummer 4 steht dort „Beschäftigung,
      Personalmanagement und Zugang zur Selbstständigkeit“. Erfasst sind KI-Systeme, die für die Einstellung oder
      Auswahl natürlicher Personen bestimmt sind – ausdrücklich genannt werden das Schalten gezielter
      Stellenanzeigen, das Sichten und Filtern von Bewerbungen und die Bewertung von Bewerbern.
    </p>
    <p>
      Der Grund liegt auf der Hand: Solche Systeme beeinflussen Berufschancen und damit Lebensgrundlagen. Sie
      können Verzerrungen aus ihren Trainingsdaten übernehmen und bestimmte Gruppen benachteiligen, ohne dass es
      jemand bemerkt.
    </p>
    <h3>Die Ausnahme – und warum sie selten greift</h3>
    <p>
      Nach Art. 6 Abs. 3 ist ein System aus Anhang III ausnahmsweise nicht hochriskant, wenn es kein erhebliches
      Risiko birgt – etwa weil es nur eine eng begrenzte Verfahrensaufgabe erledigt oder eine vorbereitende
      Tätigkeit übernimmt. Diese Ausnahme gilt aber nie, wenn das System ein Profiling natürlicher Personen
      vornimmt. Wer Kandidaten bewertet, einstuft oder in eine Rangfolge bringt, sollte deshalb nicht mit der
      Ausnahme planen.
    </p>

    <h2>Anbieter oder Betreiber: Wer muss was?</h2>
    <p>
      Die Verordnung unterscheidet zwischen dem <strong>Anbieter</strong>, der ein KI-System entwickelt und unter
      eigenem Namen anbietet, und dem <strong>Betreiber</strong>, der es in eigener Verantwortung einsetzt. Eine
      Personalberatung, die eine Recruiting-Software mit KI nutzt, ist in aller Regel Betreiber.
    </p>
    <div class="tabelle">
      <table>
        <thead>
          <tr><th>Rolle</th><th>Wichtigste Pflichten bei Hochrisiko-Systemen</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Anbieter</strong><br>entwickelt das System</td>
            <td>Risikomanagement (Art. 9), Qualität der Daten und Umgang mit Verzerrungen (Art. 10), technische Dokumentation (Art. 11), automatische Protokollierung (Art. 12), Transparenz und Gebrauchsanweisung (Art. 13), menschliche Aufsicht ermöglichen (Art. 14), Genauigkeit und Robustheit (Art. 15), Konformitätsbewertung, CE-Kennzeichnung und Registrierung.</td>
          </tr>
          <tr>
            <td><strong>Betreiber</strong><br>setzt das System ein</td>
            <td>Einsatz nach Gebrauchsanweisung, menschliche Aufsicht durch geschulte Personen, passende Eingabedaten, Überwachung des Betriebs und Meldung von Vorfällen, Aufbewahrung der Protokolle für mindestens sechs Monate, Information betroffener Personen, wenn das System Entscheidungen über sie trifft oder dabei unterstützt (Art. 26).</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Vorsicht beim Eigenbau: Wer ein Hochrisiko-System unter eigenem Namen anbietet oder wesentlich verändert,
      wird nach Art. 25 selbst zum Anbieter. Das kann auch eine Beratung treffen, die sich aus einem allgemeinen
      Sprachmodell einen eigenen Ablauf zum Bewerten von Kandidaten baut und ihn Kunden als Leistung anbietet.
    </p>

    <h2>Was bereits seit Februar 2025 gilt</h2>
    <p>Zwei Teile der Verordnung sind schon anwendbar und betreffen jede Personalberatung, die KI nutzt:</p>
    <ul>
      <li><strong>KI-Kompetenz (Art. 4):</strong> Wer KI-Systeme einsetzt, muss dafür sorgen, dass die Mitarbeitenden, die damit arbeiten, ausreichend geschult sind. Halten Sie fest, wer wann worin geschult wurde.</li>
      <li><strong>Verbotene Praktiken (Art. 5):</strong> Untersagt ist unter anderem, Emotionen von Personen am Arbeitsplatz mit KI zu erkennen – außer aus medizinischen oder Sicherheitsgründen. Ebenfalls verboten ist die biometrische Kategorisierung nach sensiblen Merkmalen wie Herkunft oder Religion.</li>
    </ul>

    <h2>Die Fristen im Überblick</h2>
    <div class="tabelle">
      <table>
        <thead>
          <tr><th>Datum</th><th>Was gilt</th></tr>
        </thead>
        <tbody>
          <tr><td>1. August 2024</td><td>Die Verordnung tritt in Kraft.</td></tr>
          <tr><td>2. Februar 2025</td><td>Verbote nach Art. 5 und Pflicht zur KI-Kompetenz nach Art. 4.</td></tr>
          <tr><td>2. August 2025</td><td>Regeln für KI-Modelle mit allgemeinem Verwendungszweck, Aufsichtsstrukturen, Sanktionen.</td></tr>
          <tr><td>2. August 2026</td><td>Allgemeine Anwendbarkeit, unter anderem Transparenzpflichten nach Art. 50.</td></tr>
          <tr><td>2. Dezember 2027</td><td>Pflichten für Hochrisiko-Systeme nach Anhang III, also auch Recruiting – nach aktuellem Stand.</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      Die Verschiebung der Hochrisiko-Pflichten vom August 2026 auf den Dezember 2027 geht auf das sogenannte
      Digital-Omnibus-Paket der EU zurück. Maßgeblich ist der im Amtsblatt veröffentlichte Text – prüfen Sie dort
      den aktuellen Stand, bevor Sie Fristen intern verbindlich machen.
    </p>

    <h2>Was Personalberatungen jetzt tun sollten</h2>
    <ol>
      <li><strong>Bestandsaufnahme machen.</strong> Welche Werkzeuge bewerten, sortieren oder empfehlen Kandidaten mithilfe von KI? Dazu zählen auch selbst gebaute Abläufe mit allgemeinen Sprachmodellen.</li>
      <li><strong>Rolle klären.</strong> Sind Sie bei jedem Werkzeug Betreiber – oder durch Eigenbau womöglich Anbieter?</li>
      <li><strong>KI-Kompetenz schulen und dokumentieren.</strong> Diese Pflicht gilt schon heute.</li>
      <li><strong>Menschliche Entscheidung festschreiben.</strong> Keine Absage, keine Vorstellung, kein Versand ohne Prüfung durch einen Berater. Das verlangt auch Art. 22 DSGVO.</li>
      <li><strong>Kandidaten informieren.</strong> Ergänzen Sie Ihre Datenschutzhinweise um den Einsatz von KI und sorgen Sie dafür, dass Sie Auskunftsanfragen vollständig beantworten können.</li>
      <li><strong>Anbieter befragen.</strong> Gibt es eine Gebrauchsanweisung, Protokolle, Begründungen zu jeder Bewertung und Tests auf Verzerrungen? Wie bereitet sich der Anbieter auf die Konformitätsbewertung vor?</li>
      <li><strong>Protokolle aufbewahren.</strong> Legen Sie fest, wo die Protokolle liegen und wie lange sie aufbewahrt werden.</li>
    </ol>

    <h2>Wie matchmaker damit umgeht</h2>
    <p>
      matchmaker bewertet die Passung zwischen Kandidat und offener Stelle – und fällt damit in den Bereich, den
      Anhang III beschreibt. Deshalb sind die Grundlagen, die die Verordnung verlangt, von Anfang an angelegt:
      Hinaus geht nichts ohne Freigabe durch den Berater. Jede Bewertung wird mit Begründung, Zeitpunkt sowie
      Modell- und Prompt-Version protokolliert. Bewertet wird ohne Klarnamen und ohne geschützte Merkmale, und zu
      jeder Bewertung lässt sich ein Bericht je Kriterium erzeugen. Eine Konformitätsbewertung ersetzt das nicht.
      Mehr dazu auf der Seite <router-link to="/daten">Datenschutz bei KI im Recruiting</router-link>.
    </p>

    <h2>Quellen</h2>
    <ul>
      <li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" rel="noopener" target="_blank">Verordnung (EU) 2024/1689 (KI-Verordnung), EUR-Lex</a></li>
      <li><a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" rel="noopener" target="_blank">Verordnung (EU) 2016/679 (DSGVO), Art. 22, EUR-Lex</a></li>
    </ul>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'ArtikelEuAiAct',
  components: { ArticleLayout }
}
</script>
