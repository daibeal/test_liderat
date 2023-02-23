<template>
  <div>
      <TheHeader class="TheHeader"></TheHeader>
      <Nuxt/>
      <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
    components: {
        TheHeader,
        TheFooter
    }

}
</script>

<style>
body {
    margin: 0;
}
.bm-burger-button {
    top: 19px !important;
    height: 30px !important;
}
@media (max-width: 500px) {
    .TheHeader {
        top: 0;
        position: sticky !important;
    }
}

</style>