
import Vue from 'vue';
import VueScreen from 'vue-screen';

Vue.use(VueScreen, {
    phone: 0,
    tabletLandscape: 767,
    desktop: 1024,
    breakpointsOrder: ['phone', 'tabletLandscape', 'desktop']
});