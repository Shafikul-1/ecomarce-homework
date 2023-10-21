<script setup>
//import { ref, reactive } from 'vue'
import { cart } from '../../store/Cart'
// const items = cart.cartProduct
// console.log(cart.cartProduct);

</script>
 
<template>
 <div class="" v-if="cart.cartProduct == null || cart.cartProduct == '' || cart.cartProduct == undefined || cart.cartProduct == {}">
        <h2>Your Cart Product is emty</h2>
  </div>

  <div v-else class="card mb-3" >
    <div class="container mt-5 p-3 rounded cart">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="product-details mr-2">
            <RouterLink to="/products" class="d-flex flex-row align-items-center text-decoration-none text-dark"><i class="fa fa-long-arrow-left"></i><span
                class="ms-2">Continue Shopping</span></RouterLink>
            <hr>
            <h6 class="mb-0">Shopping cart</h6>
            <div class="d-flex justify-content-between"><span>You have {{ cart.totalItems }} items added in your cart</span>
              <div class="d-flex flex-row align-items-center"><span class="text-black-50">Sort by:</span>
                <div class="price ms-2"><span class="mr-1">price</span><i class="fa fa-angle-down"></i></div>
              </div>
            </div>
            <!--  -->
            <template v-for="userproduct in cart.cartProduct">
              <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded" >
              <div class="d-flex flex-row" style="width: 55%;">
                <img class="rounded" :src="userproduct.product.thumbnail" width="40">
                <div class="ms-3" >
                  <span class="font-weight-bold d-block">{{ userproduct.product.title }}</span>
                  <span class="spec">{{ userproduct.product.description }}</span>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <span class="d-flex"><small class="productM"><b>Product Quendity : </b></small> 
                  <input  v-model="userproduct.QTY" type="number" class="form-control userProductQTY" aria-label="QTY input" aria-describedby="inputGroup-sizing-sm">
                </span>
                <span class="d-block ms-3 font-weight-bold"><b>${{ userproduct.product.price }}</b></span>
                <RouterLink :to="{name: 'specification', params:{id: userproduct.product.id}}"><i class="fa-regular fa-eye ms-2"></i></RouterLink>
                <i @click="cart.removeProduct(userproduct.product.id)" class="fa-solid fa-trash-can ms-2" style="cursor: pointer;"></i>
              </div>
            </div>
            </template>
            <button @click="cart.updateProduct()" class="btn btn-primary px-3 mt-2">Save Change </button>
            <!--  -->
          </div>
        </div>
        <div class="col-md-4">
          <div class="payment-info">
            <div class="d-flex justify-content-between align-items-center"><span>Card details</span><img class="rounded"
                src="https://i.imgur.com/WU501C8.jpg" width="30"></div><span class="type d-block mt-3 mb-1">Card
              type</span><label class="radio"> <input type="radio" name="card" value="payment" checked> <span><img
                  width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>

            <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30"
                  src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>

            <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30"
                  src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>


            <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30"
                  src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
            <div><label class="credit-card-label">Name on card</label><input type="text"
                class="form-control credit-inputs" placeholder="Name"></div>
            <div><label class="credit-card-label">Card number</label><input type="text" class="form-control credit-inputs"
                placeholder="0000 0000 0000 0000"></div>
            <div class="row">
              <div class="col-md-6"><label class="credit-card-label">Date</label><input type="text"
                  class="form-control credit-inputs" placeholder="12/24"></div>
              <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text"
                class="form-control credit-inputs" placeholder="342"></div>
          </div>
          <hr class="line">
          <div class="d-flex justify-content-between information"><span>Total Product</span><span>{{ cart.totalItems }} pcs</span></div>
          <div class="d-flex justify-content-between information"><span>Total Price</span><span>${{ cart.totalPrice }}</span></div>
          <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span>
          </div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3"
            type="button"><span>$3020.00</span><span>Checkout<i class="fa fa-long-arrow-right ms-1"></i></span></button>
        </div>
      </div>
    </div>
  </div>
</div></template>

<style scoped>
.productM{
  margin: 0;
}
.userProductQTY{
  width: 75px;
}
.payment-info {
  background: blue;
  padding: 10px;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
}

.product-details {
  padding: 10px;
}

body {
  background: #eee;
}

.cart {
  background: #fff;
}

.p-about {
  font-size: 12px;
}

.table-shadow {
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.42);
  box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.42);
}

.type {
  font-weight: 400;
  font-size: 10px;
}

label.radio {
  cursor: pointer;
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}

label.radio span {
  padding: 1px 12px;
  border: 2px solid #ada9a9;
  display: inline-block;
  color: #8f37aa;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 300;
}

label.radio input:checked + span {
  border-color: #fff;
  background-color: blue;
  color: #fff;
}

.credit-inputs {
  background: rgb(102,102,221);
  color: #fff !important;
  border-color: rgb(102,102,221);
}

.credit-inputs::placeholder {
  color: #fff;
  font-size: 13px;
}

.credit-card-label {
  font-size: 9px;
  font-weight: 300;
}

.form-control.credit-inputs:focus {
  background: rgb(102,102,221);
  border: rgb(102,102,221);
}

.line {
  border-bottom: 1px solid rgb(102,102,221);
}

.information span {
  font-size: 12px;
  font-weight: 500;
}

.information {
  margin-bottom: 5px;
}

.items {
  -webkit-box-shadow: 5px 5px 4px -1px rgba(0,0,0,0.25);
  box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.08);
}

.spec {
  font-size: 11px;
}
</style>