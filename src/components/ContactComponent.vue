<template>
  <a :href="'https://' + url">
    <i class="bx" :class="icon"></i>
    <span>{{ url }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{ icon: string; url: string }>()
</script>

<style scoped>
a {
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  /* margin: 5px 0; */
}
a span {
  color: grey;
  transition: ease-in-out 0.2s;
}
a:hover span {
  color: black;
}
</style>
