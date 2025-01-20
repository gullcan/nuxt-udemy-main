import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "~/plugins/firebase"; 


const auth = getAuth();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as { fullname?: string; email: string; password: string } | null,
    error: null as string | null,
    loading: false,
  }),
  actions: {
   
    async signup(fullname: string, email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        if (!password) {
          throw new Error("Şifre gereklidir.");
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        const userDocRef = doc(db, "stores", userCredential.user.uid); 
        const userDoc = await getDoc(userDocRef);
    
        if (!userDoc.exists()) {
          
          throw new Error("Kullanıcı Firestore'da bulunamadı.");
        }
        this.user = { fullname, email: userCredential.user.email || "", password }; 
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

   
    async login(email: string, password: string) {
        this.loading = true;
        this.error = null;
        try {

          const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
          
          const userDocRef = doc(db, "stores", userCredential.user.uid); 
          const userDoc = await getDoc(userDocRef);
      
          if (!userDoc.exists()) {
            
            throw new Error("Kullanıcı Firestore'da bulunamadı.");
          }
      
      
          this.user = {
            fullname: userDoc.data()?.fullname || "",
            email: userCredential.user.email || "",
            password,
          };
      
        } catch (error: any) {
       
          if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
            this.error = "Yanlış e-posta veya şifre"; 
          } else if (error.message === "Kullanıcı Firestore'da bulunamadı.") {
            this.error = "Bu e-posta ile kayıtlı bir kullanıcı bulunmamaktadır."; 
          } else {
            this.error = error.message; 
          }
        } finally {
          this.loading = false;
        }
      },
      

    // Kullanıcı çıkışı işlemi
    async logout() {
      this.loading = true;
      try {
        await signOut(auth);
        this.user = null;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

   
    observeAuthState() {
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          this.user = { email: user.email || "", fullname: "", password: "" };
        } else {
          this.user = null;
        }
      });
    },
  },
});

