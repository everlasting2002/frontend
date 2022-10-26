<template>
  <div class="waitroom">
    <RoomPlayerList :playerList="playerList"></RoomPlayerList>
    <div class="room-number">房间号：{{ number }}</div>
    <div id="qr-code"></div>
    <Btn
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

  const number = Room.value.roomNumber;
  const playerList = players;
  const canBegin = computed(()=>players.value.length >= 5);
  
  function addPlayer(){
    players.value.push({
      index: players.value.length+1,
      name: "Bob",
      isFairy: false,
      teamVoted: [],
      questVoted: [],
    })
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
