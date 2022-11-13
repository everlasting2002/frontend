<template>
  <div id="main-page" ref="flexible_fullscreen" class="main-page">
    <canvas id="canvas_bg" ref="canvas_bg" class="canvas_bg"></canvas>
    <!-- <img :src="`/assets/img/loading_bg_puzzle.png`" alt="loading_bg_puzzle" class="loading_bg_puzzle" />
    <img :src="`/assets/img/loading_bg_di2.png`" alt="loading_bg_di2" class="loading_bg_di2" />
    <img :src="`/assets/img/loading_pgy2.png`" alt="loading_pgy2" class="loading_pgy2" />
    <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3" class="loading_pgy3" />
    <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3_1" class="loading_pgy3_1" />
    <img :src="`/assets/img/loading_pgy4.png`" alt="loading_pgy4" class="loading_pgy4" />
    <img :src="`/assets/img/pm.png`" alt="logo" class="logo" />
    <div class="title">虚空劫灰往世书</div>
    <img :src="`/assets/img/loading_enter.png`" @click="$router.push('home')" alt="loading_enter"
      class="loading_enter" /> -->
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const canvas_bg = ref<HTMLCanvasElement>();
const flexible_fullscreen = ref<HTMLElement>();
let ctx: CanvasRenderingContext2D;
var loading_bg_puzzle = new Image();
var loading_bg_di2 = new Image();
var loading_pgy2 = new Image();
var onload_cnt = ref(0);
var onload_done = false;
window.requestAnimationFrame = (function () {//解决定时器卡问题，使用帧动画
  return window.requestAnimationFrame ||
    function (callback) {
      window.setInterval(callback, 1000 / 60);
    };
})();
const draw = () => {
  var now = new Date();
  var sec = now.getSeconds();
  console.log("time = " + now);
  var __width = canvas_bg.value!.width;
  var __height = canvas_bg.value!.height;
  ctx.clearRect(0, 0, __width, __height);
  // ctx.drawImage(loading_bg_puzzle, 0, 0, __width, __height);
  // ctx.drawImage(loading_bg_di2, 0, 0, __width, __height);
  ctx.drawImage(loading_pgy2, 0.18 * __width, 0.80 * __height, 0.06 * __width, 0.20 * __height);
  window.requestAnimationFrame(draw);
}
const initCanvas = () => {
  if (onload_done == false) return;
  ctx = canvas_bg.value?.getContext("2d") as CanvasRenderingContext2D;
  canvas_bg.value!.width = flexible_fullscreen.value!.getBoundingClientRect().width;
  canvas_bg.value!.height = flexible_fullscreen.value!.getBoundingClientRect().height;
  draw();
}
const preload = () => {
  loading_bg_puzzle.src = 'assets/img/loading_bg_puzzle.png';
  loading_bg_puzzle.onload = function () { onload_cnt.value++; };
  loading_bg_di2.src = 'assets/img/loading_bg_di2.png';
  loading_bg_di2.onload = function () { onload_cnt.value++; }
  loading_pgy2.src = 'assets/img/loading_pgy2.png';
  loading_pgy2.onload = function () { onload_cnt.value++; }
}
onMounted(() => {
  preload();
  window.onresize = () => {
    initCanvas();
  };
})
watch(onload_cnt, (new_onload_cnt) => {
  if (new_onload_cnt == 3) {
    onload_done = true;
    initCanvas();
  }
})
</script>

<style lang="scss" scoped>
.main-page {
  position: relative;
  width: var(--width);
  height: var(--height);
  top: calc((100vh - var(--height)) / 2);
  margin: auto;
  overflow: hidden;

  .canvas_bg {
    z-index: 1;
    position: absolute;
  }

  .canvas_bg {
    z-index: 1;
    position: absolute;
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
    opacity: 1;
    width: calc(10/100*var(--width));
    left: calc(18/100*var(--width));
    top: calc(74/100*var(--height));
    z-index: 2;
  }

  .loading_pgy3 {
    position: absolute;
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
    width: calc(38/100*var(--width));
    left: calc(8/100*var(--width)*(-1));
    top: calc(45/100*var(--height));
    z-index: 2;
  }

  .logo {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: calc(1/5*var(--width));
    top: calc((1/4*var(--height)) / 2);
    z-index: 4;
  }

  .title {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: calc((48/100*var(--height)));
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
    top: calc((2/3*var(--height)));
    width: calc((2/3*var(--height)));
    margin: auto;
    text-align: center;
    z-index: 4;
  }
}
</style>
