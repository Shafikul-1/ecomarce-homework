import axios from 'axios'
import { ref } from 'vue'

const mainUrl = 'https://dummyjson.com/'

const listOfProduct = {
     productList: ref({}),
     productListLoading: ref(false),
     products: (async () => {
         try {
             const response = await axios.get(mainUrl + 'products');
             listOfProduct.productList.value = response.data;
             listOfProduct.productListLoading.value = true;
         } catch (error) {
             console.error('Error fetching data:', error);
         }
     })()
}

export { listOfProduct };
