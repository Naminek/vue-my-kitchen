<template>
  <div>
    <SmoothReflow>
      <IngredientsListItem
        v-for="(item, i) in ingredients"
        :key="i"
        :item="item"
      />
    </SmoothReflow>
    <v-row>
      <v-spacer />
      <v-col cols="auto">
        <v-btn
          light
          depressed
          color="blue-grey lighten-5"
          @click="addItem"
        >
          <v-icon left>
            {{ mdiPlus }}
          </v-icon>
          <span>Add item</span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { mdiPlus } from '@mdi/js'
import SmoothReflow from '~/components/Common/SmoothReflow'
import IngredientsListItem from './IngredientsListItem'
import IngredientItem from '~/composables/type'

export default defineComponent({
  name: 'IngredientsField',
  components: {
    SmoothReflow,
    IngredientsListItem
  },
  props: {
    ingredients: {
      type: Array as PropType<IngredientItem[]>,
      default: () => {}
    }
  },
  setup ( ) {
    const addItem = () => {
      // do something
    }
    return {
      addItem,
      mdiPlus
    }
  }
})
</script>
