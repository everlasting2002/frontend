<template>
  <div class="createroom" v-show="show">
    <img :src="`/assets/img/createroom_bg.png`" alt="createroom_bg" class="createroom_bg" />
    <Btn class="createroom_x" @click="hileCreateRoom" type="x" img="/assets/img/createroom_x.png" />
    <div class="text_roomcreate">创建房间</div>
    <Btn class="loading_enter" @click="create()" type="Enter" content="确认创建" />

    <input class="name" :maxlength="10" type="text" placeholder="您的昵称" v-model="self.name" />
    <input class="password" type="text" :maxlength="20" placeholder="房间密码(可选)" v-model="Room.password" />

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Btn from "../components/Btn.vue";
import { self, Room } from "../reactivity/game";
import { gsap } from "gsap";

import {
  create,
} from "../reactivity/createRoom";

var show = ref(false);

const showCreateRoom = () => {
  show.value = true;
  gsap.fromTo(".createroom", {
    opacity: 0,
    scale: 0.8,
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
  });
}

const hileCreateRoom = () => {
  gsap.fromTo(".createroom", {
    opacity: 1,
    scale: 1,
  }, {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
    onComplete() {
      show.value = false;
    }
  });
}

defineExpose({ showCreateRoom })

</script>

<style lang="scss" scoped>
.createroom {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 9;

  input {
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
    z-index: 9;
  }

  .createroom_x {
    cursor: pointer;
    position: absolute;
    top: calc(20/100*var(--height));
    width: calc(5/100*var(--width));
    right: calc(18/100*var(--width));
    z-index: 9;
  }

  .text_roomcreate {
    position: absolute;
    left: calc(82/100*var(--height));
    top: calc(19/100*var(--height));
    font-size: calc(45/1000*var(--height));
    letter-spacing: calc(1/100*var(--height));
    color: #B6AB97;
    z-index: 11;
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
    z-index: 11;
  }

  .name {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(30/100*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 11;
  }

  .password {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(427/1000*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 11;
  }
}
</style>
