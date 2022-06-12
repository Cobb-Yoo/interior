<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="my-3 card"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-toolbar color="secondary">
        <v-toolbar-title>{{ product.conatinerTitle }}</v-toolbar-title>
      </v-toolbar>

      <v-img
        height="450"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="product.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">{{ product.rating }}</div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ product.subtitle }}</div>

        <div>
          {{ product.content }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Array,
  },
};
</script>

<style scoped>
.card {
  width: 780px;
}
</style>
