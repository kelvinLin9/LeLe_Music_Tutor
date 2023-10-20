<template>
  <div class="d-flex align-items-center border-0 rounded-2 mb-3 p-3" 
        v-for="item in 3" :key="item">
    <el-skeleton :rows="1" animated />
  </div>
</template>

<style lang="scss" scoped>
.loading-img {
  width: 100px;
  height: 80px;
}
</style>