<template>
  <div class="nav pt-5">
    <div class="col nav__logo">
      <router-link to="/films" class="d-flex justify-start">
        <img
          class="col col-8 col-sm-4 col-md-4 logo"
          src="/img/starwar-logo.svg"
          alt=""
        />
      </router-link>
    </div>
    <div class="col nav__menu">
      <router-link to="/films">
        <i class="menu-icon icon icon-storm_trooper_by_radiusss"></i>
      </router-link>
      <router-link to="/star-ships">
        <i class="menu-icon icon icon-millenium_falcon_by_radiusss"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavCmp",
};
</script>
