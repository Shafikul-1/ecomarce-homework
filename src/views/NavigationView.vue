<script setup>
import { ref, reactive } from 'vue'
import { authenticate } from '../store/UserAuth'
import { cart } from '../store/Cart';
import { theming } from '../store/theme'
import { whichList } from '../store/WhichList';
import { SaveProduct } from '../store/SaveProduct';
const activeLink = ref('/') // Initialize the active link
const setActiveLink = (link) => {
    activeLink.value = link // Update the active link when a RouterLink is clicked
    localStorage.setItem('activeLink', link)
}


</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <RouterLink to="/" class="nav-link" :class="{ 'active': activeLink === '/' }"
                            @click="setActiveLink('/')">
                            <span class="nav-link-span"><span class="u-nav">Home</span></span>
                        </RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink to="/products" class="nav-link"
                            :class="{ 'active': activeLink === '/products' }" @click="setActiveLink('/products')">
                            <span class="nav-link-span"><span class="u-nav">Product</span></span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link" :class="{ 'active': activeLink === '/about' }"
                            @click="setActiveLink('/about')">
                            <span class="nav-link-span"><span class="u-nav">About</span></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/cetagory" class="nav-link" :class="{ 'active': activeLink === '/cetagory' }"
                            @click="setActiveLink('/cetagroy')">
                            <span class="nav-link-span"><span class="u-nav">Cetagroy</span></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" class="nav-link" :class="{ 'active': activeLink === '/contact' }"
                            @click="setActiveLink('/contact')">
                            <span class="nav-link-span"><span class="u-nav">Contact</span></span>
                        </RouterLink>
                    </li> 
                    <li v-if="!authenticate.isAuth">
                        <RouterLink to="/login" class="nav-link" :class="{ 'active': activeLink === '/login' }"
                            @click="setActiveLink('/login')">
                            <span class="nav-link-span"><span class="u-nav">Login</span></span>
                        </RouterLink>
                    </li>
                    <li v-if="authenticate.isAuth">
                        <RouterLink to="/admin" class="nav-link">
                            <span class="nav-link-span"><span class="u-nav">Admin</span></span>
                        </RouterLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                
                <ul  v-if="authenticate.isAuth" class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown profile">
                        <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu ">
                            <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink>  </li>
                            <li><RouterLink class="dropdown-item" to="/check-out">CheckOut</RouterLink>  </li> 
                            <li><button class="dropdown-item" @click="authenticate.logoutUser()">Logout</button>  </li>
                        </ul>
                    </li>
                    <li>
                        <RouterLink to="/cart" class=" position-relative nav-link" :class="{ 'active': activeLink === '/cart' }"
                            @click="setActiveLink('/cart')">
                            Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{{ cart.totalItems >= 20 ? '19+' : cart.totalItems }} <span class="visually-hidden">unread messages</span></span>
                        </RouterLink>
                    </li>
                    <li  class="nav-item ">
                        <RouterLink to="/which-list" class=" position-relative nav-link" style="margin: 0 0px 0px 27px;" :class="{ 'active': activeLink === '/' }"
                            @click="setActiveLink('/')">
                            <i class="fas fa-heart fa-lg"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">
                            {{ whichList.whichListItems.length > 10 ? '10+' : whichList.whichListItems.length }}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        </RouterLink>
                    </li>
                    <li  class="nav-item ">
                        <RouterLink to="/save-product" class=" position-relative nav-link" style="margin: 0 0px 0px 27px;" :class="{ 'active': activeLink === '/save-product' }"
                            @click="setActiveLink('/save-product')">
                            <i class="fa-solid fa-bookmark"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">
                                {{ SaveProduct.SaveItems.length > 10 ? '10+' : SaveProduct.SaveItems.length }}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </RouterLink>
                    </li>
                    
                </ul>
                <button class="ms-2"><i class="fa-solid fa-circle-half-stroke"></i></button>
            </div>
        </div>
    </nav>

    <div class="mt-5"></div>
</template>

<style scoped>
.hover-toggle:hover .hover-menu{
    display: block !important;
}
.hover-menu{
    list-style: none;
    display: none;
}
.hover-menu li{
    padding: none;
}
.hover-menu li a{
    color: black;
    text-decoration: none;
}
.hover-menu li a:hover{
    text-decoration: underline;
}

.profile{
    margin: 0px 0 0px 28px;
}
</style>