<template>
	<div class="playroom">
		
		<img :src="`/assets/img/play/play_bg.png`" class="playroom_bg"/>
		<PlayPlayerList class="playroom-playerlist" :playerList="players"></PlayPlayerList>
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
		<Assassinate :playerList="players" ref="refAssassinate"></Assassinate>
		<img @click="refAssassinate.showAssassinate()" class="playroom-skill" v-if="self.character==='ASSASSIN'" src="../../public/assets/img/play/assassinate.png" />
	</div>
</template>

<script setup lang="ts">
	import { players,self,Room } from "../reactivity/game";
	import { CharacterIntro, ChineseNames } from "../../shared/GameDefs";
	import PlayPlayerList from "../components/PlayPlayerList.vue";
	import TasksVue from "../components/Tasks.vue";
	import Assassinate from "../components/Assassinate.vue";
	import { ref } from "vue";
	
	const refAssassinate = ref<any>(null);

</script>

<style lang="scss" scoped>
	.playroom{
		.playroom-playerlist{
      position: absolute;
      margin: 0;
      top: calc(10/100*var(--height));
      left: calc(10/100*var(--width));
      right: 0;
      width: calc(55/100*var(--width));
      height: calc(50/100*var(--height));
      text-align: center;
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
			border-radius: 10%/7%;
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