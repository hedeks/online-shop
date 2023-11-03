import { createRouter, createWebHistory } from "vue-router"
import Catalog from "@/views/Catalog.vue"
import ProductView from "@/views/ProductView.vue"
import CartView from "@/views/Cart.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductView,
    },
    {
      path: '/cart',
      name: 'CartView',
      component: CartView
    }
  ]
});

export default router
