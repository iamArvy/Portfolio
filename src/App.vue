<script setup lang="ts">
import data from '@/assets/data.json' // Import the JSON data
import ContactComponent from './components/ContactComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
</script>

<template>
  <main>
    <section>
      <article>
        <figure><img :src="data.img" alt="" /></figure>
        <h1>{{ data.name }}</h1>
        <p>{{ data.job }}</p>
        <p>{{ data.job_desc }}</p>
        <hr />
        <div id="contacts">
          <ContactComponent
            v-for="(item, index) in data.contacts"
            :key="index"
            :icon="item.icon"
            :url="item.url"
          />
        </div>
      </article>
      <article id="skills">
        <h1>Skills</h1>
        <div>
          <span v-for="(item, index) in data.skills" :key="index">{{ item }}</span>
        </div>
      </article>
    </section>
    <section>
      <article id="about">
        <h1>About Me</h1>
        <p>{{ data.about }}</p>
      </article>
      <h1>Projects</h1>
      <div id="projects">
        <ProjectComponent v-for="(item, index) in data.projects" :key="index" :project="item" />
        <article>
          <h2></h2>
          <p></p>
          <footer><span id="lang"></span><a href="" id="view"></a></footer>
        </article>
      </div>
      <h1>Work Experience</h1>

      <article></article>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  gap: 2rem;
  width: 1000px;
  margin: 2rem auto;
}
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  overflow: hidden;
}
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
#contacts > a + a {
  margin-top: 5px;
}
#skills {
  width: 100%;
}
#skills span {
  padding: 7px 12px;
  border-radius: 20px;
  background-color: hsl(0 0% 89.8%);
  margin-right: 5px;
  font-weight: 600;
  font-size: 14px;
}
#skills div {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
#projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
