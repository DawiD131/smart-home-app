<template>
  <div class="iconWithName">
    <Icon :iconName="iconName" />
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

<style scoped lang="scss">
.iconWithName {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__name {
    font-size: 2.1rem;
    font-weight: 400;
  }
}
</style>
