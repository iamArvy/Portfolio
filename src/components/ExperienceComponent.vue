<template>
  <div>
    <header>
      <h2>{{ experience.position }}</h2>
      <span>{{ experience.location }}</span>
    </header>
    <small><i class="bx bx-calendar"></i> {{ experience.period }}</small>
    <p>{{ experience.desc }}</p>
  </div>
  <hr v-if="!last" />
</template>

<script setup lang="ts">
defineProps<{
  experience: {
    position: string
    location: string
    period: string
    desc: string
  }
  last?: boolean
}>()
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
header span {
  color: var(--secondary);
}
</style>
