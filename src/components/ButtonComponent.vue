<template>
  <button :class="active ? 'btn-active' : null"><slot /></button>
</template>

<script setup lang="ts">
defineProps<{ active?: boolean }>()
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
</style>
