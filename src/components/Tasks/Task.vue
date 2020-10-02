<template>
  <q-item @click="updateTask({id: id, updates: { completed: !task.completed }})" clickable v-ripple>
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label name></q-item-label>
      <q-item-label caption>{{task.dateDay}}</q-item-label>
      <q-item-label caption>{{task.dateTime}}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn flat round color="red" @click.stop="promptToDelete(id)" dense icon="delete" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really Delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
  },
};
</script>
