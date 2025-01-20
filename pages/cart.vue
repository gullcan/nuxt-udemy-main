<template>
  <Header />
  <div>
    <h1>Alışveriş Sepeti</h1>
    <div v-if="cartStore.isCartEmpty">
      <p>Sepetiniz boş. Bir kurs bulun!</p>
    </div>
    <div v-else>
      <CartPage />
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CartPage from "@/components/CartPage.vue";
import CartItem from "@/components/CartItem.vue";
import CartSummary from "@/components/CartSummary.vue";

onMounted(() => {
  cartStore.fetchCartItems();
});

const removeItem = (index) => {
  cartStore.removeFromCart(index); // Elemanı kaldır
};
const cartStore = useCartStore();
</script>
