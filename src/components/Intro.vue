<template>
    <div class="intro">
        <div class="image">
            <img class="ima" :src="`/assets/avatar/${character.toLowerCase()}.png`" alt="character" />
        </div>
        <div class="name"> {{ name }} </div>
        <p class="text"> {{ text }} </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
    SetableCharacters,
    ChineseNames,
    CharacterIntro,
} from "../../shared/GameDefs";
const props = defineProps({
    character: {
        type: String,
        required: true
    },
})
const name = computed(
    () => ChineseNames[props.character as SetableCharacters]
);
const text = computed(
    () => CharacterIntro[props.character as SetableCharacters]
);
</script>

<style lang="scss" scoped>
.intro {
    position: absolute;
    padding-block: 1vw;
    padding-inline: 1vw;
    text-align: center;
    height: 80%;
    width: 20%;
    // margin: auto;
    background-color: lightgray;

    .image {
        background-color: lightyellow;
        height: 60%;
        // border: 1px solid green;
        margin: 0 auto;

        .ima {
            height: auto;
            width: auto;
            max-width: 100%;
        }
    }

    .name {
        background-color: lightcoral;
        height: 5%;
        margin: 0 auto;

    }

    .text {
        background-color: lightblue;
        overflow: scroll;
        height: 35%;
        margin: 0 auto;
        // min-height: ;
    }
}
</style>