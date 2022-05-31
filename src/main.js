import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/api";
import "@/assets/style/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueAxios, axios);
