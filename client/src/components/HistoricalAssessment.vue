<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-label>
          Historical Assesments
        </ion-label>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item v-for="(assessment, index) in assessments" :key="index">
          <ion-label>
            <ion-text>Date : {{ parseDate(assessment.date_time) }}</ion-text>
            <p>was absent ? : {{ assessment.absent }}</p>
            <p>has participated ? : {{ assessment.session_evaluation }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HistoricalAssessment",
  props: ["assessments"],
  methods: {
    parseDate: function(date_time) {
      if (!date_time) return "--------";
      let date = new Date(date_time);
      let dateNumber = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hours = date.getUTCHours();
      let minutes = date.getMinutes();
      return (
        dateNumber + "/" + month + "/" + year + "  " + hours + ":" + minutes
      );
    }
  }
});
</script>
    
<style>
</style>