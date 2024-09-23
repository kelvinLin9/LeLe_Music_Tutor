import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCourseStore } from './course'
import { usePaginationStore } from './PaginationStore'

export const useFilterStore = defineStore('filterStore', () => {
  const courseStore = useCourseStore()
  const paginationStore = usePaginationStore()

  // state
  const selectCityName = ref('')
  const selectCourseCategory = ref('')
  const selectCourseName = ref('')
  const courseMethod = ref(['在學生家', '在老師家', '線上'])
  const selectCourseMethod = ref('')
  const sortMethod = ref(['依人氣', '依新舊', '依金額'])
  const selectSortMethod = ref('依人氣')

  // actions
  function selectCityNameCancel() {
    if (selectCourseMethod.value === '') {
      selectCityName.value = ''
    }
  }

  function courseSort() {
    console.log(selectSortMethod.value)
    if (selectSortMethod.value === '依金額') {
      courseStore.courses.sort((a, b) => b.data.price - a.data.price)
    } else if (selectSortMethod.value === '依新舊') {
      courseStore.courses.sort((a, b) => b.createdTime - a.createdTime)
    } else if (selectSortMethod.value === '依人氣') {
      courseStore.courses.sort((a, b) => b.data.whoBuy.length - a.data.whoBuy.length)
    }
  }

  // getters
  const filterData = computed(() => {
    console.log('filter')
    return courseStore.courses.filter((item) => {
      const baseCondition = item.data.cityName.match(selectCityName.value) &&
                            item.data.courseCategory.match(selectCourseCategory.value) &&
                            item.data.courseName.match(selectCourseName.value)
      
      return selectCourseMethod.value === '' 
        ? baseCondition
        : baseCondition && item.data.courseMethod.includes(selectCourseMethod.value)
    })
  })

  const currentPageCoursesData = computed(() => {
    paginationStore.pagination(filterData.value)
    return paginationStore.eachPage
  })

  return {
    selectCityName,
    selectCourseCategory,
    selectCourseName,
    courseMethod,
    selectCourseMethod,
    sortMethod,
    selectSortMethod,
    selectCityNameCancel,
    courseSort,
    filterData,
    currentPageCoursesData
  }
})