import { createRouter, createWebHistory } from 'vue-router'
import FacturaDetalle from '../views/FacturaDetalle.vue'
import Home from '../views/Home.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/factura/:id',
      name: 'FacturaDetalle',
      component: FacturaDetalle,
    },
  ],
})
  