<template>
  <DeviceTileFrame>
    <template #name>
      <IconWIthName iconName="bulb" :text="displayName" />
    </template>
    <template #control>
      <ToggleButton v-model:checked="relayState" />
    </template>
  </DeviceTileFrame>
</template>

<script lang="ts" setup>
import ToggleButton from "@/components/atoms/ToggleButton.vue";
import IconWIthName from "@/components/molecules/IconWIthName.vue";
import { useMqtt } from "@/composables/useMqtt";
import { ref, toRefs, watchEffect } from "vue";
import DeviceTileFrame from "@/components/atoms/DeviceTileFrame.vue";

const props = defineProps<{
  displayName: string;
  uniqueSubscriberId: string;
}>();

const { displayName, uniqueSubscriberId } = toRefs(props);
const relayState = ref(false);
const { publishMessage } = useMqtt();

watchEffect(() => {
  publishMessage(uniqueSubscriberId.value, {
    device_state: relayState.value,
  });
});
</script>
