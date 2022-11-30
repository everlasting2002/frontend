<template>
  <div class="waitroom">
    <!-- <RoomPlayerList :playerList="playerList"></RoomPlayerList> -->
    <div class="room-number-container">
      <div>
        <div @click="copyRoomNumber()">房间号：{{ number }}</div>
        <span class="clip-tip" @click="copyRoomNumber()">点击复制</span>
      </div>
    </div>
    
    <img :src="`/assets/img/waitroom_bg.png`" class="waitroom_bg"/>
    <img :src="`/assets/img/waitroom_line.png`" class="waitroom_line"/>
    
    <Btn id="waitroom_btn_rule" class="waitroom_btn" @click="refRule.showRule()" type="Rule" content="游戏规则" />
    <Btn id="waitroom_btn_start" class="waitroom_btn" @click="start()" type="Start" content="开始游戏" v-if="self.index === Room.ownerID" :disabled="!canBegin" />
    <Btn class="waitroom_btn_return" @click="leave()" type="x" img="/assets/img/waitroom_btn_return.png" />
    <Rule content="游戏规则" ref="refRule" />
    <RoomPlayerList class="list" :playerList="players"></RoomPlayerList>
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
  const canBegin = computed(()=>players.value.length >= 5);
  const refRule = ref<any>(null);
  
  function copyRoomNumber() {
    navigator.clipboard.writeText(number);
  };

</script>

<style lang="scss" scoped>
  .waitroom {
    // #qr-code {
    //   position: absolute;
    //   margin: 5vh auto;
    //   width: 20px;
    //   z-index: 2;
    // }
    .list{
      position: absolute;
      margin: auto;
      top: calc(22/100*var(--height));
      left: 0;
      right: 0;
      width: calc(75/100*var(--width));
      height: calc(50/100*var(--height));
      text-align: center;
      z-index: 2;
    }
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
    .room-number-container {
      position: absolute;
      top:calc(8/100*var(--height));
      left: 0;
      right: 0;
      font-size: calc(5/100*var(--height));
      text-align: center;
      color: #B1BC94;
      z-index: 3;
      display: block;

      div
      {
      display: inline-block;
        div
        {
          cursor: pointer;
        }
        .clip-tip
        {
          cursor: pointer;
          font-size: 60%;
          height: 100%;

          display: inline-block;
          vertical-align: middle;
          transform: translateY(-0.4em);

          position: absolute;
          margin-left: 1em;
          padding: 0.4em 0.8em;
          border-radius: 0.2em;

          display: inline-flex;
          align-items: center;

          background-color: #000000CC;
          color: #ECDFD5;

          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, ease-in-out 0.2s;
        }
        &:hover .clip-tip
        {
          opacity: 1;
          visibility: visible;
        }
      }
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
