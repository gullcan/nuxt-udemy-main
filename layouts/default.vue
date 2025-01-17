<template>
  <v-app>
    <!-- Header Bileşeni -->
    <header>
      <Header />
    </header>

    <!-- Ana İçerik -->
    <v-main>
      <slot /> <!-- Sayfaya özel içerikler burada görünecek -->
    </v-main>


    
    <!-- Footer Bileşeni -->
    <footer>
      <Footer />
    </footer>

  </v-app>
</template>

<script>
import Header from '/components/Header';
import Footer from '/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Buraya global veya layout için stil eklemeyi düşünebilirsiniz */
</style>

  