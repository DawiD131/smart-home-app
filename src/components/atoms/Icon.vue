<template>
  <span v-html="icon"></span>
</template>

<script lang="ts" setup>
import { icons } from "@/assets/icons";
import { toRefs } from "vue";
import { Icons } from "@/models/components/Icon";

const props = defineProps<{
  iconName: Icons;
}>();

const { iconName } = toRefs(props);

const icon = icons[iconName.value];
</script>

<style scoped></style>
