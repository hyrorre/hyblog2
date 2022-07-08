<template>
  <h1>Hello, World!!</h1>
  <p>{{ num }}</p>
  <button @click="++num">+</button>
  <button @click="--num">-</button>
</template>

<script setup lang="ts">
const num = ref(1)
</script>

<style>
button {
  width: 30px;
  margin: 4px;
}
</style>
