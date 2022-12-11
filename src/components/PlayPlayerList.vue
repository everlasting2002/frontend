<template>
	<div class="play-player-list">
		<div
			v-for="item in List"
			:key="item.index"
			class="player"
		>
			<div v-if="item.avatar">
				<Avatar v-if="item.index===self.index" class="myavatar" :character="item.avatar?item.avatar:'empty'">
					<div v-if="self.leader" @click="select(item.index)" class="select-btn"></div>
				</Avatar>
				<Avatar v-else class="avatar" :character="item.avatar">
					<div v-if="self.leader" @click="select(item.index)" class="select-btn"></div>
				</Avatar>
				<div class="name">{{item.name}}</div>
				<div v-if="item.leader" class="leader-icon">队长</div>
				<div v-if="Room.isVoting" class="player-voted">
					{{item.voted?"已投票":"未投票"}}
				</div>
				<div v-if="item.inTeam" class="player-inTeam">已选中</div>
				<div v-if="item.hint" class="player-hint">{{showHint(item)}}</div>
			</div>
			<div v-else>
				<img src="/assets/img/play/avatar.svg" class="avatar"/>
				<div class="name">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import { PublicPlayerDef } from "../../shared/ModelDefs";
import { players, Room, self } from "../reactivity/game";
import { socket } from "../socket";
import Avatar from "./Avatar.vue";
import {GOOD, BAD, ChineseNames} from "../../shared/GameDefs";

function showHint(item : PublicPlayerDef){
	if(item.hint==="GOOD")return GOOD;
	else if(item.hint==="BAD")return BAD;
	else if(item.hint==="MERLIN_OR_MORGANA")return "具有神性之人";
	else return ChineseNames[item.hint];
}

function select(id : number){
	/* for(let i in players.value){
		if(players.value[i].index===id){
			players.value[i].inTeam=players.value[i].inTeam?false:true;
			break;
		}
	} */
	let team=[];
	for(let i in players.value){
		if(players.value[i].index===id){
			if(!players.value[i].inTeam)team.push(id);
		}
		else if(players.value[i].inTeam){
			team.push(players.value[i].index);
		}
	}
	socket.send({
		type: "playerSelectTeam",
		team: team,
	});
}

let List = computed(()=>{
	let copyedList : PublicPlayerDef[] = [];
	for(let x of players.value)copyedList.push(x);
	while(copyedList.length<10)copyedList.push({
		index: -1,
		name: "",
		isFairy: false,
		teamVoted: [],
		questVoted: [],
		avatar: "",
		leave: false,
		leader: false,
		hint: "",
		inTeam: false,
		vote: -1,
		voted: false,
	})
	return copyedList;
})
console.log(List);
</script>

<style lang="scss" scoped>
	.play-player-list{
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-around;
		.player{
			position: relative;
			margin: 0 calc(1/100*var(--width)) calc(3/100*var(--height)) calc(1/100*var(--width));
			width: calc(8/100*var(--width));
			display: flex;
			.leader-icon{
				position: absolute;
				right: 0px;
				top: 0px;
				color: orange;
			}
			.player-voted{
				position: absolute;
				right: 0px;
				bottom: 0px;
				color: greenyellow;
			}
			.player-hint{
				position: absolute;
				left: 0px;
				bottom: 0px;
				color: blueviolet;
			}
			.player-inTeam{
				position: absolute;
				left: 0px;
				top: 0px;
				color: paleturquoise;
			}
			.avatar ,.myavatar{
				position: relative;
				width: 100%;
				border-radius: 50%;
				.select-btn{
					cursor: pointer;
					top: 0px;
					width: 100%;
					height: 100%;
					opacity: 0.6;
					position: absolute;
				}
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
	}
</style>
