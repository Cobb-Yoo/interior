<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <template v-slot:activator>
          <v-list-item-title>등록</v-list-item-title>
        </template>

        <v-list-item
          v-for="register in registers"
          :key="register.title"
          link
          @click.stop="drawer = !drawer"
          :to="register.to"
        >
          <v-list-item-icon>
            <v-icon>{{ register.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ register.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    registers: [
      {
        title: "홈",
        icon: "mdi-view-dashboard",
        to: "/",
      },
      {
        title: "어바웃",
        icon: "mdi-view-dashboard",
        to: "/about",
      },
    ],
  }),
};
</script>
