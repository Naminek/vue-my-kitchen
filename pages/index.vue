<template>
  <v-row justify="center" align="center" class="pt-y background-img">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to Namine's Kitchen!
        </v-card-title>
        <v-card-text>
          <p>You can check nice Japanese recipes based on categories, ingredients, and daily logs</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
  .background-img {
    background: url('~/assets/main.jpg') no-repeat center center !important;
    background-size: 100% auto !important;
    min-height: 400px;
  }
</style>
