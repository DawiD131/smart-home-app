<template>
  <navbar />
  <div class="dashboard">
    <RelayTile />
  </div>
</template>

<script>
import navbar from "../organisms/Navbar.vue";
import RelayTile from "../organisms/RelayTile.vue";

export default {
  name: "dash-board",
  components: {
    navbar,
    RelayTile,
  },
};
</script>
