<script setup>
import axios from "axios";
import { reactive } from "vue";

const BrandName = reactive({
  names: [],
  filterBrand: [],

  async fetchBrand() {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      this.names = res.data.products;

      this.filterBrand = this.names.reduce((accumulator, product) => {
        const brand = product.brand;

        if (!accumulator[brand]) {
          accumulator[brand] = [];
        }

        accumulator[brand].push(product);

        return accumulator;
      }, {});

    } catch (error) {
      console.log('Fetch Error:', error);
    }
  }
});

BrandName.fetchBrand()
</script>

<template>
  <div>
    <div v-for="item in BrandName.filterBrand" :key="item">
      {{ console.log(item) }}
      <h3>{{ item[0].brand }}</h3>
      <code>{{ item.length }}</code>
    </div>
    <h3>test</h3>
  </div>
</template>
