 <template>
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
</template>

<script>
export default {

}
</script>

<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.item {
  padding: 20px 40px;
  max-height: 100px;
}

.empresa-image {
  max-width: 200px;
}

</style>