# Entwurfsfassung der Landingpage (Stand 25.08.2026)

Neuausrichtung von matchmaker.hr als **Automatisierungsschicht über den
bestehenden Systemen** einer Personalberatung. Alles hier ist additiv –
die Live-Seite unter `/` ist unverändert.

## Routen

| Route | View | Seiten-Komponente |
|---|---|---|
| `/entwurf` | `View-Landing-Draft.vue` | `LandingPageDraft.vue` |
| `/entwurf/integration` | `View-Integration-Draft.vue` | `IntegrationPageDraft.vue` |
| `/entwurf/daten` | `View-Data-Draft.vue` | `DataPageDraft.vue` |
| `/entwurf/agenten` | `View-Agents-Draft.vue` | `AgentsPageDraft.vue` |
| `/entwurf/automatisierungen` | `View-Automation-Draft.vue` | `AutomationPageDraft.vue` |
| `/entwurf/preise` | `View-Pricing-Draft.vue` | `PricingPageDraft.vue` |

Alle Entwurfsrouten tragen `meta.noindex: true`; der Router setzt dafür ein
`robots`-Meta-Tag (`src/router/index.js`). Sie stehen **nicht** in der
Prerender-Liste in `vue.config.js`.

## Ordner

- `home/` – Sektionen der neuen Startseite
- `integration/`, `data/`, `agents/`, `automation/`, `pricing/` – je Unterseite
- `sections/` – `TheHeaderDraft.vue` (aktiv) **plus neun Altlasten**, siehe unten

## Verbindliche Regeln

1. **Einheitliche Breite** – jede Sektion spannt ihren Inhalt über die volle
   `.wrap`-Breite. Einzige Ausnahme: Zweispalter, dort sitzt `.two` direkt auf
   dem `.wrap`-Div (`<div class="wrap two grid [grid-template-columns:1fr_1.1fr]
   gap-[52px] items-center max-[880px]:grid-cols-1">`). Lesemaße *innerhalb*
   eines Blocks (SectionHeading 660px, Fließtext 620px) sind davon unberührt.
2. **Schriftskala** – nur Größen verwenden, die die Original-Landingpage kennt
   (`.64 .72 .76 .78 .8 .82 .85 .86 .88 .9 .92 .95 .96 .98 1 1.02 1.05 1.08
   1.18 1.45 1.8 1.9 rem` sowie `text-hero/section/lead/p`). Keine Zwischenwerte.
3. **Farben** – ausschließlich die CI-Token aus `tailwind.config.js`
   (navy, blue, green, ink, body, muted, line, surface) plus die auf Navy
   etablierten Hellblau-Töne `#5fa0ea`, `#7db8f0`, `#9cc6f2`.
4. **Prägnanz** – Fließtexte unter 20 Wörtern. Keine Wiederholung dessen, was
   die Grafik daneben schon zeigt.
5. **Gleiche Zeilenzahl** – Kacheln einer Reihe sollen gleich viele Textzeilen
   haben (bei 1024 *und* 1280 px prüfen).
6. **Geteilte Komponenten nicht anfassen.** Alles unter
   `src/components/landing/sections/` rendert die Live-Seite mit. Für
   Textänderungen eine Entwurfskopie anlegen – so geschehen bei
   `agents/ProfilingSectionDraft.vue` und `home/TestimonialsSectionDraft.vue`.

## Inhaltliche Leitplanken

- Grundlage ist der Systementwurf „Vorschlag zur Zusammenarbeit" (August 2026).
  Keine Funktionen erfinden.
- Das ATS heißt **„führende Datenquelle"**, nicht „Aktenschrank".
- Human-in-the-Loop: Versand, Profiländerung und Statuswechsel gibt immer ein
  Mensch frei – diese Zusage darf keine Sektion unterlaufen.
- Auf den Kundenseiten wird **nicht** erklärt, *wie* gefiltert, sortiert oder
  in welcher Modellreihenfolge gerechnet wird (Wettbewerbsschutz).
- Preise: ein Preis, keine Staffelung. Enterprise 129,00 €/Monat,
  zusätzliche Mitarbeiter 19,99 €/Lizenz, Bring Your Own Key als
  Abrechnungsoption (kein Gratis-Tarif).

## Altlasten aus dem ersten, verworfenen Entwurf

Diese neun Dateien in `sections/` sind **von keiner Seite mehr eingebunden**:

`CompareSectionDraft.vue`, `CtaSectionDraft.vue`, `HeroSectionDraft.vue`,
`IntegrationsBar.vue`, `LayerSection.vue`, `NightShiftSection.vue`,
`OnDemandSection.vue`, `PrivacySection.vue`, `StatsSectionDraft.vue`

Sie können gelöscht werden. Einzelne Inhalte daraus (Nachtlauf, Schichtbild,
Datenschutzpunkte) sind in die Unterseiten gewandert. Aktiv aus `sections/`
ist nur `TheHeaderDraft.vue`.

## Offene Punkte

- Kundenstimmen in `home/TestimonialsSectionDraft.vue` sind **erfunden** –
  vor einem Livegang durch echte, freigegebene Zitate ersetzen.
- Mockup-Daten (Max Mustermann, „Meffert" als verbundenes ATS, „128 Profile ·
  6 Mandate") sind Platzhalter.
- Die Daten-Seite nennt seit der letzten Runde nicht mehr, dass der KI-Dienst
  außerhalb der EU rechnet. Bewusste Entscheidung des Auftraggebers –
  vor Livegang mit dem Datenschutzhinweis abgleichen.
- Meta-Titel und Footer sprechen weiterhin von „Talentpool-Management",
  während Navigation und Inhalte die Adapter-Erzählung führen.
- Livegang: Routen von `/entwurf/*` auf die Zielpfade umstellen, `noindex`
  entfernen, neue Pfade in die Prerender-Liste in `vue.config.js` aufnehmen.
