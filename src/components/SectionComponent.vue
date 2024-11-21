<template>
  <div id="container">
    <h1>{{ title }}</h1>
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
h1 {
  margin: 10px 0;
}
</style>
