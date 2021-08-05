import { createRouter, createWebHistory } from "vue-router";
import Navbar from "@/components/Layout/Navbar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: Navbar,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/Register"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/Login"),
    meta: {
      layout: "empty",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
