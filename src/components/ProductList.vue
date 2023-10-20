<script setup>
document.title='Produdct LIst page'
import{ ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios';
import { ContentLoader } from "vue-content-loader"
import { cart } from '../store/Cart';

const productsList = ref({})
const loading = ref(true)
onBeforeMount(async () => {
  const url = 'https://dummyjson.com/products'
  const response = await axios.get(url)
  productsList.value = response.data
  loading.value = false
})

</script>

<template>
<!-- sidebar + content Start -->
<section class="menuGap">
  <div class="container">
    <div class="row">
      <!-- sidebar Start -->
      <div class="col-md-3 position-relative">
        <!-- Toggle button -->
        <button
                class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span>Show filter</span>
        </button>
        <!-- Collapsible wrapper -->
        <div class="collapse card d-lg-block mb-5 sidebarFixed" id="navbarSupportedContent">
          <div class="accordion " id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                        class="accordion-button text-light bg-dark bg-gradient "
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#relatedItem" 
                        aria-expanded="true"
                        aria-controls="relatedItem"
                >
                  Related items
                </button>
              </h2>
              <div  id="relatedItem" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div class="accordion-body">
                  <ul class="list-unstyled">
                    <li><a href="#" >Electronics </a></li>
                    <li><a href="#" >Home items </a></li>
                    <li><a href="#" >Books, Magazines </a></li>
                    <li><a href="#" >Men's clothing </a></li>
                    <li><a href="#" >Interiors items </a></li>
                    <li><a href="#" >Underwears </a></li>
                    <li><a href="#" >Shoes for men </a></li>
                    <li><a href="#" >Accessories </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                        class="accordion-button text-light bg-dark bg-gradient mt-3"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#brands" 
                        aria-expanded="true"
                        aria-controls="brands"
                >
                  Brands
                </button>
              </h2>
              <div id="brands" class="accordion-collapse collapse show" aria-labelledby="headingTwo">
                <div class="accordion-body">
                  <div>
                    <!-- Checked checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked />
                      <label class="form-check-label" for="flexCheckChecked1">Mercedes</label>
                      <span class="badge badge-secondary float-end">120</span>
                    </div>
                    <!-- Checked checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                      <label class="form-check-label" for="flexCheckChecked2">Toyota</label>
                      <span class="badge badge-secondary float-end">15</span>
                    </div>
                    <!-- Checked checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" checked />
                      <label class="form-check-label" for="flexCheckChecked3">Mitsubishi</label>
                      <span class="badge badge-secondary float-end">35</span>
                    </div>
                    <!-- Checked checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked />
                      <label class="form-check-label" for="flexCheckChecked4">Nissan</label>
                      <span class="badge badge-secondary float-end">89</span>
                    </div>
                    <!-- Default checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">Honda</label>
                      <span class="badge badge-secondary float-end">30</span>
                    </div>
                    <!-- Default checkbox -->
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">Suzuki</label>
                      <span class="badge badge-secondary float-end">30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                        class="accordion-button text-light bg-dark bg-gradient mt-3"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#price" 
                        aria-expanded="true"
                        aria-controls="price"
                >
                  Price
                </button>
              </h2>
              <div id="price" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div class="accordion-body">
                  <div class="range">
                    <input type="range" class="form-range" id="customRange1" />
                  </div>
                  <div class="row mb-3">
                    <div class="col-6">
                      <p class="mb-0">
                        Min
                      </p>
                      <div class="form-outline">
                        <input type="number" id="typeNumber" class="form-control" />
                        <label class="form-label" for="typeNumber">$0</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <p class="mb-0">
                        Max
                      </p>
                      <div class="form-outline">
                        <input type="number" id="typeNumber" class="form-control" />
                        <label class="form-label" for="typeNumber">$1,0000</label>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-white w-100 border border-secondary">apply</button>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                        class="accordion-button text-light bg-dark bg-gradient mt-3"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#size" 
                        aria-expanded="true"
                        aria-controls="size"
                        >
                  Size
                </button>
              </h2>
              <div id="size" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div class="accordion-body">
                  <input type="checkbox" class="btn-check border justify-content-center" id="btn-check1" checked autocomplete="off" />
                  <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check1">XS</label>
                  <input type="checkbox" class="btn-check border justify-content-center" id="btn-check2" checked autocomplete="off" />
                  <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check2">SM</label>
                  <input type="checkbox" class="btn-check border justify-content-center" id="btn-check3" checked autocomplete="off" />
                  <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check3">LG</label>
                  <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4" checked autocomplete="off" />
                  <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check4">XXL</label>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                        class="accordion-button text-light bg-dark bg-gradient mt-3"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#rating" 
                        aria-expanded="true"
                        aria-controls="rating"
                        >
                  Ratings
                </button>
              </h2>
              <div id="rating" class="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div class="accordion-body">
                  <!-- Default checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                    <label class="form-check-label" for="flexCheckDefault">
                      <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-warning"></i>
                    </label>
                  </div>
                  <!-- Default checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                    <label class="form-check-label" for="flexCheckDefault">
                      <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
                      <i class="fas fa-star text-secondary"></i>
                    </label>
                  </div>
                  <!-- Default checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                    <label class="form-check-label" for="flexCheckDefault">
                      <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-secondary"></i>
                      <i class="fas fa-star text-secondary"></i>
                    </label>
                  </div>
                  <!-- Default checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                    <label class="form-check-label" for="flexCheckDefault">
                      <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-secondary"></i><i class="fas fa-star text-secondary"></i>
                      <i class="fas fa-star text-secondary"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar End -->

      <!-- Select And View Button Start -->
      <div class="col-md-9 ">
        <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3 ">
          <strong class="d-block py-2">Total Items: {{ productsList.total }} pcs</strong>
          <div class="ms-auto">
            <select class="form-select d-inline-block w-auto border pt-1 ">
              <option value="0">Best match</option>
              <option value="1">Recommended</option>
              <option value="2">High rated</option>
              <option value="3">Randomly</option>
            </select>
            <div class="btn-group shadow-0 border ms-3">
              <a href="#" class="btn btn-light" title="List view">
                <i  class="fa fa-bars fa-lg"></i>
              </a>
              <a href="#" class="btn btn-light active" title="Grid view">
                <i class="fa fa-th fa-lg"></i>
              </a>
            </div>
          </div>
        </header>
      <!-- Select And View Button Start End -->

        <!-- Loader Start .... -->
        <div v-if="loading == true">
          <ContentLoader 
            viewBox="0 0 500 100"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="10" y="20" rx="3" ry="3" width="100" height="60" />
            <rect x="130" y="25" rx="2" ry="2" width="150" height="10" />
            <rect x="130" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="200" y="45" rx="2" ry="2" width="70" height="10" />
            <rect x="130" y="65" rx="2" ry="2" width="200" height="10" />

            <rect x="350" y="25" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="65" rx="2" ry="2" width="50" height="10" />
          </ContentLoader>
          <ContentLoader 
            viewBox="0 0 500 100"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="10" y="20" rx="3" ry="3" width="100" height="60" />
            <rect x="130" y="25" rx="2" ry="2" width="150" height="10" />
            <rect x="130" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="200" y="45" rx="2" ry="2" width="70" height="10" />
            <rect x="130" y="65" rx="2" ry="2" width="200" height="10" />

            <rect x="350" y="25" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="65" rx="2" ry="2" width="50" height="10" />
          </ContentLoader>
          <ContentLoader 
            viewBox="0 0 500 100"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="10" y="20" rx="3" ry="3" width="100" height="60" />
            <rect x="130" y="25" rx="2" ry="2" width="150" height="10" />
            <rect x="130" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="200" y="45" rx="2" ry="2" width="70" height="10" />
            <rect x="130" y="65" rx="2" ry="2" width="200" height="10" />

            <rect x="350" y="25" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="65" rx="2" ry="2" width="50" height="10" />
          </ContentLoader>
          <ContentLoader 
            viewBox="0 0 500 100"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="10" y="20" rx="3" ry="3" width="100" height="60" />
            <rect x="130" y="25" rx="2" ry="2" width="150" height="10" />
            <rect x="130" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="200" y="45" rx="2" ry="2" width="70" height="10" />
            <rect x="130" y="65" rx="2" ry="2" width="200" height="10" />

            <rect x="350" y="25" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="45" rx="2" ry="2" width="50" height="10" />
            <rect x="350" y="65" rx="2" ry="2" width="50" height="10" />
          </ContentLoader>
        </div>
        <!-- Loader End .... -->
        <!-- Main Product List Start -->
        <div v-for="product in productsList.products" :key="product.id" class="row justify-content-center mb-3">
          <div class="col-md-12">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row g-0">
                  <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                      <img :src="product.thumbnail" class="w-100" />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-5 col-sm-7">
                    <h5>{{ product.title }}</h5>
                    <div class="d-flex flex-row">
                      <div class="text-warning mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span class="ms-1">{{ product.rating }}</span>
                      </div>
                      <span class="text-muted">{{ product.stock }} Stock</span>
                    </div>

                    <p class="text mb-4 mb-md-0">{{ product.description }}</p>
                  </div>
                  <div class="col-xl-3 col-md-3 col-sm-5">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">${{ product.price }}</h4>
                      <span class="text-danger"><s>${{ product.discountPercentage }}</s></span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="mt-4">
                      <router-link :to="{ name: 'specification', params: { id: product.id } }" class="btn btn-primary shadow">Visit Product</router-link>

                      <button type="button" class="btn btn-light border px-2 pt-2 icon-hover ms-2"><i class="fas fa-heart fa-lg px-1"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Product List End -->

    
        <hr />

        <!-- Pagination -->
        <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- Pagination -->
      </div>
    </div>
  </div>
</section>
<!-- sidebar + content Dnd -->


</template>


<style scoped>
.menuGap{
    margin-top: 5rem;
    margin-bottom: 2rem;
}
.sidebarFixed{
    height: 85vh;
    position: fixed;
    overflow-y: auto;
    width: 22%;
}
</style>