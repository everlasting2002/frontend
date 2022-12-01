<template>
	<div class="change-avatar" v-show="show">
		<div class="change-avatar-card">
			<div class="change-avatar-header">
				<img src="../../public/assets/img/changeAvatar/close.png" class="change-avatar-close" @click="hideRule" />
				<p>更换头像</p>
			</div>
			<div class="Avatars">
				<div v-for="item in avatarNames" class="change-avatar-avatar">
					<AvatarVue :character="item" @click="() => { changeAvatar(item as Avatar); show = false; }"></AvatarVue>
				</div>
			</div>
			<img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-tl" />
			<img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-tr" />
			<img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-bl" />
			<img src="../../public/assets/img/corner.png" class="change-avatar_corner change-avatar_corner-br" />
		</div>
		<div class="change-avatar-background"></div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { avatarNames, Avatar } from "../../shared/ModelDefs";
import Btn from "./Btn.vue";
import AvatarVue from "./Avatar.vue";
import { changeAvatar } from "../reactivity/room";
import { gsap } from "gsap";

var show = ref(false);

const showChange = () => {
	show.value = true;
	gsap.fromTo(".change-avatar-card", {
		opacity: 0,
		scale: 0.8,
	}, {
		opacity: 1,
		scale: 1,
		duration: 0.3,
	});
}

const hideRule = () => {
	gsap.fromTo(".change-avatar-card", {
		opacity: 1,
		scale: 1,
	}, {
		opacity: 0,
		scale: 0.8,
		duration: 0.3,
		onComplete() {
			show.value = false;
		}
	});
}

defineExpose({ showChange })
</script>

<style lang="scss" scoped>
.change-avatar {
	.change-avatar-card {
		min-height: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		word-break: break-word;
		background-color: #3b4354;
		background-size: 100% 100%;
		border-radius: calc(3/100*var(--height)*2048/1080)/calc(5/100*var(--height));
		z-index: 9999;
		position: fixed;
		//padding: calc(5/100*var(--width));
		width: calc(75/100*var(--height)*2048/1080);
		height: calc(75/100*var(--height));
		top: 50vh;
		margin-top: calc(-75/200*var(--height));
		margin-left: calc(-75/200*var(--height)*2048/1080);
		left: 50vw;
	}

	.change-avatar_corner {
		position: absolute;
		width: calc(10/100*var(--height));
		height: calc(10/100*var(--height));
	}

	.change-avatar_corner-tl {
		top: calc(-7/200*var(--height));
		left: calc(-7/200*var(--height));
	}

	.change-avatar_corner-tr {
		top: calc(-7/200*var(--height));
		right: calc(-7/200*var(--height));
		transform: rotate(90deg);
	}

	.change-avatar_corner-br {
		bottom: calc(-7/200*var(--height));
		right: calc(-7/200*var(--height));
		transform: rotate(180deg);
	}

	.change-avatar_corner-bl {
		bottom: calc(-7/200*var(--height));
		left: calc(-7/200*var(--height));
		transform: rotate(270deg);
	}

	.Avatars {
		position: absolute;
		overflow-y: auto;
		margin-top: calc(10/100*var(--height));
		height: calc(50/100*var(--height));
		background-color: #363e4d;
		padding: calc(2/100*var(--height));
		width: 80%;
		text-align: center;
		z-index: 10000;
	}

	.change-avatar-avatar {
		cursor: pointer;
		position: relative;
		display: inline-block;
		width: calc(10/100*var(--width));
		margin: calc(1/100*var(--width));
	}

	.change-avatar-background {
		position: fixed;
		z-index: 999;
		background-color: black;
		opacity: 0.7;
		display: flex;
		width: var(--width);
		height: var(--height);
		top: calc((100vh - var(--height)) / 2);
		left: 0px;
	}

	.change-avatar-header {
		position: relative;
		color: #d3bc8e;
		display: flex;
		width: 100%;
		height: calc(3/32*var(--height));
		align-items: center;
		justify-content: center;

		.change-avatar-close {
			position: absolute;
			width: calc(1/16*var(--height));
			height: calc(1/16*var(--height));
			font-size: calc(30/1000*var(--height));
			right: calc(1/32*var(--height));
			padding: 1em;
			cursor: pointer;
			color: #B1BC94;
			z-index: 1000;
		}

		p {
			font-size: calc(4/100*var(--height));
		}
	}
}
</style>
