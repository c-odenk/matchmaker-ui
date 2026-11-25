<template>
  <!-- KAPITEL 3 · DER DURCHLAUF IM DETAIL
       Die vier Stationen an einem Kandidaten als Zickzack-Zweispalter wie im
       Rest der Seite. Jede Station nennt den Handgriff aus der Ausgangslage,
       den sie ersetzt; die letzte nennt, was beim Berater bleibt. -->
  <section class="sec bg-white" id="durchlauf">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Der Durchlauf">
        Vom Kandidatenprofil <span class="text-blue">zur versandfertigen Ansprache.</span>
        <template #lead>Vier spezialisierte Workflows bereiten jeden Schritt vor. Geprüft und freigegeben wird durch den Berater.</template>
      </SectionHeadingDraft>

        <div class="flex flex-col gap-[96px] max-[880px]:gap-[64px]">
          <div v-for="(s, i) in stationen" :key="s.nummer">
            <div class="two grid gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]"
                 :class="i % 2 === 0 ? '[grid-template-columns:1fr_1.1fr]' : '[grid-template-columns:1.1fr_1fr]'">
              <!-- Ungerade Stationen: Text links. Gerade: Mockup links.
                   Unter 880px stellt landing.css den Text immer nach oben. -->
              <template v-if="i % 2 === 0">
                <StationText :s="s" />
                <div class="min-w-0 max-[880px]:w-full max-[880px]:max-w-[620px] max-[880px]:mx-auto">
                  <component :is="s.mockup" v-bind="s.mockupProps" />
                </div>
              </template>
              <template v-else>
                <div class="min-w-0 max-[880px]:w-full max-[880px]:max-w-[620px] max-[880px]:mx-auto">
                  <component :is="s.mockup" v-bind="s.mockupProps" />
                </div>
                <StationText :s="s" />
              </template>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'
import FirmenNachrichtMockup from '@/components/landing-draft/ui/FirmenNachrichtMockup.vue'
import PhoneCallMockup from '@/components/landing-draft/integration/PhoneCallMockup.vue'
import V3ProfilMockup from './V3ProfilMockup.vue'
import V3MatchMockup from './V3MatchMockup.vue'
import StationText from './V3StationText.vue'
import { OUTREACH_CHANNELS } from '@/config/channels'
import { HANDGRIFFE } from './handgriffe'

const h = n => HANDGRIFFE[n - 1].kurz

export default {
  name: 'V3RunSection',
  components: { SectionHeadingDraft, StationText, FirmenNachrichtMockup, PhoneCallMockup, V3ProfilMockup, V3MatchMockup },
  data() {
    return {
      stationen: [
        {
          nummer: '1',
          agent: 'Profiling Agent',
          titel: 'Aus dem Profil wird',
          titelBlau: 'ein Suchauftrag.',
          text: 'Der Profiling Agent strukturiert das Profil, leitet Suchkriterien ab und erkennt, was noch fehlt.',
          ersetzt: [h(1)],
          features: [
            'Profile aus der Bewerbersoftware – oder aus PDF, DOC und DOCX',
            'Suchkriterien für Markt und Matching entstehen automatisch',
            'Fehlende Angaben werden erkannt, die Nachfrage ist formuliert'
          ],
          mockup: 'V3ProfilMockup'
        },
        {
          nummer: '2–4',
          agent: 'Market Agent & Matching Agent',
          titel: 'Passende Stellen,',
          titelBlau: 'bewertet und begründet.',
          text: 'Der Market Agent durchsucht Jobportale und Karriereseiten. Der Matching Agent bewertet jeden Treffer mit Score und Begründung.',
          ersetzt: [h(2), h(3), h(4)],
          features: [
            'Laufend statt stichprobenartig – auch auf Karriereseiten',
            'Unpassendes und bereits Abgelehntes fällt vorher heraus',
            'Begründung je Kriterium, Abweichungen wie Standort inklusive'
          ],
          mockup: 'V3MatchMockup'
        },
        {
          nummer: '5–6',
          agent: 'Outreach Agent',
          titel: 'Ansprechpartner gefunden.',
          titelBlau: 'Anschreiben entworfen.',
          text: 'Der Outreach Agent recherchiert den Entscheider und formuliert die Nachricht – den Kandidaten anonym, die Länge passend zum Kanal.',
          ersetzt: [h(5), h(6)],
          kanaele: OUTREACH_CHANNELS,
          features: [
            'Der richtige Ansprechpartner statt „info@"',
            'Anonymisiertes Profil auf Wunsch als PDF',
            'Versand über das eigene Postfach der Beratung'
          ],
          mockup: 'FirmenNachrichtMockup',
          mockupProps: { empfaenger: 'Christian Weber' }
        },
        {
          nummer: '7',
          urteil: true,
          agent: 'Berater',
          titel: 'Die Entscheidung',
          titelBlau: 'bleibt beim Berater.',
          text: 'Entwürfe werden geprüft, angepasst und freigegeben. Anruf und Teams-Termin starten direkt aus dem Vorgang.',
          bleibt: h(7),
          features: [
            'Kein Versand ohne ausdrückliche Freigabe',
            'Anruf aus dem Profil, über den Rechner – ohne Mitschnitt',
            'Teams-Transkript wird zum Profilvorschlag – nach Bestätigung'
          ],
          mockup: 'PhoneCallMockup',
          mockupProps: { align: 'left' }
        }
      ]
    }
  }
}
</script>
