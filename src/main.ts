import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
import router from './router'
import { getFirestore } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useAuthStore } from './stores/auth'

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
const db = getFirestore(app)
const auth = getAuth(app)
const authState = useAuthStore();
vueapp.mount('#app')

onAuthStateChanged(auth, (newuser) => {
  if (newuser) {
    authState.newUser(newuser)
  } else {
    authState.nullUser()
  }
});

export { app, db, auth }