<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-label>
          Assess Mustapha Chatbi
        </ion-label>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>Is Student Present ?</ion-label>
          <ion-checkbox
            color="secondary"
            slot="end"
            @update:modelValue="isPresent = $event"
            :modelValue="isPresent"
          >
          </ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Has Student Participated ?</ion-label>
          <ion-checkbox
            color="secondary"
            slot="end"
            @update:modelValue="isParticipating = $event"
            :modelValue="isParticipating"
          >
          </ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-card-content>
    <ion-button color="primary">Insert</ion-button>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AssessmentForm",
  data() {
    return {
      isParticipating: false,
      isPresent: false
    };
  }
});
</script>

<style>
</style>