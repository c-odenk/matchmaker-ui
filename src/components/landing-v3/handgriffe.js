// Der rote Faden der Startseite: dieselben sieben Handgriffe tauchen in drei
// Sektionen auf – als Problem (von Hand), als Lösung (matchmaker übernimmt
// eins bis sechs) und im Detail (welcher Agent welchen Handgriff ersetzt).
// Zentral gepflegt, damit die drei Stellen nie auseinanderlaufen.
//
// Schritte 1–6 entsprechen den sechs Schritten des nächtlichen Durchlaufs
// (siehe /automatisierungen), Schritt 7 ist die Freigabe durch den Berater.

export const HANDGRIFFE = [
  {
    titel: 'Profil aus der Bewerbersoftware holen',
    kurz: 'Profil zusammensuchen',
    wo: 'Bewerbersoftware, Lebenslauf, Notizen',
    auto: 'Kandidaten übernehmen',
    ergebnis: 'Strukturiertes Profil mit Suchkriterien'
  },
  {
    titel: 'Jobportale und Karriereseiten durchsuchen',
    kurz: 'Portale durchsuchen',
    wo: 'Portal für Portal, Firma für Firma',
    auto: 'Markt durchsuchen',
    ergebnis: 'Jobportale und Karriereseiten, laufend'
  },
  {
    titel: 'Unpassende Anzeigen aussortieren',
    kurz: 'Anzeigen sortieren',
    wo: 'Anzeige für Anzeige lesen',
    auto: 'Unpassendes aussortieren',
    ergebnis: 'Unpassendes und Abgelehntes fällt heraus'
  },
  {
    titel: 'Passung einschätzen und festhalten',
    kurz: 'Passung schätzen',
    wo: 'Anforderungen gegen das Profil legen',
    auto: 'Passung bewerten',
    ergebnis: 'Score mit Begründung je Kriterium'
  },
  {
    titel: 'Firma und Ansprechpartner recherchieren',
    kurz: 'Ansprechpartner finden',
    wo: 'Impressum, Handelsregister, Netzwerk',
    auto: 'Ansprechpartner recherchieren',
    ergebnis: 'Der Entscheider statt „info@“'
  },
  {
    titel: 'Anschreiben formulieren',
    kurz: 'Anschreiben tippen',
    wo: 'Postfach, leeres Textfeld',
    auto: 'Anschreiben entwerfen',
    ergebnis: 'Entwurf in der Länge des Kanals'
  },
  {
    titel: 'Prüfen und entscheiden',
    kurz: 'Prüfen und entscheiden',
    wo: 'Wer wird wem vorgestellt?',
    urteil: true
  }
]
