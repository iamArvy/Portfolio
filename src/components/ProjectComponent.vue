<template>
  <article>
    <h2>{{ project.name }}</h2>
    <p>{{ project.desc }}</p>
    <SkillList :skills="project.stack" />
    <footer>
      <!-- <a :href="project.links.live" v-if="project.links.live"> </a> -->
      <ButtonComponent :disabled="!project.links.live" @click="navigate(project.links.live)">
        View Live
      </ButtonComponent>
      <!-- <a :href="project.links.github"> </a> -->
      <ButtonComponent :disabled="!project.links.github" @click="navigate(project.links.github)">
        View Code
      </ButtonComponent>
    </footer>
  </article>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import SkillList from './SkillList.vue'

const navigate = ($route: string) => {
  window.open($route, '_blank')
}
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
