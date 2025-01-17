<template>
    <div class="signup-container">
      <!-- Sol taraf: Resim -->
      <div class="signup-image">
        <img src="/assets/images/signup.webp" alt="Signup Illustration" />
      </div>
  
      <!-- Sağ taraf: Form -->
      <div class="signup-form">
        <h1 class="form-title">Kaydolun ve öğrenmeye başlayın</h1>
        <form @submit.prevent="handleSignup">
          <!-- Tam Ad -->
          <div class="form-group">
            <label for="fullname">Tam Ad</label>
            <input
              type="text"
              id="fullname"
              v-model="form.fullname"
              placeholder="Tam adınızı girin"
              required
            />
          </div>
  
          <!-- E-posta -->
          <div class="form-group">
            <label for="email">E-posta</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>
  
          <!-- Şifre -->
          <div class="form-group">
            <label for="password">Şifre</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              placeholder="Şifrenizi girin"
              required
            />
          </div>
  
          <!-- Teklifler ve öneriler -->
          <div class="form-group-checkbox">
            <input
              type="checkbox"
              id="subscribe"
              v-model="form.subscribeToEmails"
            />
            <label for="subscribe">
              Bana özel teklifler, kişiselleştirilmiş öneriler ve öğrenim ipuçları
              gönder.
            </label>
          </div>
  
          <!-- Kaydol Butonu -->
          <div class="form-group">
            <button type="submit" class="btn-submit">Kaydol</button>
          </div>
  
          <!-- Kullanım Şartları -->
          <p class="terms-text">
            Kaydolurken
            <a href="/terms/" target="_blank">Kullanım Şartlarımızı</a> ve
            <a href="/terms/privacy/" target="_blank">Gizlilik Politikamızı</a>
            kabul edersiniz.
          </p>
        </form>
        <p class="login-redirect">
          Zaten bir hesabınız var mı?
          <a href="/join/login-popup/?locale=tr_TR">Oturum aç</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          fullname: "",
          email: "",
          password: "",
          subscribeToEmails: false,
        },
      };
    },
    methods: {
      handleSignup() {
        // Kullanıcı bilgilerini işleme ve API'ye gönderme
        console.log("Kayıt bilgileri:", this.form);
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .signup-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .signup-image img {
    max-width: 100%;
    height: auto;
  }
  
  .signup-form {
    flex: 1;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-group-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .form-group-checkbox label {
    font-size: 14px;
  }
  
  .btn-submit {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #1d1d1f;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #333;
  }
  
  .terms-text {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }
  
  .login-redirect {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }
  
  .login-redirect a {
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
  }
  
  .login-redirect a:hover {
    text-decoration: underline;
  }
  </style>
  