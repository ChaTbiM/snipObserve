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
          <input type="checkbox" v-model="this.isPresent" />
        </ion-item>
        <ion-item>
          <ion-label>Has Student Participated ?</ion-label>
          <input type="checkbox" v-model="this.isParticipating" />
        </ion-item>
      </ion-list>
    </ion-card-content>
    <ion-button @click="updateControl" color="primary">Update</ion-button>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
import { Plugins } from "@capacitor/core";

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
  methods: {
    async updateControl() {
      console.log("this", this.isPresent);
      const requestData = {
        absent: !this.isPresent ? 1 : 0,
        session_evaluation: this.isParticipating ? 1 : 0
      };

      const { Http } = Plugins;
      const control_id = this.currentControl.id;
      await Http.request({
        method: "PUT",
        url: `http://localhost:3000/control/${control_id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        },
        data: { ...requestData }
      });
    },
    updatePresence() {
      console.log("is PREsent", !this.isPresent);
    }
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