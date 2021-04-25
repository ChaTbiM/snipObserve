<template>
  <ion-page>
    <Header />
    <ion-content fullscreen>
      <span v-if="specialties">
        <ion-card
          v-for="(specialty, specialtyName) in specialties"
          :key="specialtyName"
        >
          <ion-card-header>
            <ion-card-title @click.prevent="toggleSpecialty(specialtyName)">
              <!-- Specialities -->
              <ion-item-divider color="primary">
                <ion-label>
                  {{ specialtyName }}
                </ion-label>
              </ion-item-divider>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <span v-if="!specialty.isCollapsed">
              <groups-list
                @toggleGroup="toggleGroup"
                :specialty="specialty"
                :specialtyIndex="specialtyName"
              />
            </span>
          </ion-card-content>
        </ion-card>
      </span>
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
      specialties: []
    };
  },
  methods: {
    specialtyCapitalized(specialty) {
      return specialty.toUpperCase();
    },
    toggleSpecialty(specialtyName) {
      this.specialties[specialtyName].isCollapsed = !this.specialties[
        specialtyName
      ].isCollapsed;
    },
    toggleGroup(specialtyIndex, index) {
      this.specialties[specialtyIndex][index].isCollapsed = !this.specialties[
        specialtyIndex
      ][index].isCollapsed;
    },
    async fetchSessions() {
      const { Http } = Plugins;
      const {
        data: { data: specialties },
        status
      } = await Http.request({
        method: "GET",
        url: "http://localhost:3000/sessions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || null}`
        }
      });

      if (status === 200) {
        for (let specialty in specialties) {
          for (let year in specialties[specialty]) {
            specialties[specialty][year] = Object.assign(
              specialties[specialty][year]
            );
            Object.defineProperty(specialties[specialty][year], "isCollapsed", {
              configurable: true,
              writable: true,
              value: true,
              enumerable: false
            });
          }
          Object.defineProperty(specialties[specialty], "isCollapsed", {
            configurable: true,
            writable: true,
            value: true,
            enumerable: false
          });
        }
        this.specialties = specialties;
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