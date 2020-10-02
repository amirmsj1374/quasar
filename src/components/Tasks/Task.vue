<template>
  <q-item @click="updateTask({id: id, updates: { completed: !task.completed }})" clickable v-ripple>
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <div class="row"></div>
      <q-item-label name></q-item-label>
      <q-item-label caption>{{task.dateDay}}</q-item-label>
      <q-item-label caption>{{task.dateTime}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask"]),
  },
};
</script>
