<template>
<div class="main-page">
	<img :src="`/assets/img/characters_bg.png`" class="characters_bg" />
	<Intros class="introductions" />
	<Btn class="waitroom_btn_return" @click="$router.push('Home')" type="x" img="/assets/img/waitroom_btn_return.png" />
</div>
</template>

<script setup lang="ts">
import Btn from "../components/Btn.vue";
import Intros from "../components/Intros.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
	gsap.fromTo(".main-page", {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 0.5,
	});
})
</script>

<style lang="scss" scoped>
.characters_bg {
	width: 100%;
	height: 100%;
	margin: auto;
	position: absolute;
	z-index: 1;
}

.introductions {
	position: absolute;
	width: var(--width);
	height: var(--height);
	z-index: 2;
}

.waitroom_btn_return {
	cursor: pointer;
	position: absolute;
	top: calc(5/100*var(--height));
	left: calc(5/100*var(--height));
	width: calc(10/100*var(--height));
	z-index: 2;
}
</style>