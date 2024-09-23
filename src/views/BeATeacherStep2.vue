<template>
  <div class="container pb-32">
    <form @submit="onSubmit">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8">
          <label for="courseIntro" class="form-label">課程介紹：</label>
          <textarea
            id="courseIntro"
            v-model="courseIntro"
            class="form-control"
            :class="{ 'is-invalid': errors.courseIntro }"
            rows="5"
            placeholder="限定500字元內"
          ></textarea>
          <p class="invalid-feedback">{{ errors.courseIntro }}</p>
        </div>
      </div>

      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8 mb-3">
          <div class="row">
            <div class="col-auto">
              <label for="coursePhoto" class="col-form-label">上傳一張課程封面照：</label>
            </div>
            <div class="col-12 col-md-5">
              <input
                type="file"
                id="coursePhoto"
                class="form-control"
                :class="{ 'is-invalid': errors.coursePhoto }"
                @change="handleFileChange"
                accept="image/png, image/jpeg"
              />
              <p class="invalid-feedback">{{ errors.coursePhoto }}</p>
            </div>
            <div class="col-3 mt-16 mt-md-0 ms-auto">
              <img
                v-if="coursePhotoPreview || courseTemp.img"
                :src="coursePhotoPreview || courseTemp.img"
                alt="課程封面照"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-primary px-48" @click="goBack">
            上一步
          </button>
          <button type="submit" class="btn btn-primary px-48">下一步</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { storeToRefs } from "pinia";
import { useCourseStore } from '@/stores/course.js';
import { useUploadStore } from '@/stores/upload.js'


const router = useRouter();
const courseStore = useCourseStore();
const { courseTemp, createCourseStep } = storeToRefs(courseStore);

const schema = yup.object().shape({
  courseIntro: yup.string().required('請輸入課程介紹').max(500, '課程介紹不能超過500字'),
  coursePhoto: yup.mixed().required('請上傳課程封面照')
});

const { errors, defineField, handleSubmit, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    courseIntro: courseTemp.value.intro,
    coursePhoto: courseTemp.value.img
  }
});

const [courseIntro] = defineField('courseIntro');
const coursePhotoPreview = ref(courseTemp.value.image || '');
const selectedFile = ref(null);

const uploadStore = useUploadStore()
const uploadFile = uploadStore.uploadFile

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    setFieldValue('coursePhoto', file);
    const reader = new FileReader();
    reader.onload = (e) => {
      coursePhotoPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
  courseTemp.value.intro = values.courseIntro;
  if (coursePhotoPreview.value) {
    courseTemp.value.img = coursePhotoPreview.value;
  }
  console.log(selectedFile.value)
  if (selectedFile.value) {
    try {
      console.log(selectedFile.value, courseTemp.value.img)
      const fileUrl = await uploadFile(selectedFile.value);
      courseTemp.value.img = fileUrl;
      console.log('File uploaded successfully:', fileUrl);
      createCourseStep.value = 3;
      router.push('/CreateCourses/BeATeacherStep3');
    } catch (error) {
      console.error('File upload failed:', error);
      // 處理上傳失敗的情況
    }
  } else if (courseTemp.value.img) {
    createCourseStep.value = 3;
    router.push('/CreateCourses/BeATeacherStep3');
  }
});

const goBack = () => {
  createCourseStep.value = 1;
  router.push('/CreateCourses/BeATeacherStep1');
};

onMounted (() => {   
  createCourseStep.value = 2;
  if(courseTemp.value.name === '') {
    createCourseStep.value = 1;
    router.push('/CreateCourses/BeATeacherStep1');
  }
  
})

// const handleFileUpload = async(data) => {
//   console.log(data)
//   console.log(uploadFile(data))
//   courseTemp.value.img = await uploadFile(data)
// }


</script>

<style lang="scss" scoped>
// 您可以在這裡添加任何特定的樣式
</style>