<template>
  <div id="container">
    <h1 class="my-2">{{ title }}</h1>
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
