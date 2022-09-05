<template>
  <v-toolbar
    light
    flat
    color="blue-grey lighten-4"
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
          v-for="(item, i) in tabs"
          :key="i"
          nuxt
          :to="item.path"
        >
          <!-- <nuxt-link> -->
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          <!-- </nuxt-link> -->
        </v-list-item>
      </v-list>
    </v-menu>

    <v-toolbar-title class="text-h5">
      <nuxt-link to="/" tag="button">
        Namine's Kitchen
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <CreateNewButton
      @clicked-recipe="createNewRecipe"
      @clicked-daily-log="dialogs.dailyLog = true"
    />

    <template v-if="$vuetify.breakpoint.smAndUp" #extension>
      <v-tabs
        v-model="currentTab"
        align-with-title
        fixed-tabs
        centered
      >
        <v-tabs-slider color="primary" />

        <v-tab
          v-for="(item, i) in tabs"
          :key="item.label"
          :to="item.path"
          nuxt
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
    </template>

    <EditRecipeDialog v-model="dialogs.recipe" :recipe="currentRecipe" />

  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref, useRoute, watch, reactive } from '@nuxtjs/composition-api'
import { mdiMenu, mdiPlus } from '@mdi/js'
import { Route } from 'vue-router'
import CreateNewButton from '~/components/CreateNewButton/'
import EditRecipeDialog from '~/components/EditRecipeDialog'
import Recipe from '~/models/recipe'
import { newIngredientItem } from '~/composables/type'

export default defineComponent({
  name: "AppBar",
  components: { CreateNewButton, EditRecipeDialog },
  setup() {
      const route = useRoute()
      const currentTab = ref<string>('/')
      const currentRecipe = ref<Recipe | undefined>(undefined)

      const tabs = ref([
          {
              label: "Home",
              path: "/"
          },
          {
              label: "Recipes",
              path: "/recipes"
          },
          {
              label: "Ingredients",
              path: "/ingredients"
          },
          {
              label: "Daily Logs",
              path: "/daily-logs"
          }
      ])

      const addMenu = ref([
          { label: "Recipe" },
          { label: "Daily log" }
      ])

      const dialogs = reactive({
        recipe: false,
        dailyLog: false
      })


      watch(() => route.value, (value: Route) => {
          currentTab.value = value.path.split("/")[1]
      })


      const createNewRecipe = () => {
        currentRecipe.value = new Recipe({
          ingredients: [newIngredientItem()]
        })
        dialogs.recipe = true;
      }

      return {
        tabs,
        mdiMenu,
        mdiPlus,
        currentTab,
        addMenu,
        dialogs,
        currentRecipe,
        createNewRecipe
      }
  }
})
</script>
