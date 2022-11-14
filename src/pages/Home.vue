<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Btn from "../components/Btn.vue";

</script>

<template>
  <div class="main-page">
    <img
      :src="`/assets/img/index_room.png`"
      alt="index_room"
      class="index_room"
    />
    <img
      :src="`/assets/img/index_desk.png`"
      alt="index_desk"
      class="index_desk"
    />
    <Btn class="text_roomcreate" @click="$router.push('CreateRoom')" type="CreateRoom" content="创建房间" />
    <Btn class="text_roomjoin" @click="$router.push('JoinRoom')" type="JoinRoom" content="加入房间" />
    <Btn class="text_introduction" @click="$router.push('')" type="Introduction" content="角色介绍" />
    <Btn class="text_recording" @click="$router.push('')" type="Recording" content="游戏记录" />
  </div>
  
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: genshin;
    src: url("../../public/assets/zh-cn.ttf");
  }

  .main-page {
    position: relative;
    width: var(--width);
    height: var(--height);
    top: calc((100vh - var(--height)) / 2);
    margin: auto;
    overflow: hidden;
    .index_room {
      width: 100%;
      height: 100%;
      margin: auto;
      position: absolute;
      z-index: 1;
    }
    .index_desk {
      width: 100%;
      height: 80%;
      top: calc(28/100*var(--height));
      margin: auto;
      position: absolute;
      z-index: 2;
    }
    .text_roomcreate {
      cursor: pointer;
      position: absolute;
      left: calc(29/100*var(--width));
      top: calc(22/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #725D55;
      z-index: 4;
    }
    .text_roomjoin {
      cursor: pointer;
      position: absolute;
      right: calc(335/1000*var(--width));
      top: calc(26/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #725D55;
      z-index: 4;
    }
    .text_introduction {
      cursor: pointer;
      position: absolute;
      right: calc(28/100*var(--width));
      top: calc(48/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #725D55;
      z-index: 4;
    }
    .text_recording {
      cursor: pointer;
      position: absolute;
      left: calc(33/100*var(--width));
      top: calc(51/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #725D55;
      z-index: 4;
    }
  }
</style>
