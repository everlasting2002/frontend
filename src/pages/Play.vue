<template>
  <div class="play">
    <PlayerList :playerList="players"></PlayerList>

    <div class="round">
      第 {{ Room.currentRound }} 轮
    </div>

    <div class="game-status">{{ gameStatus }}</div>
    <div class="game-status">
      剩余时间:
      {{
        gameStatusTimeLeft < 0 ? "---" : gameStatusTimeLeft + "S"
      }}
    </div>

    <div class="actions">
      <Btn
        @click="showCharacter = true"
        content="查看角色"
      ></Btn>
      <Btn
        @click="showActions = true"
        :class="{ active: canAct }"
        content="显示操作"
      ></Btn>
      <Btn
        @click="showMemo = true"
        content="备忘速记"
      ></Btn>
      <Btn
        @click="showEvents = true"
        content="事件记录"
      ></Btn>

      <Character></Character>
      <!-- <Actions></Actions>
      <Memo></Memo>
      <Events></Events> -->
    </div>

    <!-- <BottomActions></BottomActions> -->
  </div>
</template>

<script setup lang="ts">
  import {
    defineComponent,
    onActivated,
    onMounted,
    onUnmounted,
  } from "vue";
  import {
    players,
    self,
    Room,
    gameStatus,
    gameStatusTimeLeft,
    refresh
  } from "../reactivity/game";
  import {
    showMemo,
    showActions,
    showCharacter,
    showEvents,
    canAct,
  } from "../reactivity/playPage";
  import PlayerList from "../components/RoomPlayerList.vue";
  import Character from "../components/PlayCharacter.vue";
  import Btn from "../components/Btn.vue";
  
  
      // 设定剩余时间每秒减一
  let timer: NodeJS.Timeout;
  onMounted(() => {
    timer = setInterval(
      () => (gameStatusTimeLeft.value -= 1),
      1000
    );
  });
  onMounted(() => {
    refresh();
  });
  onUnmounted(() => clearInterval(timer));

</script>

<style lang="scss" scoped>
  .play {
    text-align: center;
    .actions {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .btn {
        margin: 0.5rem;
      }
    }
    .date,
    .game-status {
      font-weight: bold;
      font-size: 1.5rem;
      padding-bottom: 1.3rem;
    }
    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      .date-icon {
        width: 2.6rem;
        margin: 0 1rem;
      }
    }
  }
</style>

<style lang="scss">
  .play {
    @keyframes blink {
      from {
        background-color: var(--bg);
      }
      to {
        background-color: var(--on-bg);
      }
    }
    .btn {
      position: relative;
      &.active::after {
        opacity: 1;
      }
      &::after {
        transition: all 0.2s;
        opacity: 0;
        $size: 0.6rem;
        content: "";
        position: absolute;
        right: -0.3 * $size;
        top: -0.3 * $size;
        width: $size;
        height: $size;
        background-color: var(--on-bg);
        border: 2px solid var(--bg);
        border-radius: 50%;
        animation: blink 1s linear infinite alternate;
      }
    }
  }
</style>
