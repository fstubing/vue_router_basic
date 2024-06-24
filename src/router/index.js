import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: () => {
      return {
        nombre: "DESAYUNOS",
        descripcion: "Desayunos nutritivos y deliciosos",
        precio: 5000,
        cantidad: "Para dos personas",
      };
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/productos",
    name: "productos",
    component: () =>
      import(/* webpackChunkName: "productos" */ "../views/ProductosView.vue"),
    props: () => {
      return {
        nombre: "DESAYUNOS",
        descripcion: "Desayunos nutritivos y deliciosos",
        precio: 5000,
        cantidad: "Para dos personas",
      };
    },
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
