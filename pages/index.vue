<template>
<div>
    <!-- Carousel Bileşeni -->
    <Carousel />
<div >
      <h2 class="heading-serif-xxl">İhtiyacınız olan tüm yetkinlikler tek bir yerde</h2>
      <p class="heading-serif-xl">
        Kritik yetkinliklerden teknik konulara kadar çeşitli alanları kapsayan Udemy, profesyonel gelişiminizi destekler.
      </p>
</div>
   
   
    <SkillsHub />

    <div class="spaceholder"></div>
    

   <Partners />

   <div class="spaceholder"></div>

   <Plans />

   <div class="spaceholder"></div>

  <TrendTopics />

  <div class="spaceholder"></div>

  <div class="spaceholder"></div>

  <Footer />

  </div>
</template>

<script setup>
import Carousel from '/components/Carousel.vue';
import SkillsHub from '/components/SkillsHub.vue';
import TrendTopics from '/components/TrendTopics.vue';
import Partners from '/components/Partners.vue';
import Plans from '/components/Plans.vue';
import Footer from '/components/Footer';


</script>


  
  <style scoped>

  .heading-serif-xxl {
    font-size: 2.2rem;
    font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    font-weight: 550;
    line-height: 1.25;
    letter-spacing: -.04rem;
    color: #1c1d1f;
    margin-bottom: .8rem;
    padding-top: 2.4rem;
    padding-left: 1.2rem;
}

.heading-serif-xl {
    font-family: serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.25;
    letter-spacing: -0.0rem;
    color: #1c1d1f;
    padding-left: 1.2rem;
    padding-bottom: 2.8rem;
}
.spaceholder{
  width: 100%;
  height: 250px;
}
 
  </style>
  