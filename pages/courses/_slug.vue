<template>
    <div>
      <h1>Course Details: {{ slug }}</h1>
      <p>Bu sayfada, kursla ilgili detaylı bilgi gösterilecek.</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      // `slug` değerini API çağrısında kullanabilirsiniz
      return { slug: params.slug };
    },
  };
  </script>
  