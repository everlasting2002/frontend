<script setup lang="ts">
import { RouterView } from "vue-router";
import Dialog from "./components/Dialog.vue";
import { WSConnect } from "./reactivity/room";

WSConnect();
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
      //max-width: 30rem;
      margin: auto;
      min-height: 100vh;
      padding-bottom: 30px;
      box-sizing: border-box;
    }
  }
</style>
