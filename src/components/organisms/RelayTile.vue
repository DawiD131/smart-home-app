<template>
  <div class="relay-tile">
    <IconWIthName />
    <ToggleButton />
  </div>
</template>

<script>
import ToggleButton from "@/components/atoms/ToggleButton";
import IconWIthName from "@/components/molecules/IconWIthName";

export default {
  name: "RelayTile",
  components: {
    ToggleButton,
    IconWIthName,
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
