<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Btn from "../components/Btn.vue";

</script>

<template>
  <div class="main-page">
    <img
      :src="`/assets/paimon.gif`"
      alt="logo"
      class="logo"
    />

    <div class="title">虚空劫灰往世书</div>
    <Btn @click="$router.push('joinRoom')" content="加入房间"></Btn>
    <Btn @click="$router.push('createRoom')" content="创建房间"></Btn>
    <Btn @click="$router.push('review')" content="游戏记录"></Btn>
  </div>
  
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: genshin;
    src: url("../../public/assets/zh-cn.ttf");
  }

  .main-page {
    .logo {
      padding-top: 10vh;
      width: 18vh;
      margin: auto;
      display: block;
    }

    .title {
      margin: 7vh;
      text-align: center;
      font-size: 3rem;
      font-weight: bolder;
    }

    .btn {
      display: block;
      margin: 5vh auto;
      text-align: center;
    }
  }
</style>
