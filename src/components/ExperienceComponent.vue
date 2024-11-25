<template>
  <div>
    <header>
      <h2>{{ experience.position }}</h2>
      <span>{{ experience.location }}</span>
    </header>
    <small><i class="bx bx-calendar"></i> {{ experience.period }}</small>
    <p>{{ experience.desc }}</p>
    <div id="workings">
      <a :href="'https://' + item.url" v-for="(item, index) in experience.projects" :key="index">
        <img :src="'/experiences/' + item.img" alt="" />
      </a>
    </div>
  </div>
  <hr v-if="!last" />
</template>

<script setup lang="ts">
defineProps<{
  experience: {
    position: string
    location: string
    period: string
    desc: string
    projects: {
      img: string
      url: string
    }[]
  }
  last?: boolean
}>()
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
header span {
  color: var(--secondary);
}
a {
  width: 50%;
  border-radius: 5px;
  overflow: hidden;
}
img {
  width: 100%;
}
@media (max-width: 768px) {
  a {
    width: 100%;
  }
}
</style>
