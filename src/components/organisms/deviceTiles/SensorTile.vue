<template>
  <DeviceTileFrame>
    <template #name>
      <IconWIthName :iconName="getIconName" :text="displayName" />
    </template>
    <template #control>
      <TempDegree :degree="data" v-if="isTemperatureSensor" />
      <CircleChart v-else :percentageValue="data" />
    </template>
  </DeviceTileFrame>
</template>

<script setup lang="ts">
import IconWIthName from "@/components/molecules/IconWIthName.vue";
import { computed, ComputedRef, ref, toRefs } from "vue";
import CircleChart from "@/components/molecules/CircleChart.vue";
import { Icons } from "@/models/components/Icon";
import TempDegree from "@/components/atoms/TempDegree.vue";
import { useMqtt } from "@/composables/useMqtt";
import DeviceTileFrame from "@/components/atoms/DeviceTileFrame.vue";

const props = defineProps<{
  sensorType: "temperature" | "humidity";
  displayName: string;
  uniqueDeviceId: string;
}>();

const { subscribeTopic } = useMqtt();

const { uniqueDeviceId, displayName, sensorType } = toRefs(props);

const data = ref(0);

subscribeTopic(
  uniqueDeviceId.value,
  (payload) => (data.value = Number(payload.toString()))
);

const isTemperatureSensor = computed(() => sensorType.value === "temperature");

const getIconName: ComputedRef<Icons> = computed(() =>
  sensorType.value === "temperature" ? "temp" : "water"
);
</script>
