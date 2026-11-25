# Startseite: der rote Faden (live seit 26.11.2026)

Entstanden als Entwurf 3 im Branch `entwurf/roter-faden` unter `/entwurf-v3`,
seit 26.11.2026 die Startseite unter `/` (`src/views/View-Landing-V3.vue`).
`/entwurf-v3` leitet per 301 auf `/` (Router und `netlify.toml`).

Die frühere Startseite (`landing-draft/LandingPageDraft.vue`,
`views/View-Landing-Draft.vue` und die nur dort genutzten Sektionen in
`landing-draft/home/`) ist nicht mehr eingebunden. Weiter genutzt werden aus
`landing-draft/home/`: `HomeHeroSection`, `TestimonialsSectionDraft`,
`HomeCtaSection`.

## Die Dramaturgie

Ein Gedanke trägt die Seite: **sieben Handgriffe je Kandidat, sechs davon
Vorarbeit.** Die vier Phasen der Vorher-nachher-Karten sind dieselben vier Stationen wie im
Durchlauf; `handgriffe.js` liefert dort die Zeile „Statt von Hand". Die ersten beiden Kapitel sind bewusst keine
Zweispalter, damit die Seite nicht durchgehend im Zickzack läuft.

| # | Sektion | Rolle | Datei |
|---|---|---|---|
| – | Hero | Haken (unverändert, Live-Komponente) | `landing-draft/home/HomeHeroSection.vue` |
| 1 | Ausgangslage | Problem, zentriert: drei Karten mit kleiner Szene (liegender Bestand, Zeitstrahl, Fensterstapel) | `V3ProblemSection.vue` |
| 2 | Vorher · Nachher | Vier Phasenkarten (Profil, Stellen, Ansprache, Entscheidung): oben „heute“ durchgestrichen, unten „mit matchmaker“; die vierte in Navy | `V3ShiftSection.vue` |
| 3 | Der Durchlauf | Beleg: vier Stationen mit Mockups, je mit „Statt von Hand" | `V3RunSection.vue` |
| – | Unterm Strich | 4 · 6 · 1 · 0 – nur Zahlen, die das Produkt selbst belegt | `V3NumbersSection.vue` |
| 4 | Kontrolle | Einwand „Und wer passt auf?" (Navy-Band; Reihenfolge: Bewerbersoftware führend, ohne Klarnamen, Freigabe, nachvollziehbar) | `V3ControlSection.vue` |
| – | Kundenstimmen + Abschluss | unverändert, Live-Komponenten | `TestimonialsSectionDraft.vue`, `HomeCtaSection.vue` |

## Responsive (geprüft 26.11.2026)

Geprüft mit Puppeteer bei 320, 360, 375, 390, 414, 768, 820, 1024, 1180, 1280,
1366, 1440, 1680 und 1920 px: kein waagerechtes Scrollen, kein ungewollt
abgeschnittener Text. Kartenreihen (Vorher · Nachher, Datenschutz) nutzen
`grid-rows-subgrid`, damit Pfeile, Zwischenzeilen und Fußzeilen in einer Reihe
immer auf gleicher Höhe stehen. Ausgangslage-Karten liegen zwischen 561 und
880 px quer (Szene links, Text rechts).

## Roter Faden über die Unterseiten (nächster Schritt)

Jede Unterseite beantwortet **eine** Frage und folgt derselben Dramaturgie
wie die Startseite:

1. Hero mit der Frage als Versprechen
2. Heute (Problem, roter Akzent)
3. Mit matchmaker (Lösung, Mockups)
4. Grenzen und Kontrolle
5. **Weiter zur nächsten Frage** statt eines allgemeinen Abschlusses:
   Integration → Multi-Agentensystem → Automatisierungen → Daten → Preise

## Offen

- Kundenstimmen sind weiterhin die der Live-Seite (laut README in
  `landing-draft/` erfunden) – vor einem Livegang durch freigegebene Zitate ersetzen.
- „Statt fünf Programmen" übernimmt die Formulierung der Seite /automatisierungen.

## Verworfen (25.11.2026)

- Zwei-Bahnen-Diagramm in der Wende (passte nicht zum Seitenstil) – ersetzt durch die gespiegelte Karte.
- Häkchenliste mit Folgen in der Ausgangslage (linke Spalte zu voll).
- Plattform-Sektion „Vier Fragen" und Preis-Panel auf der Startseite.
- Gegenüberstellung mit sieben Zeilen und Haarlinien („sieht überhaupt nicht gut aus").
- Vergleichstabelle mit Kreisen, ✕/✓-Plaketten, Blau-Band und Navy-Balken („zu klobig").
- Überschrift „Gute Kandidaten im Bestand. Keine Zeit, für jeden zu suchen." („zu platt") – jetzt „Der Bestand ist da. Die Zeit, ihn zu vermitteln, nicht."
- Ausgangslage und Wende als Zickzack-Zweispalter mit Handgriffe-Karte (zu viel Zickzack am Stück).
- Sieben Zeilen mit je eigener „von Hand"-Marke in der Karte (zu voll) – jetzt ein Block „Vorarbeit" mit einer Marke, Schritt 7 abgesetzt.
- Senkrechte, sich füllende Linie zwischen den Spalten des Durchlaufs.
