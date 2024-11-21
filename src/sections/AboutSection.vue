<template>
  <article>
    <h1>About Me</h1>
    <p>{{ about }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ about: string }>()
</script>

<style scoped></style>
