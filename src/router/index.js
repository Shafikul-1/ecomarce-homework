import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authenticate } from '../store/UserAuth'

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
      path: '/products/cetagory',
      name: 'cetagory',
      component: ()=> import('../components/Cetagory.vue')
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
      name: 'admin',
      component: ()=>import('../views/Admin/AdminHome.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      component: ()=> import ('../views/Admin/Login.vue')
    },
    {
      path: '/registation',
      component: ()=> import('../views/Admin/Registation.vue')
    },
    {
      path: '/profile',
      component: ()=> import( '../views/Users/Profile.vue')
    },
    {
      path: '/check-out',
      component: ()=> import( '../views/Users/CheckOut.vue')
    },
    {
      path: '/cart',
      component: ()=> import('../views/Users/Cart.vue')
    },
    {
      path: '/save-product',
      component: ()=> import('../views/Users/SaveProduct.vue')
    },
    {
      path: '/which-list',
      component: ()=> import('../views/Users/WhichList.vue')
    },
    {
      path:'/o',
      component: ()=> import('../components/Test.vue')
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.meta.auth == true && !authenticate.isAuth ) {
    next('/login')
  } else {
    next()
  }
})

export default router
