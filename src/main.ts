import Vue from 'vue';
import i18n from './i18n';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
