import Vue from "vue";
import Films from "@/api/films";
import StarShips from "@/api/star-ships";

import http from "@/helper/http";

const factories = {
  films: Films(http),
  starShips: StarShips(http),
};

Vue.prototype.$api = factories;
