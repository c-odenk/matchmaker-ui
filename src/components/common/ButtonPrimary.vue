<template>
  <a
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-button px-8 py-2',
      'bg-dark-blue text-white',
      'hover:bg-dark-blue/90 hover:shadow-lg hover:shadow-dark-blue/20 transition-all duration-200',
      'text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl',
      'md:min-w-[160px] lg:min-w-[160px] xl:min-w-[175px]',
      $attrs.class
    ]"
  >
    <component v-if="icon && iconPosition === 'leading'" :is="icon" class="w-4 h-4" :stroke-width="1.75" />
    <span class="text-nowrap">
      <slot />
    </span>
    <component v-if="icon && iconPosition === 'trailing'" :is="icon" class="w-4 h-4" :stroke-width="1.75" />
  </a>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: '#'
    },
    icon: {
      type: [Object, String],
      default: null
    },
    iconPosition: {
      type: String,
      default: 'leading',
      validator: (v) => ['leading', 'trailing'].includes(v)
    }
  }
}
</script>