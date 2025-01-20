<template>
  <Header />
  <Signup
    :loading="loading"
    :error="error"
    @signup="signup"
  />
  <div class="spaceholder"></div>
  <Footer />
</template>

<script>
import Header from "/components/Header.vue";
import Footer from "/components/Footer.vue";
import Signup from "~/components/Signup.vue";
import { useUserStore } from "~/stores/userStore";

export default {
  components: { Header, Footer, Signup },
  setup() {
    const userStore = useUserStore();

    return {
      loading: userStore.loading,
      error: userStore.error,
      signup: userStore.signup,
    };
  },
};
</script>



<style scoped>
   
   .spaceholder{
  width: 100%;
  height: 450px;
}
    </style>
    