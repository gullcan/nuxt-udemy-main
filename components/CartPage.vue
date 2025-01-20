<template>
  <section class="cart-page">
    <h1>Sepetiniz</h1>
    <div class="cart-content">
      <div class="cart-items">
        <CartItem
          v-for="(item, index) in cartStore.cartItems"
          :key="index"
          :item="item"
          :index="index"
          @remove="removeFromCart"
        />
      </div>
      <CartSummary />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import CartItem from "@/components/CartItem.vue";
import CartSummary from "@/components/CartSummary.vue";

const cartStore = useCartStore();

const removeItem = (index) => {
  cartStore.removeFromCart(index); // Elemanı kaldır
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
}
.cart-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.cart-items {
  flex: 2;
}
</style>
