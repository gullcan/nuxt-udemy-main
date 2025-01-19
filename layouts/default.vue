<template>
  <v-app>
    <!-- Header Bileşeni -->
 
    <!-- Ana İçerik -->
    <v-main>
      <slot /> <!-- Sayfaya özel içerikler burada görünecek -->
    </v-main>

    

  </v-app>
</template>

<script>


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

  