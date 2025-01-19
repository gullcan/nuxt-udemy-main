<template> 
  <Header /> 
  <Signup />
    <div class="spaceholder"></div>
    <Footer />
</template>


<script>
  import Header from '/components/Header.vue';
    import Signup from '~/components/Signup.vue';
    import Footer from '/components/Footer.vue';
</script>
    

<style scoped>
   
   .spaceholder{
  width: 100%;
  height: 450px;
}
    </style>
    