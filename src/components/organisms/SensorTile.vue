<template>
  <div class="sensor-tile">
    <IconWIthName :iconName="getIconName" :text="deviceName" />
    <div class="sensor-tile__chart-box">
      <TempDegree degree="22" v-if="isTemperatureSensor" />
      <CircleChart v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconWIthName from "@/components/molecules/IconWIthName";
import { computed, ComputedRef, toRefs } from "vue";
import CircleChart from "@/components/molecules/CircleChart";
import { Icons } from "@/models/components/Icon";
import TempDegree from "@/components/molecules/TempDegree.vue";

const props = defineProps<{
  sensorType: "temperature" | "humidity";
  deviceName: string;
}>();

const { deviceName, sensorType } = toRefs(props);

const isTemperatureSensor = computed(() => sensorType.value === "temperature");

const getIconName: ComputedRef<Icons> = computed(() =>
  sensorType.value === "temperature" ? "temp" : "water"
);
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.sensor-tile {
  background: $background-secondary-c;
  height: 27rem;
  width: 22.1rem;
  border-radius: 15px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 4px 43px rgba(0, 0, 0, 0.25);

  &__chart-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
