<template>
  <v-container class="py-10">

    
    <v-row>
      <v-col cols="12">
        <h1 class="font-weight-bold text-h3 mb-4">
          Kendiniz veya kuruluşunuz için ilerlemeyi hızlandırın
        </h1>
        <p class="text-subtitle-1 mb-8">
          Planlarımız veya programlarımızla hedeflerinize daha hızlı ulaşın. Hemen ücretsiz deneyin veya daha fazla bilgi edinmek için satış ekibiyle iletişime geçin.
        </p>
      </v-col>
    </v-row>

  
    <v-row dense>
      <v-col cols="12" md="4" v-for="(plan, index) in plans" :key="index">
        <v-card class="elevation-1 h-100 d-flex flex-column justify-space-between" outlined style="border: 1px solid #f6f7f9;">
        
          
          <v-sheet class="d-flex align-center pa-4" style="background-color: #f6f7f9;">
            <div>
              <h3 class="text-h5 font-weight-medium">{{ plan.name }}</h3>
              <p class="text-caption">{{ plan.subtitle }}</p>
              <div class="d-flex align-center mt-2">
                <v-icon small class="mr-2">{{ plan.icon }}</v-icon>
                <span>{{ plan.iconText }}</span>
              </div>
            </div>
          </v-sheet>


          <v-card-text style="background-color: white;">
            <div v-if="plan.price">
              <h4 class="text-h6 mb-2">{{ plan.price }}</h4>
              <p class="text-caption">{{ plan.billingInfo }}</p>
            </div>
            <v-btn :href="plan.link" block large outlined class="custom-btn">
              {{ plan.buttonText }}
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>

         
          <v-card-text style="background-color: white;">
            <ul class="mt-4">
              <li v-for="(feature, i) in plan.features" :key="i" class="d-flex align-center mb-2">
                <v-icon small color="gray">mdi-check-circle-outline</v-icon>
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
          link: '#',
          buttonText: 'Ücretsiz deneyin',
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
          link: '#',
          buttonText: 'Ücretsiz deneyin',
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
          subtitle: 'Kuruluşunuzun tamamı için',
          iconText: '20 kişiden fazla',
          icon: 'mdi-domain',
          price: 'Fiyatlandırma için satış ekibiyle iletişime geçin',
          billingInfo: '',
          link: '#',
          buttonText: 'Bir demo talep edin',
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
    v-rows{
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }


h4{
  padding-bottom: 0px;
}
  

ul {
  padding-left: 0;
  list-style-type: none;
}
li {
  font-size: 0.9rem;
  line-height: 1.5;
}
.text-center {
  text-align: center;
}
.text-h3 {
  font-family: SuisseWorks;
  font-size: 1rem;
  max-width: 100%;
}
.text-subtitle-1 {
  font-size: 1rem;
  color: #6c757d;
}
.text-caption{
  padding-bottom: 30px;
  padding-top: 0px;
}


.custom-btn {
  margin-top: 50px;
  background-color: #5022c3; 
  color: white; 
  width: 90%; 
  margin: 0 auto; 
  font-size: 0.8rem;

}

.custom-btn:hover {
  background-color: #3e1a9d; 
}
</style>
