<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { storeToRefs } from "pinia"
import { useCourseStore } from '@/stores/course.js'

const router = useRouter()
const courseStore = useCourseStore()
const { courseTemp, createCourseStep } = storeToRefs(courseStore)

const schema = yup.object().shape({
  courseName: yup.string().required('請輸入課程名稱').min(3, '課程名稱至少3個字').max(15, '課程名稱最多15個字'),
  coursePrice: yup.number().required('請輸入課程費用').min(100, '課程費用最少100元').max(100000, '課程費用最多100000元'),
  courseCategory: yup.string().required('請選擇教學項目'),
  courseTime: yup.number().required('請輸入授課時間').min(30, '授課時間最少30分鐘').max(600, '授課時間最多600分鐘'),
  courseMethod: yup.array().min(1, '請至少選擇一種上課方式'),
  cityName: yup.string().required('請選擇授課地點'),

  // cityName: yup.string().when('courseMethod', {
  //   is: (val) => Array.isArray(val) && val.length > 0 && !(val.length === 1 && val.includes('線上')),
  //   then: () => yup.string().required('請選擇上課地點'),
  //   otherwise: () => yup.string().notRequired()
  // })
});



const { errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    courseName: courseTemp.value.name,
    coursePrice: courseTemp.value.price,
    courseCategory: courseTemp.value.category,
    courseTime: courseTemp.value.minutes,
    courseMethod: courseTemp.value.mode,
    cityName: courseTemp.value.place
  }
});

const [courseName] = defineField('courseName');
const [coursePrice] = defineField('coursePrice');
const [courseCategory] = defineField('courseCategory');
const [courseTime] = defineField('courseTime');
const [courseMethod] = defineField('courseMethod');
const [cityName] = defineField('cityName');

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted', values);
  courseTemp.value.name = courseName
  courseTemp.value.price = coursePrice
  courseTemp.value.category = courseCategory
  courseTemp.value.minutes = courseTime
  courseTemp.value.mode = courseMethod
  courseTemp.value.place = cityName
  createCourseStep.value = 2
  router.push('/CreateCourses/BeATeacherStep2')
});

const teachingItems = [
  '短笛', '長笛', '單簧管', '雙簧管', '英國管', '巴松管', '薩克斯風', '管風琴', '小號', '短號', '長號', '法國號', '低音號', '巴里東', '上低音號', '小提琴', '中提琴', '大提琴', '低音提琴', '豎琴', '斑鳩琴', '曼陀林', '大鍵琴', '魯特琴', '爵士鼓', '木箱鼓', '木琴', '馬林巴琴', '鋼琴', '數位鋼琴', '傳統電子琴', '電子琴', '電子合成器', '揚琴', '中國笛', '笙', '嗩吶', '蕭', '胡琴', '古箏', '柳琴', '琵琶', '阮', '其他中國樂器', '木吉他', '古典吉他', '電吉他', '烏克麗麗', '電貝斯', '口琴', '手風琴', '手碟鼓', '其它樂器', '編曲', '作曲', '詞曲創作', '配樂', '錄音', '音效', '成音工程', '混音', '樂理', '聽寫', '音樂理論', '流行歌唱', '聲樂', '音樂劇', '和聲', '視唱', 'B-BOX', 'Acappella', '指揮', '音樂治療', 'DJ', '合奏指導', '音樂軟體', '樂器製作', '其它非樂器類'
];

const cities = [
  '台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '台東縣', '花蓮縣', '連江縣'
];

const teachingMethods = ['在學生家', '在老師家', '線上'];
</script>

<template>
  <div class="container mt-48 mb-8">
    <form @submit="onSubmit">
      <div class="row justify-content-center mb-16">
        <div class="col-auto d-flex justify-content-end">
          <label for="courseName" class="col-form-label">課程名稱：</label>
        </div>
        <div class="col-8 col-lg-6">
          <input
            type="text"
            id="courseName"
            v-model="courseName"
            class="form-control"
            :class="{ 'is-invalid': errors.courseName }"
            placeholder="請輸入課程名稱"
          />
          <p class="invalid-feedback">{{ errors.courseName }}</p>
        </div>
      </div>

      <div class="row justify-content-center mb-16">
        <div class="col-auto d-flex justify-content-end">
          <label for="coursePrice" class="col-form-label">課程費用：</label>
        </div>
        <div class="col-8 col-lg-6">
          <input
            type="number"
            id="coursePrice"
            v-model.number="coursePrice"
            class="form-control"
            :class="{ 'is-invalid': errors.coursePrice }"
            placeholder="請輸入課程費用"
          />
          <p class="invalid-feedback">{{ errors.coursePrice }}</p>
        </div>
      </div>

      <div class="row justify-content-center mb-16">
        <div class="col-auto d-flex justify-content-end">
          <label for="courseCategory" class="col-form-label">教學項目：</label>
        </div>
        <div class="col-8 col-lg-6">
          <select
            id="courseCategory"
            v-model="courseCategory"
            class="form-select"
            :class="{ 'is-invalid': errors.courseCategory }"
          >
            <option value="" disabled selected>請選擇教學項目</option>
            <option v-for="item in teachingItems" :key="item" :value="item">{{ item }}</option>
          </select>
          <p class="invalid-feedback">{{ errors.courseCategory }}</p>
          <div class="mt-1">
            熱門項目：
            <span class="badge rounded-pill text-bg-primary text-white me-1">鋼琴</span>
            <span class="badge rounded-pill text-bg-primary text-white me-1">木吉他</span>
            <span class="badge rounded-pill text-bg-primary text-white me-1">流行歌唱</span>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mb-16">
        <div class="col-auto d-flex justify-content-end">
          <label for="courseTime" class="col-form-label">授課時間：</label>
        </div>
        <div class="col-8 col-lg-6">
          <input
            type="number"
            id="courseTime"
            v-model.number="courseTime"
            class="form-control"
            :class="{ 'is-invalid': errors.courseTime }"
            placeholder="請輸入授課時間(分鐘)"
          />
          <p class="invalid-feedback">{{ errors.courseTime }}</p>
        </div>
      </div>

      <div class="row justify-content-center mb-16">
        <div class="col-auto d-flex justify-content-end">
          <label class="col-form-label">上課方式：</label>
        </div>
        <div class="col-8 col-lg-6">
          <div 
            :class="{'is-invalid': errors.courseMethod}" 
            class="checkbox-group"
          >
            <div v-for="method in teachingMethods" :key="method" class="form-check      form-check-inline">
              <input
                type="checkbox"
                :id="method"
                :value="method"
                v-model="courseMethod"
                class="form-check-input"
              />
              <label :for="method" class="form-check-label">{{ method }}</label>
            </div>
          </div>
          <p class="invalid-feedback">
            {{ errors.courseMethod }}
          </p>
        </div>
      </div>

      <div class="row justify-content-center mb-16" v-if="!(courseMethod.length === 1 && courseMethod.includes('線上'))">
        <div class="col-auto d-flex justify-content-end">
          <label for="cityName" class="col-form-label">上課地點：</label>
        </div>
        <div class="col-8 col-lg-6">
          <select
            id="cityName"
            v-model="cityName"
            class="form-select"
            :class="{ 'is-invalid': errors.cityName }"
          >
            <option value="" disabled selected>請選擇上課地點</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
          <p class="invalid-feedback">{{ errors.cityName }}</p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-8 col-lg-6 offset-auto">
          <div class="text-end">
            <button type="submit" class="btn btn-primary mt-24 px-64">下一步</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
// 您可以在這裡添加任何特定的樣式
</style>