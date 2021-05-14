<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <!-- Input for current session -->
      <AssessmentForm />
      <!-- Load Previous Observations and absences -->
      <HistoricalAssessment />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";
import AssessmentForm from "@/components/AssessmentForm";
import HistoricalAssessment from "@/components/HistoricalAssessment.vue";
export default defineComponent({
  name: "Student",
  components: {
    Header,
    AssessmentForm,
    HistoricalAssessment
  }
});
HistoricalAssessment;
</script>

<style>
</style>