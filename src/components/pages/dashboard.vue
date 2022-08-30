<template>
  <navbar />
  <div class="dashboard">
    <RelayTile />
  </div>
</template>

<script setup>
import navbar from "../organisms/Navbar.vue";
import RelayTile from "../organisms/RelayTile.vue";
import { inject } from "vue";

const mqtt = inject("mqtt")();
</script>
