<template>
  <v-container class="container">
    <v-row justify="center" align="center">
      <Card_container v-for="i in 10" :key="i" />
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Card_container from "../components/card.vue";

export default {
  name: "Home",
  components: {
    Card_container,
  },
};
</script>

<style>
.container {
  width: 1000px;
}
</style>
