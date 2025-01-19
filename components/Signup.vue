<template>
  <div class="signup-container">
    <!-- Sol taraf: Resim -->
    <div class="signup-image">
      <img src="/assets/images/signup.webp" alt="Signup Illustration" />
    </div>

    <!-- Sağ taraf: Form -->
    <div class="signup-form">
      <h1 class="form-title">Kaydolun ve öğrenmeye başlayın</h1>

      <!-- Form Alanları -->
      <form @submit.prevent="handleSignup">
        <!-- Tam Ad -->
        <div class="form-group">
          <input
            type="text"
            v-model="form.fullname"
            placeholder="Tam ad"
            required
          />
        </div>

        <!-- E-posta -->
        <div class="form-group">
          <input
            type="email"
            v-model="form.email"
            placeholder="E-posta"
            required
          />
        </div>

        <!-- Şifre -->
        <div class="form-group">
          <input
            type="password"
            v-model="form.password"
            placeholder="Şifre"
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
            Bana özel teklifler, kişiselleştirilmiş öneriler ve öğrenim ipuçları gönder.
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

      <!-- Zaten bir hesabınız var mı? -->
      <div class="login-redirect">
        <p>
          Zaten bir hesabınız var mı?
          <a href="http://localhost:3000/login">Oturum aç</a>
        </p>
      </div>
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
  background-color: #fff;
}

.signup-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 650px;
}

.signup-image img {
  max-width: 100%;
  height: auto;
}

.signup-form {
  flex: 1;
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
}

.form-title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

.form-group {
  height: 60px;
  margin-bottom: 15px;
}

.form-group input {
  width: 100%;
  height: 50px;
  padding: 30px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000; 
}
.form-group input::placeholder {
    color: #000;
    font-weight: bold;/* Siyah placeholder */
    font-size: 14px;
  }


.form-group-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
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
  background-color: #6200ea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #3700b3;
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

  