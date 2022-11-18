<template>
  <div
    class="btn"
    :class="{ disabled }"
    @click="(e) => (disabled ? null : onClick(e))"
  >
    <div :class="type" class="back">
      <p class="content" v-if="content">{{ content }}</p>
      <img :src="img" v-if="img" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: String,
    content: String,
    img: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: { type: Function, default: () => {} },
  })
</script>

<style lang="scss" scoped>
  .btn {
    cursor: pointer;
    display: inline-block;
    img{
      text-align: center;
    }
    .x {
      img {
        width: 100%;
      }
    }
    .back {
      height: 100%;
      width: 100%;
      background-size: 100% 100%;
      display: flex;
      align-content: space-around;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .Enter {
      background-image: url("/assets/img/border_loading_enter.png");
    }
    .CreateRoom {
      opacity: 0.7;
      background-image: url("/assets/img/border_createroom.png");
    }
    .JoinRoom {
      opacity: 0.7;
      background-image: url("/assets/img/border_joinroom.png");
    }
    .Introduction {
      opacity: 0.7;
      background-image: url("/assets/img/border_introduction.png");
    }
    .Recording {
      opacity: 0.7;
      background-image: url("/assets/img/border_recording.png");
    }
    .Rule {
      background-image: url("/assets/img/waitroom_btn_rule.png");
    }
    .Start {
      background-image: url("/assets/img/waitroom_btn_start.png");
    }
    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
