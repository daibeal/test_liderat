<template>
  <div class="TheHeader">
    <div class="header-container">
      <div class="left-container">
        <nuxt-link to="/">
          <img src="/logo.png" alt="logo" class="logo" />
        </nuxt-link>
      </div>
      
      <div class="right-container">
        <ul class="nav" v-if="!phone">
          <!-- <li class="nav-link"><nuxt-link to="/">Inicio</nuxt-link></li> -->
          <li class="nav-link"><nuxt-link to="/sobre-nosotros">Nosotros</nuxt-link></li>
          <li class="nav-link">
            <nuxt-link to="/actividades">Actividades</nuxt-link>
          </li>
          <li class="nav-link"><nuxt-link to="/empresas">Empresas</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/calendario">Calendario</nuxt-link></li>
          <li class="nav-link">
            <a target="blank" href="https://goo.gl/forms/AwTKQxXViqQDB7Vl2"
              >Únete</a
            >
          </li >
          <li class="nav-link"><nuxt-link to="/lideritos">Lideritos</nuxt-link></li>
          <li class="nav-link"><a href="https://intranet.lideratupv.com"><button class="intranet-btn">Intranet</button></a></li>
          
        </ul>
        <SlideMenu right v-else class="burger">
          <ul class="burger-menu">
            <li class="burger-link"><nuxt-link to="/">Inicio</nuxt-link></li>
            <li class="burger-link">
              <nuxt-link to="/sobre-nosotros">Nosotros</nuxt-link>
            </li>
            <li class="burger-link">
              <nuxt-link to="/actividades">Actividades</nuxt-link>
            </li>
            <li class="burger-link"><nuxt-link to="/calendario">Calendario</nuxt-link></li>
            <li class="burger-link"><nuxt-link to="/empresas">Empresas</nuxt-link></li>
            <li class="burger-link">
              <a target="blank" href="https://goo.gl/forms/AwTKQxXViqQDB7Vl2"
                >Únete</a
              >
            </li>
            <li class="burger-link"><a href="https://www.appsheet.com/start/0996ff7a-e272-4053-8287-6494a0d8b055">Lideritos</a></li>
            <li class="burger-link"><a href="https://intranet.lideratupv.com">Intranet</a></li>
          </ul>
        </SlideMenu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: false,
    };
  },
  watch: {
    "$screen.width"() {
      this.phone = this.$screen.breakpoint == "phone" ? true : false;
    },
  },
  mounted() {
    this.phone = this.$screen.breakpoint == "phone" ? true : false;
  },
};
</script>

<style scoped>
.TheHeader {
  position: relative;
  z-index: 1000;
  width: 100%;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: left;
  font-family: "Rubik", sans-serif;
  overflow: hidden;
  
  
  
}

.header-container {
  width: 100% !important ;
  max-width: 1000px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: left;
  
  
}
.intra-link{
  /*send button to the right */
  width: 100%;
  align-items: right !important;

}
.logo {
  height: 55px;
  padding: 5px;
}
.right-container {

  /* padding-right: 30rem; */
  margin-left: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  
  
  
}



.intranet-btn{
  
  border: none;
  background-color: #ef8b92;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  font-family: "Rubik", sans-serif;
}
.intranet-btn:hover{
  background-color: #f5b3b7;
  color: white;
}
.left-container {
  padding-left: 10rem;
  width: 10%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: nowrap;
  /* max-width: 100% !important; */
}
  
.nav {
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  width: 80%;
}
.nav-link{
  margin: 0 10px;
  

}
.nav-link a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  letter-spacing: 0.05em;
  font-size: 15pt;
}
.nav-link a:hover {
  color: #ef8b92;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
}
.burger-link {
  margin: 4px 0;
}

.burger-link a {
  color: azure;
  text-decoration: none;
}
@media (max-width: 1224px) {
  .right-container {
    margin-left: 20px;
  }
  .nav-link a {
    font-size: 14pt;
  }
  .intra-link{
    visibility: hidden;
  }
}
@media (max-width: 767px) {
  .right-container {
    margin-left: 15px;
  }
  .left-container{
    padding-left: 1rem;
  }

}
</style>
<style>
/* importante para evitar problemas de visualización del bakground con el slide-menu */
.bm-overlay {
  background: none !important;
}
</style>