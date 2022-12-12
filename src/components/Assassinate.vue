<template>
  <div class="assassinate" v-show="show">
		<div class="assassinate-player-list">
			<div
				v-for="item in List"
				:key="item.index"
				class="player"
			>
				<div v-if="item.avatar">
					<AvatarVue v-if="item.index===self.index" class="myavatar" :character="item.avatar?item.avatar:'empty'"></AvatarVue>
					<AvatarVue @click="showDialog('你确定要刺杀【'+item.name+'】吗？',2,()=>assassinate(item as PublicPlayerDef))" v-else class="avatar" :character="item.avatar"></AvatarVue>
					<div class="name">{{item.name}}</div>
				</div>
				<div v-else>
					<img src="/assets/img/play/avatar.svg" class="noavatar"/>
					<div class="name">{{item.name}}</div>
				</div>
			</div>
		</div>
    <div class="assassinate-background"></div>
		<img @click="show=false" class="assassinate-skill" v-if="self.character==='ASSASSIN'" src="/assets/img/play/assassinate.png" />
  </div>
</template>

<script setup lang="ts">
  import { ref,computed, PropType } from "vue";
  import { PublicPlayerDef } from "../../shared/ModelDefs";
  import AvatarVue from "./Avatar.vue";
	import { self } from "../reactivity/game";
	import { showDialog } from "../reactivity/dialog";
	import { socket } from '../socket/index';
	
	const props = defineProps({
    playerList: {
      type: Object as PropType<PublicPlayerDef[]>,
      required: true,
    },
  })
	function assassinate(item : PublicPlayerDef){
		socket.send({
			type: "playerAssassinate",
			ID: item.index,
		});
	}
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
	
  var show = ref(false);

  const showAssassinate = () => {
    show.value = true;
  }

  defineExpose({ showAssassinate })
</script>

<style lang="scss" scoped>
  .assassinate {
		z-index: 100;
		.assassinate-player-list{
			position: absolute;
			margin: 0;
			top: calc(6/100*var(--height));
			left: calc(10/100*var(--width));
			right: 0;
			width: calc(55/100*var(--width));
			height: calc(50/100*var(--height));
			text-align: center;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: space-around;
			.player{
				position: relative;
				margin: 0 calc(1/100*var(--width)) calc(3/100*var(--height)) calc(1/100*var(--width));
				width: calc(8/100*var(--width));
				display: flex;
			}
			.avatar ,.myavatar,.noavatar{
				z-index: 101;
				position: relative;
				width: 100%;
				border-radius: 50%;
			}
			.avatar{
				cursor: pointer;
			}
			.myavatar{
				//cursor: pointer;
				z-index: 5;
			}
			.noavatar{
				z-index: 5;
			}
			.myavatar+ .name{
				z-index: 5;
				color:gold;
			}
			.name{
				position: relative;
				z-index: 101;
				color: white;
				font-size: calc(16/1000*var(--width));
			}
		}
    .assassinate-background{
      position: fixed;
      z-index: 100;
      background-color: black;
      opacity: 0.7;
      display: flex;
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
    }
		.assassinate-skill{
			z-index: 102;
			position: absolute;
			height: calc(8/100*var(--width));
			right: calc(5/100*var(--width));
			bottom: calc(3/100*var(--width));
			background-color: rgba(0, 0, 0, 0.6);
			border-color: rgb(0, 0, 0);
			border: calc(3/1000*var(--width));
			border-style: solid;
			border-radius: 50%;
			cursor: pointer;
		}
		.assassinate-skill:hover{
			background-color: rgba(255, 255, 255, 0.6);
		}
  }
</style>
