<template>
    <div class="cart-summary">
      <h2>Sepet Özeti</h2>
      <p>Toplam Ürün: {{ totalItems }}</p>
      <p>Toplam Fiyat: {{ totalPrice }}</p>
      <button class="checkout-btn">Satın Al</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from "@/stores/cart";
  const cartStore = useCartStore();
  
  // Toplam ürün sayısını hesapla
  const totalItems = computed(() => cartStore.totalItems);
  
  // Toplam fiyatı hesapla
  const totalPrice = computed(() =>
    cartStore.cartItems
      .reduce((sum, item) => {
        return sum + parseFloat(item.price.current.replace("₺", "").replace(",", "."));
      }, 0)
      .toFixed(2) + " ₺"
  );
  </script>
  
  <style scoped>
  .cart-summary {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 4px;
    text-align: center;
  }
  .checkout-btn {
    background: #2ecc71;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  .checkout-btn:hover {
    background: #27ae60;
  }
  </style>
  