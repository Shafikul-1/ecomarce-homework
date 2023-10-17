<script setup>
import {  RouterView } from 'vue-router'
import NavigationView from './views/NavigationView.vue';
</script>

<template>
  <header>
      <NavigationView/>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
