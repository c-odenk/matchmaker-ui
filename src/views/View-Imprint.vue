<template>
  <LegalPage title="Impressum">

    <h2>Angaben gemäß § 5 DDG</h2>
    <address>
      matchmaker.hr GmbH<br>
      Musterstraße 12<br>
      41061 Mönchengladbach<br>
      Deutschland
    </address>
    <p>
      Vertreten durch den Geschäftsführer: Max Mustermann
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: +49 (0) 123 456789<br>
      E-Mail: <a href="mailto:info@matchmaker.hr">info@matchmaker.hr</a>
    </p>

    <h2>Registereintrag</h2>
    <p>
      Eintragung im Handelsregister.<br>
      Registergericht: Amtsgericht Mönchengladbach<br>
      Registernummer: HRB 00000
    </p>

    <h2>Umsatzsteuer-ID</h2>
    <p>
      Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>
      DE000000000
    </p>

    <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
    <p>
      Max Mustermann<br>
      Musterstraße 12<br>
      41061 Mönchengladbach
    </p>

    <h2>EU-Streitschlichtung</h2>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
      Unsere E-Mail-Adresse finden Sie oben im Impressum.
    </p>

    <h2>Verbraucherstreitbeilegung</h2>
    <p>
      matchmaker.hr richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB
      (Personalberatungen, Recruiting-Dienstleister und Executive-Search-Firmen). Wir sind
      nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h2>Haftung für Inhalte</h2>
    <p>
      Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
      Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
      gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
      auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
      Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
      unberührt.
    </p>

    <h2>Haftung für Links</h2>
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
      Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
      oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
      der Verlinkung auf mögliche Rechtsverstöße überprüft.
    </p>

    <h2>Urheberrecht</h2>
    <p>
      Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
      unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
      und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
    </p>

  </LegalPage>
</template>

<script>
import LegalPage from '@/components/legal/LegalPage.vue'

export default {
  name: 'ViewImprint',
  components: { LegalPage }
}
</script>
