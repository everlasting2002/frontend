import { createRouter, createWebHashHistory } from 'vue-router';
 
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      alias: "/",
      component: () => import("../pages/Home.vue")
    },{
      path: "/home",
      name: "Home",
      alias: "/",
      component: () => import("../pages/Home.vue")
    }
  ]
});
 
export default router