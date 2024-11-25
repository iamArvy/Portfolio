<template>
  <button :class="classes"><slot /></button>
</template>

<script setup lang="ts">
const props = defineProps<{ active?: boolean; primary?: boolean }>()

const classes = [props.active ? 'btn-active' : '', props.primary ? 'btn-primary' : ''].filter(
  Boolean,
)
</script>

<style scoped>
button {
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-weight: 400;
  text-transform: capitalize;
  background: transparent;
  font-size: 14px;
  border-bottom: 3px solid var(--typography);
  transition: all 0.2s ease-in-out;
}

button:hover {
  border-bottom: 3px solid black;
  border-radius: 5px;
}
button.btn-active {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  border-radius: 5px;
}

button.btn-primary {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  border-radius: 5px;
}
</style>
