<template>
  <ion-label @mouseenter="hover = true" @mouseleave="hover = false">
    Group Number: {{ groupNumber }}
  </ion-label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroupListItem",
  props: ["groupNumber"],
  data: () => {
    return {
      hover: false
    };
  }
});
</script>

<style>
</style>