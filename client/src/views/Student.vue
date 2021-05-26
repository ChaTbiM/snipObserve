<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <!-- Input for current session -->
      <AssessmentForm
        :studentName="this.selectedStudentName"
        :currentControl="this.control"
      />
      <!-- Load Previous Observations and absences -->
      <HistoricalAssessment :assessments="this.controls" />
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
      controls: [],
      control: null
    };
  },
  methods: {
    async fetchHistoricControls() {
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
    },
    async fetchCurrentControl(student_id, session_id) {
      const { Http } = Plugins;

      const {
        data: { data: control },
        status
      } = await Http.request({
        method: "GET",
        url: `http://localhost:3000/control/student/${student_id}/session/${session_id}/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200 && control) {
        this.control = control[0];
      }
    }
  },
  computed: mapState([
    "selectedClassId",
    "selectedGroupNumber",
    "selectedStudentName",
    "selectedSessionId"
  ]),
  mounted() {
    this.$nextTick(function() {
      this.fetchHistoricControls();
      this.fetchCurrentControl();
    });
  },
  updated() {
    if (this.selectedClassId && this.selectedGroupNumber) {
      this.fetchHistoricControls();
    }

    const student_id = this.$route.params.student_id;
    const session_id = this.selectedSessionId;
    const routeName = this.$route.name === "Student";

    if (student_id && session_id && routeName) {
      this.fetchCurrentControl(student_id, session_id);
    }
  }
});
</script>

<style>
</style>