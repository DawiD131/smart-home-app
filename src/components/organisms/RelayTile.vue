<template>
  <div class="relay-tile">
    <IconWIthName iconName="bulb" :text="deviceName" />
    <div class="relay-tile__button-box">
      <ToggleButton v-model:checked="relayState" />
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/atoms/ToggleButton";
import IconWIthName from "@/components/molecules/IconWIthName";
import { useMqttPublisher } from "@/composables/useMqttPublisher";
import { ref, toRefs, watchEffect } from "vue";

export default {
  name: "RelayTile",
  components: {
    ToggleButton,
    IconWIthName,
  },
  props: {
    deviceName: {
      type: String,
    },
  },
  setup(props) {
    const { deviceName } = toRefs(props);
    const relayState = ref(false);
    const { publishMessage } = useMqttPublisher("relay_1");

    watchEffect(() => {
      publishMessage(
        deviceName.value,
        Buffer.from(
          JSON.stringify({
            device_state: relayState.value,
            device_name: deviceName.value,
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

<style lang="scss" scoped>
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

  &__button-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
