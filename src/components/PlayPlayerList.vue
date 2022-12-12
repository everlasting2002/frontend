<template>
	<div class="play-player-list">
		<div
			v-for="item in List"
			:key="item.index"
			class="player"
		>
			<div v-if="item.avatar">
				<Avatar v-if="item.index===self.index" class="myavatar" :character="item.avatar?item.avatar:'empty'">
					<div v-if="canSelect" @click="select(item.index)" class="select-btn"></div>
					<div v-if="canChoose" @click="fairyInspect(item.index)" class="select-btn"></div>
				</Avatar>
				<Avatar v-else class="avatar" :character="item.avatar">
					<div v-if="canSelect" @click="select(item.index)" class="select-btn"></div>
					<div v-if="canChoose" @click="fairyInspect(item.index)" class="select-btn"></div>
				</Avatar>
				<div class="name">{{item.name}}</div>
				<div v-if="item.leader" class="leader-icon">队长</div>
				<div v-if="Room.isVoting" class="player-voted">
					{{item.voted?"已投票":"未投票"}}
				</div>
				<div v-if="item.inTeam" class="player-inTeam">已选中</div>
				<div v-if="item.hint" class="player-hint">{{showHint(item)}}</div>
				<div v-if="item.isFairy" class="fairy-icon">虚空</div>
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
import { fairyChoosing } from "../reactivity/play";

let successNumber = computed(()=>{
	let x=0;
	for(let item of Room.value.taskResult)x+=(item===1)?1:0;
	return x;
})

let canSelect = computed(()=>{return self.value.leader && !fairyChoosing.value && successNumber.value<3});
let canChoose = computed(()=>{return self.value.isFairy && fairyChoosing.value && successNumber.value<3});
//console.log(canSelect,self.value.leader,fairyChoosing.value,successNumber.value);
//console.log(canChoose,self.value.isFairy,fairyChoosing.value,successNumber.value);

function showHint(item : PublicPlayerDef){
	if(item.hint==="GOOD")return GOOD;
	else if(item.hint==="BAD")return BAD;
	else if(item.hint==="MERLIN_OR_MORGANA")return "具有神性之人";
	else return ChineseNames[item.hint];
}

function fairyInspect(id : number){
	socket.send({
		type: "playerFairyInspect",
		ID: id
	})
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
//console.log(List);
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
			.fairy-icon{
				position: absolute;
				right: 0px;
				top: 30%;
				color: green;
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
