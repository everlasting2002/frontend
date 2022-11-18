<template>
  <div class="dialog-content" v-show="dialogType!==0">
    <img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-tl" />
    <img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-tr" />
    <img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-bl" />
    <img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-br" />
    <span
      class="content"
      v-html="content && content.content"
    ></span>
    <div class="buttons">
      <GenshinBtnVue v-if="dialogType===1" class="confirm" @click="dialogType=0" content="确认" theme="light" type="o"></GenshinBtnVue>
      <GenshinBtnVue v-if="dialogType===2" class="confirm" @click="content && content.Func(),dialogType=0" content="确认" theme="light" type="o"></GenshinBtnVue>
      <GenshinBtnVue v-if="dialogType===2" class="cancel" @click="dialogType=0" content="取消" theme="light" type="x"></GenshinBtnVue>
    </div>
    <div class="dialog_background"></div>
  </div>
</template>

<script setup lang="ts">
  import { watch} from "vue";
  import GenshinBtnVue from "./GenshinBtn.vue";

  import {
    content,
    dialogType,
    toShowContents,
  } from "../reactivity/dialog";
  
  var timer: number;
  watch(content, () => {
    if (content.value === null) {
      clearInterval(timer);
      dialogType.value = 0;
    } else {
      dialogType.value = content.value.type;
      timer = window.setInterval(() => {
        if (dialogType.value === 0) {
          clearInterval(timer);
          toShowContents.value.shift();
        }
      }, 500);
    }
  });

</script>

<style lang="scss" scoped>
  .dialog-content {
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    word-break: break-word;
    background-color: #3b4354;
    background-size: 100% 100%;
    border-radius: calc(3/100*var(--height)*2048/1080)/calc(5/100*var(--height));
    z-index: 9999;
    position: fixed;
    //padding: calc(5/100*var(--width));
    width: calc(40/100*var(--height)*2048/1080);
    height: calc(50/100*var(--height));
    top: 50vh;
    margin-top: calc(-50/200*var(--height));
    margin-left: calc(-40/200*var(--height)*2048/1080);
    left: 50vw;
    .content{
      position: absolute;
      font-size: calc(45/1000*var(--height));
      color: #B6AB97;
      top: calc(20/100*var(--height));
      text-align: center;
      z-index: 9999;
    }
    .dialog_background{
      position: fixed;
      z-index: 999;
      background: none;
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
    }
    .buttons{
      position: absolute;
      margin-bottom: 1em;
      font-size: calc(25/1000*var(--height));
      bottom: 0px;
      padding: 1em;
      cursor: pointer;
      z-index: 9999;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      .confirm ,.cancel {
        position: relative;
        height: calc(30/1000*var(--width));
        width: calc(140/1000*var(--width));
      }
    }
    .change-avatar_corner{
      position: absolute;
      width: calc(10/100*var(--height));
      height: calc(10/100*var(--height));
    }
    .change-avatar_corner-tl{
      top: calc(-7/200*var(--height));
      left: calc(-7/200*var(--height));
    }
    .change-avatar_corner-tr{
      top: calc(-7/200*var(--height));
      right: calc(-7/200*var(--height));
      transform: rotate(90deg);
    }
    .change-avatar_corner-br{
      bottom: calc(-7/200*var(--height));
      right: calc(-7/200*var(--height));
      transform: rotate(180deg);
    }
    .change-avatar_corner-bl{
      bottom: calc(-7/200*var(--height));
      left: calc(-7/200*var(--height));
      transform: rotate(270deg);
    }
  }
</style>
