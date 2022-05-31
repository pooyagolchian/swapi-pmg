import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/films",
  },
  {
    path: "/films",
    name: "films",
    component: () =>
      import(/* webpackChunkName: "film" */ "../views/films/FilmsView.vue"),
  },
  {
    path: "/star-ships",
    name: "star-ships",
    component: () =>
      import(
        /* webpackChunkName: "film" */ "../views/star-ships/StarShipsView.vue"
      ),
  },
  {
    path: "/films/:id",
    name: "films-details",
    component: () =>
      import(
        /* webpackChunkName: "film" */ "../views/films/FilmDetailsView.vue"
      ),
  },
  {
    path: "/star-ships/:id",
    name: "star-ships-details",
    component: () =>
      import(
        /* webpackChunkName: "film" */ "../views/star-ships/StarShipsDetailsView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
