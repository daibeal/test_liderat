<template>
  <div id="app" class="lightbox-container">
    <CoolLightBox
      :items="items"
      :index="index"
      :effect="'fade'"
      @close="index = null"
    >
    </CoolLightBox>

    <div class="images-wrapper">
      <div

        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"

      ></div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  props: {
    carpeta: '',
  },
  data() {
    return {
      items: [],
      index: null,
    }
  },
  mounted() {
    this.importAll(require.context('~/assets/images'), this.carpeta)
  },
  methods: {
    importAll(r, folder) {
      let imgs = []
      r.keys().forEach((key) => {
        imgs[key] = r(key)
      })
      this.items = Object.keys(imgs)
        .filter((key) => key.includes(folder))
        .map((key) => {
          return require('~/assets/images' + key.substr(1))
        })
    },
  },
}
</script>

<style scoped>
.lightbox-container {
  height: auto;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
}
.images-wrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
}
.image {
    background-size: cover ;
    background-position: center;
    border-radius: 4px;
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;

  height: 180px;
  width: 300px;
  margin: 8px;
}
.image:hover {
    cursor: pointer;
}
</style>