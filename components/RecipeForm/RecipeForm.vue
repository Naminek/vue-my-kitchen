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
        <v-col cols="12" md="4">
        <v-file-input
          label="image"
          outlined
          :prepend-icon="mdiCamera"
        />
        <div class="img-area">
          <v-img v-if="localValue.img_url"
            :src="require(localValue.img_url)"
            height="40"
            width="200"
            contain
          />
          <p v-else class="text-center font-italic">No image is selected</p>
        </div>
        </v-col>
        <v-col cols="12" md="8">
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
import { mdiCamera } from '@mdi/js'

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
      mdiCamera,
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

<style>
  .img-area {
    border: dotted 2px rgb(66, 66, 66);
    position: relative;
    width: 100%;
    height: 300px;
    text-align: center;
  }
  .img-area v-img {
      position: absolute;
      top: 50%;
      left: 0;
      max-width: 100%;
      max-height: 100%;
      transform: translate(0, -50%)
    }
    /* .no-img-message {
      font-size: smaller;
      font-style: italic;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    } */
</style>
