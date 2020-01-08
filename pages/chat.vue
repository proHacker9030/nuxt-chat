<template>
  <div class="c-wrap">
    <div class="c-chat">
      <Message
        v-for="m in getMessages"
        :key="m.text"
        :name="m.name"
        :text="m.text"
        :owner="m.id == getUser.id"
      />
    </div>
    <div class="c-form">
      <Chat-form />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "@/components/Message";
import ChatForm from "@/components/ChatForm";
export default {
  head() {
    return {
      title: "Комната " + this.getUser.room
    };
  },

  components: {
    Message,
    ChatForm
  },

  middleware: ["chat"],
  computed: {
    ...mapGetters(["getUser", "getMessages"])
  }
};
</script>

<style scoped>
.c-wrap {
  height: 90vh;
  position: relative;
  overflow: hidden;
}
.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: #212121;
}
.c-chat {
  position: absolute;
  width: 100%;
}
</style>
