<template>
  <div class="review">
    <div class="placeholder">
      什么都没有呢
    </div>

    <Btn :onClick="() => $router.push('/')" content="返回主页"></Btn>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import { showDialog } from "../reactivity/dialog";
  import Btn from "../components/Btn.vue";
  const ReviewPage = defineComponent({
    name: "ReviewPage",
    components: { Btn },
    setup(props) {
      return {
        showDialog,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .review {
    text-align: center;
    .title {
      font-size: 2rem;
      font-weight: bold;
      padding: 1.5rem;
    }
    .events {
      margin: 0 auto 3rem;
      max-width: 95vw;

      .record-item {
        text-align: left;
        padding: 0.4rem;
        cursor: pointer;
        .info {
          margin: 0.2rem;
        }
        .key {
          font-weight: bold;
        }
      }
    }
    .placeholder {
      margin: 2rem 0 4rem;
      opacity: 0.5;
    }
  }
</style>
