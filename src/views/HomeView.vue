<template>
  <LayoutNavbar :key="$route.path"/>
  <div class="min-height">
    <RouterView />
  </div>
  <FooterCom/>
  <GoTop/>
</template>

<script setup>
import LayoutNavbar from '@/components/LayoutNavbar.vue';
import GoTop from '@/components/GoTop.vue';
import FooterCom from '@/components/FooterCom.vue';
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 207px);
}
</style>