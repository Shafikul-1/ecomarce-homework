<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import { whichList } from '../../store/WhichList';

// console.log(whichList.whichListItems);
</script>

<template>
    <div class="" 
        v-if="whichList.whichListItems == null || whichList.whichListItems == '' || 
        whichList.whichListItems == undefined || whichList.whichListItems.length == 0 || 
        whichList.whichListItems == '{}' || whichList.whichListItems == {}">
        <h2>Your Which List Product is emty</h2>
    </div>
    <div v-else class="d-flex flex-wrap">
        <div class="m-2" v-for="item in whichList.whichListItems" :key="item.id">
            <div class="card position-relative" style="width: 18rem;">
                <i @click="whichList.removeItems(item)" class="fa-solid fa-xmark position-absolute removeWhichList"></i>
                <div class="whicelistproductimagesize">
                    <img :src="item.thumbnail" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">
                        {{ item.description.split(' ').splice(1, 10).join(' ') }} 
                        <router-link class="text-decoration-none" :to="{name: 'specification', params: { id: item.id}}">Read More..</router-link>
                    </p>
                    <RouterLink :to="{name: 'specification' , params: { id: item.id}}" class="btn btn-primary">Check Product</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.removeWhichList{
    color: white;
    top: 6px;
    right: 10px;
    cursor: pointer;
    font-size: 23px;
}
.whicelistproductimagesize{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
</style>