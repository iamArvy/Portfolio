<script setup lang="ts">
import data from '@/assets/data.json'
import { ref } from 'vue'
import { ProfileSection } from './sections'
import {
  CardComponent,
  SkillComponent,
  ProjectComponent,
  ButtonComponent,
  SectionComponent,
} from './components'
import type { Project, Stack } from './types'
const currentJob = ref<string>('all')
const filter = <T extends Stack | Project>(data: T[]): T[] => {
  return currentJob.value === 'all'
    ? data
    : data.filter((item) => 'job' in item && item.job === currentJob.value)
}

const changeJob = (job: string) => {
  currentJob.value = job
}
</script>

<template>
  <main class="container grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto py-8 px-8 md:h-screen">
    <section class="flex flex-col gap-8 col-span-1">
      <ProfileSection :profile="data.profile" :jobs="data.jobs" id="profile" />
    </section>
    <section class="col-span-2 flex flex-col gap-8 overflow-y-auto w-full">
      <CardComponent title="About Me" id="about">
        <p>{{ data.about }}</p>
      </CardComponent>
      <div id="jobsButton" class="flex flex-wrap gap-2 self-center w-full justify-center">
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
      <CardComponent title="Skills">
        <div class="grid grid-cols-3 sm:grid-cols-5 gap-3" id="skills">
          <SkillComponent v-for="skill in filter(data.stack)" :key="skill.name" :skill="skill" />
        </div>
      </CardComponent>
      <SectionComponent title="Projects" id="projects">
        <div class="grid sm:grid-cols-2 gap-4">
          <ProjectComponent
            v-for="(item, index) in filter(data.projects)"
            :key="index"
            :project="item"
          />
        </div>
      </SectionComponent>
    </section>
  </main>
</template>
