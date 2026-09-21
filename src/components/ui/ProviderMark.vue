<template>
  <!-- Anbieter- und Kanalzeichen in einem einheitlichen 24er-Raster.
       Bewusst einfarbig (currentColor): die Zeichen sollen die Anbieter
       erkennbar machen, ohne die CI der Seite mit fremden Markenfarben zu
       durchbrechen. Größe und Farbe bestimmt die aufrufende Stelle. -->
  <svg :width="size" :height="size" viewBox="0 0 24 24" class="shrink-0" aria-hidden="true" focusable="false">
    <!-- WhatsApp: Sprechblase mit Hörer -->
    <path
      v-if="name === 'whatsapp'"
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />

    <!-- Twilio: Ring mit vier Punkten -->
    <g v-else-if="name === 'twilio'" fill="currentColor">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 .9C5.87.9.9 5.87.9 12S5.87 23.1 12 23.1 23.1 18.13 23.1 12 18.13.9 12 .9zm0 2.4a8.7 8.7 0 110 17.4 8.7 8.7 0 010-17.4z"/>
      <circle cx="8.95" cy="8.95" r="2.15"/>
      <circle cx="15.05" cy="8.95" r="2.15"/>
      <circle cx="15.05" cy="15.05" r="2.15"/>
      <circle cx="8.95" cy="15.05" r="2.15"/>
    </g>

    <!-- LinkedIn -->
    <path
      v-else-if="name === 'linkedin'"
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
    />

    <!-- Xing -->
    <path
      v-else-if="name === 'xing'"
      fill="currentColor"
      d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648z"
    />

    <!-- sipgate führt ein Wortzeichen, kein Bildzeichen. Bis eine freigegebene
         Datei vorliegt, steht hier das Hörer-Symbol der Seite – der Name steht
         ohnehin daneben. -->
    <path
      v-else-if="name === 'sipgate'"
      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />

    <!-- E-Mail läuft über das Konto des Kunden – dafür gibt es keine Marke. -->
    <path
      v-else-if="name === 'mail'"
      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
</template>

<script>
// Einfarbige Anbieter- und Kanalzeichen (WhatsApp, Twilio, sipgate, LinkedIn,
// Xing) sowie das neutrale Briefsymbol für das eigene Postfach.
// Die Zeichen stehen immer neben ihrem Namen, deshalb sind sie für
// Screenreader ausgeblendet.
export default {
  name: 'ProviderMark',
  props: {
    name: {
      type: String,
      required: true,
      validator: v => ['whatsapp', 'twilio', 'sipgate', 'linkedin', 'xing', 'mail'].includes(v)
    },
    size: { type: [Number, String], default: 14 }
  }
}
</script>
