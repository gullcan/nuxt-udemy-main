<template>
  <v-container fluid class="login-container">
    <v-row>
      <v-col cols="12" md="6" class="login-image">
        <v-img src="@/assets/images/login.webp" alt="Login Image" cover></v-img>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-card class="login-card">
          <h1 class="headline login-title">
            Öğrenim yolculuğunuza devam etmek için oturum açın
          </h1>
          <v-form>
            <v-text-field
              v-model="localEmail"
              label="E-posta"
              type="email"
              outlined
              dense
              hide-details="auto"
              class="email-field"
            ></v-text-field>
         
            <v-btn @click="handleLogin" block class="form-group">
              <v-icon left>mdi-email</v-icon>
              E-posta ile devam et
            </v-btn>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-else class="no-error">Error: {{ error }}</div>
          </v-form>
                   
          
                   <div class="other-options">Diğer oturum açma seçenekleri</div>

                   
                   
                   <v-row class="text-center login-icons">
                     <v-col>
                       <v-btn icon class="login-btn-colored" @click="loginWithGoogle">
                         <v-icon class="google-icon">mdi-google</v-icon>
                       </v-btn>
                     </v-col>
                     <v-col>
                       <v-btn icon class="login-btn-colored" @click="loginWithFacebook">
                         <v-icon class="facebook-icon">mdi-facebook</v-icon>
                       </v-btn>
                     </v-col>
                     <v-col>
                       <v-btn icon @click="loginWithApple">
                         <v-icon>mdi-apple</v-icon>
                       </v-btn>
                     </v-col>
                   </v-row>
               
                   
                    <div class="login-redirect">
                      <p>
                        Hesabınız yok mu?
                        <a href="http://localhost:3000/signup">Kaydol</a>
                        <div> </div>
                        <a href="https://www.udemy.com/organization/global-login/email">Kuruluşunuzla oturum açın</a>
                      </p>
                    </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    email: String,
    loading: Boolean,
    error: String,
  },
  data() {
    return {
      localEmail: this.email, 
    };
  },
  methods: {
    handleLogin() {
      this.$emit("login", this.localEmail, "dummy-password");
    },
    loginWithGoogle() {
      console.log("Google ile giriş");
    },
    loginWithFacebook() {
      console.log("Facebook ile giriş");
    },
    loginWithApple() {
      console.log("Apple ile giriş");
    },
  },
};
</script>



<style scoped>
.login-container {
  min-height: 100vh;
  background-color: #fff;
}

.login-image {
  background-color: white;
}

.login-card {
  background-color: #fff;
  padding: 100px;
  width: 100%;
  max-width: 600px;
  box-shadow: none;
}

.login-title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

.email-field {
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  color: #000;
  font-weight: bold;
}

.form-group {
  background-color: #6200ea;
  height: 45px;
  margin-top: 29px;
  margin-bottom: 15px;
  color: #fff;
}

.other-options {
  text-align: center;
  margin: 20px 0;
  font-size: 14px;
  color: #555;
}

.login-icons .v-btn {
  border: 1px solid #6200ea;
  border-radius: 3px;
  margin: 0 30px;
  padding: 10px;
  margin-bottom: 50px;
}

.login-icons .google-icon {
  color: #db4437;
}

.login-icons .facebook-icon {
  color: #4267B2;

}

.footer-section {
  background-color: #f5f5f5;
  padding: 10px 0;
  margin-bottom: 50px;
  margin-top: 10px;

}

.footer-links {
  display: block;
  font-size: 14px;
  color: #333;
  margin: 10px 0;
}

.footer-links .v-btn {
  text-transform: none;
  font-size: 14px;
  font-weight: normal;
  color: #6200ea;
}
.login-redirect {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}

.login-redirect a {
  font-weight: bold;
  color: #6200ea;
  text-decoration: none;
}

.login-redirect a:hover {
  text-decoration: underline;
}

.error{
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
}
</style>
