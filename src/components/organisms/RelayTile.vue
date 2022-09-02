<template>
  <div class="relay-tile">
    <IconWIthName iconName="bulb" text="floor lamp" />
    <ToggleButton v-model:checked="relayState" />
    <span>state: off</span>
  </div>
</template>

<script>
import ToggleButton from "@/components/atoms/ToggleButton";
import IconWIthName from "@/components/molecules/IconWIthName";
import { useMqttPublisher } from "@/composables/useMqttPublisher";
import { ref, watchEffect } from "vue";

export default {
  name: "RelayTile",
  components: {
    ToggleButton,
    IconWIthName,
  },
  setup() {
    const relayState = ref(false);
    const { publishMessage } = useMqttPublisher("relay_1");

    watchEffect(() => {
      publishMessage(
        "relay_1",
        Buffer.from(
          JSON.stringify({
            device_state: relayState.value,
            device_name: "relay_1",
          })
        )
      );
    });

    return {
      relayState,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/variables";

.relay-tile {
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
}
</style>
