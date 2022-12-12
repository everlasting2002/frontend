<template>
	<div class="mission">
		<img :src="`/assets/img/play/play_bg.png`" class="mission_bg"/>
		<div class="mission_text">{{missions[Room.currentRound]}}</div>
		<div class="mission_voters">
			<div v-for="item in List" class="mission_voter">
				<Avatar v-if="item.index===self.index" class="myavatar" :character="item.avatar?item.avatar:'empty'"></Avatar>
				<Avatar v-else class="avatar" :character="item.avatar"></Avatar>
				<div class="name">{{item.name}}</div>
				<div v-if="Room.isVoting" class="mission_voted">
					{{item.voted?"✔️":"..."}}
				</div>
			</div>
		</div>
		<div v-if="(Room.isVoting && self.inTeam && !self.voted)" class="mission_vote_bottons">
			<GenshinBtn class="mission_vote_botton" @click="voteMission(true)" content="投票同意" theme="light" type="o"></GenshinBtn>
			<GenshinBtn class="mission_vote_botton" @click="voteMission(false)" content="投票反对" theme="light" type="x"></GenshinBtn>
		</div>
		<!-- <Chat class="chat"></Chat> -->
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PublicPlayerDef } from '../../shared/ModelDefs';
import Avatar from '../components/Avatar.vue';
import Chat from '../components/Chat.vue';
import GenshinBtn from '../components/GenshinBtn.vue';
import { players, Room, self } from '../reactivity/game';
import { socket } from '../socket';

const missions = [
	"穿越烟帷与暗林",
	"千朵玫瑰带来的黎明",
	"迷梦与空幻与欺骗",
	"赤土之王与三朝圣者",
	"虚空鼓动，劫火高扬"
];

let List = computed(()=>{
	let copyedList : PublicPlayerDef[] = [];
	for(let x of players.value){
		if(x.inTeam){
			copyedList.push(x);
		}
	}
	return copyedList;
})

function voteMission(res : boolean){
	socket.send({
		type: "playerConductMission",
		perform: res,
	})
}
</script>

<style lang="scss" scoped>
.mission{
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.mission_text{
		position: relative;
		font-size: calc(10/100*var(--height));
		margin-bottom: calc(10/100*var(--height));
		z-index: 5;
		color: blanchedalmond;
	}
	.mission_vote_bottons{
		position: absolute;
		z-index: 5;
		bottom: calc(10/100*var(--height));
		height: calc(10/100*var(--height));
		width: calc(70/100*var(--width));
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		.mission_vote_botton{
			width: 40%;
			height: 100%;
			position: relative;
			font-size: calc(5/100*var(--height));
		}
	}
	.mission_bg {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		top: 0px;
		left: 0px;
	}
	.chat{
		right: calc(1/100*var(--width));
		top: calc(1/100*var(--height));
		position: absolute;
		width: calc(35/100*var(--width));
		height: calc(45/100*var(--height));
		z-index: 2;
	}
	.mission_voters{
		position: relative;
		width: calc(70/100*var(--width));
		height: calc(30/100*var(--height));
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		z-index: 5;
		.mission_voter{
			height: 100%;
			width: 20%;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			.mission_voted{
				position: absolute;
				right: 0px;
				bottom: 0px;
				color: greenyellow;
			}
			.avatar ,.myavatar{
				position: relative;
				width: 80%;
				border-radius: 50%;
			}
			.myavatar{
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
}
</style>