<template>
  <div class="room-player-list">
    <div
      v-for="item in List"
      :key="item.index"
      class="player"
    >
      <Avatar v-if="item.index===self.index" @click="refAvatar.showChange()" class="myavatar" :character="item.avatar?item.avatar:'empty'"></Avatar>
      <Avatar v-else class="avatar" :character="item.avatar?item.avatar:'empty'"></Avatar>
      <div class="name">{{item.name}}</div>
    </div>
    <ChangeAvatar ref="refAvatar"></ChangeAvatar>
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, computed, PropType, ref } from "vue";
  import { PublicPlayerDef } from "../../shared/ModelDefs";
  import { self } from "../reactivity/game";
  import Avatar from "./Avatar.vue";
  import ChangeAvatar from "./ChangeAvatar.vue";
  
  const refAvatar = ref<any>(null);
  
  const props = defineProps({
    playerList: {
      type: Object as PropType<PublicPlayerDef[]>,
      required: true,
    },
  })
  let List = computed(()=>{
    let copyedList=[];
    for(let x of props.playerList)copyedList.push(x);
    while(copyedList.length<10)copyedList.push({
      index: -1,
      name: "",
      isFairy: false,
      teamVoted: [],
      questVoted: [],
      avatar: "",
      leave: false,
    })
    return copyedList;
  })
  console.log(List);
</script>

<style lang="scss" scoped>
  .room-player-list{
    position: absolute;
    .player{
      position: relative;
      margin: calc(6/100*var(--height)) calc(3.5/100*var(--width)) 0px calc(3.5/100*var(--width));
      width: calc(8/100*var(--width));
      display: inline-block;
    }
    .avatar ,.myavatar{
      position: relative;
      width: 100%;
      border-radius: 50%;
    }
    .myavatar{
      cursor: pointer;
      z-index: 5;
    }
    .myavatar+ .name{
      color:gold;
    }
    .name{
      color: white;
      font-size: calc(16/1000*var(--width));
    }
  }
</style>
