<template>
  <Navbar />
  <div class="dashboard baseLayout">
    <component
      :is="item.type.includes('sensor') ? SensorTile : RelayTile"
      v-for="(item, index) in getAvailableDevices"
      :key="index"
      :displayName="item.displayName"
      :uniqueDeviceId="item.uniqueDeviceId"
      :sensorType="
        item.type.includes('temperature') ? 'temperature' : 'humidity'
      "
    />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
import RelayTile from "@/components/organisms/deviceTiles/RelayTile.vue";
import SensorTile from "@/components/organisms/deviceTiles/SensorTile.vue";
import { getAvailableDevices } from "@/mockApiResponses";
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 5rem;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  padding-bottom: 10rem;

  @media (max-width: 500px) {
    justify-content: center;
  }
}
</style>
