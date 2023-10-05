import "./assets/scss/all.scss";

import { createApp } from 'vue'
import { createPinia } from 'pinia'



// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


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
initializeApp(firebaseConfig)




import App from './App.vue'
import router from './router'





const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
