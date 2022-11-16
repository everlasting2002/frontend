<template>
	<!-- 下面这块应该是个组件，现在凑合看身份用的 -->
	<div class="card">
		<Avatar class="character" :character="self.character"></Avatar>
		<p class="intro">
			你是：{{ChineseNames[self.character]}}<br/>
			{{CharacterIntro[self.character]}}
		</p>
	</div>
</template>

<script setup lang="ts">
	import Btn from "../components/Btn.vue";
	import Avatar from "../components/Avatar.vue";
	import { players,self,Room } from "../reactivity/game";
	import { CharacterIntro, ChineseNames } from "../../shared/GameDefs";

</script>

<style lang="scss" scoped>
	.card{
		position: absolute;
		height: calc(21/100*var(--width));
		width: calc(14/100*var(--width));
		right: calc(25/100*var(--width));
		bottom: calc(10/100*var(--height));
		z-index: 2;
		border: 2px;
		border-color: green;
		border-style: outset;
		padding: 0.5em;
		//下面这些也应该在组件里实现。
		.character{
			width: 100%;
		}
		.intro{
			position: absolute;
			
		}
	}
</style>