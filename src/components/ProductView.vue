<script setup>
document.title= 'Product view Page'
import axios from 'axios';
import { ref, reactive, onBeforeMount } from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const productDetails = ref('')
const loading = ref(true)

onBeforeMount( async () => {
  const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
  productDetails.value = res.data
  loading.value = false
})


const activeLink = ref('specification')
const setActiveLink = (link) => {
    activeLink.value = link // Update the active link when a RouterLink is clicked
}
</script>

<template>
  <div class="menuGap"></div>
<!-- {{ console.log(productDetails) }} -->
<!-- content -->
<section class="py-5">
  <div class="container">
    <div class="row gx-5">
      <a side class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
          <a  class="rounded-4" target="_blank" data-type="image" href="#">
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" :src="productDetails.thumbnail" />
          </a>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <div v-for="(otherImage, index) in productDetails.images" :key="index" class="ms-2 border border-warning p-2 rounded-3">
            <img width="60" height="60" class=" rounded-2" :src="otherImage ? otherImage : productDetails.thumbnail " />
          </div>
          
        </div>
        <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// -->
      </a>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title ">{{ productDetails.title }} </h4>
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span class="text-success ms-2">In stock</span>
          </div>

          <div class="mb-3">
            <b class=h4>Price: </b> 
            <span class="h5">${{ productDetails.price }}</span>
            <span class="text-muted">/per pcs</span>
          </div>

          <p>{{ productDetails.description }}</p>

          <div class="row">
            <dt class="col-3">Type:</dt>
            <dd class="col-9">Regular</dd>

            <dt class="col-3">Color</dt>
            <dd class="col-9">Brown</dd>

            <dt class="col-3">Material</dt>
            <dd class="col-9">Cotton, Jeans</dd>

            <dt class="col-3">Category</dt>
            <dd class="col-9">{{ productDetails.category }}</dd>

            <dt class="col-3">Brand</dt>
            <dd class="col-9">{{ productDetails.brand }}</dd>
          </div>

          <hr />

          <div class="row mb-4">
            <div class="col-md-4 col-6">
              <label class="mb-2">Size</label>
              <select class="form-select border border-secondary" style="height: 35px;">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <!-- col.// -->
            <div class="col-md-4 col-6 mb-3">
              <label class="mb-2 d-block">Quantity</label>
              <div class="input-group mb-3" style="width: 170px;">
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="#" class="btn ms-2 btn-warning shadow-0"> Buy now </a>
          <a href="#" class="btn ms-2 btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" class="btn ms-2 btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a>
        </div>
      </main>
    </div>
  </div>
</section>
<!-- content -->

<section class=" border-top py-4">
  <div class="container">
    <div class="row gx-4">
      <div class="col-lg-8 mb-4">
        <div class="border rounded-2 px-3 py-2 ">
          <!-- Pills navs -->
          <ul class="nav nav-pills nav-justified mb-3">
            <li class="nav-item d-flex" >
              <RouterLink :to="{name: 'specification'}" @click="setActiveLink('specification')" :class="{ 'active': activeLink === 'specification' }" class="nav-link d-flex align-items-center justify-content-center w-100 " >Specification</RouterLink>
            </li>
            <li class="nav-item d-flex" >
              <RouterLink :to="{name: 'Warrantyinfo'}" @click="setActiveLink('Warrantyinfo')" :class="{ 'active': activeLink === 'Warrantyinfo' }" class="nav-link d-flex align-items-center justify-content-center w-100" >Warranty info</RouterLink>
            </li>
            <li class="nav-item d-flex" >
              <RouterLink :to="{name: 'Shippinginfo'}" @click="setActiveLink('Shippinginfo')" :class="{ 'active': activeLink === 'Shippinginfo' }" class="nav-link d-flex align-items-center justify-content-center w-100" >Shipping info</RouterLink>
            </li>
            <li class="nav-item d-flex" >
              <RouterLink :to="{name: 'Sellerprofile'}" @click="setActiveLink('Sellerprofile')" :class="{ 'active': activeLink === 'Sellerprofile' }" class="nav-link d-flex align-items-center justify-content-center w-100">Seller profile</RouterLink>
            </li>
          </ul>
          <!-- Other Component Load This Section -->
          <router-view></router-view>
          <!-- Other Component Load This Section -->
        </div>
      </div>

      <!-- Similar items -->
      <div class="col-lg-4">
        <div class="px-0 border rounded-2 shadow-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Similar items</h5>
              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1">
                    Rucksack Backpack Large <br />
                    Line Mounts
                  </a>
                  <strong class="text-dark"> $38.90</strong>
                </div>
              </div>

              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1">
                    Summer New Men's Denim <br />
                    Jeans Shorts
                  </a>
                  <strong class="text-dark"> $29.50</strong>
                </div>
              </div>

              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                  <strong class="text-dark"> $120.00</strong>
                </div>
              </div>

              <div class="d-flex">
                <a href="#" class="me-3">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                  <strong class="text-dark"> $339.90</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>
.menuGap{
    margin-top: 5rem;
    margin-bottom: 2rem;
}
</style>