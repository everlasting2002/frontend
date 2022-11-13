<script setup lang="ts">
import { RouterView } from "vue-router";
import Dialog from "./components/Dialog.vue";

</script>

<template>
  <div class="wrapper">
    <div class="main">
      <router-view/>
      <Dialog></Dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    .main {
      margin: auto;
      overflow: hidden;
      transform-origin: center center;
      box-sizing: border-box;
      position: relative;
    }
  }
</style>
