<template>
  <div>
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
        <v-col cols="12" sm="5" md="4">
          <v-file-input
            label="image"
            outlined
            :prepend-icon="mdiCamera"
            @change="onFileChange($event)"
          />
          <div class="img-area d-flex justify-center align-center">
            <v-img v-if="tempImgUrl"
              :src="tempImgUrl"
              max-height="100%"
              max-width="100%"
              contain
            />
            <p v-else class="text-center font-italic">No image is selected</p>
          </div>
        </v-col>
        <v-col cols="12" sm="7" md="8">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'
import { usePropWatch } from '~/composables/props'
import Recipe, { Category } from '~/models/recipe'
import { mdiCamera } from '@mdi/js'

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
    const tempImgUrl = ref(localValue.value.img_url)

    const titleDuplicated = ref(false) // TODO: Implement a function to check if the same name exists

    const validation = {
      required: [
        (v: string) => v && v.trim() === '' || 'This field is required'
      ],
      category: [
        (values: Category[]) => values.length > 0 || 'Please select at least one category'
      ]
    }

    const onFileChange = (file: File) => {
      console.log(file)
      if (!!file) {
        tempImgUrl.value = URL.createObjectURL(file)
      } else {
        tempImgUrl.value = undefined
      }
    }

    const categoryItems = Object.values(Category)

    return {
      mdiCamera,
      localValue,
      titleDuplicated,
      validation,
      categoryItems,
      tempImgUrl,
      onFileChange
    }
  }
})
</script>

<style>
  .img-area {
    border: dotted 2px grey;
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 300px;
    text-align: center;
  }
</style>
