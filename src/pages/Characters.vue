<template>
	<!-- <Intro class="tmp" image_src="../public/assets/avatar/albedo.png" name="albedo" text="神奇的阿贝多"/> -->
	<Intros class="tmp"/>
	<Btn class="waitroom_btn_return" @click="$router.push('Home')" type="x" img="/assets/img/waitroom_btn_return.png" />
</template>

<script setup lang="ts">
import Btn from "../components/Btn.vue";
import Intros from "../components/Intros.vue";
</script>

<style lang="scss" scoped>
.tmp {
	position: absolute;
	width: var(--width);
  	height: var(--height);
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