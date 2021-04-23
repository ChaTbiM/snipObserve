<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <ion-card v-for="(specialty, index) in specialties" :key="index">
        <ion-card-header>
          <ion-card-title @click.prevent="toggleSpecialty(index)">
            <!-- Specialities -->
            <ion-item-divider color="primary">
              <ion-label>
                {{ specialtyCapitalized(specialty.name) }}
              </ion-label>
            </ion-item-divider>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <span v-if="!specialty.isCollapsed">
            <groups-list
              @toggleGroup="toggleGroup"
              :collection="specialty.collection"
              :specialtyIndex="index"
            />
          </span>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
import { defineComponent } from "vue";

import Header from "../components/Header";
import GroupsList from "../components/GroupsList";
import { Plugins } from "@capacitor/core";

export default defineComponent({
  name: "Groups",
  components: {
    GroupsList,
    Header
  },
  data: () => {
    return {
      specialties: [
        {
          name: "computer science",
          collection: [
            {
              grade: "first",
              groups: [
                { id: 1, number: 1 },
                { id: 2, number: 5 },
                { id: 3, number: 3 }
              ],
              isCollapsed: true
            },
            {
              grade: "third",
              groups: [
                { id: 3, number: 1 },
                { id: 4, number: 5 },
                { id: 5, number: 3 }
              ],

              isCollapsed: true
            }
          ],
          isCollapsed: false
        },
        {
          name: "mathematics",
          collection: [
            {
              grade: "second",
              groups: [
                { id: 6, number: 1 },
                { id: 7, number: 5 },
                { id: 8, number: 3 }
              ],
              isCollapsed: true
            },
            {
              grade: "fourth",
              groups: [
                { id: 9, number: 1 },
                { id: 10, number: 5 },
                { id: 11, number: 3 }
              ],
              isCollapsed: true
            }
          ],
          isCollapsed: false
        }
      ],
      isSpecialtyCollapsed: [false, false, false]
    };
  },
  methods: {
    specialtyCapitalized(specialty) {
      return specialty.toUpperCase();
    },
    toggleSpecialty(index) {
      this.specialties[index].isCollapsed = !this.specialties[index]
        .isCollapsed;
    },
    toggleGroup(specialtyIndex, index) {
      this.specialties[specialtyIndex].collection[index].isCollapsed = !this
        .specialties[specialtyIndex].collection[index].isCollapsed;
    },
    async fetchSessions() {
      const { Http } = Plugins;
      const { data, status } = await Http.request({
        method: "GET",
        url: "http://localhost:3000/sessions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200) {
        console.log("data", data);
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.fetchSessions();
    });
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>