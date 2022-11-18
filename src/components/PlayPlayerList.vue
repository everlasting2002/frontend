<template>
  <div class="play-player-list">
    <div
      v-for="item in List"
      :key="item.index"
      class="player"
    >
      <div v-if="item.avatar">
        <Avatar v-if="item.index===self.index" class="myavatar" :character="item.avatar?item.avatar:'empty'"></Avatar>
        <Avatar v-else class="avatar" :character="item.avatar"></Avatar>
        <div class="name">{{item.name}}</div>
      </div>
      <div v-else>
        <img src="../../public/assets/img/play/avatar.svg" class="avatar"/>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType, ref } from "vue";
  import { PublicPlayerDef } from "../../shared/ModelDefs";
  import { self } from "../reactivity/game";
  import Avatar from "./Avatar.vue";
  
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
  //console.log(List);
</script>

<style lang="scss" scoped>
  .play-player-list{
    position: absolute;
    .player{
      position: relative;
      margin: 0 calc(1/100*var(--width)) calc(3/100*var(--height)) calc(1/100*var(--width));
      width: calc(8/100*var(--width));
      display: inline-block;
    }
    .avatar ,.myavatar{
      position: relative;
      width: 100%;
      border-radius: 50%;
    }
    .myavatar{
      //cursor: pointer;
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
