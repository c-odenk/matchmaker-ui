<template>
  <ul class="list-none mt-[22px] flex flex-col gap-[14px]">
    <li v-for="(item, i) in items" :key="i" class="flex gap-3 text-[.9rem] text-body">
      <span class="shrink-0 w-[22px] h-[22px] rounded-full bg-[#e7f8ee] text-[#15803d] flex items-center justify-center text-[12px] mt-px">✓</span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
// Häkchen-Liste (früher .feat-list) – nimmt ein Array von Strings entgegen.
export default {
  name: 'FeatureList',
  props: { items: { type: Array, required: true } }
}
</script>
