<template>
  <CardComponent :title="project.name">
    <p class="flex-1">{{ project.desc }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in project.stack"
        :key="skill"
        class="font-semibold border-primary border-2 py-1 px-2 rounded-full text-sm"
      >
        {{ skill }}
      </span>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <ButtonComponent
        primary
        v-if="project.links.live"
        @click="navigate(project.links.live)"
        active
      >
        View Live
      </ButtonComponent>
      <ButtonComponent
        active
        v-if="project.links.github"
        @click="navigate('github.com/' + project.links.github)"
      >
        View Code
      </ButtonComponent>
    </div>
  </CardComponent>
</template>

<script setup lang="ts">
import type { Project } from '@/types'
import { CardComponent, ButtonComponent } from '.'

const navigate = (route: string) => {
  const url = route.startsWith('http') ? route : `https://${route}`
  window.open(url, '_blank')
}
defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
