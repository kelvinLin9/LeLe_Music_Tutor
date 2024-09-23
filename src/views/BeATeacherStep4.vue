<template>
  <div class="container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useCourseStore } from '@/stores/course.js';

const router = useRouter();
const courseStore = useCourseStore();
const { courseTemp, createCourseStep } = storeToRefs(courseStore);
import Swal from 'sweetalert2';

onMounted(() => {
  createCourseStep.value = 4;

  Swal.fire({
    title: '<h1>恭喜完成開課</h1>',
    icon: 'success',
    text: '課程審核需要2~3個工作天',
    showCancelButton: true,
    reverseButtons: true,
    cancelButtonText: '回到首頁',
    confirmButtonText: '繼續開課',
    confirmButtonColor: '#ff715f',
  }).then((result) => {
    if (result.isConfirmed) {
      router.push('/CreateCourses/BeATeacherStep1');
    } else {
      router.push('/');
    }
  });
});
</script>

<style lang="scss" scoped>
.BeATeacherStep4-vh {
  height: calc(100vh - 194px - 184px - 48px);
}
</style>