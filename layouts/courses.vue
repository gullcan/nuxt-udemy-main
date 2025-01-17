<template>
    <v-app>
   
      <v-app-bar app flat color="white" elevation="1">
      
        <v-toolbar-title>
          <NuxtLink to="/courses" class="font-bold text-xl">Courses</NuxtLink>
        </v-toolbar-title>
  
        
        <v-spacer></v-spacer>
  
       
        <v-btn-group>
          <NuxtLink to="/" class="v-btn text-none mx-2">Home</NuxtLink>
          <NuxtLink to="/courses" class="v-btn text-none mx-2">Courses</NuxtLink>
          <NuxtLink to="/login" class="v-btn text-none mx-2">Login</NuxtLink>
          <NuxtLink to="/signup" class="v-btn text-none mx-2">Signup</NuxtLink>
        </v-btn-group>
  
        
        <div class="auth-buttons">
          <v-btn outlined color="primary" class="mx-2">Oturum aç</v-btn>
          <v-btn color="primary" class="mx-2">Kaydol</v-btn>
        </div>
      </v-app-bar>
  
      
      <v-main>
        <div class="container mx-auto p-4">
          <slot />
        </div>
      </v-main>
    </v-app>
  </template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>