<template>
  <article>
    <h2>{{ project.name }}</h2>
    <p>{{ project.desc }}</p>
    <SkillList :skills="project.stack" />
    <footer>
      <a :href="project.links.live" v-if="project.links.live">
        <ButtonComponent>Go Live</ButtonComponent>
      </a>
      <a :href="project.links.github">
        <ButtonComponent>View Code</ButtonComponent>
      </a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import SkillList from './SkillList.vue'

defineProps<{
  project: {
    name: string
    desc: string
    stack: string[]
    links: {
      live?: string
      github: string
    }
  }
}>()
</script>

<style scoped>
p {
  flex: 1;
}
footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
a {
  font-size: 14px;
  color: black;
}
</style>
