<template>
  <Navbar />
  <div class="dashboard baseLayout">
    <RelayTile displayName="desk lamp" uniqueSubscriberId="relay_2" />
    <RelayTile displayName="floor lamp" uniqueSubscriberId="relay_1" />
    <SensorTile
      displayName="humidity"
      sensorType="humidity"
      uniqueSubscriberId="esp32/humidity"
    />
    <SensorTile
      displayName="temperature"
      sensorType="temperature"
      uniqueSubscriberId="esp32/temperature"
    />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
import RelayTile from "@/components/organisms/RelayTile.vue";
import SensorTile from "@/components/organisms/SensorTile.vue";
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 4rem;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
}
</style>
