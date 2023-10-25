<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="mt-5" style="    margin: 9rem 0;"></div>
    <RouterLink to="/login" class="login">Please Login Then Use</RouterLink>

</template>

<style scoped>
.login{
  border: 2px solid blue;
    padding: 7px 16px;
    margin-left: 3rem;
    border-radius: 5px;
    box-shadow: 1px 2px 13px 0px black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: black;
    transition: all .5s;
}
.login:hover{
  background: #000;
  color: white;
}
</style>