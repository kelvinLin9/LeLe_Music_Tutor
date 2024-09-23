<template>
  <div class="course-card-list mb-16"
      v-for="item in courseCardData" :key="item.id">
    <div class="meta cursor-pointer" 
        @click="goCoursePage(item.id)">
      <div class="photo" :style="{backgroundImage: `url(${item.img})`}"></div>
      <ul class="details d-flex flex-column">
        <li class="fs-6">
          <i class="bi bi-tags me-6"></i>
          {{ item.category }}
        </li>
        <li class="mt-auto fs-5">
          <!-- <i class=""
          :class="bookmarkState(item.id)"
          @click.stop="toggleBookmark(item.id)"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="加入 / 移除收藏"
          ></i> -->
        </li>
      </ul>
    </div>
    <div class="description cursor-pointer"
        @click="goCoursePage(item.id)">
      <h2 class="fs-5 fw-bold d-flex">
        {{ item.name }}
        <!-- <i class="ms-auto d-sm-none"
          :class="bookmarkState(item.id)"
          @click.stop="toggleBookmark(item.id)"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="加入 / 移除收藏"
          ></i> -->
      </h2>
      <h3 class="fs-6">by {{ item.name }}</h3>
      <p class="d-flex align-items-center"> 
          <span class="material-symbols-outlined fs-6 me-4">timer</span>
          {{ item.minutes }}
          <span class="material-symbols-outlined fs-6 ms-8 me-4">map</span>
          {{ item.place || '線上' }}
          <span class="material-symbols-outlined fs-6 ms-8 me-4">group</span>
          <!-- {{ item.data.whoBuy.length}} -->
        </p>
      <p class="d-flex justify-content-between align-items-center">
        <span class="fs-5 fw-bold">NT$ {{ $filters.currency(item.price) }}</span>
        <button v-if="myCoursesState === 'teacher'"
          type="button" class="btn btn-outline-primary border-0 fw-bold"
          data-bs-toggle="modal" data-bs-target="#SetUpClassSchedule"
          @click.stop="SetUpTeacherClassSchedule(item)"
        >
          設定上課時間
      </button>
        <button v-if="myCoursesState === 'student'"
          type="button" class="btn btn-outline-primary border-0 fw-bold"
          data-bs-toggle="modal" data-bs-target="#ClassSchedule"
          @click.stop="lookStudentClassSchedule(item)"
        >
          查看上課時間
      </button>
      </p>
    </div>
  </div>  
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  courseCardData: {
    type: Array,
    required: true
  },
  myCoursesState: {
    type: String,
    default: ''
  }
})

const router = useRouter()



// watch(() => currentPageCoursesData.value, (newValue) => {
//   if (router.currentRoute.value.fullPath === '/AllCourses') {
//     courseCardStore.setCourseCardData(newValue)
//   }
// })

// watch(() => userBookmarkCourses.value, (newValue) => {
//   if (router.currentRoute.value.fullPath === '/MyCourses' && props.myCoursesState === 'bookmark') {
//     courseCardStore.setCourseCardData(newValue)
//   }
// })

// // 初始化邏輯
// if (router.currentRoute.value.fullPath === '/AllCourses') {
//   courseCardStore.setCourseCardData(currentPageCoursesData.value)
// } else if (router.currentRoute.value.fullPath === '/MyCourses') {
//   if (props.myCoursesState === 'bookmark') {
//     courseCardStore.setCourseCardData(userBookmarkCourses.value)
//   } else {
//     courseCardStore.setCourseCardData(userStudentCourses.value)
//   }
// }
</script>

<style lang="scss" scoped>
$color_white: #fff;
$color_prime: #ff715f;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.course-card-list {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    // height: 200px; //拿掉的話在桌面版就不會被文字撐開
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform .2s;
  }


  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left .2s;
    background: rgba(#000, .6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: .9rem;
    a {
      text-decoration: dotted underline
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f007";
    }

    .date:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f133";
    }

    .tags {
      ul:before {
        font-family: FontAwesome;
        content: "\f02b";
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h2 {
      line-height: 1;
    }
    h3 {
      color: $color_grey_dark;
      margin-top: 5px;
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }


  @media (min-width: 576px) {
    flex-direction: row;
    // max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg)
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}
</style>