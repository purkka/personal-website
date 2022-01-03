import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#2196f3',
        accent: '#9c27b0',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#e91e63',
        success: '#4caf50',
        background: '#eeeeee',
      },
      dark: {
        primary: '#673ab7',
        secondary: '#2196f3',
        accent: '#9c27b0',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#e91e63',
        success: '#4caf50',
        background: '#212121',
      },
    },
  },
});
