<template>
  <header class="navbar">
    <span class="navbar__text">smart home app</span>
  </header>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.navbar {
  padding: 2rem 0;
  background: $background-primary-c-light;
  box-shadow: 0px -9px 40px rgba(0, 0, 0, 0.25);

  &__text {
    font-size: 2.4rem;
    color: $white-c;
  }
}
</style>
