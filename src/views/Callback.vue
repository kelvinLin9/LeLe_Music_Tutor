<template>
  <div>
    <h1>正在處理登錄，請稍候...</h1>
    <!-- {{ $route.query.token }} -->
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router";
import { useUserStore } from '@/stores/user';

const route = useRoute()
const userStore = useUserStore()
const checkUser = userStore.checkUser

onMounted(() =>{
  console.log(route.query.token)
  if(route.query.token) {
    localStorage.setItem('music_tutor_beta', route.query.token);
    checkUser()
  }
})

</script>

<style>

</style>