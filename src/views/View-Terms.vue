<template>
  <LegalPage title="Allgemeine Geschäftsbedingungen (AGB)">

    <h2>§ 1 Geltungsbereich</h2>
    <p>
      Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
      {{ legalInfo.company }}, {{ legalInfo.street }}, {{ legalInfo.zip }} {{ legalInfo.city }}
      (nachfolgend „Anbieter") und ihren Kunden über die Nutzung der Software-Plattform
      matchmaker.hr.
    </p>
    <p>
      Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB,
      insbesondere Personalberatungen, Recruiting-Dienstleister und
      Executive-Search-Firmen. Ein Vertragsschluss mit Verbrauchern ist ausgeschlossen.
    </p>

    <h2>§ 2 Vertragsgegenstand</h2>
    <p>
      Der Anbieter stellt dem Kunden eine cloudbasierte Software-Plattform (SaaS) zur
      Verfügung, die wiederkehrende Schritte im Personalvermittlungsprozess KI-gestützt
      automatisiert. Dazu gehören insbesondere:
    </p>
    <ul>
      <li>Profiling Agent – strukturierte Bedarfsanalyse und Erstellung von Qualifikationsprofilen</li>
      <li>Market Agent – kontinuierliche Identifikation relevanter Vakanzen</li>
      <li>Matching Agent – semantisches Scoring von Kandidatenprofilen mit Begründung</li>
      <li>Outreach Agent – Recherche von Ansprechpartnern und Erstellung von Anschreiben</li>
      <li>Hosting von Kandidatenprofilen und Vakanzen auf Servern innerhalb der EU</li>
    </ul>
    <p>
      Sämtliche durch die Plattform vorbereiteten Aktionen mit Außenwirkung – insbesondere
      der Versand von Anschreiben – erfolgen erst nach ausdrücklicher Freigabe durch den
      Kunden (Human-in-the-Loop-Prinzip).
    </p>

    <h2>§ 3 Vertragsschluss</h2>
    <p>
      Der Vertrag kommt durch die Registrierung des Kunden und die Bestätigung durch den
      Anbieter zustande, alternativ durch ein individuelles Angebot und dessen Annahme.
    </p>

    <h2>§ 4 Lizenzmodelle und Preise</h2>
    <p>
      Der Funktionsumfang richtet sich nach dem gewählten Lizenzmodell gemäß der jeweils
      aktuellen Preisübersicht auf der Website:
    </p>
    <ul>
      <li>
        <strong>Bring Your Own Key:</strong> Die Nutzung der KI-Funktionen erfolgt über den
        eigenen API-Schlüssel des Kunden. Die Abrechnung der KI-Nutzung erfolgt direkt
        zwischen dem Kunden und dem jeweiligen KI-Anbieter; der Anbieter erhebt hierauf
        keine Aufschläge und übernimmt keine Verantwortung für die Konditionen des
        Drittanbieters.
      </li>
      <li>
        <strong>Enterprise Lizenz:</strong> Monatliche Lizenz inklusive Mitarbeiter-Lizenzen,
        Hosting und vollständigem Multi-Agenten-System. Der Preis richtet sich nach der
        Größe des Talent-Pools.
      </li>
      <li>
        <strong>Zusätzliche Mitarbeiter-Lizenzen:</strong> Erweiterung der Enterprise Lizenz
        je zusätzlichem Nutzer.
      </li>
    </ul>
    <p>
      Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer. Die Abrechnung
      erfolgt monatlich im Voraus.
    </p>

    <h2>§ 5 Pflichten des Kunden</h2>
    <p>Der Kunde verpflichtet sich insbesondere:</p>
    <ul>
      <li>
        die Plattform nur im Rahmen der geltenden Gesetze zu nutzen, insbesondere des
        Datenschutzrechts (DSGVO) und des Wettbewerbsrechts (UWG) bei der Kontaktaufnahme
        mit Kandidaten und Unternehmen;
      </li>
      <li>
        für die auf der Plattform gespeicherten Kandidatendaten als datenschutzrechtlich
        Verantwortlicher die erforderlichen Rechtsgrundlagen sicherzustellen;
      </li>
      <li>Zugangsdaten geheim zu halten und nicht an Dritte weiterzugeben;</li>
      <li>
        durch die KI vorbereitete Inhalte vor Freigabe auf Richtigkeit und Rechtmäßigkeit
        zu prüfen.
      </li>
    </ul>

    <h2>§ 6 Verfügbarkeit</h2>
    <p>
      Der Anbieter gewährleistet eine Verfügbarkeit der Plattform von 99&nbsp;% im
      Jahresmittel. Hiervon ausgenommen sind angekündigte Wartungsfenster sowie Störungen,
      die außerhalb des Einflussbereichs des Anbieters liegen (z.&nbsp;B. Ausfälle von
      KI-Anbietern oder Netzinfrastruktur).
    </p>

    <h2>§ 7 Datenschutz und Auftragsverarbeitung</h2>
    <p>
      Soweit der Anbieter personenbezogene Daten im Auftrag des Kunden verarbeitet,
      schließen die Parteien einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Alle
      Daten werden ausschließlich auf Servern innerhalb der Europäischen Union verarbeitet.
      Einzelheiten regelt die <router-link to="/privacy">Datenschutzerklärung</router-link>.
    </p>

    <h2>§ 8 Haftung</h2>
    <p>
      Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei
      Verletzung von Leben, Körper und Gesundheit. Bei einfacher Fahrlässigkeit haftet der
      Anbieter nur für die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten),
      begrenzt auf den vertragstypischen, vorhersehbaren Schaden.
    </p>
    <p>
      Die durch die Plattform erstellten Analysen, Scorings und Textvorschläge sind
      Entscheidungsunterstützung; die fachliche Prüfung und die finale Entscheidung
      obliegen dem Kunden. Für Vermittlungserfolge wird keine Gewähr übernommen.
    </p>

    <h2>§ 9 Laufzeit und Kündigung</h2>
    <p>
      Der Vertrag läuft auf unbestimmte Zeit und kann von beiden Parteien monatlich zum
      Ende des jeweiligen Abrechnungszeitraums gekündigt werden. Eine Mindestlaufzeit
      besteht nicht. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt
      unberührt. Nach Vertragsende stellt der Anbieter die Kundendaten für einen Zeitraum
      von 30 Tagen zum Export bereit und löscht sie anschließend.
    </p>

    <h2>§ 10 Schlussbestimmungen</h2>
    <p>
      Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
      Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Anbieters.
      Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
      übrigen Bestimmungen unberührt.
    </p>

  </LegalPage>
</template>

<script>
import LegalPage from '@/components/legal/LegalPage.vue'
import { legalInfo } from '@/config/legalInfo'

export default {
  name: 'ViewTerms',
  components: { LegalPage },
  data() {
    return { legalInfo }
  }
}
</script>
