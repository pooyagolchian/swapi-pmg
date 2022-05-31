<template>
  <div>
    <div class="container pt-5" v-if="starShips">
      <div class="star-ships">
        <h3>{{ starShips.name }}</h3>
        <div>{{ starShips.model }}</div>
        <div>{{ starShips.manufacturer }}</div>
        <div>{{ starShips.consumables }}</div>
        <button class="btn btn-primary mt-3" @click="handleRouteToHome">
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarShipsDetailsView",
  data() {
    return {
      starShips: [],
    };
  },
  methods: {
    async getAllFilmsData() {
      try {
        this.starShips = (
          await this.$api.starShips.getAllStarShipById(
            Number(this.$route.params.id)
          )
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
