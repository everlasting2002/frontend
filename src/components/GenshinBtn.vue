<template>
    <div class="genshin-btn"
        :class="{ disabled: disabled, 'theme-dark': theme == 'dark', 'theme-light': theme === 'light' }"
        @click="(e) => (disabled ? null : onClick(e))">
        <div class="btn-bk">
        </div>
        <div class="btn-hover">
        </div>
        <div class="btn-content">
            <div v-if="type !== undefined">
                <img v-if="type === 'o'"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAsVBMVEVHcEwzMzMyMjIzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMyMjIqKiozMzMyMjIzMzMzMzMzMzMyMjIyMjIzMzMyMjIzMzMzMzMkJCQzMzMzMzMzMzMyMjI1NTUzMzP/zDM9OjPouzM0NDNsXjP6yTP2xTPTqzNIQzN5ZzPSqjOvkDOghTOtjzNGQTM5NzNPSDM3NjP5yDPAnTPuvzOpizM1NTODbzPpvDOnijNXTjNKwoLwAAAAH3RSTlMAPLfrcYD3JFP4zPC2Boj9/jLOmO6gXKrhB4Mj3t8izqH2PwAAAhVJREFUWMO1WOmagjAMrCKKircinvXAWzwBj/d/sG1ZddWEFdjs/HMa56NJmiZlLBAZo92sdpVsVulWm20jw6KipTVM/gazobUiSFRqdY6iXquElEgkyzwQ5WQihERG5x+gf/JOQU3zj0irhd80+jkeCrl+sIaW5yGR14I0UiUeGqUUrlHkkVAk0EBVUjwywI60UnSR0pt3O3keA/nOS47leCzknrNO5TGhPp2XdFyR9M850nls6I+zH2QxXNgz53BwZvZiGGRzrwxJfHm3mg4emK52uFXyVsfQGrRdTwYvmKy3aJX6rnU1bG2zHAAsN5hlza/JWD29jvy/jVxrvt/PLff284rVXVm9New7/D+dT96d8E5nXwX7Fpn8DcQf/l6OLxEZHv0dIX5pCBET0mtpfxm/kuOLZNfQ2hTZisRWxuU4fqfH8lsmSKQzzIDkSvoDya6h9MsK8gZrQ1uZYycsmieZdVC9zZqAW8gweJiIJ4O2AHSTVQFnC0sXz3FXLNmArbIe4GbC0sJFLLE0A2yPKYBzhOUcF5mLJQewCssC7iAs97jIXiwdAJulESHZTvfvju3ShJgk2UjSnuQAkpQCkqJEUx5JCjXJlUFyedFcoyQXOk1rQdLk0LRbJI0fTQsatxnu07flNAMCzahCMzTRjG80g6SIdNiRtvPfwzXNmE/04ED09EH0CPP0HNSTz0G9D89BX3BUv7mYoU78AAAAAElFTkSuQmCC"
                    alt="">
                <img v-else-if="type === 'x'"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAgVBMVEVHcEwzMzMyMjIzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMyMjIqKiozMzMyMjIzMzMzMzMzMzMyMjIyMjIzMzMyMjIzMzMzMzMkJCQzMzMzMzMzMzMyMjI1NTUzMzM4oeQ1WXA4n+E3n+E3jMM3hrg0WW80VGg0U2gzRVAzRE/vQxNVAAAAH3RSTlMAPLfrcYD3JFP4zPC2Boj9/jLOmO6gXKrhB4Mj3t8izqH2PwAAAeFJREFUWMO1mNmagjAMhSvIJigoCohgWNWZ93/AEdQZqS1hyZwb/aD9tW16mpQxqYwgDneJallqsgvjwGBjdTQPEXCKDuZxBGLr70Govb8diFgoHkjlKYsBCMMBRA42O2tNB1S6tu5jnFcwSKuznGHaMFC2KWMsXRgsdylmbGCUNgQMIWUJo/UxItMdD3G52T3ZMEH2qRNjK5ik1XvUaTBR2tt+0adC9L995MBkOb97H2bo5QzKHIjy9DFvDsR7eJ0Ps+S3nizy06+6uvHPrlX9LfLdxr1NEb7OsjLvPsrLLKtFbZvgP4heVBlPaRhZJWp7uEMi0YtryVFaRnkTtY3u0SqerrxLycvsc4AvGSyAAZReBgQshj5K0XbMiz4GxCwElIIwIGQ7eRi1nYv8+SFvt2MpYBSMASlTAaNgDFCZBTilnwEWArk8IBcEouIMjKKyZP7EJvgSXy74EocY4zmooi/YYiTUuK/isA9wBkYJpFbQ7dZLMWSmxHd6UGSmJLfH7g+3FKk9yoya//MNRWrUsiPjOubIIDm8aI5RkgOdJrUgSXJo0i2SxI8mBZ2aDJ/p03KaAoGmVKEpmmjKN5pC8r7SQ0va038X1zRlPtGFA9HVB9ElzNt1UNpcB6XIddAPwHG2emFKdTcAAAAASUVORK5CYII=">
                <img v-else :src="type">
            </div>
            <p>{{ content }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps({
    content: String,
    theme: String,
    type: String,
    disabled: {
        type: Boolean,
        default: false
    },
    onClick: { type: Function, default: () => { } },
})
</script>
  
<style lang="scss" scoped>
.genshin-btn {
    cursor: pointer;
    display: inline-block;

    &:active {
        opacity: 0.5;
        .btn-hover
        {
            outline-width: 0;
        }
    }

    .btn-bk {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: 1000px;
    }

    .btn-hover {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: 1000px;
        border-style: solid;
        border-width: 0.2rem;
        box-sizing: border-box;
        transition: opacity 0.15s;
        outline-style: solid;
        outline-width: 0.2rem;
        transition: outline-width, 0.10s;
        opacity: 0;
    }

    .btn-content {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        div {
            height: 100%;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            * {
                height: 66.6%;
                aspect-ratio: 1;
            };
        }

        p {
            flex-grow: 1;
            text-align: center;
        };
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.6;
        cursor: not-allowed;
    }
}

.genshin-btn.theme-light {
    .btn-bk {
        background-color: #ece5d8;
        filter: drop-shadow(0 0 0.4rem #21212140);
    }

    .btn-hover {
        background-color: #ece5d8;
        border-color: #DAD5CB;
        outline-color: #FFFFFF;
    }
    .btn-content {
        p {
            color: #3B4255;
        }
    }

    &:active {
        .btn-hover {
            background-color: #fff4d0;
            border-color: #9b9894;
        }

        .btn-content {
            p {
                color: #FFFFFF;
            }
        }
    }
}

.genshin-btn.theme-dark {
    .btn-bk {
        background-color: #4a5366;
        filter: drop-shadow(0 0 0.2rem #00000099);
    }

    .btn-hover {
        background-color: #4a5366;
        border-color: #5A6272;
        outline-color: #FFE6B2;
    }
    .btn-content {
        p {
            color: #ECE5D8;
        }
    }

    &:active {
        .btn-hover {
            background-color: #ffdaaa;
            border-color: #b0aeac;
        }

        .btn-content {
            p {
                color: #716658
            }
        }
    }
}

.genshin-btn {
    &:hover .btn-hover {
        opacity: 1;
    }
}
</style>
  