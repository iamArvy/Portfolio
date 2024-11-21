<template>
  <article>
    <h2>{{ project.name }}</h2>
    <p>{{ project.desc }}</p>
    <footer>
      <span id="lang">{{ project.stack }}</span
      ><a href="" id="view"></a>
    </footer>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    name: string
    desc: string
    stack: string
  }
}>()
</script>

<style scoped></style>
