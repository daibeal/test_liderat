<template>
  <footer class="footer">
    <div class="container">
      <nav class="navigation">
        <ul class="pages" v-for="link in links" :key="link.name">
          <li class="page">
            <div class="page-container">
              <a :href="link.url" class="page-link"> {{ link.name }}</a>
              <ul class="sections">
                <li
                  class="section"
                  v-for="section in link.sections"
                  :key="section.name"
                >
                  <a :href="section.url" class="section-link">{{
                    section.name
                  }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div class="social">
        <SocialMedia
          class="social-media"
          :urlInstagram="instagram"
          :urlLinkedin="linkedin"
          :theme="'light'"
        ></SocialMedia>
        <a href="http://www.upv.es/en"><p class="university">Universitat Politécnica de València</p></a>
        <p class="university-wrapped">UPV</p>
        <p>Valencia</p>
        <p>España</p>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        Hecho para lxs líderes del futuro © {{ new Date().getFullYear() }} 🚀
      </p>
    </div>
  </footer>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";
export default {
  components: {
    SocialMedia,
  },
  data() {
    return {
      instagram: "https://www.instagram.com/lideratupv/?hl=es",
      linkedin: "https://www.linkedin.com/company/asociaci%C3%B3n-juvenil-liderat/",
      links: [
        {
          name: "Inicio",
          url: "/",
        },
        {
          name: "Sobre Nosotros",
          url: "/sobre-nosotros",
          sections: [
            {
              name: "Historia",
              url: "/sobre-nosotros#historia",
            },
            {
              name: "Misión",
              url: "/sobre-nosotros#valores",
            },
            {
              name: "Visión",
              url: "/sobre-nosotros#valores",
            },
            {
              name: "Valores",
              url: "/sobre-nosotros#valores",
            },
            {
              name: "El equipo",
              url: "/sobre-nosotros#team",
            },
          ],
        },
        {
          name: "Actividades",
          url: "/actividades",
          sections: [
            {
              name: "Programa LideraT",
              url: "/actividades/Programa-LideraT",
            },
          ],
        },
        {
          name: "Empresas",
          url: "/empresas",
          sections: [
            {
              name: "Colaboraciones",
              url: "/empresas#empresas",
            },{
              name: "Visitas",
              url: "/empresas#visitas",
            },{
              name: "LideraTalks",
              url: "/empresas#LideraTalks",
            },{
              name: "BDE",
              url: "/empresas#LideraTalks",
            },{
              name: "Contacto",
              url: "/empresas#contacto",
            },
          ],
        },
        {
          name: "Calendario",
          url: "/calendario",
        },
        {
          name: "Lideritos",
          url: "https://www.appsheet.com/start/0996ff7a-e272-4053-8287-6494a0d8b055",
        },
        {
          name: "Únete",
          url: "https://goo.gl/forms/AwTKQxXViqQDB7Vl2",
          sections: [],
        },
        {
          name: "Intranet",
          url: "https://intranet.lideratupv.com",
          sections: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #ef8b92;
}
ul {
  list-style: none;
}
.footer {
  position: relative;
  background-color: #3f3f3f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Karla", sans-serif;
}
.container,
.copyright {
  width: 100%;
  max-width: 1350px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.container >>> * {
  flex: auto;
}
.social {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14pt;
  padding: 30px;
  padding-bottom: 0;
  text-align: right;
}

.copyright-text {
  font-size: 14pt;
  text-align: right;
  padding-right: 30px;
}
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 65%;
  max-width: calc(100% - 30px);
  padding-top: 25px;
}
.page-link {
  font-size: 15pt;
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
}
.sections {
  padding: 4px;
}
.section {
  font-size: 14pt;
  line-height: 1.7;
} 
.pages {
  padding: 0 8px;
}
.university-wrapped {
  display: none;
}
</style>

<style scoped>
@media (max-width: 1012px) {
  .social {
    flex-direction: row;
    align-items: center;

  }
  .university-wrapped {
    display: block;
  }
  .navigation {
    padding: 20px 15px;
  }
  .university {
    display: none;
  }
}
@media (max-width: 600px) {
  .navigation {
    flex-direction: column;
    align-items: center;

  }
  ul.sections {
    display: none !important;
  }
}
@media (max-width: 500px) {
  
  
  .social {
    flex-wrap: wrap;
  }
}
</style>