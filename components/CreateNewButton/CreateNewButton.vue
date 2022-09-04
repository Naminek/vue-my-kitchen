<template>
  <v-menu
    bottom
    :offset-y="true"
    transition="slide-y-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        data-cy="createButton"
        icon
        v-on="on"
      >
        <v-icon>
          {{ mdiPlus }}
        </v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        data-cy="addRecipe"
        @click="$emit('clicked-recipe')"
      >
        <v-list-item-icon class="mr-4">
          <v-icon>
            {{ mdiChefHat }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Recipe
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        data-cy="daily-log"
        @click="$emit('clicked-daily-log')"
      >
        <v-list-item-icon class="mr-4">
          <v-icon>
            {{ mdiNotebook }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Daily log
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiPlus, mdiChefHat, mdiNotebook } from '@mdi/js'

export default defineComponent({
  name: 'CreateNewButton',
  setup () {

    return {
      mdiPlus,
      mdiChefHat,
      mdiNotebook
    }
  }
})
</script>
