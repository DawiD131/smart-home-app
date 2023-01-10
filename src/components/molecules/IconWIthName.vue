<template>
  <div class="iconWithName">
    <Icon :iconName="iconName" class="iconWithName__icon" />
    <span class="iconWithName__name">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
import Icon from "@/components/atoms/Icon.vue";
import { Icons } from "@/models/components/Icon";
import { toRefs } from "vue";

const props = defineProps<{
  text: string;
  iconName: Icons;
}>();

const { text, iconName } = toRefs(props);
</script>

<style lang="scss">
.iconWithName {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  &__icon {
    > svg {
      width: 3rem;
      height: 3.5rem;
    }
  }

  &__name {
    font-size: 1.8rem;
    font-weight: 300;
  }
}
</style>
