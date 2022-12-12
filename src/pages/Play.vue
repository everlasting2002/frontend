<template>
	<div class="playroom">
		
		<img :src="`/assets/img/play/play_bg.png`" class="playroom_bg"/>
		<PlayPlayerList class="playroom-playerlist" ></PlayPlayerList>
		<TasksVue class="playroom-task" :taskList="Room.taskResult"></TasksVue>
		<div class="playroom-character-card">
			<img class="playroom-character" :src="`/assets/tachie/${self.character.toLowerCase()}.png`"/>
			<img class="playroom-character-border" :src="'/assets/img/characters_border.png'" alt="border" />
			<div class="playroom-character-intro">
				<div class="playroom-character-intro-text">
					【{{ChineseNames[self.character]}}】<br/><br/>
					{{CharacterIntro[self.character]}}
				</div>
			</div>
		</div>
		<div v-if="(Room.isVoting && !self.voted)" class="playroom-vote">
			<GenshinBtnVue class="playroom-vote-button" @click="voteTeam(true)" content="投票同意" theme="light" type="o"></GenshinBtnVue>
			<GenshinBtnVue class="playroom-vote-button" @click="voteTeam(false)" content="投票反对" theme="light" type="x"></GenshinBtnVue>
		</div>
		<GenshinBtnVue v-if="(self.leader && !Room.isVoting)" class="playroom-confirm-team" @click="confirmTeam()" content="确认组队方案" theme="light" type="o"></GenshinBtnVue>
		<div class="test-buttons" v-if="isDev">
			<p>本地调试用（不用注释）</p>
			<GenshinBtnVue class="test-button" content="设为队长" @click="self.leader=true;" theme="dark" type="o"></GenshinBtnVue>
			<GenshinBtnVue class="test-button" content="取消队长" @click="self.leader=false;" theme="dark" type="x"></GenshinBtnVue>
			<GenshinBtnVue class="test-button" content="开始队伍投票" @click="Room.isVoting=true;" theme="dark" type="o"></GenshinBtnVue>
			<GenshinBtnVue class="test-button" content="结束队伍投票" @click="Room.isVoting=false;" theme="dark" type="x"></GenshinBtnVue>
		</div>
		<div v-if="successNumber===3" class="waitAssassinate">{{"等待旅行者进行刺杀"}}</div>
		<Chat class="chat"></Chat>
		<Assassinate :playerList="players" ref="refAssassinate"></Assassinate>
		<img @click="refAssassinate.showAssassinate()" class="playroom-skill" v-if="self.character==='ASSASSIN'" src="/assets/img/play/assassinate.png" />
	</div>
</template>

<script setup lang="ts">
import { players,self,Room } from "../reactivity/game";
import { CharacterIntro, ChineseNames } from "../../shared/GameDefs";
import PlayPlayerList from "../components/PlayPlayerList.vue";
import TasksVue from "../components/Tasks.vue";
import Assassinate from "../components/Assassinate.vue";
import { computed, ref } from "vue";
import Chat from "../components/Chat.vue";
import GenshinBtnVue from "../components/GenshinBtn.vue";
import { socket } from "../socket";

const refAssassinate = ref<any>(null);
let isDev = import.meta.env.DEV ? true : false;

function voteTeam(res : boolean){
	socket.send({
		type: "playerVoteTeam",
		vote: res,
	});
}

function confirmTeam(){
	socket.send({
		type: "playerConfirmTeam",
	});
}

let successNumber = computed(()=>{
	let x=0;
	for(let item of Room.value.taskResult)x+=(item===1)?1:0;
	return x;
})
</script>

<style lang="scss" scoped>
	.playroom{
		.playroom-confirm-team{
			left: calc(30/100*var(--width));
			bottom: calc(10/100*var(--height));
			position: absolute;
			width: calc(20/100*var(--width));
			height: calc(6/100*var(--height));
			z-index: 2;
		}
		.playroom-vote{
			left: calc(20/100*var(--width));
			bottom: calc(20/100*var(--height));
			position: absolute;
			width: calc(40/100*var(--width));
			height: calc(6/100*var(--height));
			z-index: 2;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			.playroom-vote-button{
				position: relative;
				width: 40%;
				height: 100%;
				display: block;
			}
		}
		.waitAssassinate{
			font-size: calc(20/100*var(--height));
			left: calc(20/100*var(--width));
			bottom: calc(20/100*var(--height));
			position: absolute;
			z-index: 2;
		}
		.test-buttons{
			.test-button{
				position: relative;
				width: 100%;
				height: 20%;
				display: block;
			}
			right: calc(1/100*var(--width));
			top: calc(50/100*var(--height));
			position: absolute;
			width: calc(15/100*var(--width));
			height: calc(20/100*var(--height));
			z-index: 2;
			display: flex;
			flex-wrap: wrap;
			align-content: space-around;
		}
		.playroom-playerlist{
			position: absolute;
			margin: 0;
			top: calc(6/100*var(--height));
			left: calc(10/100*var(--width));
			right: 0;
			width: calc(55/100*var(--width));
			height: calc(50/100*var(--height));
			text-align: center;
			z-index: 2;
		}
		.chat{
			right: calc(1/100*var(--width));
			top: calc(1/100*var(--height));
			position: absolute;
			width: calc(35/100*var(--width));
			height: calc(45/100*var(--height));
			z-index: 2;
		}
		.playroom-task{
			top: calc(55/100*var(--height));
			left: calc(20/100*var(--width));
		}
		.playroom_bg {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1;
		}
		.playroom-skill{
			z-index: 1;
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
		.playroom-skill:hover{
			background-color: rgba(255, 255, 255, 0.6);
		}
		.playroom-character-card{
			position: absolute;
			height: calc(21/100*var(--width));
			width: calc(14/100*var(--width));
			right: calc(17/100*var(--width));
			bottom: calc(10/100*var(--height));
			z-index: 2;
			border-radius: calc(15/1000*var(--width));
			overflow: hidden;
			display: flex;
			justify-content: center;
			//下面这些也应该在组件里实现。
			.playroom-character{
				position: absolute;
				width: 100%;
				height: 100%;
			}
			.playroom-character-border {
				height: auto;
				width: 100%;
				height: 100%;
				position: absolute;
			}
			.playroom-character-intro{
				.playroom-character-intro-text{
					width: 90%;
					//height: 100%;
				}
				width: 100%;
				height: 100%;
				position: absolute;
				font-size: calc(13/1000*var(--width));
				color: white;
				//padding: calc(2/100*var(--width));
				opacity: 0;
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: center;
				flex-direction: row;
				flex-wrap: nowrap;
				align-content: center;
				transition: 0.5s;
			}
			.playroom-character-intro:hover{
				opacity: 0.8;
				background-color: black;
				transition: 0.5s;
			}
		}
	}
</style>