<template>
  <div class="nav pt-5">
    <div class="col nav__logo">
      <router-link to="/films" class="d-flex justify-start p-0">
        <img
          class="col col-8 col-sm-4 col-md-4 logo"
          src="/img/starwar-logo.svg"
          alt=""
        />
      </router-link>
    </div>
    <div class="col nav__menu">
      <router-link class="text-center" to="/films">
        <i class="menu-icon icon icon-storm_trooper_by_radiusss"></i>
        <div>Films</div>
      </router-link>
      <router-link class="text-center" to="/star-ships">
        <i class="menu-icon icon icon-millenium_falcon_by_radiusss"></i>
        <div>Star Ships</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavCmp",
};
</script>
