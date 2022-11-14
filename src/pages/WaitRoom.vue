<template>
  <div class="waitroom">
    <!-- <RoomPlayerList :playerList="playerList"></RoomPlayerList> -->
    <div class="room-number">房间号：{{ number }}</div>
    <div id="qr-code"></div>
    <!-- <Btn
      @click=""
      v-if="self.index === 1"
      content="开始游戏"
      class="wait-btn"
      :disabled="!canBegin"
    ></Btn>
    <Btn
      @click="addPlayer()"
      v-if="self.index === 1"
      content="添加AI"
      class="wait-btn"
    ></Btn> -->
    <img
      :src="`/assets/img/waitroom_bg.png`"
      alt="waitroom_bg"
      class="waitroom_bg"
    />
    <img
      :src="`/assets/img/waitroom_btn_rule.png`"
      alt="waitroom_btn_rule"
      class="waitroom_btn_rule"
    />
    <div 
    class="text_rule"
    >游戏规则</div>
    <img
      :src="`/assets/img/waitroom_btn_start.png`"
      alt="waitroom_btn_start"
      class="waitroom_btn_start"
    />
    <div 
    class="text_start"
    >开始游戏</div>
    <img
      :src="`/assets/img/waitroom_players.png`"
      alt="waitroom_players"
      class="waitroom_players"
    />
    <img
      :src="`/assets/img/waitroom_line.png`"
      alt="waitroom_line"
      class="waitroom_line"
    />
    <img
      :src="`/assets/img/waitroom_btn_return.png`"
      @click="$router.push('CreateRoom')"
      alt="waitroom_btn_return"
      class="waitroom_btn_return"
    />
    <!-- <Btn
      class="wait-btn"
      @click="showDialog('暂未实现')"
      content="查看规则"
    ></Btn> -->
  </div>
</template>

<script setup lang="ts">
  import RoomPlayerList from "../components/RoomPlayerList.vue";
  import { players,self,Room } from "../reactivity/game";
  import { showDialog } from "../reactivity/dialog";
  import Btn from "../components/Btn.vue";
  import { computed } from "@vue/reactivity";
  import router from "../router";
  import { Ref } from "vue";
  
  const number = Room.value.roomNumber;
  const playerList = players;
  const canBegin = computed(()=>players.value.length >= 5);
  
  function gameBegin(){
    setTimeout(() => {
      router.push({
        name: "play",
      });
    }, 500);
  }
</script>

<style lang="scss" scoped>
  .waitroom {
    position: relative;
    width: var(--width);
    height: var(--height);
    top: calc((100vh - var(--height)) / 2);
    margin: auto;
    overflow: hidden;
    // #qr-code {
    //   position: absolute;
    //   margin: 5vh auto;
    //   width: 20px;
    //   z-index: 2;
    // }
    .waitroom_bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
    .waitroom_btn_rule {
      cursor: pointer;
      top: calc(75/100*var(--height));
      width: calc(20/100*var(--width));
      right: calc(25/100*var(--width));
      position: absolute;
      z-index: 2;
    }
    .text_rule {
      cursor: pointer;
      right: calc(287/1000*var(--width));
      top: calc(77/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #5A8375;
      position: absolute;
      z-index: 3;
    }
    .waitroom_btn_start {
      cursor: pointer;
      top: calc(75/100*var(--height));
      width: calc(20/100*var(--width));
      left: calc(25/100*var(--width));
      position: absolute;
      z-index: 2;
    }
    .text_start {
      cursor: pointer;
      left: calc(295/1000*var(--width));
      top: calc(77/100*var(--height));
      font-size: calc(45/1000*var(--height));
      letter-spacing: calc(1/100*var(--height));
      color: #5A8375;
      position: absolute;
      z-index: 3;
    }
    .waitroom_players {
      position: absolute;
      margin: auto;
      top: calc(25/100*var(--height));
      left: 0;
      right: 0;
      width: calc(125/100*var(--height));
      text-align: center;
      z-index: 2;
    }
    .waitroom_line{
      position: absolute;
      margin: auto;
      top: calc(15/100*var(--height));
      left: 0;
      right: 0;
      height: calc(6/1000*var(--height));
      width: calc(65/100*var(--height));
      text-align: center;
      z-index: 2;
    }
    .room-number {
      position: absolute;
      top:calc(8/100*var(--height));
      left: 0;
      right: 0;
      font-size: calc(5/100*var(--height));
      text-align: center;
      color: #B1BC94;
      z-index: 2;
    }
    .waitroom_btn_return {
      cursor: pointer;
      position: absolute;
      top:calc(5/100*var(--height));
      left: calc(5/100*var(--height));
      width: calc(10/100*var(--height));
      z-index: 2;
    }
    // .btn {
    //   position: absolute;
    //   top:50px;
    //   isplay: block;
    //   left:500px;
    //   text-align: center;
    //   margin: 1rem;
    //   z-index: 2;
    // }
  }
</style>
