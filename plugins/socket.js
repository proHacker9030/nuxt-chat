import Vue from "vue";
import VueSocketIO from "vue-socket.io";

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: "192.168.1.5:3000",
      vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_"
      }
    })
  );
}
