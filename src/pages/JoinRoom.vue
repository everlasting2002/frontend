<template>
  <div class="joinroom">
    <div class="title">加入房间</div>
    <div class="number">
      <span class="hint">房号：</span>
      <UseBorder>
        <input maxlength="6" type="text" v-model="Room.roomNumber" />
      </UseBorder>
    </div>
    <div class="pw">
      <span class="hint">密码：</span>
      <UseBorder>
        <input
          maxlength="20"
          type="text"
          placeholder="(可选)"
          v-model="Room.password"
        />
      </UseBorder>
    </div>
    <div class="name">
      <span class="hint">昵称：</span>
      <UseBorder>
        <input
          :maxlength="8"
          type="text"
          placeholder=""
          v-model="self.name"
        />
      </UseBorder>
    </div>
    <div class="spacer"></div>
    <Btn @click="join" content="确认加入"></Btn>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from "vue";

  import UseBorder from "../components/UseBorder.vue";
  import Btn from "../components/Btn.vue";
  import {Room,self} from "../reactivity/game"

  import {
    join,
  } from "../reactivity/joinRoom";

</script>

<style lang="scss" scoped>
  .joinroom {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    .title {
      font-weight: bold;
      font-size: 2rem;
      padding: 2rem;
    }

    .pw,
    .name,
    .number {
      .hint {
        position: relative;
        bottom: 0.08em;
        word-break: keep-all;
        margin-right: 0.5rem;
        font-weight: bold;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      input {
        max-width: calc(100% - 1rem);
        padding: 0 0.5rem;
        line-height: 2.4rem;
        overflow: visible;
      }
      .useborder {
        max-width: 50%;
      }
    }

    .spacer {
      flex: 1;
    }
  }
</style>
