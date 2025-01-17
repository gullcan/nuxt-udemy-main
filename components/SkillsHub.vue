<template>
    <section class="skills-hub">
      <!-- Üst Kategori Düğmeleri -->
      <div class="categories">
        <button v-for="(category, index) in categories" :key="index" class="category">
          {{ category.name }}
          <span class="student-count">{{ category.studentCount }}</span>
        </button>
      </div>
  
      <!-- Kaydırmalı Kurs Kartları -->
      <div class="carousel">
        <div class="carousel-wrapper">
          <div class="carousel-item" v-for="(course, index) in courses" :key="index">
            <img :src="course.image" :alt="course.title" class="course-image" />
            <div class="course-info">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="instructor">{{ course.instructor }}</p>
              <div class="ratings">
                <span class="stars">⭐ {{ course.rating }}</span>
                <span class="reviews">({{ course.reviews }} yorum)</span>
              </div>
              <div class="price">
                <span class="current-price">{{ course.price.current }}</span>
                <span class="original-price">{{ course.price.original }}</span>
              </div>
              <span class="badge" v-if="course.badge">{{ course.badge }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Alt Buton -->
      <button class="show-more">Tüm Veri Bilimi kurslarını göster</button>
    </section>
  </template>
  
  <script setup>
  const categories = [
    { name: "ChatGPT", studentCount: "3 milyondan fazla öğrenci" },
    { name: "Veri Bilimi", studentCount: "7 milyondan fazla öğrenci" },
    { name: "Python", studentCount: "46.6 milyondan fazla öğrenci" },
    { name: "Makine Öğrenimi", studentCount: "8 milyondan fazla öğrenci" },
    { name: "Derin Öğrenme", studentCount: "2 milyondan fazla öğrenci" },
    { name: "Artificial Intelligence (AI)", studentCount: "3 milyondan fazla öğrenci" },
  ];
  
  const courses = [
    {
      image: "/images/course1.jpg",
      title: "ChatGPT 2024: Prompt Mühendisliği, İçerik ve Görsel...",
      instructor: "Atıl Samancıoğlu",
      rating: 4.8,
      reviews: 862,
      price: { current: "₺129,99", original: "₺249,99" },
      badge: "En çok satan",
    },
    {
      image: "/images/course2.jpg",
      title: "ChatGPT & Yapay Zeka: Sıfırdan Prompt Mühendisliği",
      instructor: "Hakan Öz",
      rating: 4.7,
      reviews: 522,
      price: { current: "₺149,99", original: "₺449,99" },
    },
    {
      image: "/images/course3.jpg",
      title: "Sıfırdan Yapay Zeka Uzmanlığı ChatGPT, MidJourney...",
      instructor: "Dolunay Özeren",
      rating: 4.6,
      reviews: 1122,
      price: { current: "₺129,99", original: "₺249,99" },
      badge: "En çok satan",
    },
    {
      image: "/images/course4.jpg",
      title: "ChatGPT Sıfırdan Zirveye 2024: Kazanç ve Verimliliği Artırın",
      instructor: "Enes Özcan",
      rating: 4.5,
      reviews: 217,
      price: { current: "₺129,99", original: "₺249,99" },
    },
  ];
  </script>
  
  <style scoped>
  .skills-hub {
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .categories {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    margin-bottom: 20px;
  }
  
  .category {
    background-color: #f1f1f1;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
  }
  
  .student-count {
    margin-left: 5px;
    font-weight: bold;
    color: #666;
  }
  
  .carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    padding-bottom: 20px;
  }
  
  .carousel-wrapper {
    display: flex;
    gap: 20px;
  }
  
  .carousel-item {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 300px;
    flex: none;
    scroll-snap-align: start;
  }
  
  .course-image {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .course-info {
    padding: 15px;
  }
  
  .course-title {
    font-size: 16px;
    margin: 5px 0;
    font-weight: bold;
  }
  
  .instructor {
    font-size: 14px;
    color: #666;
  }
  
  .ratings {
    display: flex;
    gap: 5px;
    font-size: 12px;
    color: #666;
    margin: 10px 0;
  }
  
  .price {
    font-size: 16px;
    font-weight: bold;
  }
  
  .current-price {
    color: #1c1c1c;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #aaa;
    font-size: 14px;
  }
  
  .badge {
    background-color: #f7c137;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 12px;
    display: inline-block;
    margin-top: 10px;
  }
  
  .show-more {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 14px;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  