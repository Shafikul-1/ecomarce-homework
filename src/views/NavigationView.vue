<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import { ref } from 'vue'
const activeLink = ref('/') // Initialize the active link
const setActiveLink = (link) => {
    activeLink.value = link // Update the active link when a RouterLink is clicked
    localStorage.setItem('activeLink', link)
}

function theming(){

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
                        <RouterLink to="/cetagory" class="nav-link" :class="{ 'active': activeLink === '/work' }"
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
                    <li>
                        <RouterLink to="/login" class="nav-link">
                            <span class="nav-link-span"><span class="u-nav">Login</span></span>
                        </RouterLink>
                    </li>
                    <li class="nav-item ">
                        <button class="nav-link hover-toggle" >
                            Dropdown <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul class="hover-menu ">
                            <li><a  href="#">Action</a></li>
                            <li><a  href="#">Another action</a></li> 
                            <li><a  href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li>
                        <RouterLink to="/admin" class="nav-link">
                            <span class="nav-link-span"><span class="u-nav">Admin</span></span>
                        </RouterLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button @click="theming" class="ms-2"><i class="fa-solid fa-circle-half-stroke"></i></button>
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
</style>