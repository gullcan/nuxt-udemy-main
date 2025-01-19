<template>
    <Login />
    <div class="spaceholder"></div>
    <Footer />
  </template>
  
  <script>
  import Login from '~/components/Login.vue';
  import Footer from '/components/Footer.vue';

  
  export default {
    components: {
      Login,
      Footer
    }
  };
  </script>
  
  <style scope>

.spaceholder{
  width: 100%;
  height: 450px;
}
  </style>