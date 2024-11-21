<template>
  <div>
    <span v-for="(item, index) in skills" :key="index">{{ item }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skills: string[]
}>()
</script>

<style scoped>
span {
  padding: 7px 12px;
  border-radius: 20px;
  background-color: hsl(0 0% 89.8%);
  background-color: var(--secondary);
  color: var(--primary);
  margin-right: 5px;
  font-weight: 600;
  font-size: 10px;
}
div {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>
