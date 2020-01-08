<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title @click="exit">Exit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <hr />

        <v-list subheader>
          <v-subheader>Список людей в комнате</v-subheader>

          <v-list-item v-for="user in getUsers" :key="user.id">
            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon
                :color="user.id == getUser.id ? 'deep-purple accent-4' : 'grey'"
                >mdi-message-text</v-icon
              >
            </v-list-item-icon>
          </v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    title: "Чат",
    test: "",
    users: []
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: mapGetters(["getUser", "getUsers"]),
  mounted() {
    console.log(this.$el.title);
    this.title = this.$el.title;
  },
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      this.$socket.emit("userLeft", this.getUser.id, data => {
        this.$router.push("/?message=leftChat");
        this.clearData();
      });
    }
  }
};
</script>
