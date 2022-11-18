<template>
    <div class="intro">
        <div class="image">
            <img class="ima" :src="`/assets/tachie/${character.toLowerCase()}.png`" alt="character" />
            <img class="border" :src="'/assets/img/characters_border.png'" alt="border" />
        </div>
        <div class="name">
            <p>{{ name }}</p>
        </div>
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
    height: 100%;
    width: 25%;

    .image {
        height: 60%;
        margin-bottom: 10%;

        .ima {
            height: auto;
            width: 100%;
            position: absolute;
        }

        .border {
            height: auto;
            width: 100%;
            position: relative;
        }
    }
    .name {
        background-image: url("/assets/img/characters_label.png");
        background-size: 100% 100%;
        margin-bottom: 15%;
        // height: 10%; // 设定高度会有bug
        padding-block: 8%;
        text-align: center;
        p {
            color: #5A8375;
        }
    }

    .text {
        overflow: scroll;
        height: 35%;
        margin: 0 auto;
        color: white;
        line-height: 150%;
    }
}
</style>