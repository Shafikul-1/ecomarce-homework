//Vue Router
// index.js file
{
  path: '/products',
  name: 'products',
  component: ()=> import ('../components/ProductList.vue')
},
{
  path: '/products/:id',
  name: 'product',
  component: ()=> import ('../components/ProductView.vue'),
  children:[
    {
      path: 'specification',
      name: 'specification',
      component: ()=> import('../components/Product_Info/Specification.vue')
    },
    {
      path: 'shopping-information',
      name: 'Shippinginfo',
      component: ()=> import('../components/Product_Info/Shippinginfo.vue')
    }
  ]
}

<!-- ========= -->
//ProductList.vue component
<script setup>
//api result
const productList = ref('')

//api call
//(......)
</script>
<template>
 <h2>{{productList.title}}</h2>
 <router-link :to="{name: 'product', params: {id: product.id} }" >Buy now</router-link>
</template>

<!-- ======== -->
//ProductView.vue component
<script setup>
//api result
const productDetails = ref('')

//api call
//(......)
</script>
<template>
<router-link :to="{name: 'specification'}">visit product</router-link>
<router-link :to="{name: 'Shippinginfo'}">visit product</router-link>
</template>

<!-- ============ -->
//Specification.vue component
<template>
<h1>This is a Specification Page</h1>
</template>

<!-- ========= -->
//Shippinginfo.vue component
<template>
<h1>This is a  Shippinginfo Page</h1>
</template>