// Stammdaten aller öffentlichen Seiten – die eine Quelle für Router (Title,
// Description, Open Graph, JSON-LD), Prerendering und Sitemap.
//
// Bewusst CommonJS: vue.config.js liest die Datei zur Build-Zeit mit require(),
// der Router importiert sie im Browser.
//
// Längen: title höchstens ~60 Zeichen, description 140–155 Zeichen – länger
// schneidet Google in den Suchergebnissen ab.
// lastmod: von Hand nachziehen, wenn sich der Inhalt einer Seite spürbar
// ändert. Ein Datum, das bei jedem Build springt, ignoriert Google.

const SITE_URL = 'https://matchmaker-hr.de'
const SITE_NAME = 'matchmaker.hr'

const pages = [
  {
    path: '/',
    name: 'Startseite',
    title: 'KI-Recruiting-Software für Personalberater – matchmaker.hr',
    description: 'matchmaker setzt auf Bewerbersoftware, Postfach und Telefonie auf und bereitet Matching, Recherche und Anschreiben vor. Sie prüfen und geben frei.',
    ogImage: 'start',
    ogHeadline: 'Recruiting-Automatisierung, die Ihrem Urteil vertraut.',
    lastmod: '2026-10-21',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: '/integration',
    name: 'Integration',
    title: 'Bewerbersoftware anbinden statt ersetzen – matchmaker.hr',
    description: 'matchmaker setzt auf Ihre Bewerbersoftware auf und bindet Postfach, Microsoft Teams und Telefonie über Twilio, sipgate oder WhatsApp Business an.',
    ogImage: 'integration',
    ogHeadline: 'Alle Systeme Ihrer Beratung – an einer Oberfläche.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/daten',
    name: 'Daten',
    title: 'Datenschutz bei KI im Recruiting – matchmaker.hr',
    description: 'Welche Daten matchmaker verarbeitet, woher sie stammen, was vor dem KI-Aufruf entfernt wird und wie die DSGVO-Anforderungen technisch gelöst sind.',
    ogImage: 'daten',
    ogHeadline: 'Wo Ihre Daten liegen – und wo nicht.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/agenten',
    name: 'Multi-Agentensystem',
    title: 'Multi-Agentensystem: Matching und Ansprache – matchmaker.hr',
    description: 'Vier KI-Agenten erstellen das Profil, finden passende Vakanzen, begründen jeden Treffer und entwerfen Anschreiben für E-Mail, LinkedIn, Xing und WhatsApp.',
    ogImage: 'agenten',
    ogHeadline: 'Vier Agenten bereiten vor. Sie entscheiden.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/automatisierungen',
    name: 'Automatisierungen',
    title: 'Recruiting-Prozesse automatisieren – matchmaker.hr',
    description: 'Jede Nacht sucht matchmaker Vakanzen, recherchiert Ansprechpartner und entwirft Anschreiben. Anrufe, Teams-Termine und Auswertung starten per Klick.',
    ogImage: 'automatisierungen',
    ogHeadline: 'Die Arbeit ist vorbereitet. Sie greifen ein, wo es zählt.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/ki-assistent',
    name: 'KI-Assistent',
    title: 'KI-Assistent für den Kandidatenpool (Beta) – matchmaker.hr',
    description: 'Der KI-Assistent zeigt Ihren Kandidatenpool als Karte und beantwortet Fragen an den Bestand in eigenen Worten. Künftig nimmt er auch Aufträge im Satz an.',
    ogImage: 'ki-assistent',
    ogHeadline: 'Was nicht im Ablauf steht, erledigen Sie hier.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: '/preise',
    name: 'Preise',
    title: 'Preise: 98 € im Monat, alles enthalten – matchmaker.hr',
    description: 'Ein Preis ohne Staffelung: 98 € im Monat mit zwei Mitarbeiter-Lizenzen, allen Anbindungen und Agenten. KI-Kosten ohne Aufschlag. Monatlich kündbar.',
    ogImage: 'preise',
    ogHeadline: 'Effizientes Talentpool-Management – zum fairen Preis.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/kontakt',
    name: 'Demo buchen',
    title: 'Demo buchen: 15 Minuten per Video-Call – matchmaker.hr',
    description: 'Persönliche Einführung in matchmaker: 15 Minuten per Video-Call mit Bestandsaufnahme, Live-Durchlauf, Anbindung an Ihre Systeme und offenem Fit-Gespräch.',
    ogImage: 'kontakt',
    ogHeadline: 'Ihre persönliche matchmaker-Einführung.',
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: '/ratgeber',
    name: 'Ratgeber',
    title: 'Ratgeber für Personalvermittler – matchmaker.hr',
    description: 'Praxiswissen für Personalberatungen und Personalvermittlungen: Akquise, Recht, KI im Recruiting, Provision und Gründung – sachlich und mit Quellen.',
    ogImage: 'ratgeber',
    ogHeadline: 'Praxiswissen für Personalberater und Personalvermittler.',
    lastmod: '2026-10-21',
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    path: '/ratgeber/eu-ai-act-recruiting',
    section: 'ratgeber',
    name: 'EU AI Act im Recruiting',
    title: 'EU AI Act im Recruiting: Pflichten, Fristen – matchmaker.hr',
    description: 'Was die KI-Verordnung für Personalberatungen bedeutet: Hochrisiko-Einstufung, Pflichten für Anbieter und Betreiber, Fristen und was jetzt zu tun ist.',
    teaser: 'Warum KI im Recruiting als Hochrisiko gilt, welche Pflichten Anbieter und Personalberatungen treffen und welche Fristen nach aktuellem Stand gelten.',
    ogImage: 'eu-ai-act-recruiting',
    ogHeadline: 'EU AI Act im Recruiting: Was Personalberatungen jetzt wissen müssen.',
    published: '2026-10-21',
    minutes: 5,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: '/ratgeber/kaltakquise-personalvermittlung',
    section: 'ratgeber',
    name: 'Kaltakquise in der Personalvermittlung',
    title: 'Kaltakquise in der Personalvermittlung – matchmaker.hr',
    description: 'Was bei der Neukundenakquise als Personalvermittler erlaubt ist: E-Mail, Telefon, LinkedIn und Xing nach UWG, dazu der Umgang mit Kandidatenprofilen.',
    teaser: 'E-Mail, Telefon, LinkedIn: Was das Wettbewerbsrecht bei der Ansprache neuer Kunden erlaubt – und wie Sie Kandidaten zulässig vorstellen.',
    ogImage: 'kaltakquise-personalvermittlung',
    ogHeadline: 'Kaltakquise in der Personalvermittlung: Was erlaubt ist.',
    published: '2026-10-21',
    minutes: 5,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: '/ratgeber/ki-in-der-personalberatung',
    section: 'ratgeber',
    name: 'KI in der Personalberatung',
    title: 'KI in der Personalberatung: Praxisleitfaden – matchmaker.hr',
    description: 'Welche Schritte in der Personalberatung sich heute sinnvoll mit KI erledigen lassen, wo die Grenzen liegen und woran Sie ein brauchbares Werkzeug erkennen.',
    teaser: 'Welche Arbeit KI heute zuverlässig vorbereitet, was beim Berater bleiben muss und nach welchen Kriterien Sie Werkzeuge auswählen.',
    ogImage: 'ki-in-der-personalberatung',
    ogHeadline: 'KI in der Personalberatung: Was sie vorbereitet, was Sie entscheiden.',
    published: '2026-10-21',
    minutes: 4,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    path: '/ratgeber/kandidatenprofil-vorlage',
    section: 'ratgeber',
    name: 'Kandidatenprofil: Vorlage',
    title: 'Kandidatenprofil-Vorlage für Personalberater – matchmaker.hr',
    description: 'Vorlage für ein anonymisiertes Kandidatenprofil: welche Angaben hineingehören, was vor dem Versand entfernt wird und worauf Sie rechtlich achten.',
    teaser: 'Aufbau eines anonymisierten Kurzprofils für die Vorstellung beim Kunden – mit Vorlage zum Übernehmen.',
    ogImage: 'kandidatenprofil-vorlage',
    ogHeadline: 'Kandidatenprofil: Vorlage für die Vorstellung beim Kunden.',
    published: '2026-10-21',
    minutes: 3,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    path: '/ratgeber/mpc-methode',
    section: 'ratgeber',
    name: 'MPC-Methode',
    title: 'MPC-Methode: Most Placeable Candidate – matchmaker.hr',
    description: 'Die MPC-Methode erklärt: wie Personalvermittler mit einem besonders gefragten Kandidaten neue Kunden gewinnen – und wie das in Deutschland zulässig gelingt.',
    teaser: 'Mit einem besonders gefragten Kandidaten neue Kunden gewinnen: Ablauf, Auswahl des Kandidaten und die rechtlichen Grenzen in Deutschland.',
    ogImage: 'mpc-methode',
    ogHeadline: 'MPC-Methode: Mit dem richtigen Kandidaten neue Kunden gewinnen.',
    published: '2026-10-21',
    minutes: 3,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    path: '/ratgeber/provision-personalvermittlung',
    section: 'ratgeber',
    name: 'Provision in der Personalvermittlung',
    title: 'Provision Personalvermittlung: übliche Höhe – matchmaker.hr',
    description: 'Wie hoch die Provision in der Personalvermittlung üblicherweise ist, welche Modelle es gibt und wie Probezeit-Regeln und Vermittlungsgutschein funktionieren.',
    teaser: 'Übliche Höhe, Erfolgs- und Retainer-Modelle, Regelungen für die Probezeit und die Sonderregeln beim Vermittlungsgutschein.',
    ogImage: 'provision-personalvermittlung',
    ogHeadline: 'Provision in der Personalvermittlung: Höhe, Modelle, Probezeit.',
    published: '2026-10-21',
    minutes: 3,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    path: '/ratgeber/personalvermittlung-gruenden',
    section: 'ratgeber',
    name: 'Personalvermittlung gründen',
    title: 'Personalvermittlung gründen: Leitfaden – matchmaker.hr',
    description: 'Personalvermittler werden: Gewerbe, Abgrenzung zur Arbeitnehmerüberlassung, AZAV, Datenschutz, Verträge, Werkzeuge und die ersten Kunden.',
    teaser: 'Von der Gewerbeanmeldung über Datenschutz und Verträge bis zu den ersten Kunden – was Sie für den Start brauchen.',
    ogImage: 'personalvermittlung-gruenden',
    ogHeadline: 'Personalvermittlung gründen: Was Sie für den Start brauchen.',
    published: '2026-10-21',
    minutes: 3,
    lastmod: '2026-10-21',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    path: '/glossar/human-in-the-loop',
    section: 'glossar',
    name: 'Human in the Loop',
    title: 'Human in the Loop: Bedeutung im Recruiting – matchmaker.hr',
    description: 'Human in the Loop bedeutet, dass ein Mensch die Ergebnisse einer KI prüft und freigibt. Was das im Recruiting heißt und warum es rechtlich zählt.',
    teaser: 'Ein Mensch prüft und gibt frei, bevor das Ergebnis einer KI wirkt. Was das im Recruiting konkret heißt.',
    ogImage: 'human-in-the-loop',
    ogHeadline: 'Human in the Loop: Die KI bereitet vor, der Mensch entscheidet.',
    published: '2026-10-21',
    minutes: 2,
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.5'
  },
  {
    path: '/glossar/talentpool',
    section: 'glossar',
    name: 'Talentpool',
    title: 'Talentpool: Bedeutung und Pflege – matchmaker.hr',
    description: 'Ein Talentpool ist der Bestand an Kandidaten, mit denen eine Personalberatung in Kontakt steht. Bedeutung, Abgrenzung zum Kandidatenpool und Pflege.',
    teaser: 'Was ein Talentpool ist, wie er sich vom Kandidatenpool unterscheidet und wie er lebendig bleibt.',
    ogImage: 'talentpool',
    ogHeadline: 'Talentpool: Bedeutung, Abgrenzung und Pflege.',
    published: '2026-10-21',
    minutes: 2,
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.5'
  },
  {
    path: '/glossar/active-sourcing',
    section: 'glossar',
    name: 'Active Sourcing',
    title: 'Active Sourcing: Definition und Abgrenzung – matchmaker.hr',
    description: 'Active Sourcing heißt, passende Kandidaten gezielt zu suchen und direkt anzusprechen. Definition, Kanäle, rechtliche Grenzen und Abgrenzung zur Akquise.',
    teaser: 'Kandidaten gezielt suchen und direkt ansprechen: Definition, Kanäle, Grenzen – und der Unterschied zur Akquise.',
    ogImage: 'active-sourcing',
    ogHeadline: 'Active Sourcing: Definition und Abgrenzung zur Akquise.',
    published: '2026-10-21',
    minutes: 2,
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.5'
  },
  {
    path: '/privacy',
    name: 'Datenschutz',
    title: 'Datenschutzerklärung – matchmaker.hr',
    description: 'Datenschutzerklärung von matchmaker.hr: welche Daten beim Besuch der Website, bei Demo-Anfragen und in der Plattform verarbeitet werden und wo sie liegen.',
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    path: '/imprint',
    name: 'Impressum',
    title: 'Impressum – matchmaker.hr',
    description: 'Impressum und Anbieterkennzeichnung von matchmaker.hr nach § 5 DDG.',
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    path: '/terms',
    name: 'AGB',
    title: 'Allgemeine Geschäftsbedingungen – matchmaker.hr',
    description: 'Allgemeine Geschäftsbedingungen von matchmaker.hr: Vertragsgegenstand, Freigabe durch den Kunden, Lizenzmodell, Verfügbarkeit, Haftung und Kündigung.',
    lastmod: '2026-10-21',
    changefreq: 'yearly',
    priority: '0.3'
  }
]

// Nicht in der Sitemap, aber vorgerendert: Netlify liefert /404.html mit
// Status 404 für jede Adresse aus, zu der es keine Datei gibt.
const notFound = {
  path: '/404',
  name: 'Seite nicht gefunden',
  title: 'Seite nicht gefunden – matchmaker.hr',
  description: 'Diese Seite gibt es nicht (mehr). Von hier geht es zur Startseite, zu den Plattformseiten und zur Demo.',
  noindex: true
}

const byPath = {}
for (const p of pages) byPath[p.path] = p

module.exports = { SITE_URL, SITE_NAME, pages, notFound, byPath }
