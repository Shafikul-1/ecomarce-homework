import axios from "axios";
import { reactive, ref } from "vue";
const getProductData = reactive({
    getCollectData: [],
    loading: true,
    getRangeData: '',
    async fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.getCollectData = response.data;
        this.loading = false
        // console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    filterProductsByPrice(minPrice, maxPrice) {
      return this.getCollectData.filter((product) => {
        const price = product.price;
        return price >= minPrice && price <= maxPrice;
      });
    },
})

export { getProductData };
