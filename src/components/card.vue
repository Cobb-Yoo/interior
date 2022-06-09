<template>
  <v-hover v-slot="{ hover }">
    <router-link to="/Detail" style="text-decoration: none">
      <v-card
        class="mx-auto my-3 card"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-toolbar color="secondary">
          <v-toolbar-title>Title</v-toolbar-title>
        </v-toolbar>

        <v-img
          height="450"
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
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
    </router-link>
  </v-hover>
</template>

<style scoped>
.card {
  width: 780px;
}
</style>
