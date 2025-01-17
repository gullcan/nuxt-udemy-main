<template>
    <v-container class="py-10">
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center font-weight-bold text-h3 mb-4">
            Kendiniz veya kuruluşunuz için ilerlemeyi hızlandırın
          </h1>
          <p class="text-center text-subtitle-1 mb-8">
            Planlarımız veya programlarımızla hedeflerinize daha hızlı ulaşın. Hemen ücretsiz deneyin veya daha fazla bilgi edinmek için satış ekibiyle iletişime geçin.
          </p>
        </v-col>
      </v-row>
  
      <v-row dense>
        <v-col cols="12" md="4" v-for="(plan, index) in plans" :key="index">
          <v-card class="elevation-1 h-100 d-flex flex-column justify-space-between" outlined>
            <v-sheet :color="plan.headerColor" class="d-flex align-center pa-4">
              <div>
                <h3 class="text-h5 font-weight-medium">{{ plan.name }}</h3>
                <p class="text-caption">{{ plan.subtitle }}</p>
                 <!-- İkon ve Açıklama Bölümü: Subtitle'ın hemen altında -->
           <div class="d-flex align-center mt-2">
            <v-icon small class="mr-2">{{ plan.icon }}</v-icon>
            <span>{{ plan.iconText }}</span>
          </div>
              </div>
              <v-spacer></v-spacer>
              
            </v-sheet>
  
            <v-card-text>
              <div v-if="plan.price">
                <h4 class="text-h6 mb-2">{{ plan.price }}</h4>
                <p class="text-caption">{{ plan.billingInfo }}</p>
              </div>
  
              <v-btn :href="plan.link" color="primary" block large outlined>
                {{ plan.buttonText }}
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
  
              <ul class="mt-4">
                <li v-for="(feature, i) in plan.features" :key="i" class="d-flex align-center mb-2">
                  <v-icon small color="green">mdi-check-circle-outline</v-icon>
                  <span class="ml-2">{{ feature }}</span>
                </li>
              </ul>
  
             
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PlanComparison',
    data() {
      return {
        plans: [
          {
            name: 'Kişisel Plan',
            subtitle: 'Sizin için',
            iconText: 'Bireysel', 
            icon: 'mdi-account',
            price: "Ayda ₺165,00'den başlayan fiyatlarla",
            billingInfo: 'Aylık veya yıllık ücretlendirme. İstediğinizde iptal edin.',
            link: 'https://www.udemy.com/personal-plan/',
            buttonText: 'Ücretsiz deneyin',
            headerColor: 'purple lighten-2',
            features: [
              '12.000+ popüler kursa erişim',
              'Sertifika hazırlığı',
              'Hedef odaklı öneriler',
              'Yapay zeka destekli kodlama alıştırmaları',
            ],
            
          },
          {
            name: 'Team Planı',
            subtitle: 'Ekibiniz için',
            iconText: '2-20 Kişi',  
            icon: 'mdi-account-group',
            price: 'Kullanıcı başına ayda ₺1.039,00',
            billingInfo: 'Yıllık faturalandırılır. İstediğinizde iptal edin.',
            link: '/udemy-business/sign-up/',
            buttonText: 'Ücretsiz deneyin',
            headerColor: 'blue lighten-2',
            features: [
              '12.000+ popüler kursa erişim',
              'Sertifika hazırlığı',
              'Hedef odaklı öneriler',
              'Yapay zeka destekli kodlama alıştırmaları',
              'Analizler ve benimseme raporları',
            ],
            
          },
          {
            name: 'Enterprise Planı',
            subtitle: 'Kuruluşunuz tamamı için',
            iconText: '20 kişiden fazla', 
            icon: 'mdi-domain',
            price: 'Fiyatlandırma için satış ekibiyle iletişime geçin',
            billingInfo: '',
            link: '/udemy-business/request-demo-mx/',
            buttonText: 'Bir demo talep edin',
            headerColor: 'blue lighten-2',
            features: [
              'Access to 27,000+ top courses',
              'Sertifika hazırlığı',
              'Hedef odaklı öneriler',
              'Yapay zeka destekli kodlama alıştırmaları',
              'Gelişmiş analizler ve içgörüler',
              'Özel müşteri başarısı ekibi',
              '15 dilde uluslararası kurs koleksiyonu',
              'Özelleştirilebilir içerikler',
            ],
            
          },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
  }
  .text-decoration-underline {
    text-decoration: underline;
  }
  </style>
  