import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/FrontProductsView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'productList',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
