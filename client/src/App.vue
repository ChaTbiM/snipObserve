<template>
  <ion-app>
    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item router-link="/groups">
            <ion-icon :icon="happy" slot="start" />
            <ion-label>Groups</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import { happy } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      happy
    };
  }
});
</script>

<style>
.active-route {
  /* background: red; */
  pointer-events: none;
}

.router-link-active {
  /* background: red; */
}

.my-custom-menu {
  --width: 100px;
}
</style>