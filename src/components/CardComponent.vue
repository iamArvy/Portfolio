<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <article class="p-4 border border-gray-200 rounded-lg flex flex-col gap-2">
    <h1>{{ title }}</h1>
    <slot></slot>
  </article>
</template>
