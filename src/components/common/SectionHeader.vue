<template>
  <div :class="[alignClass, marginClass]">

    <!-- Optional Label -->
    <div v-if="label" class="mb-3" :class="labelWrapClass">
      <span
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] font-semibold uppercase tracking-wider bg-dark-blue/[0.06] text-dark-blue"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-light-blue flex-shrink-0"></span>
        {{ label }}
      </span>
    </div>

    <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black mb-3 leading-tight">
      <template v-if="titleParts">{{ titleParts.before }}<span class="text-light-blue">{{ titleParts.accent }}</span>{{ titleParts.after }}</template>
      <template v-else>{{ title }}</template>
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
    label: {
      type: String,
      default: null
    },
    // Optionales Akzentwort im Titel: wird kursiv in light-blue hervorgehoben.
    // Muss ein Teilstring von `title` sein, sonst wird der Titel normal gerendert.
    titleAccent: {
      type: String,
      default: null
    },
    marginBottom: {
      type: String,
      default: 'mb-12',
      validator: (v) => ['mb-8', 'mb-12', 'mb-16', 'mb-20', 'mb-24', ''].includes(v)
    },
    align: {
      type: String,
      default: 'center',
      validator: (v) => ['left', 'center', 'right'].includes(v)
    }
  },
  computed: {
    titleParts() {
      if (!this.titleAccent || !this.title.includes(this.titleAccent)) return null
      const idx = this.title.indexOf(this.titleAccent)
      return {
        before: this.title.slice(0, idx),
        accent: this.titleAccent,
        after:  this.title.slice(idx + this.titleAccent.length),
      }
    },
    marginClass() {
      // Responsiv: auf Mobile kleinerer Abstand als auf Desktop – harmonische Vertikal-Rhythmik.
      const map = {
        'mb-8':  'mb-8 md:mb-10',
        'mb-12': 'mb-8 md:mb-12',
        'mb-16': 'mb-10 md:mb-16',
        'mb-20': 'mb-12 md:mb-20',
        'mb-24': 'mb-14 md:mb-24',
        '':      '',
      }
      return map[this.marginBottom] ?? this.marginBottom
    },
    alignClass() {
      return { left: 'text-left', center: 'text-center', right: 'text-right' }[this.align]
    },
    paragraphClass() {
      return {
        left:   'text-left',
        center: 'text-center mx-auto',
        right:  'text-right ml-auto',
      }[this.align]
    },
    labelWrapClass() {
      return {
        left:   'flex justify-start',
        center: 'flex justify-center',
        right:  'flex justify-end',
      }[this.align]
    }
  }
}
</script>