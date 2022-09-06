<template>
  <Navbar />
  <div class="dashboard baseLayout">
    <RelayTile deviceName="relay_1" />
    <RelayTile deviceName="relay_2" />
    <SensorTile
      displayName="humidity"
      sensorType="humidity"
      uniqueDeviceId="esp32/humidity"
    />
    <SensorTile
      displayName="temperature"
      sensorType="temperature"
      uniqueDeviceId="esp32/temperature"
    />
  </div>
</template>

<script setup>
import Navbar from "@/components/organisms/Navbar.vue";
import RelayTile from "@/components/organisms/RelayTile.vue";
import SensorTile from "@/components/organisms/SensorTile";
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 4rem;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
}
</style>
