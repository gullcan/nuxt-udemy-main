<template>
  <div>
    <v-carousel
      cycle
      hide-delimiters
      height="400"
      class="carousel-wrapper"
    >

    
      <v-carousel-item>
        <div>
          <img
            src="/assets/images/slide1.jpg"
            alt="Slayt 1"
            class="carousel-image"
          />
          <div class="slide-box">
            <h2 class="slide-heading">Sizi anlayan öğrenim deneyimi</h2>
            <p class="slide-paragraph">
              Bugününüz (ve geleceğiniz) için yetkinlikler. Hemen platformumuzda öğrenmeye başlayın.
            </p>
          </div>
        </div>
      </v-carousel-item>

  
      
      <v-carousel-item>
        <div>
          <img
            src="/assets/images/slide2.jpg"
            alt="Slayt 2"
            class="carousel-image"
          />
          <div class="slide-box">
            <h2 class="slide-heading">Sizi başarıya ulaştıracak yetkinlikler</h2>
            <p class="slide-paragraph">
              Teknoloji ve iş dünyası hızla değişirken siz de Udemy ile hız kazanın. Yeni yetkinlikler edinerek hedeflerinize ulaşın ve rekabette önde olun.
            </p>
            <div class="button-container">
              <v-btn outlined class="custom-btn">Bireysel Plan</v-btn>
              <v-btn outlined class="custom-btn">Kuruluşlar için Plan</v-btn>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CustomCarousel",
};
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-box {
  position: absolute;
  top: 60px; 
  left: 80px; 
  background-color: white; 
  padding: 16px; 
  border-radius: 8px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  max-width: 400px; 
  z-index: 2;
}

.slide-heading {
  font-family: SuisseWorks;
  font-size: 2rem; 
  font-weight: bold; 
  margin-bottom: 5px; 
}

.slide-paragraph {
  font-size: 1rem; 
  color: #555; 
  line-height: 1.3; 
  margin-bottom: 16px;
}

.button-container {
  display: flex;
  gap: 8px; 
}

.custom-btn {
  font-size: 0.7rem; 
  border-color: #5022c3;
  color: #5022c3; 
  background-color: #ffffff; 
  padding: 6px 12px; 
  border-radius: 4px; 
}

.custom-btn:hover {
  background-color: #5022c3; 
  color: #ffffff; 
}
</style>
