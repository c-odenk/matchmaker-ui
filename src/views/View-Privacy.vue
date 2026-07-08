<template>
  <LegalPage title="Datenschutzerklärung">

    <h2>1. Verantwortlicher</h2>
    <address>
      {{ legalInfo.company }}<br>
      {{ legalInfo.street }}<br>
      {{ legalInfo.zip }} {{ legalInfo.city }}<br>
      E-Mail: <a :href="`mailto:${legalInfo.email}`">{{ legalInfo.email }}</a>
    </address>

    <h2>2. Überblick</h2>
    <p>
      matchmaker.hr ist eine Software-Plattform für Personalberatungen, die wiederkehrende
      Schritte im Vermittlungsprozess – Marktanalyse, Kandidaten-Matching und Outreach –
      KI-gestützt automatisiert. Der Schutz personenbezogener Daten hat dabei höchste
      Priorität: Alle Daten werden ausschließlich auf Servern innerhalb der Europäischen
      Union verarbeitet und gespeichert.
    </p>
    <p>
      Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten
      beim Besuch dieser Website sowie bei der Nutzung der Plattform.
    </p>

    <h2>3. Datenverarbeitung beim Besuch dieser Website</h2>
    <h3>Server-Logfiles</h3>
    <p>
      Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
      in Server-Logfiles gespeichert (IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
      Seite, Browsertyp und Betriebssystem). Diese Daten dienen der Sicherstellung eines
      störungsfreien Betriebs und der Verbesserung unseres Angebots. Rechtsgrundlage ist
      Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
    </p>
    <h3>Lokaler Speicher (localStorage)</h3>
    <p>
      Diese Website verwendet den lokalen Speicher Ihres Browsers ausschließlich, um die
      aktuellen Lizenzpreise zwischenzuspeichern und die Seite schneller anzuzeigen. Es
      werden dabei keine personenbezogenen Daten gespeichert und kein Tracking durchgeführt.
      Cookies zu Analyse- oder Werbezwecken setzen wir nicht ein.
    </p>

    <h2>4. Demo-Anfragen und Kontaktaufnahme</h2>
    <p>
      Wenn Sie über das Demo-Formular oder per E-Mail Kontakt mit uns aufnehmen, verarbeiten
      wir die von Ihnen mitgeteilten Daten (Name, geschäftliche E-Mail-Adresse, Unternehmen,
      Inhalt der Anfrage) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
      Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Daten
      werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
      gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>

    <h2>5. Registrierung und Kundenkonto</h2>
    <p>
      Für die Nutzung der Plattform ist ein Kundenkonto erforderlich. Bei der Registrierung
      verarbeiten wir Bestandsdaten (Name, Unternehmen, geschäftliche Kontaktdaten) und
      Vertragsdaten (gewählter Plan, Lizenzen, Abrechnungsdaten). Rechtsgrundlage ist
      Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
    </p>

    <h2>6. Verarbeitung von Kandidatendaten im Auftrag</h2>
    <p>
      Personalberatungen, die matchmaker.hr nutzen, speichern und verarbeiten auf der
      Plattform Daten ihrer Kandidatinnen und Kandidaten (z.&nbsp;B. Lebensläufe,
      Qualifikationsprofile, Kontaktdaten). Für diese Daten ist der jeweilige Kunde
      datenschutzrechtlich Verantwortlicher; matchmaker.hr handelt als Auftragsverarbeiter
      gemäß Art. 28 DSGVO. Mit jedem Kunden wird hierzu ein Auftragsverarbeitungsvertrag
      (AVV) geschlossen.
    </p>
    <ul>
      <li>Die Verarbeitung erfolgt ausschließlich auf dokumentierte Weisung des Kunden.</li>
      <li>Alle Kandidatendaten werden auf Servern innerhalb der EU gespeichert.</li>
      <li>Es findet keine Nutzung von Kandidatendaten zu eigenen Zwecken statt.</li>
      <li>Nach Vertragsende werden die Daten gelöscht oder zurückgegeben.</li>
    </ul>

    <h2>7. KI-gestützte Verarbeitung</h2>
    <p>
      Für Matching, Marktanalyse und die Erstellung von Anschreiben nutzt matchmaker.hr
      KI-Sprachmodelle. Je nach gewähltem Plan erfolgt die Anbindung über von uns
      bereitgestellte Schnittstellen oder über den eigenen API-Schlüssel des Kunden
      („Bring Your Own Key"). Übermittelte Daten werden von uns nicht zum Training von
      KI-Modellen verwendet. Alle Ergebnisse der KI durchlaufen vor einer Außenwirkung
      einen menschlichen Freigabe-Schritt (Human-in-the-Loop).
    </p>

    <h2>8. Weitergabe von Daten</h2>
    <p>
      Eine Übermittlung personenbezogener Daten an Dritte findet nur statt, soweit dies zur
      Vertragserfüllung erforderlich ist (z.&nbsp;B. Hosting-Anbieter mit Serverstandort EU,
      Zahlungsdienstleister) oder eine gesetzliche Verpflichtung besteht. Mit allen
      eingesetzten Dienstleistern bestehen Auftragsverarbeitungsverträge.
    </p>

    <h2>9. Speicherdauer</h2>
    <p>
      Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
      erforderlich ist oder gesetzliche Aufbewahrungspflichten (z.&nbsp;B. handels- und
      steuerrechtliche Fristen von 6 bzw. 10 Jahren) bestehen.
    </p>

    <h2>10. Ihre Rechte</h2>
    <p>Ihnen stehen als betroffene Person folgende Rechte zu:</p>
    <ul>
      <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
    </ul>
    <p>
      Zur Ausübung Ihrer Rechte genügt eine formlose E-Mail an
      <a :href="`mailto:${legalInfo.email}`">{{ legalInfo.email }}</a>.
    </p>

  </LegalPage>
</template>

<script>
import LegalPage from '@/components/legal/LegalPage.vue'
import { legalInfo } from '@/config/legalInfo'

export default {
  name: 'ViewPrivacy',
  components: { LegalPage },
  data() {
    return { legalInfo }
  }
}
</script>
