// Telefonanbieter und Versandkanäle.
// Beides taucht an mehreren Stellen der Seite auf (Startseite, Integration,
// Automatisierungen, Agenten) – deshalb hier zentral, damit die Listen nicht
// auseinanderlaufen.

// Über welchen Anbieter die Verbindung läuft, entscheidet der Kunde.
// Die Reihenfolge folgt der Reihenfolge im Produkt.
export const PHONE_PROVIDERS = [
  { name: 'twilio', label: 'Twilio' },
  { name: 'sipgate', label: 'sipgate' },
  { name: 'whatsapp', label: 'WhatsApp Business' }
]

// Versandkanäle des Outreach Agent. „pdf" markiert die beiden Kanäle, über die
// das anonymisierte Kandidatenprofil als PDF mitgeschickt werden kann.
export const OUTREACH_CHANNELS = [
  { name: 'mail', label: 'E-Mail' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'xing', label: 'Xing' },
  { name: 'whatsapp', label: 'WhatsApp' }
]
