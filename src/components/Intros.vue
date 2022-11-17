<template>
    <div class="intros">
        <Btn class="left" @click="leftPage" img="/assets/img/waitroom_btn_return.png" />
        <div class="mid">
            <Intro class="p1" :character="ch1"></Intro>
            <Intro class="p2" :character="ch2"></Intro>
            <Intro class="p3" :character="ch3"></Intro>
        </div>
        <Btn class="right" @click="rightPage" img="/assets/img/waitroom_btn_return.png" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Btn from './Btn.vue';
import Intro from './Intro.vue';

var ch1 = ref("MERLIN");
var ch2 = ref("PERCIVAL");
var ch3 = ref("ASSASSIN");

const leftPage = () => {
    if (ch1.value === "MORDRED") {
        ch1.value = "MERLIN";
        ch2.value = "PERCIVAL";
        ch3.value = "ASSASSIN";
    }
    else if (ch1.value === "LOYALIST") {
        ch1.value = "MORDRED";
        ch2.value = "OBERON";
        ch3.value = "MORGANA";
    }
};
const rightPage = () => {
    if (ch1.value === "MERLIN") {
        ch1.value = "MORDRED";
        ch2.value = "OBERON";
        ch3.value = "MORGANA";
    }
    else if (ch1.value === "MORDRED") {
        ch1.value = "LOYALIST";
        ch2.value = "MINIONS";
        ch3.value = "FAIRY";
    }
};
</script>

<style lang="scss" scoped>
.intros {
    height: 100%;
    width: 100%;


    .left {
        // float: left;
        // left: 10%;
        width: calc(20/100*var(--height));
        --width: calc(20/100*var(--height));
        position: absolute;
        left: 5%;
        top: calc(50% - var(--width) / 2);
    }

    .right {
        // float: left;
        // width: calc(10/100*var(--height));
        width: calc(20/100*var(--height));
        --width: calc(20/100*var(--height));
        position: absolute;
        right: 5%;
        top: calc(50% - var(--width) / 2);
    }

    .mid {
        width: 60%;
        height: 80%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;

        .p1 {
            left: -70%;
            right: 0%;
            top: 0%;
            bottom: 0%;
            margin: auto;
            position: absolute;
        }

        .p2 {
            left: 0%;
            right: 0%;
            top: 0%;
            bottom: 0%;
            margin: auto;
            position: absolute;
        }

        .p3 {
            left: 0%;
            right: -70%;
            top: 0%;
            bottom: 0%;
            margin: auto;
            position: absolute;
        }
    }
}
</style>