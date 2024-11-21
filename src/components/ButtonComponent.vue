<template>
  <button><slot /></button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-weight: 400;
  text-transform: capitalize;

  background: transparent;
  color: var(--secondary);
  font-size: 14px;
}

button:hover {
  border-bottom: 3px solid var(--secondary);
  border-radius: 5px;
}
button.btn-active {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  border-radius: 5px;
}
</style>
