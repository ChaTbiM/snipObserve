<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          Students
        </ion-list-header>
        <ion-item v-for="(student, index) in students" :key="index">
          <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>{{ student.firstName }} {{ student.lastName }}</h3>
            <p>number of absences : 2</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { personCircleOutline } from "ionicons/icons";

import Header from "../components/Header";

export default defineComponent({
  name: "Students",
  components: {
    Header
  },
  data: () => {
    return {
      personCircleOutline,
      students: [
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          firstName: "mustapha",
          lastName: "chatbi"
        }
      ]
    };
  }
});
</script>

<style>
</style>