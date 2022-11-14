<template>
  <div class="joinroom">
    <img :src="`/assets/img/createroom_bg.png`" alt="createroom_bg" class="createroom_bg" />
    <img :src="`/assets/img/createroom_x.png`" @click="$router.push('Home')" alt="createroom_x" class="createroom_x" />
    <div class="text_roomjoin">加入房间</div>
    <img :src="`/assets/img/loading_enter.png`" @click="$router.push('WaitRoom')" alt="loading_enter"
      class="loading_enter" />

    <input class="name" :maxlength="10" type="text" placeholder="您的昵称" v-model="nickname" />
    <input class="roomnumber" :maxlength="10" type="text" placeholder="房间号" v-model="roomNumber" />
    <input class="password" type="text" :maxlength="20" placeholder="房间密码(可选)" v-model="password" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

import UseBorder from "../components/UseBorder.vue";
import Btn from "../components/Btn.vue";

import {
  password,
  roomNumber,
  nickname,
  join,
} from "../reactivity/joinRoom";

const JoinRoom = defineComponent({
  name: "JoinRoom",
  components: { UseBorder, Btn },
  props: {
    pw: String,
    number: String,
  },
  setup(props) {
    const { pw, number } = toRefs(props);
    if (pw && pw.value) password.value = pw.value;
    if (number && number.value)
      roomNumber.value = number.value.slice(0, 6);

    return { password, roomNumber, nickname, join };
  },
});

export default JoinRoom;
</script>

<style lang="scss" scoped>
.joinroom {
  position: relative;
  width: var(--width);
  height: var(--height);
  top: calc((100vh - var(--height)) / 2);
  margin: auto;
  overflow: hidden;

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

  .text_roomjoin {
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

  .roomnumber {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(427/1000*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 2;
  }

  .password {
    position: absolute;
    opacity: 0.5;
    left: calc(72/100*var(--height));
    top: calc(556/1000*var(--height));
    font-size: calc(40/1000*var(--height));
    letter-spacing: calc(3/1000*var(--height));
    color: #B3A894;
    z-index: 2;
  }
}
</style>
