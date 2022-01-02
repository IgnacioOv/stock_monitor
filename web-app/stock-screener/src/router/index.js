import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/profile",
    name: "Perfil",
    
    component: () =>
      import( "../views/Profile.vue"),
  },
  {
    path: "/login",
    name: "Login",
    
    component: () =>
      import( "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
