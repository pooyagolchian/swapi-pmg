<template>
  <div class="container" id="app">
    <NavCmp></NavCmp>
    <router-view />
  </div>
</template>

<script>
import NavCmp from "@/components/nav-cmp";

export default {
  components: {
    NavCmp,
  },
};
</script>
