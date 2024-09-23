<template>
  <Banner 
    :bgUrl="bannerData.bgUrl"
    :title="bannerData.title"
    :text="bannerData.text"
    :footer="bannerData.footer"
  />
  <ProgressBar />
  <RouterView />
</template>

<script setup>
import Banner from '../components/Banner.vue';
import ProgressBar from '../components/ProgressBar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from "pinia"
import { useCourseStore } from '@/stores/course.js'

const route = useRoute();
const courseStore = useCourseStore()
const { courseTemp, createCourseStep } = storeToRefs(courseStore)

const bannerData = computed(() => {
  const basePath = '../assets/images/';
  const banners = {
    '/CreateCourses/BeATeacherStep1': {
      bgUrl: new URL(basePath + 'banner.jpg', import.meta.url).href,
      title: '課程資訊',
      text: 'INFORMATION',
      footer: '填寫課程資訊，讓學生輕鬆找到您的課程'
    },
    '/CreateCourses/BeATeacherStep2': {
      bgUrl: new URL(basePath + 'banner.jpg', import.meta.url).href,
      title: '課程介紹',
      text: 'INTRODUCTION',
      footer: '介紹課程內容，為學生營造期待感'
    },
    '/CreateCourses/BeATeacherStep3': {
      bgUrl: new URL(basePath + 'banner.jpg', import.meta.url).href,
      title: '頁面預覽',
      text: 'PREVIEW',
      footer: '預覽課程頁面，確保效果完美呈現'
    },
    '/CreateCourses/BeATeacherStep4': {
      bgUrl: new URL(basePath + 'banner.jpg', import.meta.url).href,
      title: '完成',
      text: 'COMPLETE',
      footer: '準備好了!您的課程將準備好在平台上展示'
    },
  };

  return banners[route.path] || banners['/CreateCourses/BeATeacherStep1'];
});
</script>


<style lang="scss" scoped>
// .timeline {
//   position: relative;
//   &::after {
//     content: '';
//     position: absolute;
//     top: 29px;
//     left: 0;  
//     right: 0;
//     height: 4px;
//     background-color: #dee2e6;
//   }
//   &-pointer {
//     position: relative;
//     color: #C1C1C1;
//     p {
//       padding-top: 64px;
//       margin-bottom: 0;
//       line-height: 1.5;
//     }
//     &::before {
//       content: '';
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60px;
//       height: 60px;
//       border: 1px solid #C1C1C1;
//       border-radius: 50%;
//       background-color: #C1C1C1;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 36px;
//       color: #FFFFFF;
//       z-index: 1;
//     }
//     &.step-1::before {
//       content: '1';
//     }
//     &.step-2::before {
//       content: '2';
//     }
//     &.step-3::before {
//       content: '3';
//     }
//     &.step-4::before {
//       content: '4';
//     }
//     &.active {
//       color: #FFC107;
//       &::before {
//         color: #FFFFFF;  
//         background-color: #FFC107;
//         border-color: #FFC107;
//       }
//     }
//   }
// }

</style>