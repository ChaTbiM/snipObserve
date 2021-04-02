<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-card>
        <ion-card-header>
          <ion-card-title> 3rd year </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item-divider color="primary">
              <ion-label> COMPUTER SCIENC </ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-item-divider color="primary">
              <ion-label> Mathematics </ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title> 2nd year </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item-divider color="primary">
              <ion-label> Mathematics </ion-label>
            </ion-item-divider>
            <ion-item @click="clickable()">
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                Group Number: 1
              </ion-label>
            </ion-item>
            <ion-item>
              <!-- <ion-icon name="arrow-forward-circle-outline"></ion-icon> -->
              <ion-label>
                <!-- <span>Group Number: 10</span> -->
                <!-- ICONS NOT WORKING -->
                <ion-icon name="md-add"></ion-icon>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

import { defineComponent } from "vue";

function clickable() {
  console.log("clicked");
}

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    clickable
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>