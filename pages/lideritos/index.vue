<template>
  <div class="web-container">
    <client-only>
      <vue-agile
        :nav-buttons="false"
        :autoplay-speed="10000"
        :speed="2500"
        :fade="true"
        :autoplay="true"
        :pauseOnHover="false"
        :pauseOnDotsHover="true"
      >
        <section
          class="hero"
          :style="{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80)',
          }"
        ><h2 class="empresas-title">
           <strong>Lideritos</strong>
        </h2>
        <p class="empresas-description">
          Intercámbialos por premios en la tienda de
          <b>LideraT </b>.</p></section>
        <section
          class="hero"
          :style="{
            backgroundImage:
            'url(https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80)',
          }"
        ><h2 class="empresas-title">
           <strong>Lideritos</strong>
        </h2>
        <p class="empresas-description">
          Intercámbialos por premios en la tienda de
          <b>LideraT </b>.
        </p></section>
      </vue-agile>
    </client-only>
    <section class="empresas" id="empresas">
      <div class="empresas-content">
        
        <!-- <div class="partners">
          <InfiniteSlider v-if="phone"></InfiniteSlider>
          <Partners v-else></Partners>
        </div> -->
        <div class="calendar-d">
          <iframe  id="calendar" src="https://www.appsheet.com/start/0996ff7a-e272-4053-8287-6494a0d8b055" style="border-width:0" width="1600" height="800" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </section>
    <div
      class="spacer"
      :style="{ backgroundImage: 'url(' + WhiteRedSpacer + ')' }"
    ></div>
   
    
  </div>
</template>

<script>
import Social from '~/components/SocialMedia.vue'
import InfiniteSlider from '~/components/UI/InfiniteSlider.vue'
import Partners from '~/components/UI/Partners.vue'
import WhiteRedSpacer from '@/assets/background-svg/white-red-LideraT.svg'
import GrayWhiteSpacer from '@/assets/background-svg/gray-white.svg'

export default {
  head() {
    return {
      title: 'Empresas - ',
      meta: [
        ...this.$seo({
          url: 'https://lideratupv.com' + this.$route.fullPath,
          title: 'Empresas - LideraT',
          description: 'Empresas - LideraT',
          image: 'https://lideratupv.com' + require('~/assets/images/empresas/zeta-beer.jpeg'),
        }),
      ],
    }
  },
  components: {
    InfiniteSlider,
    Partners,
    Social
  },
  data() {
    return {
      phone: false,
      WhiteRedSpacer: WhiteRedSpacer,
      GrayWhiteSpacer: GrayWhiteSpacer,
    }
  },
  watch: {
    '$screen.width'() {
      this.phone = this.$screen.breakpoint == 'phone' ? true : false
    },
  },
  mounted() {
    this.phone = this.$screen.breakpoint == 'phone' ? true : false
  },
}
</script>

<style scoped>

.email {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.email h5{
  font-size: 13pt;

}
.link-body {
  color: black;
  font-size: 18pt;
  margin-bottom: 15px;

}

.contact {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
.contact-container {
  max-width: 1350px;
  display: flex;
  justify-content: center;
}
.contact-content {
    margin: 0 80px;
  max-width: 45%;
  height: 100%;
}
.contact-content h2 {
  font-size: 32pt;
  text-align: center;
}
strong {
  color: #ef8b92;
}
.hero {
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /*make hero background image darker */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

/*make hero parallax */

.historia-image {
  -webkit-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);

  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.image-container {
  height: 100%;

  max-width: 50%;
}

.historia {
  display: flex;
  justify-content: center;
  padding: 0 30px;
  background-color: #3f3f3f;
  color: white;
}

.historia-content {
  margin: 60px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1350px;
}

.historia-text {
  margin: 0 30px;
  max-width: 45%;
  height: 100%;
}
.historia-title {
  margin-top: 0;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  font-size: 36pt;
}
.historia-description {
  max-width: 100%;
  font-weight: 500;
  font-size: 19pt;
  line-height: 1.9rem;
}
.empresas-description {
  max-width: 75%;
  font-weight: 500;
  font-size: 19pt;
  line-height: 1.9rem;
  text-align: center;
}

.empresas {
  display: flex;
  justify-content: center;
  margin: 0 30px;
  margin-top: 50px;
}

.empresas-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
}

.empresas-title {
  z-index: 1;
  margin: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  font-size: 50pt;
  text-align: center;
  background-color: #3f3f3f;
  color: white;
  padding: 0 20px;  
  border-radius: 12px;


}
p{
  
  background-color: #3f3f3f60;
  color: white;
  padding: 0 20px;
  margin: 0 20px;
  text-align: center;
  border-radius: 12px;
  
}

.partners {
  width: 100%;
}
.spacer {
  width: 100%;
  height: calc((170 / 900) * 100vw - 40px);

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.reverse {
  flex-direction: row-reverse;
}
</style>

<style scoped>
@media (max-width: 1024px) {
  .calendar-d{
      min-height: 60rem;
      min-width: 100%;
      height: 10rem;
      align-items: center;
      flex-direction: column-reverse;

  }
  #calendar{
      width: 100%;
      
  }
  .historia-content {
    flex-direction: column-reverse;
    align-items: center;
    margin: 30px 10px;
  }
  .historia-title {
    text-align: center;
  }
  .historia-text {
    max-width: 100%;
  }
  .historia-description {
    max-width: 100%;
    width: 100%;
    text-align: center;
    font-size: 16pt;

  }
  .image-container {
    width: 100%;
    max-width: 90%;
    min-height: 200px;
    max-height: 400px;
  }
  .empresas-title {
    font-size: 36pt;
  }
}
@media (max-width: 500px) {
  .empresas-title, .historia-title {
   font-size: 24pt;
  }
  .empresas-description, .historia-description {
    font-size: 16pt;
    max-width: 100%;
  }
  .historia-text {
    margin: 0;
  }
  .empresas {
    margin-top: 15px;
  }
  .contact-content {
    margin: 0 15px;
    width: 100%;
    max-width: 100%;
    
  }
  .contact-content h2 {
    font-size: 24pt;
  }
}
</style>