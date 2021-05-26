<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-label> Assess {{ studentName }} </ion-label>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>Is Student Present ?</ion-label>
          <ion-checkbox color="secondary" slot="end" :checked="this.isPresent">
          </ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Has Student Participated ?</ion-label>
          <ion-checkbox
            color="secondary"
            slot="end"
            :checked="this.isParticipating"
          >
          </ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-card-content>
    <ion-button color="primary">Update</ion-button>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AssessmentForm",
  props: {
    studentName: {
      default: "mustapha chatbi"
    },
    currentControl: Object
  },
  data() {
    return {
      isParticipating: false,
      isPresent: false
    };
  },
  updated() {
    if (this.currentControl) {
      this.isPresent = !this.currentControl.absent;
      this.isParticipating = this.currentControl.session_evaluation;
    }
  }
});
</script>

<style>
</style>