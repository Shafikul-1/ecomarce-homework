import { ref, reactive , computed} from 'vue'

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const cart = reactive({
    cartProduct: {},

    totalItems: computed(()=>{
      let total = 0
      for (const productId in cart.cartProduct) {
        total += cart.cartProduct[productId].QTY
      }
      return total
    }),

    totalPrice: computed(()=>{
      let total = 0
      for (const productId in cart.cartProduct) {
        total += cart.cartProduct[productId].product.price * cart.cartProduct[productId].QTY
      }
      return total
    }),

    adding(product){
      if (this.cartProduct[product.id]) {
        this.cartProduct[product.id].QTY++
      } else {
        this.cartProduct[product.id] = {
            product,
            QTY:1,
        },
        toast.success('Your Product Added')
      }
      this.productSave()
    },

    qtyAdded(product){
        if (this.cartProduct[product.id]) {
            this.cartProduct[product.id].QTY++
            this.productSave()
          } else {
            toast.error('Please Added This Product')
        }
    },

    qtyRemove(product){
        if (this.cartProduct[product.id]) {
          if (this.cartProduct[product.id].QTY <= 0 ) {
            toast.error('This product is no longer in your cart')
          } else {
            this.cartProduct[product.id].QTY--
            this.productSave()
          }
          } else {
            toast.error('Please Added This Product')
        }
    },

    productSave(){
        localStorage.setItem('userProductSave', JSON.stringify(this.cartProduct))
    },

    getProductData(){
        this.cartProduct = JSON.parse(localStorage.getItem('userProductSave')) || {}
    },
    
    updateProduct(){
      this.productSave()
      toast.success('Your Product Update SuccessFully Done')
    },

    removeProduct(productId){
      // console.log(productId);
      delete this.cartProduct[productId]
      this.productSave()
    }
})
cart.getProductData()

export { cart }