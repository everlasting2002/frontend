<template>
  <div id="main-page" ref="flexible_fullscreen" class="main-page">
      <img :src="`/assets/img/loading_bg_puzzle.png`" alt="loading_bg_puzzle" class="loading_bg_puzzle" />
      <img :src="`/assets/img/loading_bg_di2.png`" alt="loading_bg_di2" class="loading_bg_di2" />
    <div v-show="pgy_show">
      <img :src="`/assets/img/loading_pgy2.png`" alt="loading_pgy2" class="loading_pgy2" />
      <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3" class="loading_pgy3" />
      <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3_1" class="loading_pgy3_1" />
      <img :src="`/assets/img/loading_pgy4.png`" alt="loading_pgy4" class="loading_pgy4" />

      <img :src="`/assets/img/minipgy/loading_minipgy.png`" alt="loading_minipgy" class="loading_minipgy" />
      <img :src="`/assets/img/minipgy/loading_minipgyball.png`" alt="loading_minipgyball" class="loading_minipgyball" />
      <img :src="`/assets/img/minipgy/ball_2.png`" alt="ball_2" class="ball_2" />
      <img :src="`/assets/img/minipgy/mini_2.png`" alt="mini_2" class="mini_2" />
      <img :src="`/assets/img/minipgy/ball_2.png`" alt="ball_3" class="ball_3" />
    </div>

    <img :src="pmUrl" id="pmgif" alt="logo" class="logo" v-show="pm_show"/>
    <div class="title" v-show="!pm_show">须弥书</div>
    <Btn v-show="(loaded===true)" class="loading_enter" @click="skip" type="Enter" content="点击进入" />
    <div v-show="(loaded===false)" class="loading_percent">{{percent}}%</div>
  </div>

</template>

<script setup lang="ts">
import Btn from "../components/Btn.vue";
import { floating_pgy, skip } from "../reactivity/entrance";
import { onMounted, Ref, ref, watch } from "vue";
import { gsap } from "gsap";

const percent : Ref<number> = ref(0);
const loaded : Ref<boolean> = ref(false);
var pm_show : Ref<boolean> = ref(true);
var pgy_show : Ref<boolean> = ref(false);
var pmUrl : Ref<string> = ref("/assets/img/pm1.gif");
var preimgUrl : string[] = [
  "/assets/img/loading_bg_puzzle.png",
  "/assets/img/loading_bg_di2.png",
  "/assets/img/pm1.gif",
  "/assets/img/pm2.gif",
  "/assets/img/pm3.gif",
];
let preloadedNum = 0;
for(let item of preimgUrl){
  let img = new Image();
  img.src = item;
  img.onload = function(){
    preloadedNum++;
    if(preloadedNum == 5){
      pm_show.value = true;
      setTimeout(() => {
        pmUrl.value = "/assets/img/pm2.gif";
      }, 1200);
    }
  }
}

var pgyimgUrl : string[] = [
  "/assets/img/loading_pgy2.png",
  "/assets/img/loading_pgy3.png",
  "/assets/img/loading_pgy4.png",
  "/assets/img/minipgy/loading_minipgy.png",
  "/assets/img/minipgy/loading_minipgyball.png",
  "/assets/img/minipgy/ball_2.png",
  "/assets/img/minipgy/mini_2.png",
  "/assets/img/minipgy/ball_2.png",
];

let pgyloadedNum = 0;
let pgyNum = pgyimgUrl.length;
for(let item of pgyimgUrl){
  let img = new Image();
  img.src = item;
  img.onload = function(){
    pgyloadedNum++;
    if(pgyloadedNum == pgyNum){
      pgy_show.value = true;
      floating_pgy();
    }
  }
}

setTimeout(() => {
  pmUrl.value = "/assets/img/pm2.gif";
}, 1200);

watch(loaded, (newloaded) => {
  pmUrl.value = "/assets/img/pm3.gif";
  setTimeout(() => {
    pm_show.value = false;
  }, 840);
})

const imgModule = import.meta.glob('../../assets/**/*.{png,svg,gif,jpg}',{as:'url'});
//console.log(imgModule);
const imgUrl : string[] = [];
Object.keys(imgModule).forEach(item =>{
  imgUrl.push(item);
});
const imgNum = imgUrl.length;
let loadedNum = 0;

for(let item of imgUrl){
  let img = new Image();
  img.src = item;
  img.onload = function(){
    loadedNum++;
    percent.value=Math.floor((loadedNum/imgNum)*100);
    if(loadedNum===imgNum){
      pmUrl.value = "/assets/img/pm3.gif";
      setTimeout(() => {
        pm_show.value = false;
        loaded.value=true;
        gsap.fromTo(".title", {
          opacity: 0.7,
          scale: 0.9,
        }, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        })
      }, 840);
    }
  }
}

onMounted(() => {
  floating_pgy();
});

</script>

<style lang="scss" scoped>
.main-page {
  .loading_percent{
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.7;
    height: 2em;
    top: calc((2/3*var(--height)));
    width: calc((40/100*var(--height)));
    font-size: calc((4/100*var(--height)));
    color: #746257;
    margin: auto;
    text-align: center;
    z-index: 4;
  }
  .loading_bg_puzzle {
    z-index: 1;
    position: absolute;
    width: 100%;
  }

  .loading_bg_di2 {
    z-index: 2;
    position: absolute;
    width: 100%;
  }

  .loading_pgy2 {
    position: absolute;
    transform-origin: bottom;
    opacity: 1;
    width: calc(10/100*var(--width));
    left: calc(18/100*var(--width));
    top: calc(74/100*var(--height));
    z-index: 2;
  }

  .loading_pgy3 {
    position: absolute;
    // transform-origin: bottom;
    opacity: 0.8;
    width: calc(25/100*var(--width));
    right: calc(4/100*var(--width));
    top: calc(60/100*var(--height));
    z-index: 1;
  }

  .loading_pgy3_1 {
    position: absolute;
    opacity: 0.5;
    width: calc(23/100*var(--width));
    left: calc(23/100*var(--width));
    top: calc(85/100*var(--height));
    z-index: 2;
  }

  .loading_pgy4 {
    position: absolute;
    transform-origin: bottom;
    width: calc(38/100*var(--width));
    left: calc(-8/100*var(--width));
    top: calc(45/100*var(--height));
    z-index: 2;
  }

  .loading_minipgy {
    position: absolute;
    opacity: 0.9;
    width: calc(5/100*var(--width));
    left: calc(1/100*var(--width));
    top: calc(85/100*var(--height));
    z-index: 6;
  }

  .loading_minipgyball {
    position: absolute;
    opacity: 0.7;
    width: calc(7/100*var(--width));
    left: calc(1/100*var(--width));
    top: calc(85/100*var(--height));
    z-index: 6;
  }

  .ball_2 {
    position: absolute;
    opacity: 0.4;
    width: calc(9/100*var(--width));
    left: calc(1/100*var(--width));
    top: calc(85/100*var(--height));
    z-index: 6;
  }

  .ball_3 {
    position: absolute;
    opacity: 0.4;
    width: calc(9/100*var(--width));
    left: calc(25/100*var(--width));
    top: calc(60/100*var(--height));
    z-index: 6;
  }

  .mini_2 {
    position: absolute;
    opacity: 0.5;
    width: calc(6/100*var(--width));
    left: calc(1/100*var(--width));
    top: calc(85/100*var(--height));
    z-index: 6;
  }

  .logo {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: calc(1/5*var(--width));
    top: calc((45/100*var(--height)) / 2);
    z-index: 4;
  }

  .title {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: calc((40/100*var(--height)));
    font-size: calc((1/5*var(--height)) / 2);
    font-weight: bolder;
    letter-spacing: calc((1/35*var(--height)) / 2);
    color: #997A6A;
    z-index: 4;
  }

  .loading_enter {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.7;
    height: 2em;
    top: calc((2/3*var(--height)));
    width: calc((40/100*var(--height)));
    font-size: calc((5/100*var(--height)));
    color: #997A6A;
    margin: auto;
    text-align: center;
    z-index: 4;
  }
}
</style>
