<template>
  <a
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 h-12 rounded-xl px-8',
      'bg-blue text-white',
      'hover:bg-deep-blue/90 hover:shadow-lg hover:shadow-deep-blue/20 transition-all duration-200',
      'text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl' // P Small Styling
    ]"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" :stroke-width="1.75" />
    <span class="text-nowrap"><slot /></span>
  </a>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    href: {
      type: String,
      default: '#'
    },
    icon: {
      type: [Object, String],
      default: null
    }
  }
}
</script>
