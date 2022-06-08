<template>
  <v-container class="container">
    <v-row justify="center" align="center">
      <CARD v-for="i in 10" :key="i" />
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CARD from "../components/card.vue";

export default {
  name: "Home",
  components: {
    CARD,
  },
};
</script>

<style scoped>
.app-var {
  align-items: "center";
}

.container {
  width: 1000px;
}
</style>
