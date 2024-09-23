import { createApp } from 'vue'
import { createPinia } from 'pinia'


// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

import { register } from 'swiper/element/bundle';


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/all.scss";

// 金額
import { currency } from './methods/filters'



//firebase
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};
console.log(firebaseConfig);
initializeApp(firebaseConfig)

// moment
import moment from 'moment'

// CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhtw from 'element-plus/dist/locale/zh-tw.mjs'
// 換主題色
const el = document.documentElement
getComputedStyle(el).getPropertyValue(`--el-color-primary`)
el.style.setProperty('--el-color-primary', '#ff715f')

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


const app = createApp(App)

app.config.globalProperties.$filters = {
  currency
}

app.config.globalProperties.$moment = moment
app.use(createPinia())
app.use(router)
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.use(register);
app.use(CKEditor)
app.use(ElementPlus, {
  locale: zhtw,
})
app.mount('#app')
