<template>
  <div class="createroom">
    <img
      :src="`/assets/img/createroom_bg.png`"
      alt="createroom_bg"
      class="createroom_bg"
    />
    <img
      :src="`/assets/img/createroom_x.png`"
      @click="$router.push('Home')"
      alt="createroom_x"
      class="createroom_x"
    />
    <div 
    class="text_roomcreate"
    >创建房间</div>
    <img
      :src="`/assets/img/loading_enter.png`"
      @click="$router.push('WaitRoom')"
      alt="loading_enter"
      class="loading_enter"
    />
    
    <input class="name" :maxlength="10" type="text" placeholder="您的昵称" v-model="nickname" />
    <input class="playnum" type="text" :maxlength="20" placeholder="游戏人数" v-model="playnum" />
    <input class="password" type="text" :maxlength="20" placeholder="房间密码(可选)" v-model="password" />
    
    
    <!-- <div class="name">
      <span class="hint">你的昵称：</span>
      <use-border>
        <input :maxlength="10" type="text" placeholder="请输入昵称" v-model="nickname" />
      </use-border>
    </div> -->
    <!-- <div class="password">
      <span class="hint">房间密码：</span>
      <use-border>
        <input type="text" :maxlength="20" placeholder="(可选)" v-model="password" />
      </use-border>
    </div> -->
    <!-- <outlined-btn @click="create()" content="确认创建"></outlined-btn> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OutlinedBtn from "../components/Btn.vue";
import UseBorder from "../components/UseBorder.vue";

import {
  characters,
  nickname,
  playnum,
  password,
  create,
} from "../reactivity/createRoom";
import { showDialog } from "../reactivity/dialog";

const CreateRoom = defineComponent({
  name: "CreateRoom",
  components: { OutlinedBtn, UseBorder },
  setup(props) {
    return {
      characters,
      nickname,
      playnum,
      password,
      create,
      showDialog,
    };
  },
});

export default CreateRoom;
</script>

<style lang="scss" scoped>
.createroom {
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
  .playnum {
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
  // padding: 1rem 1rem 0;
  // text-align: center;

  // .title {
  //   font-size: 1.5rem;
  //   font-weight: bold;
  // }

  // .tile-wrapper {
  //   display: flex;
  //   flex-wrap: wrap;

  //   .room-character-tile {
  //     flex: 1 1 33%;
  //     padding: 1rem 0;
  //   }
  // }

  // .name,
  // .password {
  //   .hint {
  //     position: relative;
  //     bottom: 0.04em;
  //     word-break: keep-all;
  //     margin-right: 0.5rem;
  //     font-weight: bold;
  //   }

  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin: 2rem 0;

  //   input {
  //     max-width: calc(100% - 1rem);
  //     padding: 0 0.5rem;
  //     line-height: 2.4rem;
  //     overflow: visible;
  //   }

  //   .useborder {
  //     max-width: 50%;
  //   }
  // }

  // .btn {
  //   margin: auto;
  // }
}
</style>
