<template>
  <div class="change-avatar" v-show="show">
    <div class="Avatars">
      <div v-for="item in avatarNames" class="change-avatar-avatar">
        <AvatarVue :character="item" @click="()=>{changeAvatar(item as Avatar);show = false;}"></AvatarVue>
      </div>
    </div>
    <Btn class="change-avatar-return" @click="show = false" type="Rule" content="返回" />
    <div class="change-avatar-background"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { avatarNames, Avatar } from "../../shared/ModelDefs";
  import Btn from "./Btn.vue";
  import AvatarVue from "./Avatar.vue";
  import {changeAvatar} from "../reactivity/room";

  var show = ref(false);

  const showChange = () => {
    show.value = true;
  }

  defineExpose({ showChange })
</script>

<style lang="scss" scoped>
  .change-avatar {
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    word-break: break-word;
    background-image: url("../../public/assets/img/loading_bg_puzzle.png");
    background-size: 100% 100%;
    z-index: 9999;
    position: fixed;
    //padding: calc(5/100*var(--width));
    width: calc(70/100*var(--height)*2048/1080);
    height: calc(70/100*var(--height));
    top: 46vh;
    margin-top: calc(-35/100*var(--height));
    left: 18vw;
    .Avatars{
      top: 2em;
      position: absolute;
      overflow-y: auto;
      height: calc(50/100*var(--height));
      text-align: center;
      z-index: 10000;
    }
    .change-avatar-avatar{
      cursor: pointer;
      position: relative;
      display: inline-block;
      width: calc(15/100*var(--width));
    }
    .change-avatar-background{
      position: fixed;
      z-index: 999;
      background: none;
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
    }
    .change-avatar-return {
      position: absolute;
      width: calc(1/16*var(--width));
      height: calc(1/16*var(--height));
      font-size: calc(30/1000*var(--height));
      bottom: 0px;
      padding: 1em;
      cursor: pointer;
      color: #B1BC94;
      z-index: 1000;
    }
  }
</style>
