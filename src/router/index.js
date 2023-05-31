import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import BasketView from "../views/BasketView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product-detail/:id",
    name: "product-detail",
    component: ProductDetailView,
  },
  {
    path: "/basket",
    name: "basket",
    component: BasketView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
