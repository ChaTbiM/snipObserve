<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          <p>{{ selectedSpecialtyCode }}</p>
        </ion-list-header>
        <span v-for="(student, index) in students" :key="index">
          <ion-item @click="goToStudent(student)">
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

import { Plugins } from "@capacitor/core";

import Header from "../components/Header";

export default defineComponent({
  name: "Students",
  components: {
    Header
  },
  methods: {
    goToStudent(student) {
      let studentName = student.lastName + " " + student.firstName;
      this.$store.commit("SET_STUDENT_NAME", studentName.toLowerCase());
      this.$router.push({
        name: "Student",
        params: {
          student_id: student.id
        }
      });
    },
    async fetchStudents(specialtyCode) {
      const { Http } = Plugins;
      const {
        data: { data: students },
        status
      } = await Http.request({
        method: "GET",
        url: `http://192.168.1.7:3000/students/${this.$route.params.group_id}/specialty/${specialtyCode}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200 && students) {
        this.students = students[0];
      }
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
  computed: mapState(["selectedSpecialtyCode"]),
  mounted() {
    this.$nextTick(function() {
      let specialtyCode = this.selectedSpecialtyCode;
      this.fetchStudents(specialtyCode);
    });
  },
  updated() {
    let specialtyCode = this.selectedSpecialtyCode;
    if (specialtyCode) {
      this.fetchStudents(specialtyCode);
    }
  }
});
</script>

<style>
</style>