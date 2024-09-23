<template>
  <div class="mt-1">
    熱門項目：
    <span 
      v-for="item in items" 
      :key="item" 
      class="badge rounded-pill text-bg-primary text-white me-1"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  items: Array
});
</script>