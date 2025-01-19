<template>
  <div>
    <v-carousel
      cycle
      hide-delimiters
      height="400"
      class="carousel-wrapper"
    >
      <!-- İlk Slayt -->
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

      <!-- İkinci Slayt -->
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
  top: 60px; /* Yukarıdan mesafe */
  left: 80px; /* Soldan mesafe */
  background-color: white; /* Arka plan rengi */
  padding: 16px; /* İçerik dolgusu */
  border-radius: 8px; /* Köşelerin yuvarlatılması */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge efekti */
  max-width: 400px; /* Maksimum genişlik */
  z-index: 2;
}

.slide-heading {
  font-family: SuisseWorks;
  font-size: 2rem; /* Başlık boyutu */
  font-weight: bold; /* Başlık kalınlığı */
  margin-bottom: 5px; /* Alt boşluk */
}

.slide-paragraph {
  font-size: 1rem; /* Paragraf boyutu */
  color: #555; /* Yazı rengi */
  line-height: 1.3; /* Satır yüksekliği */
  margin-bottom: 16px; /* Alt boşluk */
}

.button-container {
  display: flex;
  gap: 8px; /* Butonlar arası boşluk */
}

.custom-btn {
  font-size: 0.7rem; /* Buton yazı boyutu */
  border-color: #5022c3; /* Kenar rengi örneği */
  color: #5022c3; /* Yazı rengi örneği */
  background-color: #ffffff; /* Arka plan rengi örneği */
  padding: 6px 12px; /* İçerik dolgusu */
  border-radius: 4px; /* Buton köşeleri */
}

.custom-btn:hover {
  background-color: #5022c3; /* Hover durumu arka plan rengi */
  color: #ffffff; /* Hover durumu yazı rengi */
}
</style>
