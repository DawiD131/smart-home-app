<template>
  <span v-html="icon"></span>
  <span>{{ text }}</span>
</template>

<script lang="ts" setup>
import { icons } from "@/assets/icons";
import { toRefs } from "vue";

type Icons = "bulb";

const props = defineProps<{
  iconName: Icons;
  text: string;
}>();

const { iconName, text } = toRefs(props);

const icon = icons[iconName.value];
</script>

<style scoped></style>
