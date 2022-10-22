import { createRouter, createWebHashHistory } from 'vue-router';
 
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/",
      component: () => import("../pages/Home.vue")
    },{
      path: "/createRoom",
      name: "createRoom",
      component: () => import("../pages/CreateRoom.vue")
    },{
      path: "/joinRoom",
      name: "joinRoom",
      component: () => import("../pages/JoinRoom.vue")
    },{
      path: "/review",
      name: "review",
      component: () => import("../pages/Review.vue")
    }
  ]
});
 
export default router