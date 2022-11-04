<template>
  <div class="waitroom">
    <RoomPlayerList :playerList="playerList"></RoomPlayerList>
    <div class="room-number">房间号：{{ number }}</div>
    <div id="qr-code"></div>
    <Btn
      @click="gameBegin()"
      v-if="self.index === Room.ownerID"
      content="开始游戏"
      class="wait-btn"
      :disabled="!canBegin"
    ></Btn>
    <Btn
      class="wait-btn"
      @click="showDialog('暂未实现')"
      content="查看规则"
    ></Btn>
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
    #qr-code {
      margin: 5vh auto;
      width: min-content;
    }
    .room-number {
      font-weight: bold;
      font-size: 1.6rem;
      text-align: center;
    }
    .btn {
      display: block;
      text-align: center;
      margin: 1rem;
    }
  }
</style>
