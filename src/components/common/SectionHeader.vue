<template>
  <div :class="[alignClass, marginClass]">
    <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black mb-1">
      {{ title }}
    </h2>
    <p class="text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl max-w-2xl text-black" :class="paragraphClass">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    marginBottom: {
      type: String,
      default: 'mb-12',
      validator: (value) => ['mb-8', 'mb-12', 'mb-16', 'mb-20', 'mb-24', ''].includes(value)
    },
    align: {
      type: String,
      default: 'center',
      validator: (value) => ['left', 'center', 'right'].includes(value)
    }
  },
  computed: {
    marginClass() {
      return this.marginBottom
    },
    alignClass() {
      return {
        left:   'text-left',
        center: 'text-center',
        right:  'text-right',
      }[this.align]
    },
    paragraphClass() {
      return {
        left:   'text-left',
        center: 'text-center mx-auto',
        right:  'text-right ml-auto',
      }[this.align]
    }
  }
}
</script>