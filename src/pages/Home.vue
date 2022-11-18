<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Btn from "../components/Btn.vue";

</script>

<template>
  <div class="main-page">
    <img :src="`/assets/img/index_room.png`" class="index_room"/>
    <img :src="`/assets/img/index_desk.png`" class="index_desk"/>
    <Btn class="homepage_button text_roomcreate" @click="$router.push('CreateRoom')" type="CreateRoom" content="创建房间" />
    <Btn class="homepage_button text_roomjoin" @click="$router.push('JoinRoom')" type="JoinRoom" content="加入房间" />
    <Btn class="homepage_button text_introduction" @click="$router.push('character')" type="Introduction" content="角色介绍" />
    <Btn class="homepage_button text_recording" @click="$router.push('')" type="Recording" content="游戏记录" />
  </div>
  
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: genshin;
    src: url("../../public/assets/zh-cn.ttf");
  }

  .main-page {
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
    .homepage_button{
      height: 2.5em;
      position: absolute;
      font-size: calc(45/1000*var(--height));
      width: 7em;
      color: #725D55;
      letter-spacing: calc(1/100*var(--height));
      z-index: 4;
    }
    .text_roomcreate {
      left: calc(27/100*var(--width));
      top: calc(22/100*var(--height));
    }
    .text_roomjoin {
      right: calc(335/1000*var(--width));
      top: calc(26/100*var(--height));
    }
    .text_introduction {
      right: calc(27/100*var(--width));
      top: calc(46/100*var(--height));
    }
    .text_recording {
      left: calc(31/100*var(--width));
      top: calc(50/100*var(--height));
    }
  }
</style>
