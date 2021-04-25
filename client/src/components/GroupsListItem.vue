<template>
  <ion-label>
    <ion-text class="moduleName">
      <p>
        {{ moduleName }}
      </p>
    </ion-text>
    <br />
    <ion-text>
      <p>Groupe : {{ groupNumber }}</p>
    </ion-text>
  </ion-label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroupListItem",
  props: ["groupNumber", "moduleName"],
  data: () => {
    return {};
  }
});
</script>

<style scoped>
.moduleName {
  white-space: normal;
}
</style>>