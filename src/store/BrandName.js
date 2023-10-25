import axios from "axios";
import { reactive } from "vue";

const BrandName = reactive({
  names: [],
  filterBrand: [],
  filterCetagroy: [],
  loading: true,

  async fetchBrand() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      this.names = res.data.products;
      this.loading = false;

      this.filterBrand = this.names.reduce((accumulator, product) => {
        const brand = product.brand;
        if (!accumulator[brand]) {
          accumulator[brand] = [];
        }
        accumulator[brand].push(product);
        return accumulator;
      }, {});

      this.filterCetagroy = this.names.reduce((accumulator, product) => {
        const cetagory = product.category;
        if (!accumulator[cetagory]) {
          accumulator[cetagory] = [];
        }
        accumulator[cetagory].push(product);
        return accumulator;
      }, {});

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  },
});


export { BrandName }