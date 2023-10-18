<script setup>
import {  RouterView } from 'vue-router'
import NavigationView from './views/NavigationView.vue';


</script>

<template>
  <div >
    <header>
          <NavigationView/>
  </header>

  <RouterView />
  </div>


</template>

<style scoped>
</style>
