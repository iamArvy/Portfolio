<template>
  <a
    :href="contact.url"
    target="_blank"
    rel="noopener noreferrer"
    class="text-sm flex items-center gap-2 text-gray-500 hover:text-black transition-colors ease-in-out duration-200"
  >
    <Icon :icon="contact.icon" />
    <span>{{ contact.text }}</span>
  </a>
</template>

<script setup lang="ts">
import type { Contact } from '@/types'
import { Icon } from '@iconify/vue'
defineProps<{ contact: Contact }>()
</script>
