<template>
  <div>
    <LoadingCmp v-if="loading"></LoadingCmp>

    <div class="container pt-5" v-if="starShips && !loading">
      <div class="star-ships text-white cp">
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
import { mapState } from "vuex";
import LoadingCmp from "@/components/loading-cmp";

export default {
  name: "StarShipsDetailsView",
  data() {
    return {
      starShips: [],
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
        this.starShips = (
          await this.$api.starShips.getAllStarShipById(
            Number(this.$route.params.id)
          )
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
