<template>
  <div>
    <v-row dense>
      <v-col
        class="flex-shrink-1 flex-grow-0"
        cols="12"
        sm="6"
        md="4"
        lg="1"
        style="min-width:100px"
      >
        <v-autocomplete
          :value="localItem.ingredient_id"
          label="Item"
          outlined
          hide-details="auto"
        />
      </v-col>
      <v-col
        class="flex-shrink-1 flex-grow-0"
        cols="1"
        style="min-width:100px"
      >
        <v-text-field
          :value="localItem.amount"
          label="Amount"
          outlined
          hide-details="auto"
        />
      </v-col>
      <v-col
        class="flex-shrink-1 flex-grow-0"
        cols="12"
        sm="6"
        md="4"
        lg="1"
        style="min-width: 100px"
      >
        <v-select
          :value="localItem.group"
          label="Group"
          :items="groupItems"
          outlined
          hide-details="auto"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import SmoothReflow from '~/components/Common/SmoothReflow'
import { Group } from '~/composables/enum'
import { usePropWatch } from '~/composables/props'
import IngredientItem from '~/composables/type'

export default defineComponent({
  name: 'IngredientsListItem',
  components: { SmoothReflow },
  props: {
    item: {
      type: Object as PropType<IngredientItem>,
      default: () => {}
    }
  },
  setup (props) {
    const propsWatch = usePropWatch(props)
    const localItem = propsWatch('item')

    const groupItems = Object.values(Group)

    return { localItem, groupItems }
  }
})
</script>
