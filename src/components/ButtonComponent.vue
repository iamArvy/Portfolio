<template>
  <button
    class="px-3 py-1 cursor-pointer border-b-2 border-b-gray-200 hover:border-b-primary font-semibold capitalize rounded-md transition-all ease-in-out duration-200"
    :class="active ? 'text-primary border-b-primary border-b-2' : ''"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>
