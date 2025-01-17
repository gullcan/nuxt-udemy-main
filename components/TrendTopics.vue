<template>
    <div class="component-margin section-bg">
      <div class="ud-container section-padding">
        <h2 class="ud-heading-xl cmb-24">Şimdi Popüler</h2>
        <div class="d-flex justify-space-between flex-wrap">
          <div class="topic-category" v-for="(category, index) in categories" :key="index">
            <h3 class="ud-heading-md cmb-24">{{ category.title }}</h3>
            <div>
              <div
                class="d-flex flex-column"
                v-for="(topic, topicIndex) in category.topics"
                :key="topicIndex"
              >
                <!-- Dinamik Link: Tıklanınca belirli bir kursa yönlendirme -->
                <NuxtLink :to="`/courses/${topic.slug}`" class="topic-link">{{ topic.name }}</NuxtLink>
                <span class="topic-count cmt-08">{{ topic.studentCount }} students</span>
              </div>
            </div>
          </div>
          <NuxtLink class="white-btn">Explore more topics</NuxtLink>
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
              { name: "ChatGPT kurslarını görüntüleyin", studentCount: "3.813.910", slug: "chatgpt" },
            ],
           
          },
        
          {
            title: "Geliştirme",
            topics: [
              { name: "Python", studentCount: "46.460.161", slug: "python" },
              { name: "Web Geliştirme", studentCount: "13.750.355", slug: "web-development" },
              { name: "Veri Blimi", studentCount: "7.541.945", slug: "machine-learning" },
            ],
          },
          {
            title: "Tasarım",
            topics: [
              { name: "Blender", studentCount: "2.801.893", slug: "blender" },
              { name: "Grafik Tasarım", studentCount: "4.398.062", slug: "graphic-design" },
              { name: "User Experience (UX) Design", studentCount: "2.020.522", slug: "user-experience-design" },
            ],
          },
          {
            title: "İşletme",
            topics: [
              { name: "PMI Project Mangament Professional (PMP)", studentCount: "2.435.689", slug: "pmp" },
              { name: "Microsoft Power BI", studentCount: "4.393.449", slug: "microsoft-power-bi" },
              { name: "Proje Yönetimi", studentCount: "3.793.210", slug: "project-management" },
            ],
          },
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* İhtiyaç duyulan stilleri buraya ekleyebilirsiniz */
  .topic-category {
    width: calc(100%/4 - 1.6rem);
    margin-bottom: 2.4rem;
  }
  .topic-link {
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: underline;
    color: #5624d0;
    .topic-link:hover {
    color: #401b9c;
}

  }
  </style>
 