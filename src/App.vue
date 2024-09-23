<template>
  <!-- <div data-bs-theme="dark"> -->
    <RouterView />
  <!-- </div> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
const checkUser = userStore.checkUser

onMounted(() => {
  checkUser()
});
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    --webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #adb5bd;
    --webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: #adb5bd;
}
</style>
