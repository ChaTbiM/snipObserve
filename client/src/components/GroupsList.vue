<template>
  <!-- Per year -->
  <ion-list v-for="(item, index) in collection" :key="index">
    <ion-item-divider
      @click="toggleGroups(index)"
      color="tertiary"
      class="grade"
    >
      <ion-label> {{ item.grade }} year </ion-label>
    </ion-item-divider>
    <!-- Per Group -->
    <ion-item-group v-if="!item.isCollapsed">
      <ion-item
        v-for="(group, groupIndex) in item.groups"
        :key="groupIndex"
        @click="this.$router.push({ name: 'Group', params: { id: group.id } })"
      >
        <!-- <ion-label router-link="/group/15">
          Group Number: {{ group }}
        </ion-label> -->
        <GroupListItem :groupNumber="group.number" />
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
  props: ["collection", "isGradeCollapsed", "specialtyIndex"],
  data: () => {
    return {};
  },
  methods: {
    toggleGroups(index) {
      this.$emit("toggleGroup", this.specialtyIndex, index);
    },
    toggleHoverEffect(event) {
      console.log(event.target);
    }
  }
});
</script>
    
<style>
</style>