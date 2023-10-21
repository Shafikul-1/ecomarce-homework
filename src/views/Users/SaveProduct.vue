<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import { SaveProduct } from '../../store/SaveProduct';

// console.log(SaveProduct.SaveItems);
</script>

<template>
    <div class="" 
        v-if="SaveProduct.SaveItems == null || SaveProduct.SaveItems == '' || 
        SaveProduct.SaveItems == undefined || SaveProduct.SaveItems.length == 0 || 
        SaveProduct.SaveItems == '{}' || SaveProduct.SaveItems == {}">
        <h2>Your Save  Product List is emty</h2>
    </div>
    <div v-else class="d-flex flex-wrap">
        <div class="m-2" v-for="item in SaveProduct.SaveItems" :key="item.id">
            <div class="card position-relative" style="width: 18rem;">
                <RouterLink :to="{name: 'specification', params: { id: item.id}}">
                    <i class="fa-solid fa-eye position-absolute viewProduct"></i>
                </RouterLink>
                <i @click="SaveProduct.removeItems(item)" class="fa-solid fa-trash position-absolute removeSave text-danger"></i>
                <div class="saveproductimagesize">
                    <img :src="item.thumbnail" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">
                        {{ item.description.split(' ').splice(1, 10).join(' ') }} 
                        <router-link class="text-decoration-none" :to="{name: 'specification', params: { id: item.id}}">Read More..</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.viewProduct{
    top: 6px;
    left: 10px;
    font-size: 23px;
}
.removeSave{
    color: white;
    top: 6px;
    right: 10px;
    cursor: pointer;
    font-size: 23px;
}
.saveproductimagesize{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
</style>