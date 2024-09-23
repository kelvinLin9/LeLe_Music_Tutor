<template>
  <div class="banner d-flex align-items-center" :style="bannerStyle">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-lg-6">
          <blockquote class="py-2">
            <h2 class="fs-2 fw-bold">{{ title }}</h2>
            <h2 class="fs-2 fw-bold">{{ text }}</h2>
            <p class="fs-7 fw-bold mt-3">{{ footer }}</p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 定義 props
const props = defineProps({
  bgUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  footer: {
    type: String,
    default: ''
  }
});

// 計算背景樣式
const bannerStyle = computed(() => ({
  backgroundImage: `url(${props.bgUrl})`
}));

</script>

<style lang="scss" scoped>
.banner {
  height: 200px;
  background-position: center center;
  background-size: cover;
}
</style>