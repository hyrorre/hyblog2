<template>
  <h1>Hello, World!!</h1>
  <p>{{ num }}</p>
  <button @click="++num" class="btn btn-primary m-2" style="width: 60px">+</button>
  <button @click="--num" class="btn btn-primary m-2" style="width: 60px">-</button>
</template>

<script setup lang="ts">
const num = ref(1)
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
