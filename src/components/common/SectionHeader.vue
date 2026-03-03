<style scoped>
.ornament {
  color: #2976d6;
  margin-right: 0.35em;
  font-weight: 300;
  opacity: 0.7;
}
</style><template>
  <div :class="[alignClass, marginClass]">

    <!-- Optional Label -->
    <div v-if="label" class="mb-3" :class="labelWrapClass">
      <span
        class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
        style="background: rgba(41,118,214,0.08); color: #2976d6; border: 1px solid rgba(41,118,214,0.18);"
      >
        {{ label }}
      </span>
    </div>

    <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black mb-3 leading-tight">
      <span class="ornament" aria-hidden="true">—</span>{{ title }}
    </h2>
    <p class="text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl max-w-2xl text-black/60" :class="paragraphClass">
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
    marginClass() {
      return this.marginBottom
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