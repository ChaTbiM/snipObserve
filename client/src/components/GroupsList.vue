<template>
  <ion-list
    v-for="(groups, year) in specialty"
    :key="year + 'index' + groups.session_id"
  >
    <ion-item-divider
      @click="toggleGroups(year)"
      color="tertiary"
      class="grade"
    >
      <ion-label>
        {{ year }}
      </ion-label>
    </ion-item-divider>
    <ion-item-group v-if="!groups.isCollapsed">
      <ion-item
        v-for="(group, groupIndex) in groups"
        :key="groupIndex"
        @click="goToSudentsRoute(group)"
      >
        <GroupListItem
          :groupNumber="group.group_number"
          :moduleName="group.module_name"
        />
      </ion-item>
    </ion-item-group>
  </ion-list>
</template>

<script>
import { defineComponent } from "vue";
import GroupListItem from "./GroupsListItem";

export default defineComponent({
  name: "GroupsList",
  components: {
    GroupListItem
  },
  props: ["specialty", "isGradeCollapsed", "specialtyIndex"],
  data: () => {
    return {};
  },
  methods: {
    toggleGroups(index) {
      this.$emit("toggleGroup", this.specialtyIndex, index);
    },
    goToSudentsRoute(group) {
      this.$store.commit("SET_SPECIALTY_CODE", group.Annee);
      this.$store.commit("SET_CLASS_ID", group.class_id);
      this.$store.commit("SET_GROUP_NUMBER", group.group_number);

      this.$router.push({
        name: "Group",
        params: {
          session_id: group.session_id,
          group_id: group.group_number
        }
      });
    }
  }
});
</script>
    
<style>
</style>