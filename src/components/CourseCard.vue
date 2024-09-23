<template>
  <div class="col"
        v-for="item in courseCardData" :key="item.id">
    <div class="course-card h-100">
      <div class="meta cursor-pointer" 
          @click="goCoursePage(item.id)">
        <div class="photo" 
            :style="{backgroundImage: `url(${item.data.courseImg})`}">
        </div>
        <ul class="details d-flex flex-column">
          <li class="fs-6">
            <i class="bi bi-tags me-6"></i>
            {{ item.data.courseCategory }}
          </li>
          <li class="mt-auto ms-auto fs-5">
            <i class=""
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </li>
        </ul>
      </div>
      <div class="description cursor-pointer"
          @click="goCoursePage(item.id)">
        <h2 class="fs-5 fw-bold d-flex">
          {{ item.data.courseName }}
        </h2>
        <h3 class="fs-6">by {{ item.data.displayName }}</h3>
        <p class="d-flex align-items-center"> 
          <span class="material-symbols-outlined fs-6 me-4">timer</span>
          {{ item.data.time }}
          <span class="material-symbols-outlined fs-6 ms-8 me-4">map</span>
          {{ item.data.cityName || '線上' }}
          <span class="material-symbols-outlined fs-6 ms-8 me-4">group</span>
          {{ item.data.whoBuy.length}}
        </p>
      </div>
      <div class="px-16 pb-16 mt-auto">
        <span class="fs-5 fw-bold">NT$ {{ $filters.currency(item.data.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
// import { useDataStore } from '@/stores/dataStore'
// import { useCourseCardStore } from '@/stores/courseCardStore'
// import { useFilterStore } from '@/stores/filterStore'
// import { useGoStore } from '@/stores/goStore'

// const router = useRouter()
// const dataStore = useDataStore()
// const courseCardStore = useCourseCardStore()
// const filterStore = useFilterStore()
// const goStore = useGoStore()

// // 解構需要的狀態
// const { bookmarkState, userStudentCourses, userBookmarkCourses, myCoursesState } = storeToRefs(dataStore)
// const { courseCardData } = storeToRefs(courseCardStore)
// const { currentPageCoursesData } = storeToRefs(filterStore)

// // 解構需要的方法
// const { toggleBookmark, getOneCoursesFirebaseData } = dataStore
// const { goCoursePage } = goStore

// // Watch
// watch(currentPageCoursesData, (newValue) => {
//   if (router.currentRoute.value.fullPath === '/AllCourses') {
//     courseCardData.value = newValue
//   }
// })

// watch(userBookmarkCourses, (newValue) => {
//   if (router.currentRoute.value.fullPath === '/MyCourses' && myCoursesState.value === 'bookmark') {
//     courseCardData.value = newValue
//   }
// })

// // Created hook equivalent
// onMounted(() => {
//   if (router.currentRoute.value.fullPath === '/AllCourses') {
//     courseCardData.value = currentPageCoursesData.value
//   } else if (router.currentRoute.value.fullPath === '/MyCourses') {
//     courseCardData.value = userStudentCourses.value
//   }
// })

// 如果需要在模板中使用計算屬性，可以這樣定義
// const someComputedProperty = computed(() => {
//   // 計算邏輯
// })

// 所有需要在模板中使用的變量和方法都會自動暴露給模板
</script>

<style lang="scss" scoped>

</style>