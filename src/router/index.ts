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
      path: "/waitRoom",
      name: "waitRoom",
      component: () => import("../pages/WaitRoom.vue")
    },{
      path: "/character",
      name: "character",
      component: () => import("../pages/Characters.vue")
    },{
      path: "/play",
      name: "play",
      component: () => import("../pages/Play.vue")
    },{
      path: "/mission",
      name: "mission",
      component: () => import("../pages/Mission.vue")
    }
  ]
});
 
export default router