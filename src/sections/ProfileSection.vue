<template>
  <div class="flex flex-col gap-4">
    <header class="flex flex-col gap-4">
      <figure
        class="min-w-[250px] max-h-[250px] rounded-full overflow-hidden self-center bg-gray-200"
      >
        <img :src="profile.image" alt="" class="w-full" />
      </figure>
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-primary text-2xl">{{ profile.name }}</h1>
        <span class="text-md text-secondary">
          <template v-for="(job, index) in jobs">
            {{ job.role }}<template v-if="index !== jobs.length - 1">, </template>
          </template>
        </span>
        <ContactComponent v-for="(item, index) in profile.contacts" :key="index" :contact="item" />
      </div>
    </header>
    <hr />
    <div class="flex items-center gap-3">
      <SocialComponent v-for="(item, index) in profile.socials" :key="index" :social="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SocialComponent, ContactComponent } from '@/components'
import type { Job, Profile } from '@/types'

defineProps<{
  profile: Profile
  jobs: Job[]
}>()
</script>
