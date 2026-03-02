<template>
  <a
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-2',
      'bg-blue text-white',
      'hover:bg-deep-blue/90 hover:shadow-lg hover:shadow-deep-blue/20 transition-all duration-200',
      'text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl',
      'md:min-w-[160px] lg:min-w-[160px] xl:min-w-[175px]'
    ]"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" :stroke-width="1.75" />
    <span class="text-nowrap">
      <slot />
    </span>
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
