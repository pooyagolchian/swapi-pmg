<template>
  <div class="container pt-5">
    <LoadingCmp v-if="loading"></LoadingCmp>

    <div v-if="!loading" class="row">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 film"
        v-for="(film, index) in films"
        :key="index"
        @click="handleRouteToFilm(index)"
      >
        <h3>{{ film.title }}</h3>
        <div class="text-muted fs-4 pb-2">{{ film.director }}</div>
        <div class="text-start">{{ film.opening_crawl }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingCmp from "@/components/loading-cmp";

export default {
  name: "FilmCmp",
  components: {
    LoadingCmp,
  },

  computed: {
    ...mapState(["films", "loading"]),
  },

  methods: {
    async fetchFilmsData() {
      try {
        this.$store.dispatch("loading", true);
        const data = (await this.$api.films.getAllFilms()).data.results;
        this.$store.dispatch("fetchFilms", data);
        this.$store.dispatch("loading", false);
      } catch (error) {
        console.log(error);
      }
    },
    handleRouteToFilm(index) {
      this.$router.push({ name: "films-details", params: { id: index + 1 } });
    },
  },
  async mounted() {
    await this.fetchFilmsData();
  },
};
</script>
