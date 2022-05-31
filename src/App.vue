<template>
  <div class="container" id="app">
    <NavCmp></NavCmp>
    <CustomeCursor></CustomeCursor>

    <router-view />
  </div>
</template>

<script>
import NavCmp from "@/components/nav-cmp";
import CustomeCursor from "./components/custome-cursor.vue";

export default {
  components: {
    NavCmp,
    CustomeCursor,
  },
};
</script>
