<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <div v-if="show">
        <p>true</p>
      </div>
      <!-- Alert on Absences -->
      <div v-if="this.numberOfAbsences >= 3">
        <ion-card color="danger">
          <ion-card-content>
            <p>student has 3 or more absences</p>
          </ion-card-content>
        </ion-card>
      </div>
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
      control: null,
      numberOfAbsences: 0,
      show: false
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
        url: `http://192.168.1.13:3000/controls/student/${student_id}/class/${this.selectedClassId}/group/${this.selectedGroupNumber}/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200 && controls) {
        this.controls = controls[0];

        let numberOfAbsences = 0;

        controls[0].forEach(control => {
          if (control.absent) {
            numberOfAbsences++;
          }
        });
        this.numberOfAbsences = numberOfAbsences;
      }
    },
    async fetchCurrentControl(student_id, session_id) {
      const { Http } = Plugins;

      const {
        data: { data: control },
        status
      } = await Http.request({
        method: "GET",
        url: `http://192.168.1.13:3000/control/student/${student_id}/session/${session_id}/`,
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