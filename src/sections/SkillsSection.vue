<template>
  <article id="skills">
    <h1>Skills</h1>
    <SkillList :skills="skills" />
  </article>
</template>

<script setup lang="ts">
import SkillList from '@/components/SkillList.vue'

defineProps<{
  skills: string[]
}>()
</script>

<style scoped></style>
