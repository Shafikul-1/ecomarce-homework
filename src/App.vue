<script setup>
import {  RouterView } from 'vue-router'
import NavigationView from './views/NavigationView.vue';
import { theming } from './store/theme';
import { cart } from './store/Cart';
// const theme = ()=>{
//   const setheme = document.querySelector('themeSet')
//   setheme.classList.replace('light', 'dark')
// }
</script>

<template>

  <div class="themeSet light">

    <header>
          <NavigationView/>
  </header>
  <!-- <div class="">  {{ cart }}</div> -->
  <RouterView />
  </div>


</template>

<style scoped>

</style>
