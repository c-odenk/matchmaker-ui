# Textfassung 2.0 (Stand 27.08.2026)

Begehbare Zweitfassung der Seite zum Gegenlesen der **Formulierungen**. Layout,
Farben, Komponenten und Mockups sind unverändert – geändert wurde nur Text,
plus zwei strukturelle Eingriffe auf der Startseite (siehe unten).

**Alles hier ist additiv.** `src/components/landing-draft/` und die
veröffentlichte Seite unter `/` sind unberührt. Prüfen mit `npm run serve`,
dann `/entwurf-v2` öffnen.

## Routen

| Route | View | Seiten-Komponente |
|---|---|---|
| `/entwurf-v2` | `View-Landing-V2.vue` | `LandingPageDraft.vue` |
| `/entwurf-v2/integration` | `View-Integration-V2.vue` | `IntegrationPageDraft.vue` |
| `/entwurf-v2/daten` | `View-Data-V2.vue` | `DataPageDraft.vue` |
| `/entwurf-v2/agenten` | `View-Agents-V2.vue` | `AgentsPageDraft.vue` |
| `/entwurf-v2/automatisierungen` | `View-Automation-V2.vue` | `AutomationPageDraft.vue` |
| `/entwurf-v2/ki-assistent` | `View-Assistant-V2.vue` | `AssistantPageDraft.vue` |
| `/entwurf-v2/kontakt` | `View-Contact-V2.vue` | `ContactPageDraft.vue` |
| `/entwurf-v2/preise` | `View-Pricing-V2.vue` | `PricingPageDraft.vue` |

Alle Routen tragen `meta.noindex: true` und stehen **nicht** in der
Prerender-Liste in `vue.config.js`. Ein Band über dem Header weist die Fassung
als Entwurf aus. Die Rechtsseiten (`/privacy`, `/imprint`, `/terms`) sind nicht
kopiert – die Links dorthin zeigen auf die Originale.

## Ordner

Vollständige Kopie von `landing-draft/`, damit keine geteilte Komponente
angefasst werden muss. Zusätzlich:

- `shared/` – Kopien der vier Komponenten, die sonst aus `landing/sections/`
  kämen (`TheFooter`, `TalentpoolSection`, `MatchingSection`, `OutreachSection`).
  Drei davon tragen Textänderungen.
- `ui/MockupCaption.vue` – die Bildunterschrift „Beispielhafte Darstellung mit
  Demodaten.“
- `home/HomeTrustSection.vue` – neu, siehe unten.

Die neun Altlasten aus `sections/` und die erfundenen Kundenstimmen sind in
dieser Fassung nicht mehr enthalten.

## Was geändert wurde

**Durchgängig:** „Handgriffe“ → wiederkehrende Schritte · „ohne Zutun“ → ohne
manuellen Anstoß · „auf Zuruf“ → auf Anforderung · „über den Rechner“ → über den
Browser · „das Haus verlassen“ / „geht raus“ → wird versendet · „Programm“ /
„Fenster“ → Anwendung / System · „Vorgang“ → Kandidatenprofil ·
„Multi-Agenten-System“ → Multi-Agentensystem · „Anmelden →“ → „Zum Login“.

**Strukturell, nur Startseite:**

1. Der Vergleichsblock steht jetzt **vor** den Vorteilen und trägt den
   Ausgangspunkt („Der Engpass liegt nicht im Netzwerk – er liegt im Aufwand“).
   Begründung vor Versprechen.
2. `HomePhoneSection` ist entfallen – sie stand auf `/integration` wortgleich
   noch einmal. An ihrer Stelle steht `HomeTrustSection` mit vier
   Kontrollzusagen.
3. `TestimonialsSectionDraft` ist entfallen: die Zitate waren erfunden.
4. Die Plattform-Kacheln zeigen fünf statt vier Einträge – der KI-Assistent aus
   der Navigation fehlte.

Die vollständige Begründung je Textblock steht im Vergleichsdokument
(Artifact „Textfassung 2.0“).

## Offene Punkte

- **Platzhalter im FAQ:** die sechste Frage („Wie lange dauert die Anbindung an
  unsere Bewerbersoftware?“) hat noch keine Antwort. In
  `pricing/PricingFaqSection.vue`, mit `PLATZHALTER` markiert.
- **Zu belegen vor Livegang:** „Strikte Mandantentrennung“ in
  `home/HomeTrustSection.vue` gegen die tatsächliche Architektur prüfen; der
  neue Verweis auf den Auftragsverarbeitungsvertrag in
  `data/DataComplianceSection.vue` gegen den AVV-Text.
- **Zu entscheiden:** Executive Search oder Personalberatung als Kategorie.
  Aktuell: Badge „KI-Plattform für Personalberatungen“, Meta-Titel „…für
  Personalberatung und Executive Search“.
- **Kundenstimmen:** zurück auf die Startseite, sobald freigegebene Zitate
  vorliegen.
- **Mockup-Daten** bleiben Platzhalter, sind jetzt aber als solche
  gekennzeichnet – die Bildunterschrift fehlt noch unter den Mockups in
  `agents/ProfilingSectionDraft.vue`, `shared/TalentpoolSection.vue`,
  `shared/OutreachSection.vue` und den Assistenten-Sektionen.

## Livegang

Routen auf die Zielpfade umstellen, `noindex` entfernen, Entwurfsband im Header
löschen, Pfade in die Prerender-Liste in `vue.config.js` aufnehmen, Default-Titel
und -Beschreibung in `src/router/index.js` auf die neue Fassung setzen.
