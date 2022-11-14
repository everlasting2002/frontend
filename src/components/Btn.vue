<template>
  <div
    class="btn"
    :class="{ disabled }"
    @click="(e) => (disabled ? null : onClick(e))"
  >
    <span :class="type">
      <p class="content" v-if="content">{{ content }}</p>
      <img class="img" :src="img" v-if="img" />
    </span>
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
    .Entrance {
      .img {
        width: 36vw;
      }
    }
    .CreateRoom {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      opacity: 0.7;
      background-image: url("/assets/img/border_createroom.png");
      background-size: 100% 100%;
    }
    .JoinRoom {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      opacity: 0.7;
      background-image: url("/assets/img/border_joinroom.png");
      background-size: 100% 100%;
    }
    .Introduction {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      opacity: 0.7;
      background-image: url("/assets/img/border_introduction.png");
      background-size: 100% 100%;
    }
    .Recording {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      opacity: 0.7;
      background-image: url("/assets/img/border_recording.png");
      background-size: 100% 100%;
    }
    .x {
      .img {
        width: 6vw;
      }
    }
    .Rule {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      background-image: url("/assets/img/waitroom_btn_rule.png");
      background-size: 100% 100%;
    }
    .Start {
      .content {
        padding: 2rem;
        display: inline-block;
      }
      background-image: url("/assets/img/waitroom_btn_start.png");
      background-size: 100% 100%;
    }
    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
