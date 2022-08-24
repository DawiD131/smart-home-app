<template>
  <div class="relay-tile">
    <IconWIthName iconName="bulb" text="floor lamp" />
    <ToggleButton />
    <span>state: off</span>
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
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 4px 43px rgba(0, 0, 0, 0.25);
}
</style>
