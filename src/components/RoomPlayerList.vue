<template>
  <div class="room-player-list">
    <div
      v-for="item in playerList"
      :key="item.index"
      class="player"
    >
      <div class="index">
        <span class="index-content">{{ item.index }}</span>
      </div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { PublicPlayerDef } from "../../shared/ModelDefs";
  const RoomPlayerList = defineComponent({
    name: "RoomPlayerList",
    props: {
      playerList: {
        type: Object as PropType<PublicPlayerDef[]>,
        required: true,
      },
    },
    components: {},
  });

  export default RoomPlayerList;
</script>

<style lang="scss">

</style>
