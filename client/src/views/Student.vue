<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <!-- Input for current session -->
      <AssessmentForm  :studentName="this.selectedStudentName" />
      <!-- Load Previous Observations and absences -->
      <HistoricalAssessment  :assessments="this.controls" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";
import AssessmentForm from "@/components/AssessmentForm";
import HistoricalAssessment from "@/components/HistoricalAssessment.vue";
import { Plugins } from "@capacitor/core";
import { mapState } from "vuex";

export default defineComponent({
  name: "Student",
  components: {
    Header,
    AssessmentForm,
    HistoricalAssessment
  },
  data() {
    return {
      controls: []
    };
  },
  methods: {
    async fetchControls() {
      const { Http } = Plugins;
      const student_id = this.$route.params.student_id;
      const {
        data: { data: controls },
        status
      } = await Http.request({
        method: "GET",
        url: `http://localhost:3000/controls/student/${student_id}/class/${this.selectedClassId}/group/${this.selectedGroupNumber}/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200 && controls) {
        this.controls = controls[0];
      }
    }
  },
  computed: mapState([
    "selectedClassId",
    "selectedGroupNumber",
    "selectedStudentName"
  ]),
  mounted() {
    this.$nextTick(function() {
      this.fetchControls();
    });
  },
  updated() {
    if (this.selectedClassId && this.selectedGroupNumber) {
      this.fetchControls();
    }
  }
});
</script>

<style>
</style>