import { defineStore } from "pinia";
import { db } from "~/plugins/firebase"; // Firestore bağlantınızı ekleyin
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as Array<any>, // Sepetteki ürünler
  }),
  getters: {
    totalItems: (state) => state.cartItems.length, // Toplam ürün sayısı
    isCartEmpty: (state) => state.cartItems.length === 0, // Sepet boş mu?
  },
  actions: {
    async fetchCartItems() {
      try {
        const querySnapshot = await getDocs(collection(db, "cartItems"));
        this.cartItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Ürünler alınırken bir hata oluştu:", error);
      }
    },
    async addToCart(course: any) {
        this.cartItems.push(course);
      try {
        const docRef = await addDoc(collection(db, "cartItems"), course);
        this.cartItems.push({ id: docRef.id, ...course }); // Ürünü yerel state'e ekle
        console.log("Ürün Firestore'a eklendi:", docRef.id);
      } catch (error) {
        console.error("Ürün eklenirken bir hata oluştu:", error);
      }
    },
    async removeFromCart(index: number) {
      try {
        const item = this.cartItems[index];
        if (item.id) {
          await deleteDoc(doc(db, "cartItems", item.id)); // Firestore'dan sil
        }
        this.cartItems.splice(index, 1); // Yerel state'den sil
        console.log("Ürün Firestore'dan kaldırıldı:", item.id);
      } catch (error) {
        console.error("Ürün kaldırılırken bir hata oluştu:", error);
      }
    },
  },
});
