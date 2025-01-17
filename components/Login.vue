<template>
    <v-container fluid class="login-container">
      <v-row no-gutters>
        <!-- Sol Kısım (Görsel) -->
        <v-col cols="12" md="6" class="login-image">
          <v-img src="@/assets/images/login.webp" alt="Login Image" cover></v-img>
        </v-col>
  
        <!-- Sağ Kısım (Login Form) -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-card class="login-card">
            <v-card-title class="headline">Öğrenim yolculuğunuza devam etmek için oturum açın</v-card-title>
            
            <!-- E-posta ile giriş -->
            <v-form>
              <v-text-field
                v-model="email"
                label="E-posta"
                type="email"
                :rules="[emailRule]"
                required
              ></v-text-field>
  
              <v-btn @click="login" color="primary" block>
                E-posta ile devam et
              </v-btn>
            </v-form>
  
            <!-- Divider -->
            <v-divider></v-divider>
  
            <!-- Diğer giriş seçenekleri -->
            <v-row class="text-center">
              <v-col>
                <v-btn icon @click="loginWithGoogle">
                  <v-icon>mdi-google</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn icon @click="loginWithFacebook">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn icon @click="loginWithApple">
                  <v-icon>mdi-apple</v-icon>
                </v-btn>
              </v-col>
            </v-row>
  
            <!-- Linkler -->
            <v-divider></v-divider>
            <v-row class="text-center">
              <v-col>
                <span>Hesabınız yok mu? <v-btn text to="/signup">Kaydol</v-btn></span>
              </v-col>
              <v-col>
                <span><v-btn text to="/organization/global-login/">Kuruluşunuzla oturum açın</v-btn></span>
              </v-col>
            </v-row>
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
  }
  
  .login-image {
    background-color: #f4f4f4; /* Arka plan rengi ekleyebilirsiniz */
  }
  
  .login-card {
    padding: 20px;
    width: 100%;
    max-width: 400px;
  }
  
  .v-divider {
    margin: 20px 0;
  }
  
  .v-btn {
    margin-top: 20px;
  }
  
  .v-icon {
    font-size: 24px;
  }
  </style>
  