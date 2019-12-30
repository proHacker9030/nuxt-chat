<template>
  <h1>Chat</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Комната " + this.getUser.room
    };
  },

  middleware: ["chat"],
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>