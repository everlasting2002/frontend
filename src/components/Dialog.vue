<template>
  <div class="dialog-content" v-show="dialogTimeLeft > 0">
    <span
      class="content"
      v-html="content && content.content"
    ></span>
    <div @click="dialogTimeLeft = 0" class="confirm">
      确认({{ dialogTimeLeft }}s)
    </div>
    <div class="dialog_background"></div>
  </div>
</template>

<script setup lang="ts">
  import { watch} from "vue";

  import {
    content,
    dialogTimeLeft,
    toShowContents,
  } from "../reactivity/dialog";
  
  var timer: number;
  watch(content, () => {
    if (content.value === null) {
      clearInterval(timer);
      dialogTimeLeft.value = -1;
    } else {
      dialogTimeLeft.value = content.value.timeout;
      timer = window.setInterval(() => {
        dialogTimeLeft.value--;
        if (dialogTimeLeft.value <= 0) {
          clearInterval(timer);
          dialogTimeLeft.value = -1;
          toShowContents.value.shift();
        }
      }, 1000);
    }
  });

</script>

<style lang="scss" scoped>
  .dialog-content {
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    word-break: break-word;
    background-image: url("../../public/assets/img/Dialog.png");
    background-size: 100% 100%;
    z-index: 9999;
    position: fixed;
    width: calc(1/2*var(--width));
    height: calc(1/2*var(--height));
    top: 46vh;
    margin-top: calc(-1/4*var(--height));
    left: calc(1/4*var(--width));
    .content{
      position: absolute;
      font-size: calc(45/1000*var(--height));
      color: #B6AB97;
      top: calc(0.3*var(--height));
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
    .confirm {
      position: absolute;
      margin-bottom: 1em;
      font-size: calc(25/1000*var(--height));
      bottom: 0px;
      padding: 1em;
      cursor: pointer;
      z-index: 9999;
    }
  }
</style>
