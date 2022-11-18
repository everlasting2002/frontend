<template>
  <div class="avatar">
    <img
      class="icon"
      :src="`/assets/avatar/${character.toLowerCase()}.png`"
      :alt="name"
    />
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
    display: inline-block;
    position: relative;

    .icon {
      width: 100%;
      border-radius: 50%;
    }
  }
</style>
