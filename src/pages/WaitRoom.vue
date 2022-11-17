<template>
  <div class="waitroom">
    <!-- <RoomPlayerList :playerList="playerList"></RoomPlayerList> -->
    <div class="room-number">房间号：{{ number }}</div>
    
    <img :src="`/assets/img/waitroom_bg.png`" class="waitroom_bg"/>
    <img :src="`/assets/img/waitroom_players.png`" class="waitroom_players"/>
    <img :src="`/assets/img/waitroom_line.png`" class="waitroom_line"/>
    
    <Btn id="waitroom_btn_rule" class="waitroom_btn" @click="refRule.showRule()" type="Rule" content="游戏规则" />
    <Btn id="waitroom_btn_start" class="waitroom_btn" @click="start()" type="Start" content="开始游戏" v-if="self.index === Room.ownerID" :disabled="!canBegin" />
    <Btn class="waitroom_btn_return" @click="leave()" type="x" img="/assets/img/waitroom_btn_return.png" />
    <Rule content="游戏规则" ref="refRule" />
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
  import { socket } from "../socket";
  import { leave } from '../reactivity/leaveRoom';
  import { start } from "../reactivity/startGame";
  import { ref } from "vue";
  import Rule from "../components/Rule.vue";
  
  const number = Room.value.roomNumber;
  const playerList = players;
  const canBegin = computed(()=>players.value.length >= 5);
  const refRule = ref(null);
  
  
</script>

<style lang="scss" scoped>
  .waitroom {
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
    .waitroom_btn{
      top: calc(75/100*var(--height));
      width: calc(20/100*var(--width));
      height: 2em;
      z-index: 2;
      color: #5A8375;
      position: absolute;
      font-size: calc(45/1000*var(--height));
    }
    #waitroom_btn_rule {
      right: calc(25/100*var(--width));
    }
    #waitroom_btn_start {
      left: calc(25/100*var(--width));
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
