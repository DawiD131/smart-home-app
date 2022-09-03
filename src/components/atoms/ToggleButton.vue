<template>
  <label class="switch">
    <input
      type="checkbox"
      @input="(event) => $emit('update:checked', event.target.checked)"
      :checked="checked"
    />
    <span class="switch__slider"></span>
  </label>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 75px;
  height: 44px;

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #717171;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: "";
      height: 33px;
      width: 33px;
      left: 6px;
      bottom: 5px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: #188b2d;
    }

    &:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }

    &:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(30px);
    }
  }
}
</style>
