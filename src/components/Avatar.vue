<template>
  <div class="avatar">
    <img
      class="icon"
      :src="`/assets/avatar/${character.toLowerCase()}.png`"
      :alt="name"
    />
    <div class="info">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import {
    ChineseNames,
    SetableCharacters,
  } from "../../shared/GameDefs";
  
  const props = defineProps({
    character: { type: String, required: true },
  });
  const name = computed(
    () => ChineseNames[props.character as SetableCharacters]
  );
</script>

<style lang="scss" scoped>
  .avatar {
    width: 2rem;
    display: inline-block;
    position: relative;

    .icon {
      width: 100%;
      border-radius: 15%;
    }
    .icon:hover + .info {
      opacity: 0.7;
    }

    .info {
      opacity: 0;
      transition: opacity 0.2s;
      font-size: 0.6rem;
      position: absolute;
      top: -1.7rem;
      left: -5rem;
      right: -5rem;
      margin: auto;
      background-color: var(--on-bg);
      color: var(--bg);
      padding: 0.3rem;
      width: min-content;
      border-radius: 5px;
      word-break: keep-all;
      &::before {
        content: "";
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background-color: var(--on-bg);
        transform-origin: 50% 50%;
        left: 0;
        right: 0;
        margin: auto;
        transform: rotate(45deg);
        bottom: -12%;
      }
    }
  }
</style>
