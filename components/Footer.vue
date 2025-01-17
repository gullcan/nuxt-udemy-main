<template>
  <v-footer app padless class="footer" color="#1c1f1d" dark>
    <v-container>
      <!-- Notice Section -->
      <v-row class="mb-6 align-center">
        <v-col cols="12" md="6">
          <h3 class="custom-heading">
            En iyi şirketler, talep gören kariyer yetkinlikleri oluşturmak için 
            <a
              href="/udemy-business"
              target="_blank"
              class="business-link"
            >
              Udemy Business
            </a>'ı tercih ediyor.
          </h3>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end logos">
          <v-img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo.src"
            :alt="logo.alt"
            class="mx-2"
            max-height="50"
            max-width="auto"
            contain
          ></v-img>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="divider-white my-4"></v-divider>

      <!-- Links and Language Selector -->
      <v-row>
        <v-col cols="12" md="8">
          <div class="link-groups">
            <v-row>
              <v-col cols="12" md="4">
                <ul class="link-column">
                  <li v-for="link in column1" :key="link.text">
                    <a :href="link.href" target="_blank" class="footer-link">{{ link.text }}</a>
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="link-column">
                  <li v-for="link in column2" :key="link.text">
                    <a :href="link.href" target="_blank" class="footer-link">{{ link.text }}</a>
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" md="4">
                <ul class="link-column">
                  <li v-for="link in column3" :key="link.text">
                    <a :href="link.href" target="_blank" class="footer-link">{{ link.text }}</a>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-end">
          <div class="links-and-languages"></div>
        </v-col>
      </v-row>

   

      <!-- Footer Bottom -->
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="auto" class="d-flex align-center">
          <!-- Udemy Logo -->
          <img src="/assets/images/logo-udemy-inverted.svg" width="91.07142857142857" height="34">
        </v-col>
        <v-col cols="12" md="auto" class="d-flex justify-end">
          <span class="copyright">&copy; 2024 Udemy, Inc.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        { src: "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg", alt: "Nasdaq" },
        { src: "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg", alt: "Volkswagen" },
        { src: "https://s.udemycdn.com/partner-logos/v4/box-light.svg", alt: "Box" },
        { src: "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg", alt: "NetApp" },
        { src: "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg", alt: "Eventbrite" },
      ],
      column1: [
        { text: "Udemy Business", href: "/udemy-business" },
        { text: "Udemy'de Eğitim Verin", href: "/teaching" },
        { text: "Uygulamayı edinin", href: "/mobile" },
        { text: "Hakkımızda", href: "https://about.udemy.com" },
        { text: "İletişim", href: "https://about.udemy.com/company" },
      ],
      column2: [
        { text: "Kariyer", href: "https://about.udemy.com/careers" },
        { text: "Blog", href: "https://blog.udemy.com" },
        { text: "Yardım ve Destek", href: "/support" },
        { text: "İş Ortaklığı", href: "/affiliate" },
        { text: "Yatırımcılar", href: "https://investors.udemy.com" },
      ],
      column3: [
        { text: "Koşullar", href: "/terms" },
        { text: "Gizlilik politikası", href: "/terms/privacy" },
        { text: "Çerez ayarları", href: "#" },
        { text: "Site haritası", href: "/sitemap" },
        { text: "Erişilebilirlik beyanı", href: "https://about.udemy.com/accessibility-statement" },
      ],
    };
  },
};
</script>

<style scoped>
    .custom-heading {
  font-size: 16px; 
  font-weight: 800; 
  color: white;
}
.business-link {
  color: #c0c4fc;
  text-decoration: none;
}

.divider-white {
  border-color: white;
}

.link-groups {
  display: flex;
  justify-content: flex-start;
}

.link-column {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.875rem; /* Daha küçük yazı boyutu */
}

.language-btn {
  color: white;
  border: 1px solid white;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.copyright {
  color: white;
  font-size: 0.75rem; /* Daha küçük yazı boyutu */
}

.logos v-img {
  max-height: 30px;
}
</style>
