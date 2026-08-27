<template>
  <!-- Kennzeichnet jedes Mockup als Demodaten. Bewusst klein und ruhig:
       es soll den Einwand vorwegnehmen, nicht die Aufmerksamkeit binden. -->
  <p class="text-[.72rem] text-muted text-center mt-[14px] max-w-[620px] mx-auto">
    <slot>Beispielhafte Darstellung mit Demodaten.</slot>
  </p>
</template>

<script>
export default { name: 'MockupCaption' }
</script>
