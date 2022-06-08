<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="app-var">
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

<style scoped>
.app-var {
  margin: 0 auto;
}
</style>
