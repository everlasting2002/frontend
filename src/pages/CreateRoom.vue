<template>
  <div class="createroom">
    <img :src="`/assets/img/createroom_bg.png`" alt="createroom_bg" class="createroom_bg" />
    <Btn class="createroom_x" @click="$router.push('Home')" type="x" img="/assets/img/createroom_x.png" />
    <div class="text_roomcreate">创建房间</div>
    <Btn class="loading_enter" @click="create()" type="Enter" content="确认创建" />
    <img :src="`/assets/img/index_room.png`" class="index_room"/>
    <img :src="`/assets/img/index_desk.png`" class="index_desk"/>

    <input class="name" :maxlength="10" type="text" placeholder="您的昵称" v-model="self.name" />
    <input class="password" type="text" :maxlength="20" placeholder="房间密码(可选)" v-model="Room.password" />

  </div>
</template>

<script setup lang="ts">
  import { defineComponent } from "vue";

  import Btn from "../components/Btn.vue";
  import OutlinedBtn from "../components/Btn.vue";
  import UseBorder from "../components/UseBorder.vue";
  import {self,Room} from "../reactivity/game";

  import {
    create,
  } from "../reactivity/createRoom";

</script>

<style lang="scss" scoped>
.createroom {
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
    z-index: -2;
  }
  .index_desk {
    width: 100%;
    height: 80%;
    top: calc(28/100*var(--height));
    margin: auto;
    position: absolute;
    z-index: -1;
  }

  input{
    background: none;
  }
  .createroom_bg {
    position: absolute;
    margin: auto;
    text-align: center;
    top: calc(15/100*var(--height));
    width: calc(50/100*var(--width));
    left: 0;
    right: 0;
    z-index: 1;
  }

  .createroom_x {
    cursor: pointer;
    position: absolute;
    top: calc(20/100*var(--height));
    width: calc(5/100*var(--width));
    right: calc(18/100*var(--width));
    z-index: 1;
  }

  .text_roomcreate {
    position: absolute;
    left: calc(82/100*var(--height));
    top: calc(19/100*var(--height));
    font-size: calc(45/1000*var(--height));
    letter-spacing: calc(1/100*var(--height));
    color: #B6AB97;
    z-index: 2;
  }

  .loading_enter {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: calc((68/100*var(--height)));
    width: calc((50/100*var(--height)));
    height: 2em;
    color: #725D55;
    font-size: calc(45/1000*var(--height));
    margin: auto;
    text-align: center;
    z-index: 2;
  }

  .name {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(30/100*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 2;
  }

  .password {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(427/1000*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 2;
  }
}
</style>
