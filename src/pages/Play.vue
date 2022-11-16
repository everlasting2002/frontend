<template>
	<Avatar class="character" :character="self.character"></Avatar>
</template>

<script setup lang="ts">
	import Btn from "../components/Btn.vue";
	import Avatar from "../components/Avatar.vue";
	import { players,self,Room } from "../reactivity/game";

</script>

<style lang="scss" scoped>
	.character{
		position: absolute;
		right: calc(25/100*var(--width));
		bottom: calc(10/100*var(--height));
		z-index: 2;
	}
</style>