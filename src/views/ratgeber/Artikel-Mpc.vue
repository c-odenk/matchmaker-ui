<template>
  <ArticleLayout
    path="/ratgeber/mpc-methode"
    heading="MPC-Methode: Mit dem richtigen Kandidaten neue Kunden gewinnen"
    lead="MPC steht für Most Placeable Candidate – den Kandidaten, den fast jedes passende Unternehmen gern kennenlernen würde. Wie die Methode funktioniert, wie Sie den richtigen Kandidaten auswählen und was in Deutschland rechtlich dabei gilt."
    :related="['/agenten', '/ratgeber/kandidatenprofil-vorlage', '/ratgeber/kaltakquise-personalvermittlung']"
    rechtshinweis
    cta-title="Für jeden Kandidaten die Unternehmen, die gerade suchen."
    cta-text="matchmaker gleicht Ihre aktiven Kandidaten jede Nacht mit dem Markt ab. Wir zeigen es in 15 Minuten."
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Was hinter der Methode steckt</h2>
    <p>
      Die MPC-Methode stammt aus der angelsächsischen Personalvermittlung. Statt Unternehmen zu fragen, ob sie
      gerade jemanden suchen, bietet die Vermittlung einen konkreten, besonders gefragten Kandidaten an. Das
      Gespräch beginnt damit nicht mit einer Bitte, sondern mit einem Angebot, das für das Unternehmen sofort
      greifbar ist.
    </p>
    <p>
      Gelingt das, entsteht oft mehr als eine Vermittlung: Das Unternehmen lernt die Vermittlung kennen und
      erteilt später weitere Aufträge.
    </p>

    <h2>Woran Sie einen MPC erkennen</h2>
    <ul>
      <li><strong>Gefragte Qualifikation:</strong> Fachrichtung und Erfahrung, nach denen viele Unternehmen suchen.</li>
      <li><strong>Klare Wechselmotivation:</strong> Der Kandidat will wirklich wechseln und weiß, wohin.</li>
      <li><strong>Realistische Rahmenbedingungen:</strong> Gehaltsvorstellung, Kündigungsfrist und Mobilität passen zum Markt.</li>
      <li><strong>Belegte Erfolge:</strong> Ergebnisse, die sich in zwei Sätzen erzählen lassen.</li>
      <li><strong>Einverständnis:</strong> Der Kandidat weiß, dass und wem Sie ihn vorstellen.</li>
    </ul>

    <h2>Der Ablauf in sechs Schritten</h2>
    <ol>
      <li><strong>Kandidat auswählen und Einverständnis einholen.</strong> Klären Sie, bei welchen Unternehmen er auf keinen Fall vorgestellt werden möchte – etwa beim aktuellen Arbeitgeber und dessen Wettbewerbern.</li>
      <li><strong>Kurzprofil erstellen.</strong> Anonymisiert, mit Kurzfassung, belegten Erfolgen und Rahmen. Eine Vorlage finden Sie im Beitrag <router-link to="/ratgeber/kandidatenprofil-vorlage">Kandidatenprofil</router-link>.</li>
      <li><strong>Zielunternehmen finden.</strong> Das stärkste Signal ist eine offene Stelle, zu der der Kandidat passt. Unternehmen mit einer solchen Stelle haben einen konkreten Bedarf – und einen Grund, Ihnen zuzuhören.</li>
      <li><strong>Ansprechpartner ermitteln.</strong> Wer entscheidet über die Stelle? Fachbereichsleitung und Personalabteilung haben unterschiedliche Fragen.</li>
      <li><strong>Zulässig Kontakt aufnehmen.</strong> Am Telefon mit Bezug zur konkreten Stelle oder über bestehende Kontakte – nicht per Kalt-E-Mail. Erst wenn das Unternehmen zustimmt, schicken Sie das Kurzprofil.</li>
      <li><strong>Nachfassen und Termin vereinbaren.</strong> Halten Sie fest, wem Sie das Profil wann geschickt haben, und fragen Sie nach einer angemessenen Frist nach.</li>
    </ol>

    <h2>Die Grenzen der Methode</h2>
    <h3>Den Kandidaten nicht verbrennen</h3>
    <p>
      Wird dasselbe Profil breit gestreut, sinkt sein Wert. Unternehmen erkennen ein Profil wieder, das sie von
      mehreren Seiten bekommen. Stellen Sie gezielt vor – lieber zehn passende Unternehmen als hundert beliebige.
    </p>
    <h3>Rechtliche Grenzen</h3>
    <p>
      In Deutschland ist Werbung per E-Mail ohne vorherige Einwilligung auch zwischen Unternehmen unzulässig
      (§ 7 Abs. 2 Nr. 2 UWG). Das Massenversenden von Profilen, wie es in manchen Ländern üblich ist, scheidet damit
      aus. Am Telefon braucht es zumindest eine mutmaßliche Einwilligung des Unternehmens. Einzelheiten stehen im
      Beitrag <router-link to="/ratgeber/kaltakquise-personalvermittlung">Kaltakquise in der Personalvermittlung</router-link>.
    </p>
    <h3>Datenschutz</h3>
    <p>
      Auch ein anonymes Profil kann personenbezogen sein. Ohne Einverständnis des Kandidaten geben Sie es nicht
      weiter.
    </p>

    <h2>Warum offene Stellen der bessere Hebel sind</h2>
    <p>
      Der klassische MPC-Ansatz sucht Unternehmen, die einen Kandidaten wie diesen „gebrauchen könnten“. Wirksamer
      ist es, gezielt dort anzusetzen, wo gerade eine passende Stelle offen ist: Der Bedarf ist belegt, die Ansprache
      ist relevant, und Sie haben einen sachlichen Anlass für den Anruf. Der Aufwand liegt in der Recherche – jeden
      Tag Jobportale und Karriereseiten nach Stellen durchsuchen, die zu jedem Ihrer Kandidaten passen.
    </p>
    <p>
      Genau diese Recherche übernimmt matchmaker: Für jeden aktiven Kandidaten werden jede Nacht passende Vakanzen
      gesucht, mit Begründung bewertet, der Ansprechpartner ermittelt und ein Anschreiben entworfen. Mehr dazu auf
      <router-link to="/agenten">Multi-Agentensystem</router-link>.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'ArtikelMpc',
  components: { ArticleLayout }
}
</script>
