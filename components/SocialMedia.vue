<template>
  <div class="social-container">
    <a
      target="blank"
      :href="urlInstagram"
      v-show="urlInstagram"
      :class="['social-items', { light: theme == 'light' }]"
    >
      <Instagram></Instagram>
    </a>

    <a
      target="blank"
      :href="urlTwitter"
      v-show="urlTwitter"
      :class="['social-items', { light: theme == 'light' }]"
    >
      <Twitter></Twitter>
    </a>
    <a
      target="blank"
      :href="urlLinkedin"
      v-show="urlLinkedin"
      :class="['social-items', { light: theme == 'light' }]"
    >
      <Linkedin></Linkedin>
    </a>
    <a
      target="blank"
      :href="urlFacebook"
      v-show="urlFacebook"
      :class="['social-items', { light: theme == 'light' }]"
    >
      <Facebook></Facebook>
    </a>
  </div>
</template>

<script>
import Instagram from "~/assets/icons/social/instagram.svg?inline";
import Twitter from "~/assets/icons/social/twitter.svg?inline";
import Facebook from "~/assets/icons/social/facebook.svg?inline";
import Linkedin from "~/assets/icons/social/linkedin.svg?inline";

export default {
  components: {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
  },
  props: {
    theme: {
      type: String,
    },
    urlInstagram: {
      type: String,
    },
    urlFacebook: {
      type: String,
    },
    urlTwitter: {
      type: String,
    },
    urlLinkedin: {
      type: String,
    },
  },
};
</script>

<style scoped>
.social-container {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding-left: 5px;
}
@media (max-width: 1024px) {
  .social-container {
    width: auto;
  }
}

.social-items {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

svg {
  width: 24pt;
  height: 24pt;
}
@media (max-width: 767px) {
  svg {
    width: 22pt;
    height: 22pt;
  }
  .social-items {
    padding: 0 5px;
  }
}



.light svg, svg:hover {
  filter: invert(71%) sepia(69%) saturate(5000%) hue-rotate(323deg)
    brightness(102%) contrast(107%);
}
.light svg:hover {
  filter: invert(100%);
}
</style>