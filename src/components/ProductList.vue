<script setup>
document.title='Produdct LIst page'
import{ ref, reactive, onMounted, watch } from 'vue'
import { ContentLoader } from "vue-content-loader"
import { whichList } from '../store/WhichList';
import { searchFilter } from '../store/SearchAndFilter'
import { getProductData } from '../store/Api_Product'
import { BrandName } from '../store/BrandName'

// All Product List
onMounted(() => {
  getProductData.fetchData(),
  BrandName.fetchBrand()
})

//Search........
const searchShow = ref(false)

// List View And Gard View
const views = ref(true)


// ActiveLink
const activeLink = ref('List-view')
const viewActive = (link) => {
    activeLink.value = link
}



</script>

<template>
<!-- sidebar + content Start -->
<section class="menuGap">
  <div class="container">
    <div class="row">
      <!-- sidebar Start -->
      <div class="col-md-3 position-relative">
        <!-- Toggle button -->
        <button class="btn btn-outline-secondary mb-3 w-100 d-lg-none" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
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
                    <div  v-if="BrandName.loading == true">
                      <p>Loading ...</p>
                    </div>
                    <!-- -->
                    <div v-if="BrandName.loading == false" v-for="(brand, index) in BrandName.filterBrand" :key="index" class="form-check pointer">
                      <label class="form-check-label pointer" :for="'brand'+index">{{ brand[0].brand }}</label>
                      <span class="badge badge-secondary float-end text-dark">{{ brand.length }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                        class="accordion-button text-light bg-dark bg-gradient mt-3"
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#cetagory" 
                        aria-expanded="true"
                        aria-controls="brands"
                >
                  Cetagory
                </button>
              </h2>
              <div id="cetagory" class="accordion-collapse collapse show" aria-labelledby="headingTwo">
                <div class="accordion-body">
                  <div>
                    <!-- Checked checkbox -->
                    <div  v-if="BrandName.loading == true">
                      <p>Loading ...</p>
                    </div>
                    <!-- -->
                    <RouterLink to="/products/cetagory" v-for="(cetagory, index) in BrandName.filterCetagroy" :key="index" v-if="BrandName.loading == false" class="form-check pointer categoryHover">
                      <label class="form-check-label text-capitalize  pointer"  :for="'cetagory'+index">{{ cetagory[0].brand }}</label>
                      <span class="badge badge-secondary float-end text-dark">{{ cetagory.length }}</span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <!-- <div class="accordion-item">
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
                    <input v-model="getProductData.getRangeData" type="range" class="form-range" id="customRange1" />
                  </div>
                <p>{{ getProductData.getRangeData }}</p>
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
                  <button type="button" class="btn btn-white w-100 border border-secondary">
                      Product Range
                    </button>
                </div>
              </div>
            </div> -->
            <!-- <div class="accordion-item">
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
            </div> -->
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

        <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3 position-relative">
          <strong class="d-block py-2">Total Items: {{ getProductData.getCollectData.total }} pcs</strong>
          
          <div class="ms-5">
            <div class="input-group flex-nowrap">
              <span @click="searchShow = !searchShow" class="input-group-text shadowSearchIcon" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input v-if="searchShow" type="text" v-model="searchFilter.inputData" class="form-control" placeholder="Search Product" aria-label="Search-Product" aria-describedby="addon-wrapping">
            </div>
            <div v-if="searchShow" class="position-absolute p-3 rounded mt-3" style="z-index:111; background: rgba(252, 252, 252, 0.774); box-shadow: 0px 0px 10px 1px black;">
              <p><b>Search:</b> {{ searchFilter.inputData }}</p>
              <ul style="list-style: none; padding: 0;">
                <li v-for="(searchResult, index) in searchFilter.filteredData" :key="index"> <router-link :to="{name: 'specification', params: {id: searchResult.id}}" class="filterItem">{{ searchResult.title }}</router-link> </li>
              </ul>
            </div>
          </div>

          <!--  -->
          <div class="ms-auto">
            <select class="form-select d-inline-block w-auto border pt-1 ">
              <option value="0">Best match</option>
              <option value="1">Recommended</option>
              <option value="2">High rated</option>
              <option value="3">Randomly</option>
            </select>
            <div class="btn-group shadow-0 border ms-3" >
              <a @click="views = true" href="#" class="btn btn-light "  :class="{ 'active': activeLink === 'List-view' }" title="List view" >
                <i class="fa fa-bars fa-lg" @click="viewActive('List-view')" ></i>
              </a>
              <a @click="views = false" href="#" class="btn btn-light" :class="{ 'active': activeLink === 'Grid-view' }" title="Grid view" >
                <i class="fa fa-th fa-lg" @click="viewActive('Grid-view')"  ></i>
              </a>
            </div>
          </div>
        </header>
      <!-- Select And View Button Start End -->

        <!-- Loader Start .... -->
        <div v-if="getProductData.loading == true">
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
        
        <!-- List View Start -->
        <div v-if="views == true"  v-for="product in getProductData.getCollectData.products" :key="product.id" class="row justify-content-center mb-3">
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
                  
                      <button type="button" @click="whichList.adddingItems(product)" class="btn btn-light border px-2 pt-2 icon-hover ms-2">
                        <i v-if="whichList.whichListItems.find(i => i.id === product.id)" class="fa-solid fa-heart px-1"></i>
                        <i v-else class="fa-regular fa-heart px-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- List View End -->

        <!-- Gred View Start  -->
        <div v-if="views == false" class="container">
          <div class="row" id="ads">
            <div v-for="item in getProductData.getCollectData.products" class="col-md-4 " style="margin-top: 2rem;">
              {{ console.log(item)}}
              <div class="card rounded">
                <div class="card-image">
                  <span class="card-notify-badge ">{{ item.brand }}</span>
                  <span class="card-notify-year whichlisticon"  @click="whichList.adddingItems(item)"> 
                      <i v-if="whichList.whichListItems.find(i => i.id === item.id)" class="fa-solid fa-heart px-1"></i>
                      <i v-else class="fa-regular fa-heart px-1"></i>
                  </span>
                  <div class="productImageSize">
                    <img class="img-fluid"
                      :src="item.thumbnail"
                      :alt="item.title" 
                      :title="item.title" />
                  </div>
                </div>
                <div class="card-image-overlay m-auto">
                  <span class="card-detail-badge mt-2">Price: ${{ item.price }}</span>
                  <span class="card-detail-badges mt-2">Discount: ${{ item.discountPercentage }}</span>
                </div>
                <div class="card-body text-center">
                  <div class="ad-title m-auto">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description.split(' ').splice(1,10).join(' ') }} <router-link :to="{name: 'specification', params: {id: item.id}}" class="text-decoration-none">Read More</router-link></p>
                  </div>
                  <router-link :to="{name: 'specification', params: {id: item.id}}" class="animationBTN text-decoration-none ad-btn">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Gread View End -->

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
.hoverSideShow{
  position: fixed;
    top: 11rem;
    left: 28%;
    background-color: red;
    z-index: 9;
    display: block;
}
.categoryHover:hover{
  background: rgba(128, 128, 128, 0.521);
}

.animationBTN{
  width: 165px;
  height: 62px;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 1rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
}
.animationBTN::after {
  content: '';
  width: 100%;
  height: 100%;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  filter: blur(15px);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}
.animationBTN:active {
  transform: scale(0.9) rotate(3deg);
  background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  transition: 0.5s;
}
.shadowSearchIcon{
  cursor:pointer;
  box-shadow: 0px 0px 4px 1px black;
}
.filterItem{
  text-decoration: none;
  color: black;
}
.filterItem:hover{
  text-decoration: underline;
}
.whichlisticon{
  cursor: pointer;
}
.productImageSize{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
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


/* ==list view css */

#ads {
  margin: 30px 0 30px 0;

}
#ads .card-notify-badge {
  position: absolute;
  left: -10px;
  top: -20px;
  background: #f2d900;
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  color: #000;
  padding: 5px 10px;
  font-size: 14px;

}

#ads .card-notify-year {
  position: absolute;
  right: -10px;
  top: -20px;
  background: #ff4444;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  font-size: 14px;
  width: 50px;
  height: 50px;
  padding: 15px 0 0 0;
}


#ads .card-detail-badge {
  background: #f2d900;
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  color: #000;
  padding: 5px 10px;
  font-size: 14px;
}

#ads .card-detail-badges{
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  color: #ffffff;
  margin: 0 4px;
  padding: 5px 10px;
  font-size: 14px;
  background: green;
}


#ads .card:hover {
  background: #fff;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  border-radius: 4px;
  transition: all 0.3s ease;
}

#ads .card-image-overlay {
  font-size: 20px;

}


#ads .card-image-overlay span {
  display: inline-block;
}


#ads .ad-btn {
  text-transform: uppercase;
  width: 150px;
  height: 40px;
  border-radius: 80px;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  border: 3px solid #e6de08;
  display: block;
  text-decoration: none;
  margin: 20px auto 1px auto;
  overflow: hidden;
  position: relative;
}

#ads .ad-btn:hover {
  color: #1e1717;
  border: 2px solid #e6de08;
  background: transparent;
  transition: all 0.3s ease;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
}

#ads .ad-title h5 {
  text-transform: uppercase;
  font-size: 18px;
}
</style>


