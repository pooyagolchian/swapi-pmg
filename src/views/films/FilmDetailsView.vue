<template>
  <div>
    <div class="container pt-5" v-if="films">
      <div class="film">
        <h3>{{ films.title }}</h3>
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
export default {
  name: "FilmDetailsView",
  data() {
    return {
      films: [],
    };
  },
  methods: {
    async getAllFilmsData() {
      try {
        this.films = (
          await this.$api.films.getAllFilmById(Number(this.$route.params.id))
        ).data;
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
