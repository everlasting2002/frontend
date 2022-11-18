<template>
	<div class="play-task-list">
		<div
			v-for="item in List"
			:key="item"
			class="task"
		>
			<img v-if="item===0" src="../../public/assets/img/play/waitcomplete.svg" class="task-img"/>
			<img v-if="item===1" src="../../public/assets/img/play/success.png" class="task-img"/>
			<img v-if="item===2" src="../../public/assets/img/play/fail.png" class="task-img"/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, PropType } from "vue";
	
	const props = defineProps({
		taskList: {
			type: Object as PropType<number[]>,
			required: true,
		},
	})
	let List = computed(()=>{
		let copyedList=[];
		for(let x of props.taskList)copyedList.push(x);
		while(copyedList.length<5)copyedList.push(0)
		return copyedList;
	})
	console.log(List);
</script>

<style lang="scss" scoped>
	.play-task-list{
		position: absolute;
		z-index: 1;
		.task{
			position: relative;
			margin: 0 calc(1/100*var(--width)) calc(3/100*var(--height)) calc(1/100*var(--width));
			width: calc(7/100*var(--width));
			display: inline-block;
		}
		.task-img{
			position: relative;
			width: 100%;
			border-radius: 50%;
		}
	}
</style>
