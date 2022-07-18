import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
import router from './router'

const vueapp = createApp(App)

vueapp.use(createPinia())
vueapp.use(router)
const firebaseConfig = {
  apiKey: "AIzaSyCepwGzPbBXbnua0EeCi1SjYoRc5qN_iFk",
  authDomain: "vue-ecommerence.firebaseapp.com",
  projectId: "vue-ecommerence",
  storageBucket: "vue-ecommerence.appspot.com",
  messagingSenderId: "818869170461",
  appId: "1:818869170461:web:b4fc0f028178a0aa4fb1f4",
  measurementId: "G-JG3TSWM3XG"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
vueapp.mount('#app')
