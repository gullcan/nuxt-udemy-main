
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB80TvX0du6rc4bYSQlh_BQYyjKSuZrmBg",
  authDomain: "nuxt-udemy-clone.firebaseapp.com",
  projectId: "nuxt-udemy-clone",
  storageBucket: "nuxt-udemy-clone.firebasestorage.app",
  messagingSenderId: "860806141445",
  appId: "1:860806141445:web:6223a054aca93542beae6c"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);  
export const auth = getAuth(app);     


export default defineNuxtPlugin(() => {
  console.log("Firebase initialized");
});
