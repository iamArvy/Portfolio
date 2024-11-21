<template>
  <article>
    <header>
      <figure><img :src="profile.img" alt="" /></figure>
      <figcaption>
        <h1>{{ profile.name }}</h1>
        <span>{{ profile.job }}</span>
      </figcaption>
    </header>
    <p>{{ profile.desc }}</p>
    <hr />
    <div>
      <ContactComponent
        v-for="(item, index) in profile.contacts"
        :key="index"
        :icon="item.icon"
        :url="item.url"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import ContactComponent from '@/components/ContactComponent.vue'

defineProps<{
  profile: {
    img: string
    name: string
    job: string
    desc: string
    contacts: {
      icon: string
      url: string
    }[]
  }
  jobs: {
    role: string
  }[]
}>()
</script>

<style scoped>
figure {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: grey;
  overflow: hidden;
  align-self: center;
}
img {
  width: 100%;
}

div > a + a {
  margin-top: 5px;
}

header span {
  color: var(--secondary);
  font-size: 14px;
}

header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (max-width: 768px) {
  header {
    flex-direction: row;
    gap: 20px;
  }
  figure {
    width: 50px;
    height: 50px;
  }
}
</style>
