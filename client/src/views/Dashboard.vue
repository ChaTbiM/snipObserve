<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Groups</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-card v-for="(specialty, index) in specialties" :key="index">
        <ion-card-header>
          <ion-card-title @click.prevent="toggleSpecialty(index)">
            <!-- Specialities -->
            <ion-item-divider color="primary">
              <ion-label>
                {{ specialtyCapitalized(specialty.name) }}
              </ion-label>
            </ion-item-divider>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <span v-if="!specialty.isCollapsed">
            <group-list
              @toggleGroup="toggleGroup"
              :collection="specialty.collection"
              :specialtyIndex="index"
            />
          </span>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
import GroupList from "./GroupList";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    GroupList
  },
  data: () => {
    return {
      specialties: [
        {
          name: "computer science",
          collection: [
            {
              grade: "first",
              groups: [1, 3, 5],
              isCollapsed: true
            },
            {
              grade: "third",
              groups: [1, 3, 5],
              isCollapsed: true
            }
          ],
          isCollapsed: false
        },
        {
          name: "mathematics",
          collection: [
            {
              grade: "second",
              groups: [2, 3, 5],
              isCollapsed: true
            },
            {
              grade: "fourth",
              groups: [7, 3, 5],
              isCollapsed: true
            }
          ],
          isCollapsed: false
        },
        {
          name: "english",
          collection: [
            {
              grade: "thrid",
              groups: [7, 8],
              isCollapsed: true
            },
            {
              grade: "fifth",
              groups: [9, 10],
              isCollapsed: true
            }
          ],
          isCollapsed: false
        }
      ],
      isSpecialtyCollapsed: [false, false, false]
    };
  },
  methods: {
    specialtyCapitalized(specialty) {
      return specialty.toUpperCase();
    },
    toggleSpecialty(index) {
      this.specialties[index].isCollapsed = !this.specialties[index]
        .isCollapsed;
    },
    toggleGroup(specialtyIndex, index) {
      this.specialties[specialtyIndex].collection[index].isCollapsed = !this
        .specialties[specialtyIndex].collection[index].isCollapsed;
    }
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