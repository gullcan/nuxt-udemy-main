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

    

  </v-app>
</template>

<script>
import Header from '/components/Header';

export default {
  components: {
    Header
  },
};
</script>

<style scoped>
html, body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  flex: 1; /* İçeriğin kalan alanı doldurmasını sağlar */
}
</style>

  