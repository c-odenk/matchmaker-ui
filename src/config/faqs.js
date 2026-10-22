// Fragen und Antworten der FAQ-Abschnitte, je Seite. Liegen hier statt in den
// Komponenten, weil der Router daraus das FAQPage-JSON-LD der jeweiligen Seite
// erzeugt – so können sichtbarer Text und strukturierte Daten nicht
// auseinanderlaufen. Antworten bleiben deshalb reiner Text ohne Markup.

export const pricingFaq = [
  {
    q: 'Was kostet die Nutzung der KI zusätzlich?',
    a: 'Nichts, was über uns läuft. Die Rechenkosten zahlen Sie direkt an Ihren KI-Anbieter über Ihren eigenen API-Schlüssel – ohne versteckte Aufschläge oder Margen, mit voller Transparenz über die eigene Nutzung.'
  },
  {
    q: 'Kostet jede Anbindung extra?',
    a: 'Nein. Alle angebundenen Systeme sind in der Enterprise Lizenz enthalten – Bewerbersoftware, Teams, Telefonie, Mailkonto, Jobportale, Handelsregister und Ihre Homepage. Es gibt keine Gebühr je Integration.'
  },
  {
    q: 'Kostet der WhatsApp-Kanal zusätzlich?',
    a: 'Die Anbindung nicht, die Nutzung schon – aber nicht bei uns. WhatsApp ist der einzige Kanal, für den Gebühren anfallen: Meta berechnet je Konversation und je Gesprächsminute, direkt an Sie. matchmaker rechnet daran nichts ab und schlägt nichts auf. E-Mail, LinkedIn und Xing verursachen keine solchen Kosten. Voraussetzung ist ein eigenes Meta-Business-Konto, das Sie einmalig einrichten.'
  },
  {
    q: 'Muss ich meine Bewerbersoftware ersetzen?',
    a: 'Nein. matchmaker setzt auf Ihre bestehende Bewerbersoftware auf – sie bleibt die rechtlich führende Datenquelle. Ein späterer Wechsel kostet nur eine neue Anbindung, nicht Ihre Arbeitsweise.'
  },
  {
    q: 'Wie viele Mitarbeiter kann ich anlegen?',
    a: 'In der Enterprise Lizenz sind 2 Mitarbeiter-Lizenzen enthalten. Jede weitere kostet 19,99 € pro Lizenz und Monat und enthält alle Leistungen der Enterprise Lizenz.'
  },
  {
    q: 'Gibt es eine Mindestlaufzeit?',
    a: 'Nein. Die Enterprise Lizenz und jede zusätzliche Mitarbeiter-Lizenz sind monatlich kündbar, ohne Mindestlaufzeit.'
  }
]

export const dataFaq = [
  {
    q: 'Wo werden die Daten gespeichert?',
    a: 'Dauerhaft speichert matchmaker nur in einer eigenen Datenbank auf Servern in der EU. Die Personalakte mit Originaldokumenten und Löschfristen bleibt in Ihrer Bewerbersoftware. Der KI-Dienst verarbeitet Daten nur für die Dauer des jeweiligen Aufrufs.'
  },
  {
    q: 'Sieht die KI die Namen der Kandidaten?',
    a: 'Für Matching, Anschreiben und Exposé nicht: Name, Kontaktdaten und Arbeitgeber werden vorher entfernt, ebenso Angaben wie Geburtsdatum, Familienstand oder Staatsangehörigkeit. Einzige Ausnahme ist das Auslesen eines hochgeladenen Lebenslaufs – dafür sieht die KI das Dokument einmal vollständig. Das Originaldokument speichert matchmaker nicht.'
  },
  {
    q: 'Werden die Daten zum Training von KI-Modellen genutzt?',
    a: 'Die KI läuft über Ihren eigenen API-Schlüssel bei Anthropic oder OpenAI. Nach deren API-Bedingungen werden über die API übermittelte Inhalte nicht zum Training der Modelle verwendet. Maßgeblich ist Ihr Vertrag mit dem Anbieter.'
  },
  {
    q: 'Was passiert, wenn ein Kandidat in der Bewerbersoftware gelöscht wird?',
    a: 'Die Bewerbersoftware ist führend: Wird ein Kandidat dort gelöscht, löscht matchmaker das Profil beim nächsten Abgleich – samt Bewertungen, Nachrichten, Gesprächsnotizen und Protokollen. Zurück bleibt nur ein Löschnachweis ohne Namen und Profildaten.'
  },
  {
    q: 'Wie beantworte ich eine Auskunftsanfrage eines Kandidaten?',
    a: 'Zu jedem Kandidatenprofil erzeugt matchmaker auf Knopfdruck eine Auskunft über alle dort gespeicherten Daten. Ein Profil lässt sich außerdem jederzeit vollständig löschen. Zu jeder Bewertung gibt es zusätzlich einen Bericht, der die Urteile je Kriterium mit ihren Belegen zeigt.'
  },
  {
    q: 'Werden Telefonate aufgezeichnet?',
    a: 'Nein. Anrufe über matchmaker laufen ohne Mitschnitt, das ist technisch nicht vorgesehen. Transkripte entstehen nur in Microsoft-Teams-Terminen, wenn die Transkription dort angekündigt und gestartet wird.'
  },
  {
    q: 'Gilt der EU AI Act für matchmaker?',
    a: 'KI im Recruiting zählt nach der KI-Verordnung grundsätzlich zum Hochrisiko-Bereich (Anhang III Nr. 4). Die Pflichten für solche Systeme gelten nach aktuellem Stand ab dem 2. Dezember 2027. Wesentliche Anforderungen – menschliche Aufsicht, Protokollierung, nachvollziehbare Begründungen und die Prüfung auf Verzerrungen – sind in matchmaker bereits angelegt. Eine Konformitätsbewertung ersetzt das nicht.'
  }
]

// Seiten mit FAQ-Abschnitt → Einträge für das FAQPage-Schema.
export const faqsByPath = {
  '/preise': pricingFaq,
  '/daten': dataFaq
}
