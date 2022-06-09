import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#D89D63",
        secondary: "#D9CBA3",
        accent: "#8c9eff",
        error: "#ff0000",
        my_color: "#fbcfc9",
        청록: "#40E8DD",
      },
    },
  },
});
