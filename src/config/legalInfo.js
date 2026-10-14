// Zentrale Stammdaten für Impressum, AGB und Datenschutzerklärung.
// Hier ändern reicht — die Rechtsseiten ziehen ihre personenbezogenen/
// firmenbezogenen Angaben ausschließlich aus diesem Objekt.
//
// Rechtsträger: Solange keine Gesellschaft eingetragen ist, ist der
// Anbieter eine natürliche Person (Einzelunternehmen). Dann muss deren
// voller Name als Anbieter erscheinen – „matchmaker.hr“ ist nur die
// Geschäftsbezeichnung und kein Rechtsträger. „Vertreten durch“ gibt es
// beim Einzelunternehmen nicht.
//
// Wechsel auf eine Gesellschaft (UG/GmbH): rechtsform auf 'gesellschaft'
// setzen, firma mit Rechtsformzusatz eintragen (z. B. „matchmaker.hr UG
// (haftungsbeschränkt)“), vertreter mit der Geschäftsführung füllen und
// Registergericht/-nummer ergänzen.
const rechtsform = 'einzelunternehmen' // 'einzelunternehmen' | 'gesellschaft'

const inhaber = 'Christopher Odenkirchen'
const geschaeftsbezeichnung = 'matchmaker.hr'
const firma = '' // nur bei rechtsform 'gesellschaft', inkl. Rechtsformzusatz

export const legalInfo = {
  rechtsform,
  inhaber,
  geschaeftsbezeichnung,
  firma,
  // Der Rechtsträger, so wie er in AGB und Datenschutzerklärung als
  // Vertragspartner bzw. Verantwortlicher genannt wird.
  anbieter: rechtsform === 'gesellschaft' ? firma : `${inhaber} (${geschaeftsbezeichnung})`,
  // Nur bei einer Gesellschaft: wer sie vertritt (Geschäftsführung).
  vertreter: rechtsform === 'gesellschaft' ? inhaber : '',
  street: 'Ravensberger Str. 21',
  zip: '53474',
  city: 'Bad Neuenahr-Ahrweiler',
  country: 'Deutschland',
  // Verantwortlich nach § 18 Abs. 2 MStV – immer eine natürliche Person
  inhaltlichVerantwortlich: inhaber,
  email: 'christopher.odenkirchen@gmail.com',
  // NOCH ZU FÜLLEN: Solange diese Felder leer sind, blendet das Impressum die
  // jeweiligen Abschnitte aus. Ein Platzhalter wie 'n.a.' oder eine erfundene
  // USt-ID darf dort nicht erscheinen – beides ist abmahnfähig.
  registerCourt: '',
  registerNumber: '',
  vatId: ''
}
