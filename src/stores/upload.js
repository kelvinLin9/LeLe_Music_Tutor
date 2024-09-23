import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { Toast, Swal } from '@/mixins/swal';
import { handleErrorAsync } from '@/mixins/utils';
import * as userApi from '@/api/userApi';
import axios from 'axios';

export const useUploadStore = defineStore('uploadStore', () => {
  const uploadLoading = ref(false);


  // const uploadFile = handleErrorAsync(async (file) => {
  //   uploadLoading.value = true;
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   const response = await userApi.axiosUploadFile(formData);  // 使用您定義的 API 函數

  //   console.log('Upload response:', response.data.fileUrl);
  //   Toast.fire({ icon: 'success', title: '檔案上傳成功' });
  //   return response.data.fileUrl[0];
  // }, () => {
  //   uploadLoading.value = false;
  //   Toast.fire({ icon: 'error', title: '檔案上傳失敗' });
  // });

  const uploadFile = async(file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('https://music-tutor-backend.onrender.com/upload/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem('lele_music_tutor_token'),
        },
      });
      console.log('Upload response:', res.data.fileUrl);
      return res.data.fileUrl[0]
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  return {
    uploadFile,
  }
})
