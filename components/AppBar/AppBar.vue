<template>
  <v-toolbar
    light
    flat
  >
    <v-menu
      v-if="$vuetify.breakpoint.xsOnly"
      bottom
      right
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-toolbar-title class="text-h5">Namine's Kitchen</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <template v-if="$vuetify.breakpoint.smAndUp" #extension>
      <v-tabs
        v-model="currentTab"
        align-with-title
        fixed-tabs
        class="ml-0"
      >
        <v-tabs-slider color="primary" />

        <v-tab
          v-for="(item, i) in menus"
          :key="i"
          class="ml-0"
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <!-- <v-tabs-items v-model="currentTab">
        <v-tab-item
          v-for="(item, i) in contexts"
          :key="i"
        >

        </v-tab-item>
      </v-tabs-items> -->
    </template>

  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { mdiMenu } from '@mdi/js'
export default defineComponent({
  name: 'AppBar',
  setup () {
    const currentTab = ref(false)

    const menus = [
      {
        label: 'Recipes',
        path: '/recipes'
      },
      {
        label: 'Ingredients',
        link: ''
      },
      {
        label: 'Daily Logs',
        path: '/daily-logs'
      }
    ]

    return { menus, mdiMenu, currentTab }
  }
})
</script>
