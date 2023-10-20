<script setup>
import { ref, reactive } from 'vue'
const product = reactive({
    1:{
       product: {
        id: 1,
        name: 'asus',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo harum repellendus inventore minus, aspernatur perferendis iusto voluptates unde libero ab quasi at aperiam maiores vel consequatur neque in nisi!',
        price: 3542,
        category: 'laptop'
       },
       QTY: 23
    },
    12:{
       product: {
        id: 12,
        name: 'walton',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo harum repellendus inventore minus, aspernatur perferendis iusto voluptates unde libero ab quasi at aperiam maiores vel consequatur neque in nisi!',
        price: 3542,
        category: 'computer'
       },
       QTY: 23
    },
    4:{
       product: {
        id: 4,
        name: 'panjabi',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo harum repellendus inventore minus, aspernatur perferendis iusto voluptates unde libero ab quasi at aperiam maiores vel consequatur neque in nisi!',
        price: 3542,
        category: 'posak'
       },
       QTY: 23
    },
    7:{
       product: {
        id: 7,
        name: 'mac',
        des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo harum repellendus inventore minus, aspernatur perferendis iusto voluptates unde libero ab quasi at aperiam maiores vel consequatur neque in nisi!',
        price: 3542,
        category: 'laptop'
       },
       QTY: 23
    }
})
const reAndCr = {
    removeItem(item){
        console.log(item);
    }
}
</script>

<template>
    <div v-for="item in product" :key="item.product.id" class="card border-4 mt-4 p-5 m-5">
        <p>{{ item.product.category }}</p>
        <p>{{ item.product.des }}</p>
        <p>{{ item.product.name }}</p>
        <p>{{ item.product.price }}</p>
        <button @click="reAndCr.removeItem(item)">Remove</button>
    </div>
</template>
