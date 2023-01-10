<template>
  <div class="temp-degree">
    <span class="temp-degree__value">{{ degree }}</span>
    <span class="temp-degree__unit">°C</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  degree: number;
}>();

const { degree } = toRefs(props);
</script>

<style scoped lang="scss">
.temp-degree {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 4rem;

  &__value {
    color: #c0392b;
  }

  &__unit {
    font-size: 2.3rem;
    margin-top: 0.5rem;
  }
}
</style>
