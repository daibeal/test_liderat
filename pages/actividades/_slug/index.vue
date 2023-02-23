<template>
  <div>
    <section
      class="hero"
      :style="{
        backgroundImage:
          'url(' + require('~/assets/images/' + article.thumbnail) + ')',
      }"
    >
      <div class="hero-title-container">
        <h1 class="hero-title">
          {{ article.title }}
        </h1>
      </div>
    </section>
    <div class="article-container">
      <article class="article-content">
        <nuxt-content :document="article" />
      </article>
    </div>
    <LightBox :carpeta="article.slug"></LightBox>
  </div>
</template>

<script>
import LightBox from '~/components/UI/LightBox.vue'

export default {
  head() {
    return {
      title: this.article.title + ' - ',
      meta: [
        ...this.$seo({
          url: 'https://lideratupv.com' + this.$route.fullPath,
          title: this.article.title + ' - LideraT',
          description: this.article.description,
          image: 'https://lideratupv.com' + require('~/assets/images/' + this.article.thumbnail),
        }),
      ],
    }
  },
  components: {
    LightBox
  },
  async asyncData({ $content, params }) {
    const article = await $content("actividades", params.slug).fetch();
    return { article };
  },
};
</script>

<style scoped>

.hero {
  position: relative;
  z-index: -10;
  aspect-ratio: 960/400;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;

  filter: brightness(0.6);
  -moz-filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
  -o-filter: brightness(0.6);
}
.hero-title-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.hero-title {
  text-align: center;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 40pt;
  margin: 0;
  padding: 0 30px;
}

.article-container {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
}
.article-content {
  
  max-width: 1024px;
}


.nuxt-content >>> h1 {
  font-family: 'Rubik', sans-serif !important;
}


</style>

<style scoped>
.imagen {
  max-width: 100%;
}
@media (max-width: 767px) {
  .hero-title {
    font-size: 26pt;
  }

}
@media (max-width: 500px) {
   .hero-title {
    font-size: 18pt;
  }
}
</style>

<style>

.nuxt-content {
  margin: 0 20px;

  padding-bottom: 15px;
}
@media (max-width: 767px) {
  .nuxt-content h1 {
    font-size: 26pt;
  }
}
@media (max-width: 500px) {
  .nuxt-content h1 {
    font-size: 18pt;
  }
}

</style>