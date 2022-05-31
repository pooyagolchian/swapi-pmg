<template>
  <div>
    <LoadingCmp v-if="loading"></LoadingCmp>

    <div class="container pt-5" v-if="films && !loading">
      <div class="film text-white">
        <h3 class="fw-bold">{{ films.title }}</h3>
        <div>{{ films.director }}</div>
        <div>{{ films.producer }}</div>
        <div>{{ films.release_date }}</div>
        <button class="btn btn-primary mt-3" @click="handleRouteToHome">
          Back to film
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingCmp from "@/components/loading-cmp";

export default {
  name: "FilmDetailsView",
  data() {
    return {
      films: [],
    };
  },
  components: {
    LoadingCmp,
  },
  computed: {
    ...mapState(["starShips", "loading"]),
  },
  methods: {
    async getAllFilmsData() {
      try {
        this.$store.dispatch("loading", true);

        this.films = (
          await this.$api.films.getAllFilmById(Number(this.$route.params.id))
        ).data;
        this.$store.dispatch("loading", false);
      } catch (error) {
        if (error.response.status === 404) {
          this.$router.push("/");
        }
      }
    },
    handleRouteToHome() {
      this.$router.push("/");
    },
  },

  async mounted() {
    await this.getAllFilmsData();
  },
};
</script>
