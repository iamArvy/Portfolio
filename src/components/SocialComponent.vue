<script setup lang="ts">
import type { Social } from '@/types'
import { Icon } from '@iconify/vue'

defineProps<{
  social: Social
}>()
</script>
<template>
  <a
    :href="social.url"
    class="text-xl hover:text-2xl transiton-all ease-in-out duration-300"
    target="_blank"
  >
    <Icon :icon="social.icon" />
  </a>
</template>
