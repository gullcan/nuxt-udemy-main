<template>
  <Header />
  <Login
    :email="email"
    :loading="loading"
    :error="error"
    @login="login"
  />
  <div class="spaceholder"></div>
  <Footer />
</template>

<script>
import Header from "/components/Header.vue";
import Footer from "/components/Footer.vue";
import Login from "~/components/Login.vue";
import { useUserStore } from "~/stores/userStore";

export default {
  components: { Header, Footer, Login },
  setup() {
    const userStore = useUserStore();

    return {
      email: userStore.user?.email || "",
      loading: userStore.loading,
      error: userStore.error,
      login: userStore.login,
    };
  },
};
</script>


  
  <style scope>

.spaceholder{
  width: 100%;
  height: 450px;
}
  </style>