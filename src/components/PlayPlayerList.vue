<template>
  <div class="room-player-list">
    <div
      v-for="item in playerList"
      :key="item.index"
      class="player"
    >
      <Avatar :character="item.avatar"></Avatar>
      <div class="name">{{item.name}}</div>
      <div v-if="item.leave===false">在线</div>
      <div v-if="item.leave===true">离线</div>
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
  console.log(props.playerList);
</script>

<style lang="scss">

</style>
