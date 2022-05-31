<template>
  <div class="container pt-5">
    <LoadingCmp v-if="loading"></LoadingCmp>

    <div v-if="!loading" class="row">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 text-left text-white cp"
        v-for="(starShip, index) in starShips"
        :key="index"
        @click="handleRouteToStarShips(starShip)"
      >
        <h3>{{ starShip.name }}</h3>
        <div class="text-muted fs-4 pb-2">{{ starShip.starship_class }}</div>
        <div>{{ starShip.manufacturer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingCmp from "@/components/loading-cmp";

export default {
  name: "StarShipsCmp",
  components: {
    LoadingCmp,
  },

  computed: {
    ...mapState(["starShips", "loading"]),
  },

  methods: {
    async fetchStarShipsData() {
      try {
        this.$store.dispatch("loading", true);
        const data = (await this.$api.starShips.getAllStarShip()).data.results;
        this.$store.dispatch("fetchStarShips", data);
        this.$store.dispatch("loading", false);
      } catch (error) {
        console.log(error);
      }
    },
    handleRouteToStarShips(item) {
      const regex = /\d+/g;
      const string = item.url;
      const matches = string.match(regex);

      this.$router.push({
        name: "star-ships-details",
        params: { id: matches[0] },
      });
    },
  },
  async mounted() {
    await this.fetchStarShipsData();
  },
};
</script>
