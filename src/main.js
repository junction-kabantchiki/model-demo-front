import Vue from "vue";
import VueYoutube from "vue-youtube";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import ApiService from "./common/api.service";

import Trend from "vuetrend"
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false;
Vue.use(VueYoutube);
Vue.use(Trend);
Vue.use(AsyncComputed)

ApiService.init();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
