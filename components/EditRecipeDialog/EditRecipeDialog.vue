<template>
  <v-dialog
    :value="value"
    max-width="1000px"
    scrollable
    persistent
    @input="close"
  >
    <v-card>
      <v-card-title class="blue-grey lighten-2 white--text font-weight-light text-subtitle-1 text-sm-h6">
        Add recipe
        <v-spacer />
        <v-btn
          icon
          class="white--text ml-2"
          @click="close"
        >
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pt-4">
        <v-form ref="recipeForm" v-model="validates" lazy-validation>
          <RecipeForm :recipe="recipeBuffer" />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          text
          class="mx-2 mx-sm-0"
          :icon="$vuetify.breakpoint.xsOnly"
          :disabled="!validates"
          @click="$emit('clicked-save')"
          data-cy="saveButton"
        >
          <v-icon :left="!!$vuetify.breakpoint.smAndUp">
            {{ mdiCheck }}
          </v-icon>
          <span v-if="!!$vuetify.breakpoint.smAndUp">Save</span>
        </v-btn>
        <v-btn
          text
          :icon="$vuetify.breakpoint.xsOnly"
          @click="$emit('clicked-cancel')"
          data-cy="cancelButton"
        >
          <v-icon :left="!$vuetify.breakpoint.smAndUp">
            {{ mdiCancel }}
          </v-icon>
          <span v-if="!!$vuetify.breakpoint.smAndUp">Cancel</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {
  PropType, defineComponent, ref, watch, toRef
} from '@nuxtjs/composition-api'
import { mdiCancel, mdiCheck, mdiClose } from '@mdi/js'
import Recipe from '~/models/recipe'
import RecipeForm from '~/components/RecipeForm'
import { cloneDeep } from 'lodash'
import { newIngredientItem } from '~/composables/type'

interface Validatable {
  validate: () => boolean
}

export default defineComponent({
  name: 'EditRecipeDialog',
  components: {
    RecipeForm
  },
  props: {
    value: {
      type: Boolean,
      default: () => new Recipe()
    },
    recipe: {
      type: Object as PropType<Recipe>,
      default: undefined
    }
  },
  setup (props, { emit }) {
    const recipeBuffer = ref<Recipe>()
    const form = ref<Validatable | null>(null)
    const validates = ref(true)

    // To allow both create and edit
    watch(
      [toRef(props, 'value'), toRef(props, 'recipe')],
      ([value, recipe]) => {
        if (value) {
          if (recipe) {
            recipeBuffer.value = new Recipe(recipe)
          } else {
            recipeBuffer.value = new Recipe({
              ingredients: [newIngredientItem()]
            })
          }
        }
      },
      {
        immediate: true
      }
    )

    const save = () => {
      if (form.value && form.value.validate()) {
        const data = cloneDeep(recipeBuffer.value)
        emit('save', data)
      }
    }

    const close = () => {
      emit('input', false)
    }

    return {
      mdiCancel,
      mdiCheck,
      mdiClose,
      recipeBuffer,
      validates,
      save,
      close
    }
  }
})
</script>
