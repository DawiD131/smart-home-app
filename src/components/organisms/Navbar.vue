<template>
  <header class="navbar">
    <div class="baseLayout">
      <span class="navbar__text">smart home app</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.navbar {
  padding: 1.7rem 0;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0px -9px 40px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 9999;

  &__text {
    font-size: 2.4rem;
    font-weight: 300;
    color: $black-c;
  }
}
</style>
