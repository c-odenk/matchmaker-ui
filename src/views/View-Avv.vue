<template>
  <LegalPage title="Auftragsverarbeitungsvertrag">

    <!--
      ENTWURF (Stand 25.10.2026) – aus dem Code von matchmaker-api abgeleitet,
      vor der Veröffentlichung anwaltlich prüfen lassen.
      Die Fassung muss mit `avv.version` in matchmaker-api/src/config/rechtstexte.js
      übereinstimmen. Jede inhaltliche Änderung: Datum hier UND dort anheben –
      dann fragt die App jeden Kunden erneut nach der Annahme.
      Mit PRÜFEN markierte Stellen hängen an Angaben, die nur der Anbieter
      klären kann (Dashboards, Verträge).
    -->

    <p class="avv-stand">Fassung vom {{ fassung }}</p>

    <p>
      Dieser Vertrag gilt zwischen dem Kunden als Verantwortlichem (nachfolgend „Kunde“) und
      {{ legalInfo.anbieter }}, {{ legalInfo.street }}, {{ legalInfo.zip }} {{ legalInfo.city }}, als
      Auftragsverarbeiter (nachfolgend „Anbieter“). Er konkretisiert die datenschutzrechtlichen
      Pflichten aus dem Vertrag über die Nutzung der Plattform matchmaker.hr (Hauptvertrag, siehe
      <router-link to="/terms">AGB</router-link>) und wird elektronisch geschlossen (Art.&nbsp;28
      Abs.&nbsp;9 DSGVO): bei der Registrierung oder nachträglich in der Plattform durch die
      Bestätigung eines Administrators des Kunden. Der Anbieter speichert, wer wann welche Fassung
      bestätigt hat.
    </p>

    <h2>§ 1 Gegenstand und Dauer</h2>
    <p>
      Der Anbieter verarbeitet personenbezogene Daten im Auftrag des Kunden, um ihm die Plattform
      matchmaker.hr bereitzustellen. Gegenstand, Art und Zweck der Verarbeitung, die Art der Daten
      und die Kategorien betroffener Personen ergeben sich aus Anlage&nbsp;1.
    </p>
    <p>
      Der Vertrag läuft so lange wie der Hauptvertrag. Pflichten, die über dessen Ende hinaus
      bestehen – insbesondere zur Löschung und Rückgabe (§&nbsp;9) –, bleiben bis zu ihrer
      Erfüllung bestehen.
    </p>

    <h2>§ 2 Weisungen</h2>
    <p>
      Der Anbieter verarbeitet die Daten nur auf dokumentierte Weisung des Kunden, es sei denn, er
      ist nach dem Recht der Union oder eines Mitgliedstaats zur Verarbeitung verpflichtet; in
      diesem Fall teilt er dem Kunden die Anforderung vor der Verarbeitung mit, sofern das Recht dies
      nicht verbietet. Weisungen sind der Hauptvertrag, dieser Vertrag und die Einstellungen und
      Aktionen, die der Kunde in der Plattform vornimmt – etwa das Anbinden eines Systems, das
      Starten eines Agentenlaufs, das Freigeben einer Nachricht oder das Löschen eines Profils.
    </p>
    <p>
      Hält der Anbieter eine Weisung für rechtswidrig, weist er den Kunden unverzüglich darauf hin
      und darf die Ausführung aussetzen, bis der Kunde sie bestätigt oder ändert.
    </p>

    <h2>§ 3 Vertraulichkeit</h2>
    <p>
      Der Anbieter setzt nur Personen ein, die zur Vertraulichkeit verpflichtet sind oder einer
      gesetzlichen Verschwiegenheitspflicht unterliegen. Zugriff auf Kundendaten erhalten sie nur,
      soweit es für Betrieb, Support oder Fehlerbehebung erforderlich ist.
    </p>

    <h2>§ 4 Sicherheit der Verarbeitung</h2>
    <p>
      Der Anbieter trifft die technischen und organisatorischen Maßnahmen nach Art.&nbsp;32 DSGVO,
      die in Anlage&nbsp;2 beschrieben sind. Er darf sie weiterentwickeln, solange das
      Schutzniveau nicht sinkt. Wesentliche Änderungen dokumentiert er.
    </p>

    <h2>§ 5 Unterauftragsverarbeiter</h2>
    <p>
      Der Kunde erteilt die allgemeine Genehmigung, Unterauftragsverarbeiter einzusetzen. Die bei
      Vertragsschluss eingesetzten sind in Anlage&nbsp;3 aufgeführt und gelten als genehmigt. Der
      Anbieter verpflichtet jeden Unterauftragsverarbeiter vertraglich auf dieselben
      Datenschutzpflichten wie in diesem Vertrag.
    </p>
    <p>
      Über eine beabsichtigte Hinzuziehung oder Ersetzung informiert der Anbieter den Kunden
      mindestens vier Wochen vorher in Textform. Der Kunde kann innerhalb dieser Frist aus wichtigem
      datenschutzrechtlichem Grund widersprechen. Können sich die Parteien nicht einigen, kann der
      Kunde den Hauptvertrag zum Zeitpunkt des Wechsels kündigen.
    </p>

    <h2>§ 6 Vom Kunden selbst beauftragte Dienste</h2>
    <p>
      Einige Funktionen arbeiten über Konten, die der Kunde selbst bei einem Dritten unterhält und
      in der Plattform hinterlegt. Diese Dritten sind keine Unterauftragsverarbeiter des Anbieters;
      das Vertragsverhältnis, einschließlich einer etwa erforderlichen Auftragsverarbeitung und der
      Garantien für eine Übermittlung in ein Drittland, besteht unmittelbar zwischen dem Kunden und
      dem jeweiligen Dritten. Der Anbieter übermittelt Daten dorthin nur im Rahmen der vom Kunden
      gewählten Funktion. Das betrifft:
    </p>
    <ul>
      <li>
        den KI-Anbieter (Anthropic oder OpenAI), den die Plattform mit dem Schlüssel des Kunden
        aufruft (Bring Your Own Key) – ohne eigenen Schlüssel findet keine KI-Verarbeitung statt;
      </li>
      <li>die Bewerbersoftware des Kunden (zum Beispiel Recruit CRM oder Bullhorn);</li>
      <li>Microsoft 365 für E-Mail-Versand, Teams-Termine und Gesprächstranskripte;</li>
      <li>das Mailkonto des Kunden (SMTP oder Microsoft 365) für den Versand von Nachrichten;</li>
      <li>Telefonie über Twilio, sipgate oder WhatsApp Business sowie WhatsApp-Nachrichten über das
        Meta-Business-Konto des Kunden;</li>
      <li>LinkedIn und Xing über die vom Kunden verbundenen Konten.</li>
    </ul>
    <p>
      Öffentliche Quellen, die der Market Agent abfragt (Jobportale, Karriereseiten,
      Handelsregister), erhalten Suchbegriffe wie Berufsbezeichnung oder Region, aber keine
      personenbezogenen Daten aus dem Datenbestand des Kunden.
    </p>

    <h2>§ 7 Rechte der betroffenen Personen</h2>
    <p>
      Der Anbieter unterstützt den Kunden mit geeigneten technischen und organisatorischen
      Maßnahmen bei der Beantwortung von Anträgen betroffener Personen (Art.&nbsp;12 bis 22
      DSGVO). Die Plattform stellt dafür bereit: eine Datenauskunft je Kandidat als Datei, die
      vollständige Löschung eines Kandidaten, einer Vakanz oder eines Mandats samt verknüpfter
      Daten mit einem Löschnachweis ohne Namen sowie einen Bericht, der eine Bewertung
      nachvollziehbar macht. Wendet sich eine betroffene Person unmittelbar an den Anbieter, leitet
      er die Anfrage unverzüglich an den Kunden weiter und beantwortet sie nicht selbst.
    </p>

    <h2>§ 8 Weitere Unterstützungspflichten</h2>
    <p>
      Der Anbieter unterstützt den Kunden bei den Pflichten aus Art.&nbsp;32 bis 36 DSGVO,
      insbesondere bei einer Datenschutz-Folgenabschätzung und einer vorherigen Konsultation, mit
      den Informationen, die ihm vorliegen.
    </p>
    <p>
      Wird dem Anbieter eine Verletzung des Schutzes personenbezogener Daten bekannt, die
      Kundendaten betrifft, meldet er sie dem Kunden unverzüglich, möglichst innerhalb von
      24&nbsp;Stunden, in Textform. Die Meldung enthält, soweit bekannt, die Art der Verletzung, die
      Kategorien und ungefähre Zahl der betroffenen Personen und Datensätze, die wahrscheinlichen
      Folgen und die ergriffenen oder vorgeschlagenen Maßnahmen. Informationen, die noch fehlen,
      reicht er nach.
    </p>

    <h2>§ 9 Löschung und Rückgabe</h2>
    <p>
      Nach Ende des Hauptvertrags stellt der Anbieter die Kundendaten 30&nbsp;Tage lang zum Export
      bereit und löscht sie anschließend, soweit keine gesetzliche Pflicht zur Aufbewahrung
      besteht. Auf Wunsch bestätigt er die Löschung in Textform.
    </p>
    <p>
      Während der Laufzeit ist die angebundene Bewerbersoftware des Kunden für Löschfristen
      führend: Wird dort ein Kandidat gelöscht, löscht die Plattform das zugehörige Profil samt
      verknüpfter Daten beim nächsten Abgleich. Profile, die nicht aus der Bewerbersoftware stammen,
      löscht der Kunde in der Plattform selbst.
    </p>

    <h2>§ 10 Nachweise und Kontrollen</h2>
    <p>
      Der Anbieter stellt dem Kunden alle Informationen zur Verfügung, die zum Nachweis der
      Einhaltung dieses Vertrags erforderlich sind, und ermöglicht Überprüfungen durch den Kunden
      oder einen von ihm beauftragten, zur Verschwiegenheit verpflichteten Prüfer. Kontrollen vor
      Ort werden mit angemessener Frist angekündigt und während der üblichen Geschäftszeiten
      durchgeführt, ohne den Betrieb unverhältnismäßig zu stören. Der Nachweis kann auch durch
      aktuelle Berichte oder Zertifikate der Unterauftragsverarbeiter erbracht werden.
    </p>

    <h2>§ 11 Ort der Verarbeitung</h2>
    <p>
      Kundendaten werden in Rechenzentren innerhalb der Europäischen Union gespeichert. Einzelne
      Unterauftragsverarbeiter haben ihren Sitz in den USA; soweit dabei ein Zugriff aus einem
      Drittland möglich ist, stützt sich die Übermittlung auf den Angemessenheitsbeschluss zum
      EU-US Data Privacy Framework und, wo der Dienstleister dort nicht zertifiziert ist oder als
      zusätzliche Grundlage, auf die Standardvertragsklauseln der Europäischen Kommission
      (Anlage&nbsp;3).
    </p>

    <h2>§ 12 Schlussbestimmungen</h2>
    <p>
      Bei Widersprüchen zwischen diesem Vertrag und dem Hauptvertrag geht dieser Vertrag in
      Fragen des Datenschutzes vor. Die Haftung richtet sich nach Art.&nbsp;82 DSGVO und im Übrigen
      nach dem Hauptvertrag. Änderungen bedürfen der Textform; eine neue Fassung wird dem Kunden in
      der Plattform zur Bestätigung vorgelegt. Sollte eine Bestimmung unwirksam sein, bleibt der
      Vertrag im Übrigen wirksam.
    </p>

    <h2>Anlage 1 – Gegenstand der Verarbeitung</h2>

    <h3>Art und Zweck</h3>
    <p>
      Bereitstellung einer Plattform für Personalberatungen: Übernahme von Kandidatenprofilen aus
      der Bewerbersoftware oder aus Lebensläufen, Suche nach passenden offenen Stellen für diese
      Kandidaten, Bewertung der Passung mit Begründung, Recherche von Ansprechpartnern in
      Unternehmen, Entwurf von Anschreiben und Exposés zur Freigabe durch den Kunden, Versand nach
      Freigabe, Telefonie aus dem Profil ohne Aufzeichnung, Teams-Termine und deren Auswertung,
      Abgleich von Mandaten mit dem Kandidatenbestand, Protokollierung.
    </p>

    <h3>Kategorien betroffener Personen</h3>
    <ul>
      <li>Kandidatinnen und Kandidaten im Talentpool des Kunden</li>
      <li>Ansprechpartner in Unternehmen (Personalverantwortliche, Geschäftsführung)</li>
      <li>Ansprechpartner bei Mandanten des Kunden</li>
      <li>Beschäftigte des Kunden, die die Plattform nutzen</li>
    </ul>

    <h3>Arten personenbezogener Daten</h3>
    <ul>
      <li>
        Kandidaten: Name, Kontaktdaten (E-Mail, Telefon, LinkedIn, Xing), aktuelle Position,
        Standort, Berufserfahrung, Führungserfahrung, Ausbildung, Sprachen, Zertifizierungen,
        Branchen, Verfügbarkeit, Mobilität, Gehaltsrahmen, Lebensläufe und andere Dokumente,
        Gesprächsnotizen und -transkripte, Suchkriterien, Bewertungen und Begründungen,
        Kontaktverlauf
      </li>
      <li>
        Ansprechpartner: Name, Funktion, Unternehmen, geschäftliche E-Mail-Adresse und Telefonnummer,
        Zustimmung oder Widerspruch zur Kontaktaufnahme, Anruf- und Nachrichtenverlauf
      </li>
      <li>Beschäftigte des Kunden: Name, E-Mail-Adresse, Rolle, Anmelde- und Nutzungsprotokolle</li>
    </ul>
    <p>
      Angaben wie Geburtsdatum, Alter, Familienstand, Staatsangehörigkeit oder Gesundheitsdaten
      werden nicht in das Profil übernommen und vor der Bewertung geschwärzt. Ganz ausschließen
      lässt sich nicht, dass sie in hochgeladenen Dokumenten enthalten sind.
    </p>

    <h2>Anlage 2 – Technische und organisatorische Maßnahmen</h2>

    <h3>Vertraulichkeit</h3>
    <ul>
      <li>Hosting in Rechenzentren professioneller Anbieter mit Zutrittskontrolle (Anlage 3); der Anbieter betreibt keine eigenen Server.</li>
      <li>Anmeldung mit persönlichem Konto; Passwörter nur als bcrypt-Hash; Anmeldetoken mit begrenzter Laufzeit, die nach einer Passwortänderung ungültig werden.</li>
      <li>Begrenzung der Anmeldeversuche und der Anfragen zum Zurücksetzen des Passworts.</li>
      <li>Rollen Administrator und Mitarbeiter; Lizenzen, Einstellungen und Löschabgleich nur für Administratoren.</li>
      <!-- PRÜFEN: Der interne Trainingsexport (/api/vacancies/training-data/all) liest ohne ?company= über alle Kunden.
           Vor Veröffentlichung einschränken oder hier offenlegen (Listenpunkt 13). -->
      <li>Mandantentrennung: Jeder Kundendatensatz ist einem Kunden zugeordnet; Abfragen aus der Plattform sind auf diesen Kunden beschränkt.</li>
      <li>Zugangsdaten zu Drittsystemen (KI-Schlüssel, Bewerbersoftware, Mailkonto, LinkedIn, Xing, Microsoft) verschlüsselt (AES-256) gespeichert und nie in Antworten der Schnittstelle ausgegeben.</li>
      <li>Bei der Bewertung von Passung, beim Anschreiben und im Exposé werden Name, Kontaktdaten und Arbeitgeber der Kandidaten vorher entfernt; geschützte Merkmale und Namen Dritter in Transkripten werden geschwärzt. Ausnahmen: das Auslesen eines Lebenslaufs und Transkripte im PDF-Format.</li>
      <li>Zugriff auf Teams-Daten beschränkt auf die hinterlegten Berater; Empfehlung einer Zugriffsrichtlinie im Microsoft-Mandanten des Kunden.</li>
    </ul>

    <h3>Integrität</h3>
    <ul>
      <li>Übertragung ausschließlich verschlüsselt (TLS, HSTS); Sicherheits-Header auf allen Antworten.</li>
      <li>Kein Versand einer Nachricht ohne Freigabe durch einen Menschen; Versandsperre bei Widerspruch des Empfängers.</li>
      <li>Protokolle über Agentenläufe, Synchronisationen, Löschungen und Auskünfte; Löschnachweise ohne Namen.</li>
    </ul>

    <h3>Verfügbarkeit und Belastbarkeit</h3>
    <ul>
      <li>Datenbank als Replikatsatz über mehrere Knoten.</li>
      <!-- PRÜFEN: Sicherungen. Der Cluster aus der lokalen .env ist MongoDB Atlas M0 und hat keine Backups.
           Erst nach Wechsel auf einen Tarif mit Backups hier „Tägliche Sicherungen mit … Tagen Aufbewahrung“ ergänzen. -->
      <li>Wiederherstellung der Anwendung über versionierte Bereitstellung aus der Quellcodeverwaltung.</li>
    </ul>

    <h3>Verfahren zur regelmäßigen Überprüfung</h3>
    <ul>
      <li>Automatisierte Tests für Datenschutzfunktionen (Auskunft, Löschabgleich, Schwärzung, Zugriffsrechte, Geheimnisse in Antworten).</li>
      <li>Test auf ungleiche Bewertung nach geschützten Merkmalen mit festen Gegenproben.</li>
      <li>Überprüfung dieser Maßnahmen bei wesentlichen Änderungen der Plattform, mindestens jährlich.</li>
    </ul>

    <h2>Anlage 3 – Unterauftragsverarbeiter</h2>
    <!-- PRÜFEN: Für jeden Eintrag muss ein AVV (bzw. die DPA des Anbieters) abgeschlossen sein.
         Render: Region im Dashboard bestätigen (Antwortzeiten sprechen für Frankfurt, der DNS-Name nicht).
         Je US-Anbieter prüfen, ob er unter dem Data Privacy Framework zertifiziert ist (dataprivacyframework.gov).
         Brevo: nur aufführen, wenn BREVO_API_KEY in Render gesetzt ist; sonst den SMTP-Anbieter nennen. -->
    <div class="avv-tabelle">
      <table>
        <thead>
          <tr><th>Anbieter</th><th>Leistung</th><th>Ort der Daten</th><th>Drittlandbezug</th></tr>
        </thead>
        <tbody>
          <tr v-for="u in unterauftraege" :key="u.name">
            <td>{{ u.name }}</td><td>{{ u.leistung }}</td><td>{{ u.ort }}</td><td>{{ u.drittland }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </LegalPage>
</template>

<script>
import LegalPage from '@/components/legal/LegalPage.vue'
import { legalInfo } from '@/config/legalInfo'

export default {
  name: 'ViewAvv',
  components: { LegalPage },
  data() {
    return {
      legalInfo,
      // Muss zu avv.version in matchmaker-api/src/config/rechtstexte.js passen.
      fassung: '25.10.2026',
      unterauftraege: [
        {
          name: 'Render Services, Inc., San Francisco (USA)',
          leistung: 'Betrieb der Schnittstelle (Anwendungsserver)',
          ort: 'Frankfurt am Main (EU)',
          drittland: 'Sitz in den USA; Data Privacy Framework bzw. Standardvertragsklauseln'
        },
        {
          name: 'MongoDB, Inc., New York (USA), über Amazon Web Services',
          leistung: 'Datenbank (MongoDB Atlas)',
          ort: 'Frankfurt am Main (EU)',
          drittland: 'Sitz in den USA; Data Privacy Framework bzw. Standardvertragsklauseln'
        },
        {
          name: 'Cloudflare, Inc., San Francisco (USA)',
          leistung: 'Netzwerk und Schutz vor Angriffen vor dem Anwendungsserver (Durchleitung)',
          ort: 'Rechenzentrum nahe dem Nutzer, in Deutschland in der Regel in der EU',
          drittland: 'Sitz in den USA; Data Privacy Framework bzw. Standardvertragsklauseln'
        },
        {
          name: 'Netlify, Inc., San Francisco (USA)',
          leistung: 'Auslieferung von Website und Web-App (Zugriffsdaten)',
          ort: 'Weltweites Auslieferungsnetz',
          drittland: 'Sitz in den USA; Data Privacy Framework bzw. Standardvertragsklauseln'
        },
        {
          name: 'Sendinblue SAS (Brevo), Paris (Frankreich)',
          leistung: 'Versand von Systemmails (Einladungen, Passwort zurücksetzen)',
          ort: 'EU',
          drittland: 'keiner'
        }
      ]
    }
  }
}
</script>

<style scoped>
.avv-stand { font-size: .85rem; color: #64748b; }
.avv-tabelle { overflow-x: auto; margin: 0 0 14px; }
.avv-tabelle table { width: 100%; border-collapse: collapse; font-size: .88rem; color: #475569; }
.avv-tabelle th, .avv-tabelle td { text-align: left; vertical-align: top; padding: 9px 10px; border-bottom: 1px solid #e2e8f0; }
.avv-tabelle th { color: #172b4d; font-weight: 700; white-space: nowrap; }
</style>
