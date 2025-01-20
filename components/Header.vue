<template>
  <div>

    
    <div class="fake-header"></div>

 
    
    <v-app-bar app flat dense>
   
      
      <div class="logo-wrapper">
        <NuxtLink to="/">
          <img
            src="/assets/images/logo-udemy.svg"
            alt="Udemy Logo"
            width="91"
            height="34"
          />
        </NuxtLink>
      </div>

   
      
      <v-btn text class="nav-btn">
        <NuxtLink to="/courses">Keşfedin</NuxtLink>
      </v-btn>

 
      
      <v-text-field
        class="search-bar"
        hide-details
        solo
        rounded
        placeholder="Dilediğiniz şeyi arayın"
        prepend-inner-icon="mdi-magnify"
        dense
       
      ></v-text-field>

   
      
      <v-btn text>
        <NuxtLink to="/business" class="nav-btn">Udemy Business</NuxtLink>
      </v-btn>
      <v-btn text>
        <NuxtLink to="/teach" class="nav-btn">Udemy'de Eğitim Ver</NuxtLink>
      </v-btn>

   
      
      <v-btn icon>
        <NuxtLink to="/cart">
          <v-icon color="#4a4a4a">mdi-cart-outline</v-icon>
        </NuxtLink>
      </v-btn>

 
      
      <v-btn outlined class="white-btn">
        <NuxtLink to="/login">Oturum aç</NuxtLink>
      </v-btn>
      <v-btn color="white" dark class="purple-btn">
        <NuxtLink to="/signup">Kaydol</NuxtLink>
      </v-btn>

 
      
      <v-btn icon>
        <v-icon color="#4a4a4a">mdi-earth</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script> 

</script>

<style scoped>
* {
  font-family: "Udemy Sans", "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: none !important; 
}



  .fake-header {
    margin-bottom: 55px;
    height:0px;
    background-color: #ffffff;
  }
  
  
  
  .logo-wrapper {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  
  .nav-btn {
    font-size: 14px;
    color: #111116;    
    text-transform: none;
    font-weight: 400;
    
  }
  
  
  .search-bar {
  max-height: 45px;
  max-width: 700px;
  background-color: #ffffff;
  border: 1px solid #303141;
  border-width: 1px 1px 1px 1px;
  border-radius: 20px;
  color: #4a4a4a;
  font-size: 5px; 
  padding: 2 10px; 
  margin: 5px 0;
 
  }
  

  .white-btn {
    border: 1px solid #4a4a4a;
    color: #4a4a4a;
    text-transform: none;
    font-size: 14px;
    font-weight: 400;
    width: 90px;
  }
  
  .purple-btn {
    border: 2px solid #5022c3;
    background-color: #5022c3;
    color: #ffffff;
    text-transform: none;
    font-size: 14px;
    font-weight: 400;
  }
  .purple-btn a {
  color: #ffffff !important; 
  text-decoration: none; 
}
  

  .v-icon {
    font-size: 20px;
    color: #4a4a4a;
  }
  
  
  .v-btn {
    margin-right: 8px;
  }
  </style>
  