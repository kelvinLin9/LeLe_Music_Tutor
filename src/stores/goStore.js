// import { defineStore } from 'pinia'
// import { useRouter } from 'vue-router'
// // import { useLogInStore } from './loginStore'
// // import { useFilterStore } from './filterStore'

// export const useGoStore = defineStore('goStore', () => {
//   const router = useRouter()
//   // const logInStore = useLogInStore()
//   // const filterStore = useFilterStore()

//   const navigateTo = (path) => router.push(path)

//   const resetSignUpForm = () => {
//     // const { signUpForm } = logInStore
//     // signUpForm.user.name = ''
//     // signUpForm.user.email = ''
//     // signUpForm.user.password = ''
//     // signUpForm.user.confirmation = ''
//   }

//   const goCoursePage = (id) => navigateTo(`/coursePage/${id}`)
  
//   const goHomePage = () => navigateTo('/')
  
//   const goLoginPage = () => {
//     // logInStore.logInPage = true
//     resetSignUpForm()
//   }

//   const goBeATeacherStep = (step) => navigateTo(`/CreateCourses/BeATeacherStep${step}`)

//   const goBookmark = () => navigateTo('/MyCourses')

//   const goAllCourses = (search) => {
//     navigateTo('/AllCourses')
//     // if (search) {
//     //   filterStore.selectCourseCategory = search
//     //   filterStore.selectCourseName = ''
//     // }
//   }

//   return {
//     goCoursePage,
//     goHomePage,
//     goLoginPage,
//     goBeATeacherStep1: () => goBeATeacherStep(1),
//     goBeATeacherStep2: () => goBeATeacherStep(2),
//     goBeATeacherStep3: () => goBeATeacherStep(3),
//     goBeATeacherStep4: () => goBeATeacherStep(4),
//     goBookmark,
//     goAllCourses
//   }
// })





import router from '../router'
import { defineStore } from 'pinia'
import logInStore from './loginStore'
import dataStore from './dataStore'
import courseCardStore from './courseCardStore'
import filterStore from './filterStore'

const logIn = logInStore()
const data = dataStore()
const courseCard = courseCardStore()
const filter = filterStore()
export default defineStore('goStore', {
  actions: {
    goCoursePage (id) {
      console.log(id)
      router.push(`/coursePage/${id}`)
    },
    goHomePage () {
      router.push('/')
    },
    goLoginPage () {
      logIn.logInPage = true
      logIn.signUpForm.user.name = ''
      logIn.signUpForm.user.email = ''
      logIn.signUpForm.user.password = ''
      logIn.signUpForm.user.confirmation = ''
    },
    goBeATeacherStep1 () {
      router.push('/CreateCourses/BeATeacherStep1')
    },
    goBeATeacherStep2 () {
      router.push('/CreateCourses/BeATeacherStep2')
    },
    goBeATeacherStep3 () {
      router.push('/CreateCourses/BeATeacherStep3')
    },
    goBeATeacherStep4 () {
      router.push('/CreateCourses/BeATeacherStep4')
    },
    goBookmark() {
      // courseCard.courseCardData = data.userBookmarkCourses
      // console.log(courseCard.courseCardData)
      router.push('/MyCourses')
    },
    goAllCourses(search) {
      router.push('/AllCourses')
      if (search) {
        filter.selectCourseCategory = search
        filter.selectCourseName = ''
      }
    },
  }
})
