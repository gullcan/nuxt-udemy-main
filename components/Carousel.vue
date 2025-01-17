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
              src="/assets/images/carousel1.png"
              alt="Slayt 1"
              class="carousel-image"
            />
            <div class="carousel-content-box">
              <h1 class="heading-serif-xxl">Yetkinlik kazanın, sertifika alın</h1>
              <p class="p-carousel">
                Kariyerinizde ilerlemek mi istiyorsunuz? Udemy sertifika hazırlığıyla AWS, Azure, CompTIA ve daha pek çok konuda yetkinliklerinizi doğrulayın.
              </p>
            </div>
          </div>
        </v-carousel-item>
  
        <!-- İkinci Slayt -->
        <v-carousel-item>
          <div>
            <img
              src="/assets/images/carousel2.png"
              alt="Slayt 2"
              class="carousel-image"
            />
            <div class="carousel-content-box">
              <h1 class="heading-serif-xxl">Siber Pazartesi İndirimi</h1>
              <p class="p-carousel">
                Geleceğin yetkinlikleriyle tanışın. Kurslar şimdi yalnızca ₺129,99'den başlayan fiyatlarla! İndirim 2 Aralık'ta sona eriyor.
              </p>
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
  