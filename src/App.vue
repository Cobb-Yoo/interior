<template>
  <v-app>
    <v-app-bar color="primary" class="app-var" height="50">
      <div class="app-var-div pa-0">
        <v-img
          alt="Vuetify Logo"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

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
    ],
  }),
};
</script>

<style>
.app-var-div {
  margin: 0 auto;
}
.app-var {
  height: 15px;
}
</style>
