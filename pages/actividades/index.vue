<template>
  <div class="container">
      <div class="title-container">
      <h1 class="title">Actividades</h1>

      </div>
      <div
        class="spacer"
        :style="{ backgroundImage: 'url(' + WhiteRedSpacer + ')' }"
      ></div>
    <div class="content">
      <vue-timeline-update
        v-for="article in articles"
        :key="article.title"
        :date="new Date(article.date)"
        :title="article.title"
        :description="article.description"
        :thumbnail="require('~/assets/images/' + article.thumbnail)"
        :category="article.category"
        :icon="article.icon"
        :color="article.color"
        @click:thumbnail="goToLink(article.path)"
      v-lazy-load/>
    </div>
  </div>
</template>

<script>
import WhiteRedSpacer from "@/assets/background-svg/layered-peaks-red-white.svg";

export default {
  head() {
    return {
      title: 'Actividades - ',
      meta: [
        ...this.$seo({
          url: 'https://lideratupv.com' + this.$route.fullPath,
          title: 'Actividades - LideraT',
          description: 'Actividades - LideraT',
          image: 'https://lideratupv.com' + require('~/assets/images/' + this.articles[0].thumbnail),
        }),
      ],
    }
  },
  data () {
    return {
      WhiteRedSpacer: WhiteRedSpacer,
    }
  },
  async asyncData({ $content }) {
    const articles = await $content("actividades").sortBy('date', 'desc').fetch();
    return { articles };
  },
  methods: {
    goToLink (url) {
      this.$router.push(url)
     
    }
  }
};
</script>

<style scoped>
.title {
  text-align: left;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 72pt;
  width: 100%;
  max-width: 1350px;
  padding: 30px 30px;
  color: white;
  margin: 0;
  transform: translateY(50%);
}
.spacer {
  aspect-ratio: 960/140;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title-container {
  background: #ef8b92;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  margin-top: 40px;
  max-width: 1350px;
  padding: 0 30px;
  padding-left: 0px;
}

@media (max-width: 767px) {
  .content {
    padding: 0 15px;
    padding-left: 10px;
  }
}
</style>

<style>
.gb-vue-timeline-update__title {
  font-family: "Rubik", sans-serif !important;
}

[class^="gb-"]:not(.gb-base-icon, .gb-vue-timeline-update__title, .gb-base-badge--filled
    > span) {
  font-family: "Karla", sans-serif !important;
  font-weight: 700 !important;
}

.gb-vue-timeline-update__thumbnail {
  width: 100% !important;
  border: none !important;
  box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36) !important;
  -webkit-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  max-height: 400px !important;
  object-fit: cover !important;
}
.gb-vue-timeline-update {
  overflow: visible !important;
}
.gb-vue-timeline-update__right {
  padding-right: 15px !important;
}
.gb-vue-timeline-update__bullet {
  background-color: white !important;
}
@media (max-width: 767px) {
  .gb-vue-timeline-update__thumbnail {
    max-height: 250px !important;
  }

}

@media (max-width: 1024px) {
  
  .gb-vue-timeline-update__thumbnail {
    max-height: 300px !important;
  }
}
</style>
<style scoped>
@media (max-width: 1024px) {
  .title {
    transform: translateY(0) !important;
    
  }
}
@media (max-width: 767px) {
    .title {
    font-size: 32pt ;
  }
}
</style>