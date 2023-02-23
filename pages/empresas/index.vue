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
              'url(' + require('~/assets/images/empresas/zeta-beer.jpeg'),
          }"
        ></section>
        <section
          class="hero"
          :style="{
            backgroundImage:
              'url(' + require('~/assets/images/empresas/image1.jpeg'),
          }"
        ></section>
        <section
          class="hero"
          :style="{
            backgroundImage:
              'url(' + require('~/assets/images/empresas/imageBDE.jpeg'),
          }"
        ></section>
      </vue-agile>
    </client-only>
    <section class="empresas" id="empresas">
      <div class="empresas-content">
        <h2 class="empresas-title">
          Colaborando con <strong> empresas líderes</strong>
        </h2>
        <p class="empresas-description">
          LideraT quiere atraer a jóvenes estudiantes que demuestran tener
          iniciativa personal y buscan adquirir una formación más allá de la
          recibida en el aula, los que buscan ser lxs
          <b>LÍDERES DEL FUTURO </b>.
        </p>
        <div class="partners">
          <InfiniteSlider v-if="phone"></InfiniteSlider>
          <Partners v-else></Partners>
        </div>
      </div>
    </section>
    <div
      class="spacer"
      :style="{ backgroundImage: 'url(' + WhiteRedSpacer + ')' }"
    ></div>
    <section class="historia" id="visitas">
      <div class="historia-content">
        <div class="image-container">
          <img
            class="historia-image"
            :src="require('~/assets/images/empresas/zeta-beer.jpeg')"
            alt="historia"
          />
        </div>

        <div class="historia-text">
          <h2 class="historia-title">Visitas a empresas</h2>
          <p class="historia-description">
            Desde <strong> LideraT </strong> contactamos con empresas con el
            objetivo de que nuestros miembros conozcan de primera mano cómo es
            una planta industrial, qué actividades van a poder realizar en un
            futuro o cómo es la empresa en la cual van a desarrollarse.
          </p>
        </div>
      </div>
    </section>
    <section class="historia" id="LideraTalks">
      <div class="historia-content reverse">
        <div class="image-container">
          <img
            class="historia-image"
            :src="require('~/assets/images/empresas/image1.jpeg')"
            alt="historia"
          />
        </div>

        <div class="historia-text">
          <h2 class="historia-title">LideraTalks</h2>
          <p class="historia-description">
            Una vez al mes, antiguos <strong>estudiantes de LideraT</strong> que
            se encuentran ya trabajando, nos presentan su trayectoria, que les
            ha hecho llegar a la posición en la que se encuentran. Con esto
            llegamos a conocer las salidas profesionales que tiene nuestra
            carrera, posiciones y trabajos que nunca habríamos llegado a
            imaginar.
          </p>
        </div>
      </div>
    </section>
    <section class="historia" id="BDE">
      <div class="historia-content">
        <div class="image-container">
          <img
            class="historia-image"
            :src="require('~/assets/images/empresas/imageBDE.jpeg')"
            alt="historia"
          />
        </div>

        <div class="historia-text">
          <h2 class="historia-title">Business Debate Experience</h2>
          <p class="historia-description">
            Durante una semana nos aliamos tres asociaciones, <strong>LideraT</strong>, <strong> Debate
            UPV </strong> y una tercera que depende del tema escogido. Basándonos en la
            materia escogida, las tres creamos workshops para transmitir
            nuestros conocimientos. Al finalizar se hace un debate en formato
            académico y se traen ponentes para ampliar los conocimientos sobre
            la cuestión escogida.
          </p>
        </div>
      </div>
    </section>
    <div
      class="spacer"
      :style="{ backgroundImage: 'url(' + GrayWhiteSpacer + ')' }"
    ></div>
    <section class="contact" id="contacto">


        <div class="contact-content">
          <h2>¿Quieres colaborar con nosotrxs? <br> <strong>Contáctanos</strong> </h2>
          <div class="email">
                <a href="mailto:lideratupv@gmail.com" class="link-body">lideratupv@gmail.com</a>
            </div>
          <Social
          class="social-media"
          urlInstagram="https://www.instagram.com/lideratupv/?hl=es"
          urlLinkedin="https://www.linkedin.com/company/asociaci%C3%B3n-juvenil-liderat/"
          :theme="'dark'"
          ></Social>
        </div>

    </section>
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

  width: 100%;
  height: calc( (340 / 960) * 100vw);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-start;
}
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
  margin: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  font-size: 50pt;
  text-align: center;
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