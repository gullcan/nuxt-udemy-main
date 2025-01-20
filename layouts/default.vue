<template>
  <v-app>

    <v-main>
      <slot /> 
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
  flex: 1; 
}
</style>

  