import { ref, reactive } from 'vue'
import { getProductData } from './Api_Product'

const priceRange = reactive({
    allProduct: getProductData.getfetchData,
    getPriceRange: '',
   
    // getprice: watch(priceRange, (newVal)=>{
    //         console.log(newVal);
    //     })

})

export {priceRange}