<template>
  <div class="component-margin section-bg">
    <!-- Şimdi Popüler Başlığı -->
    <div class="header-section">
      <h2 class="ud-heading-xl">Şimdi Popüler</h2>
      <hr class="divider-line" />
    </div>

    <!-- İçerik Bölümü -->
    <div class="ud-container section-padding">
      <div class="d-flex justify-space-between flex-wrap">
        <div class="topic-category" v-for="(category, index) in categories" :key="index">
          <h3 class="ud-heading-md cmb-24">{{ category.title }}</h3>
          <div>
            <div
              class="d-flex flex-column topic-item"
              v-for="(topic, topicIndex) in category.topics"
              :key="topicIndex"
            >
              <div class="topic-row">
                <span class="topic-name">{{ topic.name }}</span><span class="arrow-icon">&gt;</span>
              </div>
              <span class="topic-count">{{ topic.studentCount }} learners</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sol Alt Köşe Butonu -->
      <div class="left-button">
        <NuxtLink to="/explore-topics" class="white-btn">Tüm popüler yetkinlikleri göster</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendTopics",
  data() {
    return {
      categories: [
        {
          title: "ChatGPT popüler bir yetkinlik",
          topics: [
            { name: "ChatGPT kurslarını görüntüleyin", studentCount: "4.030.659", slug: "chatgpt" },
          ],
        },
        {
          title: "Yazılım Geliştirme",
          topics: [
            { name: "Python", studentCount: "46.984.257", slug: "python" },
            { name: "Web Geliştirme", studentCount: "13.868.530", slug: "web-development" },
            { name: "Veri Bilimi", studentCount: "7.645.305", slug: "data-science" },
          ],
        },
        {
          title: "Tasarım",
          topics: [
            { name: "Blender", studentCount: "2.855.613", slug: "blender" },
            { name: "Grafik Tasarım", studentCount: "4.426.099", slug: "graphic-design" },
            { name: "Adobe Photoshop", studentCount: "12.589.621", slug: "adobe-photoshop" },
          ],
        },
        {
          title: "İşletme",
          topics: [
            { name: "PMI Project Management Professional (PMP)", studentCount: "2.482.895", slug: "pmp" },
            { name: "Microsoft Power BI", studentCount: "4.484.551", slug: "microsoft-power-bi" },
            { name: "Proje Yönetimi", studentCount: "3.843.130", slug: "project-management" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Genel Tasarım */
.component-margin {
  margin: 0;
  padding: 0;
}

/* Şimdi Popüler Başlığı */
.header-section {
  padding: 1rem 0;
  text-align: left;
  margin-bottom: 1.5rem;
}
.ud-heading-xl {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}
.divider-line {
  border: 0;
  border-top: 2px solid #ddd;
  margin-top: 0.5rem;
}

/* Kategoriler */
.topic-category {
  width: calc(100% / 4 - 1.6rem);
  margin-bottom: 2.4rem;
}
.topic-category h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

/* Topics */
.topic-item {
  margin-bottom: 1.2rem;
}
.topic-row {
  display: flex;
  align-items: center;
}
.topic-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #5624d0;
}
.arrow-icon {
  font-size: 1.2rem;
  color: #5624d0;
  margin-left: 0.2rem;
}
.topic-count {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.4rem;
}

/* Sol Alt Köşe Butonu */
.left-button {
  margin-top: -150px;
  text-align: left;
}
.white-btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: transparent;
  color: #5624d0;
  border: 1px solid #5624d0;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.white-btn:hover {
  background-color: #f4f4f4;
  text-decoration: none;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .topic-category {
    width: calc(100% / 2 - 1rem);
  }
}
@media (max-width: 480px) {
  .topic-category {
    width: 100%;
  }
  .white-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
