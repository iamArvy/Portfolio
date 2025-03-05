<template>
  <div
    class="flex flex-col items-center gap-2 font-bold rounded-full px-2 py-1 cursor-pointer group"
  >
    <Icon
      :icon="skill.icon"
      class="text-3xl group-hover:text-4xl transition-all ease-in-out duration-200"
    />
    <span class="text-sm text-center group-hover:text-primary">{{ skill.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Stack } from '@/types'
import { Icon } from '@iconify/vue'
defineProps<{
  skill: Stack
}>()
</script>
