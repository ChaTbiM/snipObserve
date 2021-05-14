<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          <p>{{ selectedSpecialtyCode }}</p>
        </ion-list-header>
        <span v-for="(student, index) in students" :key="index">
          <ion-item @click="goToStudent(student.id)">
            <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
            <ion-label>
              <h3>{{ student.firstName }} {{ student.lastName }}</h3>
            </ion-label>
          </ion-item>
        </span>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { personCircleOutline } from "ionicons/icons";
import { mapState } from "vuex";

import Header from "../components/Header";

export default defineComponent({
  name: "Students",
  components: {
    Header
  },
  methods: {
    goToStudent(student_id) {
      this.$router.push({
        name: "Student",
        params: {
          student_id
        }
      });
    }
  },
  data: () => {
    return {
      personCircleOutline,
      students: [
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,

          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        },
        {
          id: 1,
          firstName: "mustapha",
          lastName: "chatbi"
        }
      ]
    };
  },
  computed: mapState(["selectedSpecialtyCode"])
});
</script>

<style>
</style>