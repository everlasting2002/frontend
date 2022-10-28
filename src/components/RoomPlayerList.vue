<template>
  <div class="room-player-list">
    <div
      v-for="item in playerList"
      :key="item.index"
      class="player"
    >
      <Avatar :character="item.avatar"></Avatar>
      <div class="index">
        <span class="index-content">{{ item.index }}</span>
      </div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { PublicPlayerDef } from "../../shared/ModelDefs";
  import Avatar from "./Avatar.vue";
  const props = defineProps({
    playerList: {
      type: Object as PropType<PublicPlayerDef[]>,
      required: true,
    },
  })
</script>

<style lang="scss">

</style>
