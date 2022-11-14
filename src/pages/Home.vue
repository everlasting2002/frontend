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
    <div 
    @click="$router.push('CreateRoom')"
    class="text_roomcreate"
    >创建房间</div>
    <img
      :src="`/assets/img/border_createroom.png`"
      @click="$router.push('CreateRoom')"
      alt="border_createroom"
      class="border_createroom"
    />
    <div 
    @click="$router.push('JoinRoom')"
    class="text_roomjoin"
    >加入房间</div>
    <img
      :src="`/assets/img/border_joinroom.png`"
      @click="$router.push('JoinRoom')"
      alt="border_joinroom"
      class="border_joinroom"
    />
    <img
      :src="`/assets/img/border_introduction.png`"
      alt="border_introduction"
      class="border_introduction"
    />
    <div 
    class="text_introduction"
    >角色介绍</div>
    <img
      :src="`/assets/img/border_recording.png`"
      alt="border_recording"
      class="border_recording"
    />
    <div 
    class="text_recording"
    >游戏记录</div>
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
    .border_createroom {
      cursor: pointer;
      position: absolute;
      opacity: 0.7;
      top: calc(19/100*var(--height));
      width: calc(17/100*var(--width));
      left: calc(26/100*var(--width));
      z-index: 3;
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
    .border_joinroom {
      cursor: pointer;
      position: absolute;
      opacity: 0.7;
      right: calc(31/100*var(--width));
      top: calc(23/100*var(--height));
      width: calc(175/1000*var(--width));
      z-index: 3;
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
    .border_introduction {
      cursor: pointer;
      position: absolute;
      opacity: 0.7;
      top: calc(45/100*var(--height));
      width: calc(17/100*var(--width));
      right: calc(26/100*var(--width));
      z-index: 3;
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
    .border_recording {
      cursor: pointer;
      position: absolute;
      opacity: 0.7;
      left: calc(30/100*var(--width));
      top: calc(48/100*var(--height));
      width: calc(175/1000*var(--width));
      z-index: 3;
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
