<template>
  <div :class="{
    'bg-white': !isHomePage || navbarWhite || isMenuOpen,
    'fixed-top': isHomePage,
    'sticky-top': !isHomePage
  }">
    <nav class="container navbar navbar-expand-lg">
      <div class="container-fluid">
        <h1>
          <RouterLink to="/" class="logo navbar-brand nav-link d-flex">
            <span>樂樂音樂家教媒合平台</span>
          </RouterLink>
        </h1>
        
        <!-- Cart Icon for mobile -->
        <li v-if="userInfo.role" class="nav-item position-relative fs-5 d-lg-none d-block ms-auto">  
          <RouterLink to="/CartPage" class="nav-link" :class="{ 'text-primary': $route.name === 'CartPage'}">
            <span class="material-symbols-outlined fs-1 align-middle">shopping_cart</span>
            <!-- <div v-if="studentData.myCart.length" class="bg-primary text-white rounded-circle text-center position-absolute small-num-mobile">
              {{ studentData.myCart.length }}
            </div> -->
          </RouterLink>
        </li>

        <button class="navbar-toggler ms-16" type="button" 
                @click="toggleMenu" 
                aria-label="Toggle navigation">
          <span class="material-symbols-outlined fs-1 fw-bold">
            {{ isMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>

        <div class="collapse navbar-collapse" 
            :class="{'show': isMenuOpen}" 
            id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item fs-5">
              <RouterLink to="/CreateCourses/BeATeacherStep1" class="nav-link"
                :class="{ 'text-primary': $route.matched[1].path === '/CreateCourses'}">
                我要開課
              </RouterLink>
            </li>
            <li class="nav-item fs-5">
              <RouterLink to="/AllCourses" class="nav-link"
                :class="{ 'text-primary': $route.name === 'AllCourses'}">
                所有課程
              </RouterLink>
            </li>
            <li v-if="!userInfo.role" class="nav-item fs-5">
              <RouterLink to="/login" class="nav-link"
                :class="{ 'text-primary': $route.name === 'login'}">
                登入
              </RouterLink> 
            </li>
            
            <!-- Bookmark Icon -->
            <li v-if="userInfo.role" class="nav-item position-relative fs-5 d-none d-lg-block cursor-pointer" 
                @click="handleBookmark">
              <div class="nav-link"
                :class="{ 'text-primary': $route.name === 'MyCourses'}">
                <!-- <span class="material-symbols-outlined align-middle fs-3">bookmark</span>
                <div v-if="bookmarkNum" class="bg-primary text-white rounded-circle text-center position-absolute small-num">
                  {{ bookmarkNum }}
                </div> -->
              </div>
            </li>
            
            <!-- Cart Icon for desktop -->
            <li v-if="userInfo.role" class="nav-item position-relative fs-5 d-none d-lg-block me-8">
              <RouterLink to="/CartPage" class="nav-link"
                :class="{ 'text-primary': $route.name === 'CartPage'}">
                <span class="material-symbols-outlined align-middle fs-3">shopping_cart</span>
                <!-- <div v-if="studentData.myCart.length" class="bg-primary text-white rounded-circle text-center position-absolute small-num">
                  {{ studentData.myCart.length }}
                </div> -->
              </RouterLink>
            </li>
            
            <!-- User Dropdown -->
            <li v-if="userInfo.role" class="nav-item dropdown d-lg-flex">  
              <button class="btn dropdown-toggle text-primary ps-0 ps-lg-2 border-0"
                      type="button" id="dropdownLogin" 
                      data-bs-toggle="dropdown" aria-expanded="false"
                      :class="{ 'text-primary': $route.name === 'login'}">
                <img 
                  v-if="userInfo.photo" 
                  :src="userInfo.photo" 
                  alt="User Avatar"
                  class="avatar"
                >
                <span 
                  v-if="!userInfo.photo" 
                  class="material-symbols-outlined align-middle fs-3">
                  account_circle
                </span>
                {{ userInfo.name }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLogin">
                <li><RouterLink to="/MemberPage" class="dropdown-item">個人主頁</RouterLink></li>
                <li><RouterLink to="/MyCourses" class="dropdown-item">我的課程</RouterLink></li>
                <li><RouterLink to="/PayHistory" class="dropdown-item">購買紀錄</RouterLink></li>
                <li><RouterLink to="/MyCalendar" class="dropdown-item">行事曆</RouterLink></li>
                <li><RouterLink to="/AccountSetting" class="dropdown-item">帳戶設定</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click.prevent="logout">登出</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.js'

// import { useDataStore } from '@/stores/dataStore';
// import { useWindowStore } from '@/stores/windowStore';
// import { useLogInStore } from '@/stores/logInStore';
// import { useGoStore } from '@/stores/goStore';

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const logout = userStore.logout
const googleLogin = userStore.googleLogin


const route = useRoute();
// const dataStore = useDataStore();
// const windowStore = useWindowStore();
// const logInStore = useLogInStore();
// const goStore = useGoStore();

// const { teacherData, isMember, studentData, bookmarkNum } = storeToRefs(dataStore);
// const { navbarWhite } = storeToRefs(windowStore);

const isMenuOpen = ref(false);
const isHomePage = computed(() => route.matched[1]?.path === '/');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// const handleBookmark = () => {
//   dataStore.myCoursesState = 'bookmark';
//   goStore.goBookmark();
// };

// const { logout } = logInStore;

</script>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%; /* 如果你想要圓形頭像 */
}
.logo {
  background-image: url(../assets/images/LOGO.png);
  background-size: cover;
  background-position: center center;
  width: 100px;
  height: 45px;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.small-num {
  width: 18px;
  height: 18px;
  top: 5px;
  left: 23px;
  font-size: 12px;
}

.small-num-mobile {
  width: 20px;
  height: 20px;
  top: -12%;
  left: 60%;
  font-size: 12px;
}

.bg-white {
  transition: .4s ease;
  box-shadow: 0 4px 8px 2px rgba(0,0,0,.02);
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.fixed-top {
  transition: .4s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.btn-check:checked + .btn, 
:not(.btn-check) + .btn:active, 
.btn:first-child:active, 
.btn.active, 
.btn.show {
  border: 0;
  border-color: transparent;
}
</style>