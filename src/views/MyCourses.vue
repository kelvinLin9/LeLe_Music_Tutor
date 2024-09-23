<template>
  <!-- 上方統計欄 -->
  <div class="bg-primar text-whit">
    <div class="container">
      <div class="row align-items-center pt-32">
        <div class="col-12 col-lg-6 mb-3 mb-lg-0">
          <div class="d-flex align-items-center">
            <div class="user-photo position-relative">
              <img :src="userInfo.photo" alt="大頭照" 
                  v-if="userInfo.photo">
              <img src="../assets/images/預設大頭貼.png" alt="預設大頭照"
                  v-if="!userInfo.photo">
            </div>
            <h1 class="ms-48"> {{ userInfo.name }} </h1>
          </div>
        </div>
        <div class="col-12 col-lg-6 ms-auto">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto text-center">
              <h3 class="fs-6 text-gray-600">參加課程</h3>
              <!-- <p class="fs-1 text-primary">{{ userStudentCourses.length }}</p> -->
            </div>
            <div class="col-auto text-center">
              <h3 class="fs-6 text-gray-600">已開課程</h3>
              <p class="fs-1 text-primary">{{ courses.pagination }}</p>
            </div>
            <div class="col-auto text-center">
              <h3 class="fs-6 text-gray-600">目前收藏</h3>
              <!-- <p class="fs-1 text-primary">{{ userBookmarkCourses.length }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-24">
    <!-- 分類按鈕 -->
    <div class="row align-items-center mb-3">
      <div class="col col-md-3 fs-6 fs-md-5 fw-bold border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-primary': myCoursesState === 'student'}"
          @click="myCoursesState = 'student', courseCardData = userStudentCourses">
        <i class="bi bi-pen"
          :class="{'text-primary': myCoursesState === 'student'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'student'}">
          我是學生
        </span>
      </div>
      <div class="col col-md-3 fs-6 fs-md-5 fw-bold border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-primary': myCoursesState === 'teacher'}"
          @click="myCoursesState = 'teacher', courseCardData = userTeacherCourses">
        <i class="bi bi-book"
        :class="{'text-primary': myCoursesState === 'teacher'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'teacher'}">
          我是老師
        </span>
      </div>
      <div class="col col-md-3 fs-6 fs-md-5 fw-bold border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-primary': myCoursesState === 'bookmark'}"
          @click="myCoursesState = 'bookmark', courseCardData = userBookmarkCourses">
        <i class="bi bi-bookmarks"
          :class="{'text-primary': myCoursesState === 'bookmark'}"
        >
        </i>
        <span :class="{'text-primary': myCoursesState === 'bookmark'}">
          我的收藏
        </span>
      </div>
    </div>
  </div>
  <!-- Loading -->
  <div class="container">
    <CoursesLoadingList v-if="courseLoading"/>
  </div>
  <!-- 無課程提示 -->
  <!-- <div class="container d-flex justify-content-center align-items-center text-center" v-if="!courseLoading">
    <div v-if="userStudentCourses?.length === 0 && myCoursesState === 'student'">
      <p class="fs-1 my-16">尚未購買課程</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-primary">
          馬上購買
        </button>
      </RouterLink>
    </div>
    <div v-if="userTeacherCourses?.length === 0 && myCoursesState === 'teacher'">
      <p class="fs-1 my-16">尚未建立課程</p>
      <RouterLink to="/CreateCourses/BeATeacherStep1">
        <button type="button" class="btn btn-primary">
          我要開課
        </button>
      </RouterLink>
    </div>
    <div v-if="userBookmarkCourses?.length === 0 && myCoursesState === 'bookmark'">
      <p class="fs-1 my-16">尚未收藏課程</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-primary">
          添加收藏
        </button>
      </RouterLink>
    </div>
  </div> -->

  <!-- 老師設定上課時間 -->
  <SetUpClassScheduleModal/>
  <!-- 學生查看上課時間 -->
  <class-schedule-modal/>

  <div class="container d-flex mb-16" v-if="!courseLoading">
    <div class="w-100 w-lg-70 w-xl-60">
      <CourseCardList
        :courseCardData="courses"
        :myCoursesState="myCoursesState"
      />
    </div>
    <!-- <div class="w-50 ">
      我的行程表
    </div> -->
  </div>
  
    
{{ courses[0] }}
</template>
  
<script setup>
import CourseCardList from '../components/CourseCardList.vue'
import CoursesLoadingList from '../components/CoursesLoadingList.vue'
import SetUpClassScheduleModal from '../components/SetUpClassScheduleModal.vue'
import ClassScheduleModal from '../components/ClassScheduleModal.vue'
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useCourseStore } from '@/stores/course.js';

const router = useRouter();
const courseStore = useCourseStore();
const { courses, courseLoading } = storeToRefs(courseStore);
const getCourses = courseStore.getCourses

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const myCoursesState = ref('student');
onMounted(() => {
  getCourses({
    instructorId: userInfo.value._id,
    limit: 10
  })
});
</script>

<style lang="scss" scoped>
.user-photo {
  img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
}
}
</style>