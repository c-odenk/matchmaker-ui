// Fragen und Antworten der Preis-FAQ. Liegen hier statt in der Komponente,
// weil der Router daraus das FAQPage-JSON-LD für /preise erzeugt – so können
// sichtbarer Text und strukturierte Daten nicht auseinanderlaufen.
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
    a: 'In der Enterprise Lizenz sind 3 Mitarbeiter-Lizenzen enthalten. Jede weitere kostet 19,99 € pro Lizenz und Monat und enthält alle Leistungen der Enterprise Lizenz.'
  },
  {
    q: 'Gibt es eine Mindestlaufzeit?',
    a: 'Nein. Die Enterprise Lizenz und jede zusätzliche Mitarbeiter-Lizenz sind monatlich kündbar, ohne Mindestlaufzeit.'
  }
]
