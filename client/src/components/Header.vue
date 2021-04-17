<template>
  <ion-header>
    <ion-toolbar translucent>
      <ion-menu-button></ion-menu-button>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonMenuButton } from "@ionic/vue";
export default defineComponent({
  name: "Header",
  components: {
    IonHeader,
    IonToolbar,
    IonMenuButton
  }
});
</script>

<style>
</style>