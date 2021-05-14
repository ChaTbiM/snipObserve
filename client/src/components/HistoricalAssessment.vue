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
            <ion-text>Date : {{ assessment.date }}</ion-text>
            <p>was absent ? : {{ assessment.wasPresent }}</p>
            <p>has participated ? : {{ assessment.hasParticipated }}</p>
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
  data() {
    return {
      assessments: [
        {
          date: "14/05/2021",
          wasPresent: true,
          hasParticipated: false
        },
        {
          date: "07/05/2021",
          isPresenet: true,
          hasParticipated: false
        },
        {
          date: "30/04/2021",
          isPresenet: true,
          hasParticipated: false
        },
        {
          date: "23/04/2021",
          isPresenet: true,
          hasParticipated: true
        },
        {
          date: "16/04/2021",
          isPresenet: true,
          hasParticipated: false
        }
      ]
    };
  }
});
</script>
    
<style>
</style>