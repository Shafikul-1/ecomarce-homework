import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ()=> import ('../components/ProductList.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ()=> import ('../components/ProductView.vue'),
      children:[
        {
          path: 'specification',
          name: 'specification',
          component: ()=> import('../components/Product_Info/Specification.vue')
        },
        {
          path: 'shopping-information',
          name: 'Shippinginfo',
          component: ()=> import('../components/Product_Info/Shippinginfo.vue')
        },
        {
          path: 'warranty-information',
          name: 'Warrantyinfo',
          component: ()=> import('../components/Product_Info/Warrantyinfo.vue')
        },
        {
          path: 'sellar-profile',
          name: 'Sellerprofile',
          component: ()=> import('../components/Product_Info/Sellerprofile.vue')
        },
        
      ]
    },
    {
      path: '/cetagory',
      component: ()=> import('../views/Cetagory.vue')
    },
    {
      path: '/contact',
      component: ()=> import('../views/Contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      component: ()=>import('../views/Admin/AdminHome.vue')
    },
    {
      path: '/login',
      component: ()=> import ('../views/Admin/Login.vue')
    }
  ]
})

export default router
