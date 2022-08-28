<template>
  <v-form ref="recipeForm" v-model="validates" lazy-validation>
    <v-card-text class="pt-3">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="localValue.title"
            maxlength="100"
            auto-grow
            label="Title"
            :rules="validation.required"
            :error-messages="titleDuplicated ? 'This title already exists' : ''"
            outlined
            data-cy="title"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="localValue.description"
            maxlength="100"
            auto-grow
            label="Description"
            outlined
            data-cy="title"
          />
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="localValue.categories"
            :items="categoryItems"
            :rules="validation.category"
            chips
            label="Category"
            multiple
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <!-- Add save canel button here -->
    </v-card-actions>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref, watch } from '@nuxtjs/composition-api'
import { cloneDeep } from 'lodash-es'
import isEmpty from 'validator/es/lib/isEmpty'
import { usePropWatch } from '~/composables/props'
import Recipe, { Category } from '~/models/recipe'

interface Validatable {
  validate: () => boolean
}

export default defineComponent({
  name: 'RecipeForm',
  components: { },
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      default: () => new Recipe
    }
  },
  setup (props, { emit }) {
    const propWatch = usePropWatch(props)
    const localValue = propWatch('recipe')
    const validates = ref(true)
    const recipeForm = ref<Validatable | null>(null)

    const titleDuplicated = ref(false) // TODO: Implement a function to check if the same name exists

    const validation = {
      required: [
        (v: string) => v && v.trim() === '' || 'This field is required'
      ],
      category: [
        (values: Category[]) => values.length > 0 || 'Please select at least one category'
      ]
    }

    const categoryItems = Object.values(Category)

    const onSave = () => {
      if (recipeForm.value !== null && recipeForm.value.validate()) {
        const data = cloneDeep(localValue.value)
        console.log(localValue.value)
        emit('save', data)
      }
    }

    return {
      localValue,
      validates,
      titleDuplicated,
      validation,
      categoryItems,
      onSave
    }
  }
})
</script>
