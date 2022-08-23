import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import dashboard from "../components/pages/dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: dashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
