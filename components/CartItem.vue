<template>
    <div class="cart-item">
      <img :src="item.image" :alt="item.title" class="cart-item-image" />
      <div class="cart-item-details">
        <h3 class="cart-item-title">{{ item.title }}</h3>
        <p class="cart-item-instructor">{{ item.instructor }}</p>
        <p class="cart-item-price">{{ item.price.current }}</p>
        <button @click="removeItem" class="remove-item-btn">Kaldır</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    item: Object, // Sepet elemanı
    index: Number, // Sepet içindeki indeks
  });
  const emit = defineEmits(["remove"]);
  
  const removeItem = () => {
    emit("remove", index); // `remove` eventini tetikleyin
  };
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 4px;
  }
  .cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 12px;
  }
  .cart-item-details {
    flex: 1;
  }
  .remove-item-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  .remove-item-btn:hover {
    background: #c0392b;
  }
  </style>
  