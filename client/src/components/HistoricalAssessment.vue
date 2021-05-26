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

      let parsedDate =
        date_time.split("T")[0] +
        " " +
        date_time.substring(
          date_time.lastIndexOf("T") + 1,
          date_time.lastIndexOf(".")
        );

      return parsedDate;
    }
  }
});
</script>
    
<style>
</style>