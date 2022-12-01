<template>
	<div class="waitroom">
		<div class="room-number-container">
			<div>
				<div @click="copyRoomNumber()">房间号：{{ number }}</div>
				<span class="clip-tip" @click="copyRoomNumber()">点击复制</span>
			</div>
		</div>
		
		<img :src="`/assets/img/waitroom_bg.png`" class="waitroom_bg"/>
		<img :src="`/assets/img/waitroom_line.png`" class="waitroom_line"/>
		
		<div class="waitroomButtons">
			<Btn id="waitroom_btn_start" class="waitroom_btn" @click="start()" type="Start" content="开始游戏" v-if="self.index === Room.ownerID" :disabled="!canBegin" />
			<Btn id="waitroom_btn_rule" class="waitroom_btn" @click="refRule.showRule()" type="Rule" content="游戏规则" />
		</div>
		<Btn class="waitroom_btn_return" @click="leave()" type="x" img="/assets/img/waitroom_btn_return.png" />
		<Rule content="游戏规则" ref="refRule" />
		<RoomPlayerList class="list" :playerList="players"></RoomPlayerList>
	</div>
</template>

<script setup lang="ts">
	import RoomPlayerList from "../components/RoomPlayerList.vue";
	import { players,self,Room } from "../reactivity/game";
	import Btn from "../components/Btn.vue";
	import { computed } from "@vue/reactivity";
	import { leave } from '../reactivity/leaveRoom';
	import { start } from "../reactivity/startGame";
	import { ref } from "vue";
	import Rule from "../components/Rule.vue";
	import Clipboard from 'clipboard';

	const number = Room.value.roomNumber;
	const canBegin = computed(()=>players.value.length >= 5);
	const refRule = ref<any>(null);
	
	function copyRoomNumber() {
	Clipboard.copy(number);
	};

</script>

<style lang="scss" scoped>
	.waitroom {
		.list{
			position: absolute;
			margin: auto;
			top: calc(22/100*var(--height));
			left: 0;
			right: 0;
			width: calc(75/100*var(--width));
			height: calc(50/100*var(--height));
			text-align: center;
			z-index: 2;
		}
		.waitroom_bg {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1;
		}
		.waitroomButtons{
			top: calc(75/100*var(--height));
			width: calc(70/100*var(--width));
			left: calc(15/100*var(--width));
			display: flex;
			z-index: 2;
			position: absolute;
			justify-content: space-around;
			.waitroom_btn{
				height: 2em;
				color: #5A8375;
				font-size: calc(45/1000*var(--height));
				width: calc(20/100*var(--width));
			}
		}
		.waitroom_line{
			position: absolute;
			margin: auto;
			top: calc(15/100*var(--height));
			left: 0;
			right: 0;
			height: calc(6/1000*var(--height));
			width: calc(65/100*var(--height));
			text-align: center;
			z-index: 2;
		}
		.room-number-container {
			position: absolute;
			top:calc(8/100*var(--height));
			left: 0;
			right: 0;
			font-size: calc(5/100*var(--height));
			text-align: center;
			color: #B1BC94;
			z-index: 3;
			display: block;

			div
			{
			display: inline-block;
				div
				{
					cursor: pointer;
				}
				.clip-tip
				{
					cursor: pointer;
					font-size: 60%;
					height: 100%;

					display: inline-block;
					vertical-align: middle;
					transform: translateY(-0.4em);

					position: absolute;
					margin-left: 1em;
					padding: 0.4em 0.8em;
					border-radius: 0.2em;

					display: inline-flex;
					align-items: center;

					background-color: #00000099;
					color: #ECDFD5;

					opacity: 0;
					visibility: hidden;
					transition: opacity 0.2s, ease-in-out 0.2s;
				}
				&:hover .clip-tip
				{
					opacity: 1;
					visibility: visible;
				}
			}
		}
		.waitroom_btn_return {
			cursor: pointer;
			position: absolute;
			top:calc(5/100*var(--height));
			left: calc(5/100*var(--height));
			width: calc(10/100*var(--height));
			z-index: 4;
		}
	}
</style>
