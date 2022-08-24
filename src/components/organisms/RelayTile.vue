<template>
  <div class="relay-tile">
    <ToggleButton />
  </div>
</template>

<script>
import ToggleButton from "@/components/atoms/ToggleButton";

export default {
  name: "RelayTile",
  components: {
    ToggleButton,
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
}
</style>
