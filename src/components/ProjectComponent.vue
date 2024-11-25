<template>
  <article>
    <h2>{{ project.name }}</h2>
    <p>{{ project.desc }}</p>
    <SkillList :skills="project.stack" />
    <footer>
      <ButtonComponent primary v-if="project.links.live" @click="navigate(project.links.live)">
        View Live
      </ButtonComponent>
      <ButtonComponent
        primary
        v-if="project.links.github"
        @click="navigate('github.com/' + project.links.github)"
      >
        View Code
      </ButtonComponent>
    </footer>
  </article>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import SkillList from './SkillList.vue'

const navigate = (route: string) => {
  const url = route.startsWith('http') ? route : `https://${route}`
  window.open(url, '_blank')
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
  gap: 1rem;
}
a {
  font-size: 14px;
  color: black;
}
</style>
