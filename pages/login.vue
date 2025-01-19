<template>
  <Header />
    <Login />
    <div class="spaceholder"></div>
    <Footer />
  </template>
  
  <script>
    import Header from '/components/Header.vue';
  import Login from '~/components/Login.vue';
  import Footer from '/components/Footer.vue';

  
  export default {
    components: {
      Header,
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