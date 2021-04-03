<template>
  <ion-item
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    v-for="(group, groupIndex) in groups"
    :key="groupIndex"
  >
    <ion-label> Group Number: {{ group }} </ion-label>
    hovered ?
  </ion-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroupItem",
  props: ["groups"],
  data: () => {
    return {
      hover: false
    };
  }
});
</script>

<style>
</style>