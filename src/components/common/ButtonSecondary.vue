<template>
  <a
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 h-12 rounded-xl px-8',
      'bg-gray-200 text-black',
      'hover:bg-gray-300 transition-all duration-200',
      'text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl' // P Small Styling
    ]"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" :stroke-width="1.75" />
    <span class="text-nowrap"><slot /></span>
  </a>
</template>

<script>
export default {
  name: 'ButtonSecondary',
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
