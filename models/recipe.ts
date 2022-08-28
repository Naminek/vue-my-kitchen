/* eslint-disable camelcase */
import { Model } from '@vuex-orm/core'
import Ingredient from './ingredient'
// import { Config } from '@vuex-orm/plugin-axios'

export enum Category {
  CATEGORY_MEAT = 'Meat',
  CATEGORY_SEAFOOD = 'Seafood',
  CATEGORY_VEGETARIAN = 'Vegetarian',
  CATEGORY_VEGAN = 'Vegan',
  CATEGORY_SWEETS = 'Sweets',
  CATEGORY_OTHER = 'Other'
}

export interface Step {
  id: number
  description: string
}

export default class Recipe extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'recipes'

  // The argument is the default value.
  static fields () {
    return {
      id: this.number(0),
      created_at: this.attr(''),
      updated_at: this.attr(''),
      title: this.attr(''),
      ingredient_ids: this.attr(null),
      ingredients: this.hasManyBy(Ingredient, 'ingredient_ids'),
      categories: this.attr([]),
      img_url: this.attr(''),
      steps: this.attr([]),
      time_estimation_minutes: this.number(0),
      description: this.attr(''),
      notes: this.attr('')
    }
  }

  id!: number
  created_at!: string
  updated_at!: string
  title!: string
  ingredient_ids!: number[]
  ingredients!: Ingredient[]
  categories!: Category[]
  img_url?: string
  steps!: Step[]
  time_estimation_minutes?: number
  description?: string
  notes?: string
}
