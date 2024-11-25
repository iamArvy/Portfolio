<script setup lang="ts">
import data from '@/assets/data.json'
import SectionComponent from './components/SectionComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import { computed, ref } from 'vue'
import SkillsSection from './sections/SkillsSection.vue'
import ProfileSection from './sections/ProfileSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'

const currentJob = ref('all')
const filteredProjects = computed(() => {
  if (currentJob.value === 'all') {
    return data.projects
  } else {
    return data.projects.filter((project) => project.job === currentJob.value)
  }
})

const filteredExperiences = computed(() => {
  if (currentJob.value === 'all') {
    return data.experiences
  } else {
    return data.experiences.filter((experience) => experience.job === currentJob.value)
  }
})
const changeJob = (job: string) => {
  currentJob.value = job
}
</script>

<template>
  <main>
    <section>
      <ProfileSection :profile="data.profile" :jobs="data.jobs" id="profile" />
      <SkillsSection :skills="data.skills" id="skills" />
    </section>
    <section>
      <AboutSection id="about" :about="data.about" />
      <div id="jobsbutton">
        <ButtonComponent @click="changeJob('all')" :active="currentJob === 'all'">
          All
        </ButtonComponent>
        <ButtonComponent
          v-for="(item, index) in data.jobs"
          :key="index"
          :active="currentJob === item.code"
          @click="changeJob(item.code)"
        >
          {{ item.value }}
        </ButtonComponent>
      </div>
      <SectionComponent title="Projects" id="projects">
        <div>
          <ProjectComponent
            v-for="(item, index) in filteredProjects"
            :key="index"
            :project="item"
          />
        </div>
      </SectionComponent>
      <SectionComponent title="Work Experience" id="experiences">
        <article>
          <ExperienceComponent
            v-for="(item, index) in filteredExperiences"
            :key="index"
            :experience="item"
            :last="index === filteredExperiences.length - 1"
          />
        </article>
      </SectionComponent>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 2rem;
}
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  overflow: hidden;
}

article {
  padding: 1.5rem;
  border: 1px solid hsl(0 0% 89.8%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  /* place-items: center; */
}
#skills {
  width: 100%;
}
#projects div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
#jobsbutton {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  gap: 0.5rem;
}
@media (max-width: 768px) {
  main {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  #projects div {
    grid-template-columns: 1fr;
  }
}
</style>
