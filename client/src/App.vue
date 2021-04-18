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
            <!-- <router-link tag="button" :aria-disabled="true" to="/groups"> -->
            <ion-icon :icon="happy" slot="start" />
            <ion-label>Groups</ion-label>
            <!-- </router-link> -->
          </ion-item>
          <ion-item router-link="/profile"
            ><ion-icon :icon="happy" slot="start" />
            <ion-label>Profile</ion-label></ion-item
          >
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/vue";

import { happy } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      happy
    };
  },
  components: {
    IonRouterOutlet,
    IonApp,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonIcon
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