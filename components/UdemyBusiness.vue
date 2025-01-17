<template>
    <v-container>
      <v-row>
        <!-- Sol Kısım -->
        <v-col cols="12" md="6">
          <h2>Get Your Demo</h2>
          <p>Tell us your needs and we’ll start on a custom plan to drive results.</p>
          <p><strong>With Udemy as your learning partner, you can:</strong></p>
          <ul class="custom-list">
            <li>
              <v-icon color="green" left>mdi-check</v-icon>
              Train your entire workforce with over 28,000+ courses in 16 languages
            </li>
            <li>
              <v-icon color="green" left>mdi-check</v-icon>
              Prep employees for over 200 industry-recognized certification exams
            </li>
            <li>
              <v-icon color="green" left>mdi-check</v-icon>
              Develop highly skilled tech teams in risk-free practice environments
            </li>
            <li>
              <v-icon color="green" left>mdi-check</v-icon>
              Identify emerging skills gaps, learning trends, and industry benchmarks
            </li>
            <li>
              <v-icon color="green" left>mdi-check</v-icon>
              Integrate content with your existing learning management system
            </li>
          </ul>
          <h3>Trusted by</h3>
          <div class="logo-grid">
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals" alt="Volkswagen logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="Samsung logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="Cisco logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals" alt="Vimeo logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals" alt="Procter & Gamble logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals" alt="Hewlett Packard logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="Citi logo" loading="lazy" />
            </div>
            <div class="partner-logo-item">
              <img src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals" alt="Ericsson logo" loading="lazy" />
            </div>
          </div>
        </v-col>
        <!-- Sağ Kısım -->
        <v-col cols="12" md="6">
          <v-form>
            <v-text-field label="First Name" required></v-text-field>
            <v-text-field label="Last Name" required></v-text-field>
            <v-text-field label="Work Email" required></v-text-field>
            <v-text-field label="Phone Number" required></v-text-field>
            <v-select label="Select" :items="['Option 1', 'Option 2']"></v-select>
            <v-text-field label="Company Name" required></v-text-field>
            <v-select label="Select" :items="['Option 1', 'Option 2']"></v-select>
            <v-select label="Select" :items="['Option 1', 'Option 2']"></v-select>
            <v-text-field label="Job Title" required></v-text-field>
            <v-select label="Select" :items="['Option 1', 'Option 2']"></v-select>
            <v-textarea label="What are your organization’s training needs? (Optional)"></v-textarea>
            <v-btn block class="submit-btn" color="black" dark>Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      return {};
    },
  });
  </script>
  
  <style scoped>
  .custom-list {
    list-style: none; /* Liste işaretlerini kaldırır */
    padding: 0;
    margin: 0;
  }
  
  .logo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .logo-grid div {
    grid-column: span 1;
  }

  .logo-box {
    text-align: center;
    padding: 16px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
  partner-logo-item {
    text-align: center;
    width: 100%;
  }
  
  .submit-btn {
    width: 100%;
    height: 56px; /* Diğer kutularla aynı boyutta */
    text-align: center;
  }
  </style>