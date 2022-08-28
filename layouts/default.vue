<template>
  <v-app light>
    <v-main>
      <AppBar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="false"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppBar from '~/components/AppBar/'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    AppBar
  }
})
</script>
