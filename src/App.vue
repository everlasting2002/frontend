<script setup lang="ts">
import { RouterView } from "vue-router";
import Dialog from "./components/Dialog.vue";
import { WSConnect } from "./reactivity/room";

WSConnect();
</script>

<template>
  <div class="main">
    <router-view />
    <Dialog></Dialog>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: var(--width);
  height: var(--height);
  top: calc((100vh - var(--height)) / 2);
  margin: auto;
  overflow: hidden;
  /* margin: auto;
  overflow: hidden;
  transform-origin: center center;
  box-sizing: border-box;
  position: relative; */
}
</style>
