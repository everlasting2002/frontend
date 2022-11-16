import { createRouter, createWebHashHistory } from 'vue-router';
 
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      alias: "/",
      component: () => import("../pages/Entrance.vue")
    },{
      path: "/home",
      name: "home",
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
      path: "/waitRoom",
      name: "waitRoom",
      component: () => import("../pages/WaitRoom.vue")
    },{
      path: "/character",
      name: "character",
      component: () => import("../pages/Characters.vue")
    }
  ]
});
 
export default router