import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { Toast, Alert, Swal } from '@/mixins/swal';
import { axiosSignupUser } from '@/api/userApi';

export const useUserStore = defineStore('userStore', () => {


  const router = useRouter();
  const loginData = ref({
    email: '',
    password: '',
  });
  const signupData = ref({
    email: '',
    password: '',
    // confirmPassword: '',
  });
  const signupLoading = ref(false);

  const signup = async () => {
    signupLoading.value = true;
    try {
      await axiosSignupUser(signupData.value);
      Toast.fire({
        icon: 'success',
        title: '註冊成功，請登入'
      });
      resetSignupForm();
      router.push('/login');
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
    signupData.value.email = '';
    signupData.value.password = '';
    // signupData.value.confirmPassword = '';
  }


  return {
    loginData,
    signupData,

    signup,
  }

})