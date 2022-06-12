<template>
  <v-container class="container">
    <v-row justify="center" align="center">
      <Card_container
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
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
  data() {
    return {
      products: [
        {
          id: 1,
          conatinerTitle: "container-Title1",
          title: "title 1",
          subtitle: "subtitle 1",
          content: "content 1",
          rating: 3,
        },
        {
          id: 2,
          conatinerTitle: "container-Title2",
          title: "title 2",
          subtitle: "subtitle 2",
          content: "content 2",
          rating: 4,
        },
        {
          id: 3,
          conatinerTitle: "container-Title3",
          title: "title",
          subtitle: "subtitle",
          content: "content",
          rating: 5,
        },
        {
          id: 4,
          conatinerTitle: "container-Title4",
          title: "title",
          subtitle: "subtitle",
          content: "content",
          rating: 2,
        },
        {
          id: 5,
          conatinerTitle: "container-Title5",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
        {
          id: 6,
          conatinerTitle: "container-Title6",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
        {
          id: 7,
          conatinerTitle: "container-Title7",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
        {
          id: 8,
          conatinerTitle: "container-Title8",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
        {
          id: 9,
          conatinerTitle: "container-Title9",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
        {
          id: 10,
          conatinerTitle: "container-Title10",
          title: "title",
          subtitle: "subtitle",
          content: "content",
        },
      ],
    };
  },
};
</script>

<style>
.container {
  width: 1000px;
}
</style>
