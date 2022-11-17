<template>
  <div class="rule-content" v-show="show">
    <span
      class="content"
      v-html="content"
    ></span>
    <Btn class="return" @click="show = false" type="Rule" content="返回" />
    <div class="rule_background"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import Btn from "./Btn.vue";

  var show = ref(true);

  const showRule = () => {
    show.value = true;
  }

  const props = defineProps({
    content: String,
  })

  defineExpose({ showRule })
</script>

<style lang="scss" scoped>
  .rule-content {
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
      width: calc(1/4*var(--width));
      height: calc(1/16*var(--height));
      font-size: calc(45/1000*var(--height));
      color: #B6AB97;
      top: calc(0.3*var(--height));
      text-align: center;
      z-index: 9999;
      overflow-y: auto;
    }
    .rule_background{
      position: fixed;
      z-index: 999;
      background: none;
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
    }
    .return {
      position: absolute;
      width: calc(1/16*var(--width));
      height: calc(1/16*var(--height));
      margin-bottom: 1em;
      font-size: calc(30/1000*var(--height));
      bottom: 0px;
      padding: 1em;
      cursor: pointer;
      color: #B1BC94;
      z-index: 9999;
    }
  }
</style>
