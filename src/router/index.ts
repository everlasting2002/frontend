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
    },{
      path: "/createRoom",
      name: "createRoom",
      component: () => import("../pages/CreateRoom.vue")
    }
  ]
});
 
export default router