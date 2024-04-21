import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { Toast, Alert, Swal } from '@/mixins/swal';
import { axiosSignupUser, axiosLoginUser, axiosCheckUser } from '@/api/userApi';

export const useUserStore = defineStore('userStore', () => {


  const router = useRouter();


  // login
  const loginData = ref({
    email: '',
    password: '',
  });
  const userInfo = ref({});
  const showLogInPage = ref(true);

  const loginLoading = ref(false);
  const login = async () => {
    console.log('login', loginData.value)
    loginLoading.value = true;
    try {
      const res = await axiosLoginUser(loginData.value);
      console.log(res)
      document.cookie = `music_tutor=${res.data.token}`;
      userInfo.value = res.data.result;
      loginData.value = { email: '', password: '' };
      console.log(userInfo.value)
      Toast.fire({
        icon: 'success',
        title: '登入成功'
      });
      // router.push('/');
    } catch (error) {
      console.log('登入失敗', error);
      Alert.fire({
        icon: 'error',
        title: '登入失敗，請檢查您的帳號密碼'
      });
    } finally {
      loginLoading.value = false;
    }
  };




  // signup
  const signupData = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const signupLoading = ref(false);

  const signup = async () => {
    console.log('signup', signupData.value)
    signupLoading.value = true;
    try {
      await axiosSignupUser(signupData.value);
      Toast.fire({
        icon: 'success',
        title: '註冊成功，請登入'
      });
      resetSignupForm();
      // router.push('/login');
    } catch (error) {
      console.log('註冊失敗', error);
      Alert.fire({
        icon: 'error',
        title: '註冊失敗，請檢查您的資料'
      });
    } finally { 
      signupLoading.value = false;
    }
  };
  const resetSignupForm = () => {
    signupData.value.name = '';
    signupData.value.email = '';
    signupData.value.password = '';
    signupData.value.confirmPassword = '';
  }

  // check
  const isChecked = ref(false);
  const checkUser = async () => {
    try {
      const res = await axiosCheckUser();
      isChecked.value = res.data.status;
      console.log('checkUser 驗證成功', isChecked.value);
    } catch (error) {
      isChecked.value = false;
      console.log('checkUser 驗證失敗', isChecked.value);
    }
  }

  // logout
  const logout = () => {
    document.cookie = `typescript=`;
    // isChecked.value = false;
    Toast.fire({
      icon: 'success',
      title: '已登出'
    })
    router.push('/')
  }




  return {
    // login
    loginLoading,
    loginData,
    showLogInPage,
    login,

    // signup
    signupLoading,
    signupData,
    signup,

    // check
    isChecked,
    checkUser,

    // logout
    logout,
  }

})