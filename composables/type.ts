import Ingredient from "../models/ingredient"
import { Group } from "./enum"

export default interface IngredientItem {
  ingredient_id: number
  ingredient?: Ingredient
  amount: string
  group: Group
}

export function newIngredientItem (data?:Partial<IngredientItem>): IngredientItem {
  return {
    ingredient_id: data?.ingredient_id ?? 0,
    amount: data?.amount ?? '',
    group: data?.group ?? 0
  }
}
