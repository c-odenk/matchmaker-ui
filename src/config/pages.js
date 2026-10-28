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
    description: 'Praxiswissen für Personalberatungen: wie KI im Recruiting sinnvoll eingesetzt wird und was der EU AI Act dafür verlangt – sachlich und mit Quellen.',
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
    path: '/privacy',
    name: 'Datenschutz',
    title: 'Datenschutzerklärung – matchmaker.hr',
    description: 'Datenschutzerklärung von matchmaker.hr: welche Daten beim Besuch der Website, bei Demo-Anfragen und in der Plattform verarbeitet werden und wo sie liegen.',
    lastmod: '2026-10-28',
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
    lastmod: '2026-10-28',
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
