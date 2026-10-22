<template>
  <ArticleLayout
    path="/glossar/talentpool"
    heading="Talentpool: Bedeutung, Abgrenzung und Pflege"
    lead="Ein Talentpool ist der Bestand an Kandidaten, mit denen eine Personalberatung oder ein Unternehmen in Kontakt steht und die für künftige Stellen infrage kommen. Was ihn vom Kandidatenpool unterscheidet und wie er lebendig bleibt."
    :related="['/agenten', '/glossar/active-sourcing', '/daten']"
    cta-to="/agenten"
    cta-label="Die Agenten ansehen →"
  >
    <h2>Definition</h2>
    <p>
      Ein Talentpool sammelt Kandidaten, die zu einer bestimmten Zeit nicht vermittelt oder eingestellt wurden,
      aber für spätere Stellen interessant bleiben: frühere Bewerber, Kandidaten aus abgeschlossenen Suchen,
      Kontakte aus Netzwerk und Active Sourcing. Ziel ist, bei einer neuen Stelle nicht bei null zu beginnen.
    </p>

    <h2>Talentpool und Kandidatenpool</h2>
    <p>
      Im Alltag werden beide Begriffe oft gleich verwendet. Wo man sie unterscheidet, meint der
      <strong>Kandidatenpool</strong> den gesamten Bestand in der Datenbank. Der <strong>Talentpool</strong> ist die
      gepflegte Auswahl daraus: Menschen, zu denen eine Beziehung besteht und deren Profil aktuell gehalten wird.
    </p>

    <h2>Unternehmen und Personalberatung</h2>
    <p>
      Unternehmen nutzen einen Talentpool, um eigene Stellen schneller zu besetzen. Für eine Personalberatung ist
      er das wichtigste Kapital: Jeder Kandidat im Pool ist eine mögliche Vermittlung – sobald ein passendes
      Unternehmen gefunden ist.
    </p>

    <h2>Wie ein Talentpool lebendig bleibt</h2>
    <ul>
      <li><strong>Aktuell halten:</strong> Verfügbarkeit, Wechselbereitschaft, Gehaltsrahmen und Kündigungsfrist ändern sich. Veraltete Angaben machen den Pool wertlos.</li>
      <li><strong>Kontakt halten:</strong> Ein kurzer Austausch in regelmäßigen Abständen hält die Beziehung.</li>
      <li><strong>Lücken schließen:</strong> Fehlende Angaben gezielt nachfragen statt das Profil unvollständig liegen zu lassen.</li>
      <li><strong>Aktiv nutzen:</strong> Den Markt regelmäßig nach Stellen durchsuchen, die zu den vorhandenen Kandidaten passen – statt nur bei neuen Aufträgen in den Pool zu schauen.</li>
    </ul>

    <h2>Datenschutz</h2>
    <p>
      Wie lange Profile gespeichert werden dürfen, hängt von der Rechtsgrundlage ab. Für eine längerfristige
      Aufnahme in einen Talentpool holen viele Beratungen eine Einwilligung des Kandidaten ein und legen eine feste
      Löschfrist fest. Kandidaten haben ein Recht auf Auskunft und Löschung.
    </p>
    <p>
      matchmaker nutzt den Pool aktiv: Für jeden aktiven Kandidaten werden jede Nacht passende Vakanzen gesucht,
      fehlende Profilangaben werden erkannt und nachgefragt. Mehr dazu auf der Seite
      <router-link to="/agenten">Multi-Agentensystem</router-link>.
    </p>
  </ArticleLayout>
</template>

<script>
import ArticleLayout from '@/components/ratgeber/ArticleLayout.vue'

export default {
  name: 'GlossarTalentpool',
  components: { ArticleLayout }
}
</script>
