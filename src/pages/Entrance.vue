<template>
  <div id="main-page" ref="flexible_fullscreen" class="main-page">
    <img :src="`/assets/img/loading_bg_puzzle.png`" alt="loading_bg_puzzle" class="loading_bg_puzzle" />
    <img :src="`/assets/img/loading_bg_di2.png`" alt="loading_bg_di2" class="loading_bg_di2" />
    <img :src="`/assets/img/loading_pgy2.png`" alt="loading_pgy2" class="loading_pgy2" />
    <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3" class="loading_pgy3" />
    <img :src="`/assets/img/loading_pgy3.png`" alt="loading_pgy3_1" class="loading_pgy3_1" />
    <img :src="`/assets/img/loading_pgy4.png`" alt="loading_pgy4" class="loading_pgy4" />
    <div id="pgy" ref="pgy" class="pgy">
    </div>
    <img :src="`/assets/img/pm.png`" alt="logo" class="logo" />
    <div class="title">虚空劫灰往世书</div>
    <Btn class="loading_enter" @click="$router.push('Home')" type="Enter" content="点击进入" />
  </div>


</template>

<script setup lang="ts">
import Btn from "../components/Btn.vue";

</script>

<style lang="scss" scoped>
.main-page {
  position: relative;
  width: var(--width);
  height: var(--height);
  top: calc((100vh - var(--height)) / 2);
  margin: auto;
  overflow: hidden;

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
    opacity: 0.7;
    height: 2em;
    top: calc((2/3*var(--height)));
    width: calc((2/3*var(--height)));
    font-size: calc((1/13*var(--height)));
    margin: auto;
    text-align: center;
    z-index: 4;
  }
}
</style>
