<template>
  <div class="container">
    <div
      class="hero"
      :style="{
        backgroundImage: 'url(' + require('~/assets/images/grupo-Liderat.jpeg') + ')'
      }"
    >
      <div class="hero-title-container">
        <h3 class="hero-subtitle">LideraT</h3>
        <h1 class="hero-title">
          La asociación de lxs estudiantes <strong>inquietxs</strong>
        </h1>
      </div>
    </div>
    <div class="content">
      <section class="historia" id="historia">
        <div class="historia-content">
          <img
            class="historia-image"
            :src="require('~/assets/images/historia.jpeg')"
            alt="historia"
          />
          <div class="historia-text">
            <h2 class="historia-title">Nuestra historia</h2>
            <p class="historia-description">
              LideraT UPV es una asociación juvenil fundada en 2012. En sus
              inicios se reunían algunos alumnos de manera informal para debatir
              sobre temas de actualidad, que iban más allá de la materia
              teórica. <br /><br />
              Más adelante tuvieron la idea de formalizar este grupo de debate
              en forma de asociación, con la visión de formar un grupo de
              estudiantes con intereses en el mundo laboral, con los que
              organizar y realizar mesas redondas con expertos como invitados.
            </p>
          </div>
        </div>
      </section>
      <div
        class="spacer"
        :style="{ backgroundImage: 'url(' + WhiteRedSpacer + ')' }"
      ></div>
      <section class="valores" id="mision vision valores">
        <div class="valores-content">
          <div class="tabs">
            <div v-for="tab in tabs" :key="tab.name">
              <div
                class="tab"
                :class="{ selected: selected === tab.name }"
                @click="selected = tab.name"
              >
                {{ tab.name }}
              </div>
            </div>
          </div>

          <main>
            <div
              class="valores-text"
              v-for="tab in tabs"
              :key="tab.name"
              v-show="tab.name === selected"
            >
              <h1 class="valores-title">{{ tab.name }}</h1>
              <br />
              <div>
                <p class="valores-description">
                  {{ tab.content }}
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
      <div
        class="spacer"
        :style="{ backgroundImage: 'url(' + GrayWhiteSpacer + ')' }"
      ></div>
      <section class="team">
        <div class="team-content">
          <h2 class="team-title">Conoce al equipo</h2>
          <p class="team-description">
            Los estudiantes que componen la Asociación LideraT se caracterizan
            por su inquietud y su proactividad. Son capaces de resolver
            cualquier reto que se les presente y están en constante formación.
          </p>
          <div class="organigrama">
            <div
              class="organigrama-containers"
              v-for="item in organigramaJSON"
              :key="item.years"
            >
              <h3 class="organigrama-years">{{ item.years }}</h3>
              <div class="people-table">
                <div
                  class="lider"
                  v-for="member in item.members"
                  :key="member.name"
                >
                  <div class="lider-image-container">
                    <img
                      class="lider-image"
                      :src="
                        require('~/assets/images/integrantes/' + member.image)
                      "
                      alt="integrante"
                    />
                  </div>
                  <div class="lider-description-container">
                    <div class="lider-social">
                      <SocialMedia
                        :urlFacebook="member.social.facebook"
                        :urlInstagram="member.social.instagram"
                        :urlLinkedin="member.social.linkedin"
                        :urlTwitter="member.social.twitter"
                      >
                      </SocialMedia>
                    </div>
                    <div class="lider-description-text">
                      <h3 class="lider-name">{{ member.name }}</h3>
                      <p class="lider-job">{{ member.job }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SocialMedia from "~/components/SocialMedia.vue";
import organigrama from "~/assets/json/organigrama.json";
import WhiteRedSpacer from "@/assets/background-svg/white-red-LideraT.svg";
import GrayWhiteSpacer from "@/assets/background-svg/gray-white.svg";

export default {
head() {
    return {
      title: 'Sobre nosotros - ',
      meta: [
        ...this.$seo({
          url: 'https://lideratupv.com' + this.$route.fullPath,
          title: 'Sobre nosotros - LideraT',
          description: 'Sobre nosotros - LideraT',
          image: 'https://lideratupv.com' + require('~/assets/images/grupo-Liderat.jpeg'),
        }),
      ],
    }
  },
  components: {
    SocialMedia,
  },
  data() {
    return {
      tabs: [
        {
          name: "Misión",
          content:"Nuestra misión es proveer a los estudiantes de una formación complementaria a la que se imparte en las clases, enfocada la mundo laboral. Buscamos desarrollar competencias transversales en nuestros miembros y aportar nuestro granito de arena a la comunidad universitaria.",
        },
        {
          name: "Visión",
          content:"LideraT quiere atraer a jóvenes estudiantes que demuestran tener iniciativa personal y buscan adquirir una formación más allá de la recibida en el aula, los que BUSCAN SER LÍDERES DEL FUTURO.",
        },
        {
          name: "Valores",
          content:"La Asociación Juvenil LideraT ha nacido para atraer a jóvenes estudiantes que demuestran tener iniciativa personal y buscan adquirir una formación más allá de la recibida en el aula, buscan ser los líderes del futuro. Los valores que definen a un miembro de LideraT son: " +"\n\nValores personales: responsabilidad, disciplina, ambición, amabilidad y lealtad. \n\nValores humanos: superación, perseverancia, solidaridad, honradez y amistad. \n\nValores sociales: respeto, tolerancia. altruismo, colaboración, empatía, compresión y sinceridad. \n\nValores profesionales: compromiso, compañerismo, adaptación al cambio y esfuerzo.",
        },
      ],
      selected: "Misión",
      organigramaJSON: organigrama,
      WhiteRedSpacer: WhiteRedSpacer,
      GrayWhiteSpacer: GrayWhiteSpacer,
    };
  },
};
</script>

<style scoped>
strong {
  color: #ef8b92;
}
.container {
  font-family: "Karla", sans-serif;
}
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
    width : 100%;
    height: 100%;
    background: inherit;
    z-index: -1;

    filter        : brightness(0.6);
    -moz-filter   : brightness(0.6);
    -webkit-filter: brightness(0.6);
    -o-filter     : brightness(0.6);
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
.hero-subtitle {
  font-family: "Rubik", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 28pt;
  margin: 0;
  margin-bottom: 10px;
  padding: 0 30px;
  color: #ef8b92;
}
.historia {
  margin: 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.historia-image {
  -webkit-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.36);
  max-width: 45%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.historia-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 0 30px;
}

.historia-text {
  height: 100%;
  padding-left: 40px;
}
.historia-title {
  margin-top: 0;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 30pt;
}
.historia-description {
  font-weight: 500;
  font-size: 16pt;
  line-height: 1.9rem;
}

.spacer {
  aspect-ratio: 900/170;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.valores {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #3f3f3f;
}
.valores-content {
  width: 100%;
  max-width: 1350px;
  padding: 0 30px;
  color: white;
}
.valores >>> main {
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.valores-text {
  max-width: 50vw;
}
.valores-text >>> p {
  white-space: pre-wrap;
  margin: 0;
}
.valores-title {
  margin-top: 20px;
  margin-bottom: 0;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 34pt;
}
.valores-description {
  font-weight: 500;
  font-size: 16pt;
  line-height: 1.9rem;
}
.team {
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.team-content {
  width: 100%;
  max-width: 1350px;
  padding: 0 30px;
}
.team-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 34pt;
}
.team-description {
  font-weight: 500;
  font-size: 16pt;
  line-height: 1.9rem;
}

.organigrama-years {
  font-family: "Rubik", sans-serif;
  font-size: 24pt;
  color: #ef8b92;
}

.people-table {
  padding-left: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.lider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
}
.lider-image-container {
  position: relative;
}
.lider-image-container::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.lider-image {
  border-radius: 100%;
  border: 5px solid #ef8b92;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lider-description-text {
  text-align: center;
}
.lider-name {
  font-size: 18pt;
  margin: 5px 0;
  margin-bottom: 0;
}
.lider-job {
  font-size: 14pt;
  margin: 0;
  margin-top: 3px;
}
.lider-social {
  margin-top: 12px;
}
</style>

<style scoped>
@media (max-width: 1366px) {

  .hero-title {
    font-size: 34pt;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 36pt;
  }
  .historia-content {
    flex-direction: column;
    padding: 0 15px;
  }
  .historia-image {
    max-width: 90%;
    margin-bottom: 15px;
  }
  .valores-text {
  max-width: 75vw;
}
}
@media (max-width: 767px) {
  .hero {
    aspect-ratio: 1;
  }
  .hero-title {
    font-size: 30pt;
  }
  .team-content {
    padding: 0 50px;
  }
  .valores-text {
  max-width: 90vw;
}
}
</style>



<style scoped>

.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab {
  padding: 8px 24px 6px 24px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}
.tab:hover {
  border-bottom: 2px solid #ef8b92;
}

.tab.selected {
  border-bottom: 4px solid #ef8b92;
}

main {
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>

<!-- Responsive Breakpoints -->
<style scoped>
.people-table {
  padding: 0 20px;
  --count: 1;
  --gap: 0px;
}
.lider {
  width: 100%;
}
@media (min-width: 550px) {
  .people-table {
    padding-left: 39px;
    --count: 2;
    --gap: 50px;
  }
}

@media (min-width: 768px) {
  .people-table {
    --count: 3;
  }
}

@media (min-width: 1024px) {
  .people-table {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .people-table {
    --gap: 50px;
    --count: 5;
  }
}

@media (min-width: 1536px) {
  .people-table {
    --count: 5;
  }
}
</style>

<style scoped>
@media (min-width: 550px) {
  .lider {
    width: calc((87% - ((var(--count) - 1) * var(--gap))) / var(--count));
    margin-right: var(--gap);
  }
}

.lider-image {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
}
</style>