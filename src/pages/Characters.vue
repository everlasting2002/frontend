<template>
	<Btn class="waitroom_btn_return" @click="$router.push('Home')" type="x" img="/assets/img/waitroom_btn_return.png" />
</template>

<script setup lang="ts">
	import Btn from "../components/Btn.vue";

</script>

<style lang="scss" scoped>
	.waitroom_btn_return {
		cursor: pointer;
		position: absolute;
		top:calc(5/100*var(--height));
		left: calc(5/100*var(--height));
		width: calc(10/100*var(--height));
		z-index: 2;
	}
</style>