<template>
  <div class="loading">
    <img
      class="col col-4 col-sm-4 col-md-1 loading__item"
      src="/img/loading.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "LoadingCmp",
};
</script>

<style lang="scss">
.loading {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 60vh;
  &__item {
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
