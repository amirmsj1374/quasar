<template>
  <q-page q-pa-md padding>
    <q-list bordered>
      <q-item-label header>Todo list</q-item-label>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
  },
};
</script>

<style>
</style>
