<template>
    <div>
        <div class="fake-header"></div>
        <v-app-bar app flat dense>
            <!-- Logo -->
            <div class="logo-wrapper">
                <NuxtLink to="/">
                  <img src="/assets/images/logo-udemy.svg" alt="Udemy Logo" width="91" height="34"/>
                </NuxtLink>
              </div>
            <!-- Kategoriler -->
            <v-btn text class="ml-3">
              <NuxtLink to="/courses"class="nav-btn" v-bind="props"
    >Kategoriler</NuxtLink>
            </v-btn>
      
            <!-- Search Bar -->
            <v-spacer />
            <v-text-field
              class="mx-3"
              hide-details
              solo
              rounded
              placeholder="Dilediğiniz şeyi arayın"
              prepend-inner-icon="mdi-magnify"
              dense
            ></v-text-field>
      
            <!-- Action Buttons -->
            <v-btn text>
              <NuxtLink to="/business" class="nav-btn" v-bind="props"
    >Udemy Business</NuxtLink>
            </v-btn>
            <v-btn text>
              <NuxtLink to="/teach" class="nav-btn" v-bind="props"
    >Udemy'de Eğitim Ver</NuxtLink>
            </v-btn>
      
            <!-- Cart Icon -->
            <v-btn icon>
              <NuxtLink to="/cart">
                <v-icon>mdi-cart-outline</v-icon>
              </NuxtLink>
            </v-btn>
      
            <!-- Login and Signup -->
            <v-btn outlined class="mx-2">
              <NuxtLink to="/login" class="white-btn ms-8r"
    >Oturum aç</NuxtLink>
            </v-btn>
            <v-btn color="primary" dark>
              <NuxtLink to="/signup"class="black-btn ms-8r"
    >Kaydol</NuxtLink>
            </v-btn>
      
            <!-- Language Icon -->
            <v-btn icon class="white-btn icon ms-8r"
    >
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </v-app-bar>
    </div>
</template>
<script setup >

    
</script>