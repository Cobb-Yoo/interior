<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="350"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out z-index 2;
  position: relative;
}
.v-card:not(.on-hover) {
  z-index: 1;
  width: 550px;
}
</style>
