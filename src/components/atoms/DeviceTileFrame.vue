<template>
  <div class="device-tile-frame">
    <slot name="name"></slot>
    <div class="device-tile-frame__control-box">
      <slot name="control"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.device-tile-frame {
  background: rgba(255, 255, 255, 0.86);
  height: 24rem;
  min-width: 22.1rem;
  border-radius: 15px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 9px 9px 30px rgba(0, 0, 0, 0.25);

  &__control-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
