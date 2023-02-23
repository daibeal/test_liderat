<template>
  <InfiniteSlideBar duration="35s" class="slide-bar">
    <div class="items">
      <div
        class="item"
        v-for="a in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :key="a"
      >
        <nuxt-link to="/empresas">
          <img
            class="empresa-image"
            :src="require('~/assets/images/empresas/' + a + '.png')"
            :alt="a"
          />
        </nuxt-link>
      </div>
    </div>
  </InfiniteSlideBar>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'

export default {
  components: {
    InfiniteSlideBar,
  },
}
</script>

<style scoped>

.items {
  display: flex;
  align-items: center;
}

.item {
  padding: 20px 40px;
  filter: grayscale(1);
  max-height: 100px;
}

.empresa-image {
  max-width: 200px;
}
.item:hover {
  filter: grayscale(0);
}
</style>