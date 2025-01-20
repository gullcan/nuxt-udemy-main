import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,} from "firebase/auth";
import type { User } from "firebase/auth";

// Firebase Auth instance
const auth = getAuth();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as { fullname?: string; email: string; password: string } | null,
    error: null as string | null,
    loading: false,
  }),
  actions: {
    // Kullanıcı kaydını gerçekleştiren işlem
    async signup(fullname: string, email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {

        if (!password) {
            throw new Error("Şifre gereklidir.");
          }
      
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Corrected
        this.user = { fullname, email: userCredential.user.email || "", password }; // fullname eklendi
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    // Kullanıcı girişi işlemi
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        if (!password) {
            throw new Error("Şifre gereklidir.");
          }
        const userCredential = await signInWithEmailAndPassword(auth, email, password); // Corrected
        this.user = { email: userCredential.user.email || "", password, fullname: "" }// Kullanıcının e-posta kaydedildi
      } catch (error: any) {
        this.error = error.message;
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

    // Kullanıcı durumu dinleyicisi
    observeAuthState() {
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          this.user = { email: user.email || "", fullname: "", password: "" }; // Eğer kullanıcı varsa sadece e-posta alınır
        } else {
          this.user = null;
        }
      });
    },
  },
});
