<template>
  <v-container fluid class="login-container">
    <v-row>
      <!-- Sol Kısım (Görsel) -->
      <v-col cols="12" md="6" class="login-image">
        <v-img src="@/assets/images/login.webp" alt="Login Image" cover></v-img>
      </v-col>

      <!-- Sağ Kısım (Login Form) -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-card class="login-card">
          <!-- Başlık -->
          <v-card-title class="headline login-title">
            Öğrenim yolculuğunuza<br />devam etmek için oturum<br />açın
          </v-card-title>

          <!-- E-posta ile giriş -->
          <v-form>
            <v-text-field
              v-model="email"
              label="E-posta"
              type="email"
              :rules="[emailRule]"
              outlined
              dense
              hide-details="auto"
              class="email-field"
            ></v-text-field>

            <v-btn @click="login" block class="form-group">
              <v-icon left>mdi-email</v-icon>
              E-posta ile devam et
            </v-btn>
          </v-form>

          <!-- Diğer giriş seçenekleri başlık -->
          <div class="other-options">Diğer oturum açma seçenekleri</div>

          <!-- Diğer giriş seçenekleri -->
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

          <!-- Alt linkler -->
          <div class="login-redirect">
            <p>
              Zaten bir hesabınız var mı?
              <a href="/join/login-popup/?locale=tr_TR">Oturum aç</a>
              <div></div>
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
  data() {
    return {
      email: '',
      emailRule: [
        v => !!v || 'E-posta adresi gereklidir',
        v => /.+@.+\..+/.test(v) || 'Geçerli bir e-posta adresi girin'
      ]
    };
  },
  methods: {
    login() {
      // E-posta ile giriş işlemini buraya ekleyebilirsiniz
      console.log('E-posta ile giriş: ', this.email);
    },
    loginWithGoogle() {
      // Google ile giriş işlemini buraya ekleyebilirsiniz
      console.log('Google ile giriş');
    },
    loginWithFacebook() {
      // Facebook ile giriş işlemini buraya ekleyebilirsiniz
      console.log('Facebook ile giriş');
    },
    loginWithApple() {
      // Apple ile giriş işlemini buraya ekleyebilirsiniz
      console.log('Apple ile giriş');
    }
  }
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
  font-family: "Udemy Sans";
  text-align: center;
  font-size: 27px;
  font-weight: 900;
  letter-spacing: normal;
  line-height: 86.853333px;
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
</style>
