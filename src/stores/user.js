import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { Toast, Swal } from '@/mixins/swal';
import { handleErrorAsync } from '@/mixins/utils';
import * as userApi from '@/api/userApi';

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter();
  const route = useRoute();

  // State
  const userInfo = ref({});
  const showLogInPage = ref(true);
  const loginLoading = ref(false);
  const signupLoading = ref(false);
  const userLoading = ref(false);
  const users = ref([]);
  const userTemp = ref({});
  const page = ref(1);
  const limit = ref(10);
  const totalPages = ref(1);
  const sortBy = ref('createdAt');

  // Navigation
  const redirectTo = (path) => router.push(path);

  // Authentication
  const handleAuthentication = (userData, message) => {
    userInfo.value = userData;
    Toast.fire({ icon: 'success', title: message });
    redirectTo('/');
  };

  const login = handleErrorAsync(async (data) => {
    loginLoading.value = true;
    const { data: { token, user } } = await userApi.axiosLogin(data);
    document.cookie = `music_tutor_beta=${token}`;
    handleAuthentication(user, '登入成功');
    return true;
  }, () => loginLoading.value = false);

  const googleLogin = handleErrorAsync(async (token) => {
    loginLoading.value = true;
    const { data: { status, token: userToken, user } } = await userApi.axiosGoogleLogin(token);
    if (status) {
      localStorage.setItem('lele_music_tutor_token', userToken);
      handleAuthentication(user, '登入成功');
    }
  }, () => loginLoading.value = false);

  const signup = handleErrorAsync(async (data) => {
    signupLoading.value = true;
    await userApi.axiosSignup(data);
    Toast.fire({ icon: 'success', title: '註冊成功，請登入' });
    showLogInPage.value = true;
  }, () => signupLoading.value = false);

  const checkUser = async () => {
    try {
      console.log('Checking user...');
      const { data: { user } } = await userApi.axiosCheckUser();
      console.log(user)
      if (!user) throw new Error('No user data received');
      userInfo.value = user;
      if (route.path === '/callback' || route.path === 'userLogin') redirectTo('/');
    } catch (error) {
      console.error('User authentication failed', error);
      redirectTo('/login');
    }
  };

  const logout = () => {
    document.cookie = 'music_tutor_beta=';
    userInfo.value = {};
    Toast.fire({ icon: 'success', title: '已登出' });
    redirectTo('/login');
  };

  // User Management
  const getUser = async () => {
    try {
      const { data: { result } } = await userApi.axiosGetUser();
      userInfo.value = result;
    } catch (error) {
      console.error('Get user failed', error);
    }
  };

  // Password Recovery
  const verifyEmail = async () => {
    const { value: email } = await Swal.fire({
      title: "請輸入您的Email",
      input: "email",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      validationMessage: "請輸入有效的email地址"
    });

    if (email) {
      const { data: { result } } = await userApi.axiosVerifyEmail(email);
      if (result.isEmailExists) {
        await generateEmailCode(email);
      } else {
        Swal.fire({ title: "Email不存在", icon: "error" });
      }
    }
  };

  const generateEmailCode = async (email) => {
    try {
      await userApi.axiosGenerateEmailCode(email);
      await Swal.fire({
        title: "驗證碼已發送",
        text: "請檢查您的郵箱",
        icon: "success"
      });
      await resetPassword();
    } catch (error) {
      console.error('Generate email code failed', error);
      Swal.fire({ title: "發送驗證碼失敗", icon: "error" });
    }
  };

  const resetPassword = async () => {
    const { value: formValues } = await Swal.fire({
      title: "重置密碼",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="驗證碼">
        <input id="swal-input2" class="swal2-input" type="password" placeholder="新密碼">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      }
    });

    if (formValues) {
      // Here you would call your API to reset the password
      console.log("驗證碼:", formValues[0]);
      console.log("新密碼:", formValues[1]);
      // Implement the actual password reset logic here
    }
  };

  // Admin Functions
  const getUsers = handleErrorAsync(async (params) => {
    userLoading.value = true;
    const { data } = await userApi.axiosAdminGetUsers(params);
    Object.assign(users.value, data.users);
    Object.assign({ page, limit, totalPages, sortBy }, data);
  }, () => userLoading.value = false);

  const editUser = handleErrorAsync(async (data) => {
    userLoading.value = true;
    const updateData = {
      _id: data._id,
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone,
      address: data.address,
      birthday: data.birthday,
      gender: data.gender,
      photo: data.photo,
      intro: data.intro,         
      facebook: data.facebook,   
      instagram: data.instagram, 
      discord: data.discord
    };
    const { data: { status } } = await userApi.axiosAdminEditUser(updateData);
    if (status) {
      await getUsers();
      await getUser();
      Toast.fire({ icon: 'success', title: '編輯成功' });
    }
  }, () => userLoading.value = false);

  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: '確定要刪除這個用戶嗎？',
      text: "此操作無法撤銷！",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '是的，刪除它！',
      cancelButtonText: '取消'
    });

    if (result.isConfirmed) {
      userLoading.value = true;
      await userApi.axiosAdminDeleteUser(id);
      Swal.fire('已刪除！', '用戶已被刪除。', 'success');
      await getUsers();
    }
  };

  return {
    userInfo, showLogInPage, loginLoading, signupLoading,
    login, googleLogin, signup, checkUser, logout,
    getUser, verifyEmail, generateEmailCode, resetPassword,
    users, userTemp, userLoading, page, limit, totalPages, sortBy,
    getUsers, editUser, deleteUser
  };
});